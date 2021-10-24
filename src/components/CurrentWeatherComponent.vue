<template>
  <q-card
    class="my-card text-white"
    style="background-color: rgba(0, 0, 0, 0.7)"
  >
    <q-icon name="img:icons/day.svg" style="font-size: 12em" />
    <h2>{{ temp }}&#176;</h2>
    <p>Feels like: {{ feelsLike }}&#176;</p>
    <p>
      <span>{{ theDate }}<br />{{ theTime }}</span>
    </p>
    <p>{{ city }}, {{ country }}</p>
  </q-card>
  <div style="color: white">{{ weather }}</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IWeatherData } from './models';
import { date } from 'quasar';

export default defineComponent({
  name: 'CurrentWeatherComponent',
  props: {
    weather: Object,
  },
  setup(props) {
    const weather = props.weather as IWeatherData;
    const temp = Math.trunc(weather.main.temp);
    const feelsLike = Math.trunc(weather.main.feels_like);

    const theDate = date.formatDate(
      new Date(weather.dt * 1000),
      'ddd, Do MMM, YYYY'
    );
    const theTime = date.formatDate(new Date(weather.dt * 1000), 'H:m');
    const city = weather.name;
    const country = weather.sys.country;

    return { temp, feelsLike, city, country, theDate, theTime };
  },
});
</script>

<style lang="scss" scoped>
.q-card {
  text-align: center;
  padding: 10px;
}
h2 {
  padding: 0;
  margin: 0;
}
</style>
