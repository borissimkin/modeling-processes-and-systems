import {Scatter, mixins} from 'vue-chartjs'
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
                    animationDuration: 0 // duration of animations when hovering an item
                },
                responsiveAnimationDuration: 0 // animation duration after a resize
            }
        }
    },
    mounted () {
        this.renderChart(this.chartData, this.options)
    }
}