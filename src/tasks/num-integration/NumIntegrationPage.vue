<template>
    <div>
        <NavigationBar></NavigationBar>
        <Chart :chart-data="dataForChart"></Chart>
        <Settings v-on:create-graph="createGraph"
                  v-on:create-graph-accuracy-integration="createGraphAccuracy"
                  :numericalIntegral="this.integralValue"></Settings>
    </div>
</template>

<script>
    import NavigationBar from "@/tasks/NavigationBar";
    import Settings from "@/tasks/num-integration/Settings";
    import Chart from "@/tasks/LineChart";
    import {getPointsFunction, getPointsRectangles, getPointsAccuracyGraph} from "./integral"
    import {getIntegral} from "@/tasks/num-integration/integral";
    export default {
        name: "NumIntegrationPage",
        components: {Chart, Settings, NavigationBar},
        data() {
            return {
                dataForChart: {},
                integralValue: 0,

            }
        },
        methods: {
            createGraph(setting) {
                const min = Number(setting.integrationLimit.low),
                    max = Number(setting.integrationLimit.high),
                    countInterval = Number(setting.countInterval);

                const points = getPointsFunction(setting.graphFunction, min, max);
                const pointsRects = getPointsRectangles(setting.graphFunction,
                    min, max, countInterval, setting.methodNumericalIntegration)
                this.integralValue = getIntegral(min, max, countInterval, pointsRects);

                this.dataForChart = {
                    datasets: [
                        {
                            label: 'Функция',
                            borderColor: '#f87979',
                            data: points,
                            fill: false,
                            showLine: true,

                        },
                        {
                            label: 'Прямоугольнки',
                            borderColor: '#23f11c',
                            data: pointsRects,
                            fill: true,
                            steppedLine: this.getTypeSteppedLine(setting.methodNumericalIntegration),
                            showLine: true,
                        }
                    ]
                }

            },

            createGraphAccuracy(setting) {
                const minCountInterval = 10;
                const maxCountInterval = 100;
                const min = Number(setting.integrationLimit.low),
                    max = Number(setting.integrationLimit.high);
                const points = getPointsAccuracyGraph(setting.graphFunction, setting.methodNumericalIntegration,
                    {max, min}, {max: maxCountInterval, min: minCountInterval})
                this.dataForChart = {
                    datasets: [
                        {
                            label: 'График зависимости точности интегрирования от количества интервалов разбиения',
                            borderColor: '#f87979',
                            data: points,
                            fill: false,
                            showLine: true,


                        }
                    ]
                }



            },

            getTypeSteppedLine(methodNumericalIntegration) {
                switch (methodNumericalIntegration) {
                    case 'left':
                        return 'before'
                    case 'right':
                        return 'after'
                    case 'middle':
                        return 'middle'

                }

            },


        },

    }
</script>

<style scoped>

</style>