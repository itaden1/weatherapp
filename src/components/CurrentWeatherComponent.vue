<template>
  <q-card
    class="my-card text-white"
    style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%)"
  >
    <q-icon name="img:icons/day.svg" style="font-size: 12em" />
    <h2>{{ currentWeather.main.temp }}</h2>
    <p><span>10:55am</span></p>
  </q-card>
  <div>{{ currentWeather }}</div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'CurrentWeatherComponent',
  props: {
    data: Object,
  },
  setup(props) {
    const currentWeather = ref(props.data);
    console.log(currentWeather);
    return { currentWeather };
  },
});
</script>

<style lang="scss" scoped>
.q-card {
  text-align: center;
  padding: 20px;
}
</style>
