export interface ResponseData<T> {
  data: T;
  code?: number;
  message: string;
  id?: string;
}
