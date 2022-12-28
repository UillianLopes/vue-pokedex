export interface ListResponseModel<T> {
  count: number;
  next: string;
  previous: string;
  results: T[];
}
