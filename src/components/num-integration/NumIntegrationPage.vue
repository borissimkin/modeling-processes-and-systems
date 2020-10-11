<template>
    <div>
        <NavigationBar></NavigationBar>
        <Chart :chart-data="dataForChart"></Chart>
        <Settings v-on:create-graph="createGraph"
                  :numericalIntegral="this.integralValue"></Settings>
    </div>
</template>

<script>
    import NavigationBar from "@/components/NavigationBar";
    import Settings from "@/components/num-integration/Settings";
    import Chart from "@/components/num-integration/LineChart";
    import {getPointsFunction, getPointsRectangles} from "./integral"
    import {getIntegral} from "@/components/num-integration/integral";
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
                console.log(setting);
                this.fillData(setting)

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

            fillData(setting) {
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
            }


        },

    }
</script>

<style scoped>

</style>