import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateCountryDto } from './dto/create-country.dto';
import { UpdateCountryDto } from './dto/update-country.dto';
import { PrismaService } from 'src/prisma.service';
import { z } from 'zod';
import { EntityListGet, EntityListGetOrder, EntityListGetPaging, EntityListGetWhere } from 'src/shared/types/entity-list.types';

@Injectable()
export class CountriesService {
  private _schema = {
    create: z.object({
      code: z.string().trim().min(1).max(12).transform((val) => val.toUpperCase()),
      name: z.string().trim().min(1).max(64).transform((val) => val.replace(/\s{2,}/g, ' '))
    }),
    update: z.object({
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

  async create(createCountryDto: CreateCountryDto) {
    const parsed = this.parseCreate(createCountryDto);

    const result = await this.prisma.country.create({
      data: {
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
      } satisfies NonNullable<Parameters<typeof this.prisma.country.findMany>[0]>['where'];
    }

    return searchOr satisfies NonNullable<Parameters<typeof this.prisma.country.findMany>[0]>['where'];
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

    const totalRecords = await this.prisma.country.count({
      where
    });

    const result = await this.prisma.country.findMany({
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

  async findAll(...params: Parameters<typeof this.prisma.country.findMany>) {
    return await this.prisma.country.findMany(...params);
  }

  findOne(id: number) {
    return `This action returns a #${id} country`;
  }

  update(id: number, updateCountryDto: UpdateCountryDto) {
    return `This action updates a #${id} country`;
  }

  remove(id: number) {
    return `This action removes a #${id} country`;
  }
}
