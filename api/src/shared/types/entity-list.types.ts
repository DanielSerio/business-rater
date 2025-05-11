export interface EntityListGetPaging {
  limit?: string;
  offset?: string;
}

export interface EntityListGetOrder {
  sort?: string;
}

export interface EntityListGetWhere {
  filter?: string;
  search?: string;
  searchFieldNames: string[];
}

export interface EntityListGet {
  paging: EntityListGetPaging;
  sorting: EntityListGetOrder;
  filtering: EntityListGetWhere;
}