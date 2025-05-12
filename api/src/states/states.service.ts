import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateStateDto } from './dto/create-state.dto';
import { UpdateStateDto } from './dto/update-state.dto';
import { z } from 'zod';
import { PrismaService } from 'src/prisma.service';
import { EntityListGet, EntityListGetOrder, EntityListGetPaging, EntityListGetWhere } from 'src/shared/types/entity-list.types';

@Injectable()
export class StatesService {
  private _schema = {
    create: z.object({
      countryId: z.number().int().positive(),
      code: z.string().trim().min(1).max(12).transform((val) => val.toUpperCase()),
      name: z.string().trim().min(1).max(64).transform((val) => val.replace(/\s{2,}/g, ' '))
    }),
    update: z.object({
      countryId: z.number().int().positive(),
      code: z.string().trim().min(1).max(12).transform((val) => val.toUpperCase()),
      name: z.string().trim().min(1).max(64).transform((val) => val.replace(/\s{2,}/g, ' '))
    }).partial()
  };

  constructor(private prisma: PrismaService) { }

  private parseCreate(body: object) {
    try {
      return this._schema.create.parse(body);
    } catch (err) {
      throw new BadRequestException(err);
    }
  }

  async create(createStateDto: CreateStateDto) {
    const parsed = this.parseCreate(createStateDto);

    const result = await this.prisma.province.create({
      data: {
        countryId: parsed.countryId,
        code: parsed.code,
        name: parsed.name
      }
    });

    return result;
  }

  private getListWhere({ search, searchFieldNames, filter }: EntityListGetWhere) {
    if (!filter || !search) {
      return undefined;
    }

    const searchOr = {};

    for (const name of searchFieldNames) {
      searchOr[name] = {
        contains: search
      };
    }

    if (filter) {
      return {
        OR: [searchOr, ...JSON.parse(filter)]
      } satisfies NonNullable<Parameters<typeof this.prisma.province.findMany>[0]>['where'];
    }

    return searchOr satisfies NonNullable<Parameters<typeof this.prisma.province.findMany>[0]>['where'];
  }

  private getListOrder({ sort }: EntityListGetOrder) {
    if (!sort) {
      return undefined;
    }

    return JSON.parse(sort);
  }

  private toValidPagingInt({ value, min, fallback }: {
    value?: string;
    min: number;
    fallback: number;
  }) {
    if (!value || isNaN(Number(value))) {
      return fallback;
    }
    const parsedValue = ~~Number(value);

    if (parsedValue <= min) {
      return min;
    }

    return parsedValue;
  }

  private getListPaging({ limit, offset }: EntityListGetPaging) {
    const limitValue = this.toValidPagingInt({
      value: limit,
      min: 1,
      fallback: 25
    });
    const offsetValue = this.toValidPagingInt({
      value: offset,
      min: 0,
      fallback: 0
    });

    return {
      take: limitValue,
      skip: offsetValue
    };
  }

  async getList({ filtering, sorting, paging }: EntityListGet) {
    const takeSkip = this.getListPaging(paging);
    const orderBy = this.getListOrder(sorting);
    const where = this.getListWhere(filtering);

    const totalRecords = await this.prisma.province.count({
      where
    });

    const result = await this.prisma.province.findMany({
      where,
      orderBy,
      ...takeSkip
    });

    return {
      records: result,
      paging: {
        limit: takeSkip.take,
        offset: takeSkip.skip,
        totals: {
          records: totalRecords,
          pages: Math.ceil(totalRecords / takeSkip.take)
        }
      },
      sorting: sorting.sort ? JSON.parse(sorting.sort) : null,
      filtering: filtering.filter || filtering.search ? ({
        search: filtering.search ?? null,
        filter: filtering.filter ? JSON.parse(filtering.filter) : null
      }) : null
    };
  }

  async findAll(...params: Parameters<typeof this.prisma.province.findMany>) {
    return await this.prisma.province.findMany(...params);
  }

  findOne(id: number) {
    return `This action returns a #${id} state`;
  }

  update(id: number, updateStateDto: UpdateStateDto) {
    return `This action updates a #${id} state`;
  }

  remove(id: number) {
    return `This action removes a #${id} state`;
  }
}
