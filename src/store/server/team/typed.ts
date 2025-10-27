export interface getAllTeamResponse {
  content: Content[];
  pageable: Pageable;
  last: boolean;
  totalElements: number;
  totalPages: number;
  first: boolean;
  size: number;
  number: number;
  sort: Sort2;
  numberOfElements: number;
  empty: boolean;
}

export interface Content {
  id: string;
  displayName: any;
  email: string;
  phoneNumber: string;
  lastLoginAt: any;
  ssid: string;
  roleName: string;
}

export interface Pageable {
  pageNumber: number;
  pageSize: number;
  sort: Sort;
  offset: number;
  unpaged: boolean;
  paged: boolean;
}

export interface Sort {
  empty: boolean;
  unsorted: boolean;
  sorted: boolean;
}

export interface Sort2 {
  empty: boolean;
  unsorted: boolean;
  sorted: boolean;
}
