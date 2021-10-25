<template>
  <q-card
    class="my-card text-white"
    style="background-color: rgba(0, 0, 0, 0.5)"
  >
    <q-icon name="img:icons/day-cropped.svg" style="font-size: 8em" />
    <h2 class="temp">{{ Math.trunc(weatherd.main.temp) }}&#176;</h2>
    <h5 class="description">{{ weatherd.weather[0].description }}</h5>
    <p>Feels like: {{ feelsLike }}&#176;</p>
    <p>
      <span>{{ theDate }}<br />{{ theTime }}</span>
    </p>
    <p>{{ city }}, {{ country }}</p>
  </q-card>
  <!-- <div style="color: black">{{ weatherd }}</div> -->
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
    const weatherd = props.weather as IWeatherData;
    const temp = Math.trunc(weatherd.main.temp);
    const description = weatherd.weather[0].description;
    const feelsLike = Math.trunc(weatherd.main.feels_like);

    const theDate = date.formatDate(
      new Date(weatherd.dt * 1000),
      'ddd, Do MMM, YYYY'
    );
    const theTime = date.formatDate(new Date(weatherd.dt * 1000), 'H:m');
    const city = weatherd.name;
    const country = weatherd.sys.country;

    return {
      weatherd,
      temp,
      description,
      feelsLike,
      city,
      country,
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
.description {
  margin: 0;
}
.temp {
  padding-left: 20px;
}
h2 {
  padding: 0;
  margin: 1rem 0 0 0;
}
</style>
