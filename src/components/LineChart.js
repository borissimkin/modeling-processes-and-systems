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
            }
        }
    },
    mounted () {
        this.renderChart(this.chartData, this.options)
    }
}