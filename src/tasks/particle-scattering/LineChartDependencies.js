import {Scatter, mixins} from 'vue-chartjs'
import {Constants} from "@/tasks/particle-scattering/consts";

const {reactiveProp} = mixins

export default {
    name: "chart",
    extends: Scatter,
    mixins: [reactiveProp],
    data() {
        return {
            options: {
                responsive: true,
                maintainAspectRatio: false,
                animation: {
                    duration: 0 // general animation time
                },
                hover: {
                    animationDuration: 0
                },
                responsiveAnimationDuration: 0,
                scales: {
                    xAxes: [{
                        ticks: {
                            min: -1.29 * Constants.EI,
                            max: 1.29 * Constants.EI
                        }
                    }

                    ],
                    yAxes: [{
                        ticks: {
                            min: 0,
                            max: 360,
                        }
                    }]

                }

            }
        }
    },
    mounted () {
        this.renderChart(this.chartData, this.options)
        console.log(this.test)
    }
}