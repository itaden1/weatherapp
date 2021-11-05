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
            {{ Math.trunc(weatherData.current.temp) }}&#176;
          </h2>
        </div>
        <div class="column">
          <p class="q-my-none text-left">
            Feels like:
            {{ Math.trunc(weatherData.current.temp) }}&#176;
          </p>
        </div>
      </div>
      <h5 class="q-mt-md q-mb-sm">
        {{ weatherData.current.weather[0].description }}
      </h5>
    </div>
    <q-separator class="bg-dark-separator q-mb-lg" />
    <p class="text-grey-4">
      <span>{{ theDate }}<br />{{ theTime }}</span>
    </p>
    <p class="text-grey-4">
      {{ weatherData.timezone }}
    </p>
  </q-card>
</template>

<script lang="ts">
import { PropType, defineComponent, computed, toRefs } from 'vue';
import { IWeatherData } from '../models/weatherModel';
import { date } from 'quasar';

export default defineComponent({
  name: 'CurrentWeatherComponent',
  props: {
    weatherData: {
      type: Object as PropType<IWeatherData>,
      required: true,
    },
  },
  setup(props) {
    const weatherData = toRefs(props.weatherData);

    const theDate = computed(() =>
      date.formatDate(
        new Date(weatherData.current.value.dt * 1000),
        'ddd, Do MMMM'
      )
    );
    const theTime = computed(() =>
      date.formatDate(new Date(weatherData.current.value.dt * 1000), 'hh:m a')
    );

    return {
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
</style>
