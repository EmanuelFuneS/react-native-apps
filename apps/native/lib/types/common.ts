export interface ApiResponse<T> {
  data: T;
  error?: any;
}

export interface Location {
  lat: string;
  lon: string;
}

export interface ErrorLocation {
  code: number;
  message: string;
}

export interface Q {
  city: string;
  state: string;
  country: string;
}
