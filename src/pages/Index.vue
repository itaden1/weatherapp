<template>
  <q-img src="/img/warm-and-sunny2.jpg" :fit="mode" style="position: initial">
    <q-page class="row items-center justify-evenly">
      <div v-if="weatherLoaded">
        <CurrentWeatherComponent
          :weatherData="currentWeather"
        ></CurrentWeatherComponent>
        <WeeklyWeatherComponent :weatherData="currentWeather">
        </WeeklyWeatherComponent>
      </div>
      <div v-else>
        <ConfirmGeoDialogue
          v-on:confirmed="getCurrentWeather"
        ></ConfirmGeoDialogue>
        <q-spinner-pie color="primary" size="8em" />
      </div>
    </q-page>
  </q-img>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useQuasar } from 'quasar';
import { getWeatherdata } from '../services/weatherService';
import CurrentWeatherComponent from 'components/CurrentWeatherComponent.vue';
import WeeklyWeatherComponent from 'components/WeeklyWeatherComponent.vue';
import ConfirmGeoDialogue from 'components/ConfirmGeoDialoge.vue';

export default defineComponent({
  name: 'PageIndex',
  components: {
    CurrentWeatherComponent,
    WeeklyWeatherComponent,
    ConfirmGeoDialogue,
  },
  setup() {
    const currentWeather = ref({});
    const weatherLoaded = ref(false);
    const mode = 'cover';
    const $q = useQuasar();

    const getGeoCoords = async (): Promise<GeolocationPosition> => {
      if ($q.cordova) {
        return new Promise(
          (resolve: PositionCallback, reject: PositionErrorCallback) =>
            navigator.geolocation.getCurrentPosition(resolve, reject)
        );
      }
      return new Promise(
        (resolve: PositionCallback, reject: PositionErrorCallback) =>
          navigator.geolocation.getCurrentPosition(resolve, reject)
      );
    };
    const getLocation = async (): Promise<GeolocationCoordinates | null> => {
      const coords: GeolocationCoordinates | null = await getGeoCoords()
        .then((loc) => loc.coords)
        .catch((err: Error) => {
          $q.dialog({
            title: `${err.name}`,
            message: `${err.message}`,
          });
          return null;
        });
      return coords;
    };

    const getCurrentWeather = async () => {
      const coords = await getLocation();
      if (coords != null) {
        await getWeatherdata(coords.latitude, coords.longitude).then(
          (res) => (currentWeather.value = res)
        );
        console.log(currentWeather.value);
        weatherLoaded.value = true;
      } else {
        console.log('no weather data');
        $q.dialog({
          title: 'Alert',
          message: 'Some message',
        })
          .onOk(() => {
            // console.log('OK')
          })
          .onCancel(() => {
            // console.log('Cancel')
          })
          .onDismiss(() => {
            // console.log('I am triggered on both OK and Cancel')
          });
      }
    };

    return {
      mode,
      currentWeather,
      getCurrentWeather,
      getLocation,
      weatherLoaded,
      confirm,
    };
  },
});
</script>
