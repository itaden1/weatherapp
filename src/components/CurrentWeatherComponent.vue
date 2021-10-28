<template>
  <q-card
    class="my-card text-white"
    style="background-color: rgba(0, 0, 0, 0.5)"
  >
    <q-icon name="img:icons/day-cropped.svg" style="font-size: 8em" />
    <div class="q-pa-md">
      <div class="row justify-center q-gutter-x-lg items-center">
        <div class="column">
          <h2 class="q-mb-none q-mt-none q-pl-md">
            {{ Math.trunc(weatherData.main.temp) }}&#176;
          </h2>
        </div>
        <div class="column">
          <p class="q-my-none text-left">
            Min: {{ Math.trunc(weatherData.main.temp_min) }}&#176;
          </p>
          <p class="q-my-none text-left">
            Max: {{ Math.trunc(weatherData.main.temp_max) }}&#176;
          </p>
          <p class="q-my-none text-left">
            Feels like: {{ Math.trunc(weatherData.main.temp) }}&#176;
          </p>
        </div>
      </div>
      <h5 class="q-mt-md q-mb-sm">{{ weatherData.weather[0].description }}</h5>
    </div>
    <q-separator class="bg-dark-separator q-mb-lg" />
    <p class="text-grey-4">
      <span>{{ theDate }}<br />{{ theTime }}</span>
    </p>
    <p class="text-grey-4">
      {{ weatherData.name }}, {{ weatherData.sys.country }}
    </p>
  </q-card>
  <!-- <div style="color: black">{{ weatherData }}</div> -->
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { IWeatherData } from '../models/weatherModel';
import { date } from 'quasar';

export default defineComponent({
  name: 'CurrentWeatherComponent',
  props: {
    weather: Object,
  },
  setup(props) {
    const weatherData = props.weather as IWeatherData;

    const theDate = computed(() =>
      date.formatDate(new Date(weatherData.dt * 1000), 'ddd, Do MMMM')
    );
    const theTime = computed(() =>
      date.formatDate(new Date(weatherData.dt * 1000), 'hh:m a')
    );

    return {
      weatherData,
      theDate,
      theTime,
    };
  },
});
</script>

<style lang="scss" scoped>
.q-card {
  width: 95%;
  text-align: center;
  padding: 50px;
}
.q-icon {
  position: relative;
  width: 120px;
  height: 120px;
  margin: 0 auto;
}
// .centered-div {
//   max-width: 22rem;
// }
</style>
