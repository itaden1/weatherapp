<template>
  <q-page class="row items-center justify-evenly">
    <CurrentWeatherComponent :data="currentWeather"></CurrentWeatherComponent>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';

import CurrentWeatherComponent from 'components/CurrentWeatherComponent.vue';
import { IWeatherData } from 'src/components/models';

const testData = {
  coord: {
    lon: 145.6128,
    lat: -31.8402,
  },
  weather: [{ id: 800, main: 'Clear', description: 'clear sky', icon: '01d' }],
  base: 'stations',
  main: {
    temp: 21.93,
    feels_like: 292.91,
    temp_min: 17.93,
    temp_max: 23.93,
    pressure: 1019,
    humidity: 26,
    sea_level: 1019,
    grnd_level: 992,
  },
  visibility: 10000,
  wind: {
    speed: 6.68,
    deg: 197,
    gust: 6.85,
  },
  clouds: { all: 0 },
  dt: 1635042558,
  sys: {
    type: 1,
    id: 9507,
    country: 'AU',
    sunrise: 1635017286,
    sunset: 1635064510,
  },
  timezone: 39600,
  id: 7839712,
  name: 'Cobar',
  cod: 200,
};

// 2379017a6ce19acd87dd6b4c5f6e0574

export default defineComponent({
  name: 'PageIndex',
  components: { CurrentWeatherComponent },
  setup() {
    const currentWeather = ref({});

    const getCurrentWeather = () => {
      console.log('foo');
      currentWeather.value = testData as IWeatherData;
    };

    onMounted(getCurrentWeather);

    console.log(currentWeather);
    return { currentWeather, getCurrentWeather };
  },
});
</script>
