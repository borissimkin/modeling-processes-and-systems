<template>
    <div>
        <NavigationBar></NavigationBar>
        <Chart :chart-data="dataForChart"></Chart>
        <Settings v-on:create-graph="createGraph"></Settings>
    </div>
</template>

<script>
    import NavigationBar from "@/components/NavigationBar";
    import Settings from "@/components/num-integration/Settings";
    import Chart from "@/components/num-integration/LineChart";
    import {getValuesFunction, getXValuesIntegralRectangles} from "./integral"
    export default {
        name: "NumIntegrationPage",
        components: {Chart, Settings, NavigationBar},
        data() {
            return {
                dataForChart: {}

            }
        },
        methods: {
            createGraph(setting) {
                console.log(setting);
                this.fillData(setting)

            },

            fillData(setting) {
                const labels = []
                const min = setting.integrationLimit.low,
                    max = setting.integrationLimit.high;
                for (let i = min; i <= max; i++)
                    labels.push(i)
                const values = getValuesFunction(labels, setting.graphFunction);
                const labelsForRects = getXValuesIntegralRectangles(min, max, setting.countInterval)
                const valuesRects = getValuesFunction(labelsForRects, setting.graphFunction)


                this.dataForChart = {
                    labels: labels,
                    datasets: [
                        {
                            label: 'Функция',
                            borderColor: '#f87979',
                            data: values,
                            fill: false

                        },
                        {
                            label: 'Прямоугольнки',
                            borderColor: '#23f11c',
                            data: valuesRects,
                            fill: false,
                            steppedLine: true,
                        }
                    ]
                }
            }


        },

    }
</script>

<style scoped>

</style>