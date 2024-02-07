export interface RequestSliceStateProperty<T = unknown> {
  data: T | null;
  error: unknown | null;
  isLoading: boolean;
}

export const makeRequestSliceStateProperty = <T>(
  initialValues: Partial<RequestSliceStateProperty<T>> = {},
): RequestSliceStateProperty<T> => ({
  data: null,
  error: null,
  isLoading: false,
  ...initialValues,
});
