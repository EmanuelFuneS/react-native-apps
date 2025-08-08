export interface ApiResponse<T> {
  data: T;
  error?: any;
}

export interface Location {
  latitude: number;
  longitude: number;
}

export interface ErrorLocation {
  code: number;
  message: string;
}
