<template>
  <div>
    <div class="settings-title">
      Настройки
    </div>
    <div class="settings">
      <div class="settings__container">
        <div class="settings__container-header">
          <div class="settings__container-title">
            Коэфициент упругости K, Н/м
          </div>
          <div style="padding-left: 1rem"><b>{{ K.value }}</b></div>
        </div>
        <label>
          <input v-model="K.value" :max="K.max" :min="K.min" :step="K.step" type="range">
        </label>
      </div>
      <div class="settings__container">
        <div class="settings__container-header">
          <div class="settings__container-title">
            Масса m, кг
          </div>
          <div style="padding-left: 1rem"><b>{{ m.value }}</b></div>
        </div>
        <label>
          <input v-model="m.value" :max="m.max" :min="m.min" :step="m.step" type="range">
        </label>
      </div>
      <div class="settings__container">
        <div class="settings__container-header">
          <div class="settings__container-title">
            Нач. деформация x0, м
          </div>
          <div style="padding-left: 1rem"><b>{{ x0.value }}</b></div>
        </div>
        <label>
          <input v-model="x0.value" :max="x0.max" :min="x0.min" :step="x0.step" type="range">
        </label>
      </div>
      <div class="settings__container">
        <div class="settings__container-header">
          <div class="settings__container-title">
            Коэф-т трения u, б/р
          </div>
          <div style="padding-left: 1rem"><b>{{ u.value }}</b></div>
        </div>
        <label>
          <input v-model="u.value" :max="u.max" :min="u.min" :step="u.step" type="range">
        </label>
      </div>
      <div class="settings__container">
        <div class="settings__container-header">
          <div class="settings__container-title">
            Угол плоскости a, град
          </div>
          <div style="padding-left: 1rem"><b>{{ alpha.value }}</b></div>
        </div>
        <label>
          <input v-model="alpha.value" :max="alpha.max" :min="alpha.min" :step="alpha.step" type="range">
        </label>
      </div>
      <button @click="createGraph">Построить график</button>
    </div>
  </div>
</template>

<script>
export default {
name: "SpringLoadSettings",
  data() {
    return {
      K: {
        min: 1,
        max: 10,
        step: 0,
        value: 1
      },
      m: {
        min: 0.1,
        max: 2,
        step: 0.1,
        value: 0.1
      },
      x0: {
        min: 0.1,
        max: 2,
        step: 0.1,
        value: 0.1
      },
      u: {
        min: 0,
        max: 0.005,
        step: 0.0001,
        value: 0,
      },
      alpha: {
        min: 0,
        max: 90,
        step: 0.1,
        value: 1
      }
    }
  },
  methods: {
    createGraph() {
      let settings = {
        K: Number(this.K.value),
        m: Number(this.m.value),
        x0: Number(this.x0.value),
        u: Number(this.u.value),
        alpha: Number(this.alpha.value)

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

.settings__container-header {
  display: flex;
}

.settings-title {
  padding: 1rem;
  font-size: 1.5rem;
}
</style>