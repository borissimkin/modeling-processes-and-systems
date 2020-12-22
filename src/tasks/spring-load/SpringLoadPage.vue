<template>
  <div>
    <NavigationBar></NavigationBar>
    <Chart :chart-data="dataForChart"></Chart>
    <SpringLoadSettings v-on:create-graph="createGraph" ></SpringLoadSettings>
  </div>
</template>

<script>
import NavigationBar from "@/tasks/NavigationBar";
import SpringLoadSettings from "@/tasks/spring-load/SpringLoadSettings";
import Chart from "@/tasks/LineChart";
import {calculation} from "@/tasks/spring-load/simulation";

export default {
  name: "SpringLoadPage",
  components: {Chart, SpringLoadSettings, NavigationBar},
  data() {
    return {
      dataForChart: {}
    }
  },
  methods: {
    createGraph(settings) {
      const points = calculation(settings);
      this.dataForChart = {
        datasets: [
          {
            label: 'График',
            borderColor: '#f87979',
            data: points,
            fill: false,
            showLine: true,
            lineTension: true

          },
        ]
      }


    }

  }
}
</script>

<style scoped>

</style>