<template>
    <div>
        <div class="title">Настройки</div>
        <div class="container-settings">
            <div class="setting graph-function">
                <div class="title-setting">Выбор графика функции</div>
                <select aria-label="graph-function-select" v-model="graphFunction.selected">
                    <option v-for="option in graphFunction.options" :value="option.value" :key="option.value">
                        {{option.text}}
                    </option>
                </select>
            </div>
            <div class="setting integration-limit">
                <div class="title-setting">Пределы интегрирования</div>
                <div class="integration-limit-item">
                    <div>
                        Верхний предел
                    </div>
                    <input type="number" aria-label="high-integration-limit" v-model="integrationLimit.high" >
                </div>

                <div class="integration-limit-item">
                    <div>
                        Нижний предел
                    </div>
                    <input type="number" aria-label="low-integration-limit" v-model="integrationLimit.low" >
                </div>
            </div>
            <div class="setting method-numerical-integration">
                <div class="title-setting">Метод численного интегрирования</div>
                <template v-for="option in methodNumericalIntegration.options">
                    <input type="radio"
                           aria-label="radio"
                           v-model="methodNumericalIntegration.selected"
                           :value="option.value"
                           :id="option.value" :key="option.value">
                    <label :for="option.value" :key="`label_${option.value}`">{{option.text}}</label>
                    <br :key="`br_${option.value}`">
                </template>
            </div>
            <div class="setting integral">
                <div class="count-interval">
                    <div class="title-setting">
                        Количество интервалов
                    </div>
                    <input aria-label="count-interval" type="number" v-model="countInterval">
                </div>
                <div class="integral-value">
                    <div class="title-setting">
                        Численный интеграл
                    </div>
                    <input aria-label="count-interval"
                           type="number"
                           :value="numericalIntegral"
                           readonly>
                </div>
            </div>
            <div class="setting">
                <button @click="createGraph">
                    График целевой функции
                </button>

            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "Settings",
        props: {
              numericalIntegral: {
                  type: Number,
                  default: 0,
              }
        },
        data() {
            return {
                graphFunction: {
                    selected: 'square',
                    options: [
                        {value: 'square', text: 'x^2'},
                        {value: 'sinus', text: 'sin(x)'},
                        {value: 'h-sinus', text: 'sinh(x)'}
                    ]
                },
                integrationLimit: {
                    low: -3,
                    high: 3,
                },
                methodNumericalIntegration: {
                    selected: 'left',
                    options: [
                        {value: 'left', text: 'Формула левых прямоугольников'},
                        {value: 'right', text: 'Формула правых прямоугольников'},
                        {value: 'middle', text: 'Формула средний прямоугольников'}
                    ]
                },
                countInterval: 30,

            }
        },
        methods: {
            createGraph() {
                this.$emit('create-graph', {
                    graphFunction: this.graphFunction.selected,
                    integrationLimit: this.integrationLimit,
                    methodNumericalIntegration: this.methodNumericalIntegration.selected,
                    countInterval: this.countInterval
                })
            }
        }
    }
</script>

<style scoped>
    .title {
        padding-top: 1rem;
        margin-left: 1rem;
        font-size: 25px;

    }

    .title-setting {
        font-size: 20px;
    }

    /*.integration-limit-item {*/
    /*    padding: 1em;*/
    /*}*/

    .container-settings {
        display: flex;

        /*flex-direction: column;*/
    }

    .setting {
        padding: 1em;
    }



</style>