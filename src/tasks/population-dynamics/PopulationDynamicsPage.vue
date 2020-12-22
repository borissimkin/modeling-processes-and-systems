<template>
<div>
  <NavigationBar></NavigationBar>
  <Chart :chart-data="dataForChart"></Chart>
  <PopulationDynamicsSettings v-on:create-graph="createGraph"></PopulationDynamicsSettings>
</div>
</template>

<script>
import Chart from "@/tasks/LineChart";
import NavigationBar from "@/tasks/NavigationBar";
import {population} from "@/tasks/population-dynamics/population";
import PopulationDynamicsSettings from "@/tasks/population-dynamics/PopulationDynamicsSettings";

export default {
  name: "PopulationDynamicsPage",
  components: {PopulationDynamicsSettings, Chart, NavigationBar},
  data() {
    return {
      dataForChart: {},

    }
  },
  methods: {
    createGraph(settings) {
      const data = population(settings);
      this.dataForChart = {
        datasets: [
          {
            label: 'Жертва',
            borderColor: '#f87979',
            data: data.pointsVictim,
            fill: false,
            showLine: true,

          },
          {
            label: 'Хищник',
            borderColor: '#23f11c',
            data: data.pointsPredator,
            fill: false,
            showLine: true,

          }
        ]
      }

    }
  }


}
</script>

<style scoped>

</style>