<template>
  <div>
    <div class="settings-title">
      Настройки
    </div>
    <div class="settings">
      <div class="settings__container">
        <div class="settings__container-title">Начальное значение хищников</div>
        <label>
          <input v-model="startCountPredators" type="number">
        </label>
      </div>
      <div class="settings__container">
        <div class="settings__container-title">Начальное значение жертв</div>
        <label>
          <input v-model="startCountVictims" type="number">
        </label>
      </div>
      <div class="settings__container">
        <div class="settings__container-title">Коэффициент рождаемости <b>r</b></div>
        <label>
          <input v-model="r" type="number">
        </label>
      </div>
      <div class="settings__container">
        <div class="settings__container-title">Коэффициент смертности <b>m</b></div>
        <label>
          <input v-model="m" type="number">
        </label>
      </div>
      <div class="settings__container">
        <div class="settings__container-title">Несущая способность окружающей среды для жертв <b>K</b></div>
        <label>
          <input v-model="k" type="number">
        </label>
      </div>
      <div class="settings__container">
        <div class="settings__container-title">коэффициент эффективности переработки поглощенной хищником пищи в его потомство <b>s</b></div>
        <label>
          <input v-model="s" type="number">
        </label>
      </div>
      <button @click="createGraph">Построить график</button>
    </div>
  </div>

</template>

<script>
export default {
  name: "PopulationDynamicsSettings",
  data() {
    return {
      startCountVictims: 10,
      startCountPredators: 10,
      r: 1,
      s: 1,
      k: 1,
      m: 1,

    }
  },
  methods: {
    createGraph() {
      let settings = {
        startCountVictims: Number(this.startCountVictims),
        startCountPredators: Number(this.startCountPredators),
        r: Number(this.r),
        s: Number(this.s),
        k: Number(this.k),
        m: Number(this.m),
      }
      this.$emit('create-graph', settings)
    }
  }
}
</script>

<style scoped>
.settings {
  display: flex;
}

.settings__container {
  padding: 1rem;

}

.settings-title {
  padding: 1rem;
  font-size: 1.5rem;
}


</style>