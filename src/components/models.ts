// export interface Todo {
//   id: number;
//   content: string;
// }

// export interface Meta {
//   totalCount: number;
// }

export interface IWeatherData {
  coord: ICoord;
  weather: Array<Record<string, unknown>>;
  main: Record<string, unknown>;
  visibility: number;
  wind: Record<string, unknown>;
  clouds: Record<string, unknown>;
  sys: Record<string, unknown>;
  name: string
}

interface ICoord {
  lon: number;
  lat: number
}