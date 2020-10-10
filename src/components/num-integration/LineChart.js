import {Line, mixins} from 'vue-chartjs'
const {reactiveProp} = mixins

export default {
    name: "chart",
    extends: Line,
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