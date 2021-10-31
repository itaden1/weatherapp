<template>
  <q-img src="/img/warm-and-sunny2.jpg" :fit="mode" style="position: initial">
    <q-page class="row items-center justify-evenly">
      <div v-if="weatherLoaded">
        <CurrentWeatherComponent
          :weatherData="currentWeather"
        ></CurrentWeatherComponent>
        <WeeklyWeatherComponent></WeeklyWeatherComponent>
      </div>
      <div v-else>
        <ConfirmGeoDialogue
          v-on:confirmed="getCurrentWeather"
        ></ConfirmGeoDialogue>
        <q-spinner-pie color="primary" size="5em" />
      </div>
    </q-page>
  </q-img>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { Dialog, useQuasar } from 'quasar';
import { getGeoCoords, getWeatherdata } from '../services/weatherService';
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
    const getLocation = async (): Promise<GeolocationCoordinates> => {
      const location: GeolocationPosition = await getGeoCoords()
        .then((loc) => loc)
        .catch(() => {
          $q.dialog({
            title: 'Alert',
            message: 'Could not get location!',
          });
        });
      return location.coords;
    };

    const getCurrentWeather = async () => {
      const coords = await getLocation();
      await getWeatherdata(coords.latitude, coords.longitude).then(
        (res) => (currentWeather.value = res)
      );
      console.log(currentWeather.value);
      weatherLoaded.value = true;
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
