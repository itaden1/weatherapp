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
  main: ImainWeatherinfo;
  visibility: number;
  wind: Record<string, unknown>;
  clouds: Record<string, unknown>;
  sys: ISystem;
  name: string;
  dt: number;
}

interface ISystem {
  country: string
}

interface ICoord {
  lon: number;
  lat: number
}

interface ImainWeatherinfo {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
}