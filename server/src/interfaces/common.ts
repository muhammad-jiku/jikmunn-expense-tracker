export interface IGenericResponse<T> {
  meta: {
    total: number;
  };
  data: T;
}
