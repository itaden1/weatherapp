import axios from 'axios';
// import { useQuasar } from 'quasar';


import { IWeatherData } from 'src/models/weatherModel';


export const getGeoCoords = async (): Promise<GeolocationPosition> => {
  // const $q = useQuasar();
  return new Promise((resolve: PositionCallback, reject: PositionErrorCallback) =>
    navigator.geolocation.getCurrentPosition(resolve, reject)
  );
  // if ($q.platform.is.cordova) {
  //     // do cordova get geo coords
  // }
  // else if ($q.platform.is.electron) {
  //   // do desktop get geo coords
  // } else {
  //   // web based geo coords

  // }
}

export const getWeatherdata = async (latitude: number, longitude: number): Promise<IWeatherData | Error> => {
    const apiKey = '2379017a6ce19acd87dd6b4c5f6e0574';
    // let data: IWeatherData;
    try {
      const data: IWeatherData = await axios.get(
          `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,daily&appid=${apiKey}`
      ).then((res) => res.data as IWeatherData);
      return data;
    }
    catch(err) {
      return err as Error
    }
}