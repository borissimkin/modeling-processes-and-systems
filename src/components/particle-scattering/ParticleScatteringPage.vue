<template>
  <div>
    <NavigationBar></NavigationBar>
    <Chart :chart-data="dataForChart"></Chart>
    <ParticleScatteringSettings v-on:create-graph="createGraph"></ParticleScatteringSettings>
  </div>
</template>

<script>
import ParticleScatteringSettings from "@/components/particle-scattering/ParticleScatteringSettings";
import Chart from "@/components/LineChart";
import NavigationBar from "@/components/NavigationBar";
import {calculateShoot} from "@/components/particle-scattering/shoot";

export default {
  name: "ParticleScatteringPage",
  components: {Chart, ParticleScatteringSettings, NavigationBar},
  data() {
    return {
      dataForChart: {},

    }
  },
  methods: {
    createGraph(settings) {

      const points = calculateShoot(settings.particleType, Number(settings.startingSpeed), Number(settings.sightingParameter));

      console.log(points);
      this.dataForChart = {
        datasets: [
          {
            label: 'Полет',
            borderColor: '#f87979',
            data: points,
            fill: false,
            showLine: true,

          },
          {
            label: 'Железо',
            borderColor: '#23f11c',
            data: [{x: 1, y: 0}],
            fill: true,
            pointRadius: 20,
          }
        ]
      }

    }

  }
}
</script>

<style scoped>

</style>