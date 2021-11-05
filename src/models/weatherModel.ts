
export interface IWeatherData {
  current: ICurrentWeather;
  daily: Array<IDailyWeather>;
  timezone: string;
  // hourlyWeather: Array<IHourlyWeather>;
}

interface IDailyWeather {
  clouds: number;
  dew_point: number;
  dt: number;
  feels_like: IDailyFeelsLike;
  humidity: number;
  moon_phase: number;
  moonrise: number;
  moonset: number;
  pop: number;
  pressure: number;
  sunrise: number;
  sunset: number;
  temp: IDailyTemperature;
  uvi: number;
  weather: Array<IWeatherObject>;
  wind_deg: number;
  wind_gust: number;
  wind_speed: number;
  rain: number;
}

interface IDailyTemperature {
  day: number;
  eve: number;
  max: number;
  min: number;
  morn: number;
  night: number;
}

interface IDailyFeelsLike {
  day: number;
  eve: number;
  morn: number;
  night: number;
}

interface ICurrentWeather {
  weather: Array<IWeatherObject>;
  clouds : number;
  dew_point: number;
  dt: number;
  feels_like: number;
  humidity: number;
  pressure: number;
  sunrise: number;
  sunset: number;
  temp: number;
  uvi: number;
  visiblility:number;
}

interface IWeatherObject {
  description: string;
  icon: string;
  main: string;
}
