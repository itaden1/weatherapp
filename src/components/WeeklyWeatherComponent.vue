<template>
  <q-card
    class="my-card text-white"
    style="background-color: rgba(0, 0, 0, 0.5)"
  >
    <div class="q-pa-md">
      <p class="text-subtitle1">DAILY</p>
      <q-separator class="bg-dark-separator q-mb-lg" />

      <div class="row">
        <div v-for="day in dailyWeather" :key="day.dt" class="col">
          <q-icon name="img:icons/day-cropped.svg" style="font-size: 2em" />
          <span class="text-bold">{{ day.dt }}</span
          ><br />
          {{ day.minTemp }}&#176; <br />{{ day.maxTemp }}&#176;
          <!-- {{ day }} -->
        </div>
      </div>
    </div>
  </q-card>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { date } from 'quasar';

import { IWeatherData } from 'src/models/weatherModel';

export default defineComponent({
  props: {
    weatherData: {
      type: Object as PropType<IWeatherData>,
      required: true,
    },
  },
  setup(props) {
    let dailyWeather = props.weatherData.daily.map((d) => {
      return {
        icon: d.weather[0].icon,
        description: d.weather[0].description,
        dt: date.formatDate(new Date(d.dt * 1000), 'ddd'),
        minTemp: Math.trunc(d.temp.min),
        maxTemp: Math.trunc(d.temp.max),
        rain: d.rain,
      };
    });
    dailyWeather = dailyWeather.slice(0, 6);
    return { dailyWeather };
  },
});
</script>

<style lang="scss" scoped>
.q-icon {
  display: block;
  margin-bottom: 8px;
}
.q-card {
  margin-top: 20px;
  width: 95%;
  padding: 10px;
}
.text-subtitle1 {
  text-align: center;
}
</style>
