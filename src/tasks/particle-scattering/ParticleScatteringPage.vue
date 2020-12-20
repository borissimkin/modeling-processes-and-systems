<template>
  <div>
    <NavigationBar></NavigationBar>
    <Chart v-show="isShoot" :chart-data="dataForChart"></Chart>
    <LineChartDependencies v-show="!isShoot" :chart-data="dataForChart"></LineChartDependencies>
    <ParticleScatteringSettings v-on:shoot="shootGraph" v-on:dependencies="dependenciesGraph"></ParticleScatteringSettings>
  </div>
</template>

<script>
import ParticleScatteringSettings from "@/tasks/particle-scattering/ParticleScatteringSettings";
import Chart from "@/tasks/particle-scattering/LineChartShoot";
import LineChartDependencies from "@/tasks/particle-scattering/LineChartDependencies";
import NavigationBar from "@/tasks/NavigationBar";
import {calculateShoot} from "@/tasks/particle-scattering/shoot";
import { Constants } from "@/tasks/particle-scattering/consts";

export default {
  name: "ParticleScatteringPage",
  components: {Chart, LineChartDependencies, ParticleScatteringSettings, NavigationBar},

  data() {
    return {
      dataForChart: {},
      isShoot: true,


    }
  },
  methods: {
    shootGraph(settings) {
      this.isShoot = true;
      const points = calculateShoot(settings.particleType, Number(settings.startingSpeed), Number(settings.sightingParameter));

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
            data: [{x: 3 * Constants.EI, y: 0}],
            fill: true,
            pointRadius: 5,
          }
        ],
      }

    },
    dependenciesGraph(settings) {
      this.isShoot = false;
      const points = []
      for (let h = -1.29; h <= 1.29; h+=0.001) {
        const pointsShoot = calculateShoot(settings.particleType, Number(settings.startingSpeed), h);
        console.log(pointsShoot)
        let lastPoint = pointsShoot[pointsShoot.length - 1];
        let previousPoint = pointsShoot[pointsShoot.length - 2];
        let r = Math.sqrt(Math.pow(lastPoint.x - previousPoint.x, 2) + Math.pow(lastPoint.y - previousPoint.y, 2));
        let c = (lastPoint.x - previousPoint.x) / r; // cos
        let s = (lastPoint.y - previousPoint.x) / r; // sin
        // console.log({c, s})
        let ang = Math.acos(c) * (s / s) * 180.0 / Constants.PI;
        let aim = h * Constants.EI;
        points.push( {
          x: aim,
          y: ang
        })

      }

      this.dataForChart = {
        datasets: [
          {
            label: 'Угол отклонения от величины прицельного параметра',
            borderColor: '#f87979',
            data: points,
            fill: false,
            showLine: true,

          }
          ],
      }



    }

  }
}
</script>

<style scoped>


</style>