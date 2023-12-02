export interface ResponseType<T = any> {
  [x: string]: any;
  code: number;
  message: string;
  data: T;
}

export interface PaginationParams {
  page: number;
  size: number;
}

export interface PaginationType {
  page: number;
  size: number;
  total: number;
}
