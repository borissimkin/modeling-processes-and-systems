<template>
  <div>
    <div class="settings-title">
      Настройки
    </div>
    <div class="settings">
      <div class="settings__container">
        <div class="settings__container-title">Частица</div>
        <select v-model="particleType.selected" aria-label="graph-function-select">
          <option v-for="option in particleType.options" :key="option.value" :value="option.value">
            {{ option.text }}
          </option>
        </select>
      </div>
      <div class="settings__container">
        <div class="settings__container-title">Начальная скорость</div>
        <label>
          <input type="number" v-model="startingSpeed">
        </label>
      </div>
      <div class="settings__container">
        <div class="settings__container-title">Прицельный параметр</div>
        <label>
          <input type="number" v-model="sightingParameter">
        </label>
      </div>
    </div>
    <button @click="shoot">Стрелять!</button>
  </div>

</template>

<script>
export default {
  name: "ParticleScatteringSettings",
  data() {
    return {
      particleType: {
        selected: 'electron',
        options: [
          {value: 'electron', text: 'Электрон'},
          {value: 'proton', text: 'Протон'},
          {value: 'alpha', text: 'Альфа-частица'}
        ]
      },
      startingSpeed: 2e7,
      sightingParameter: 0.57,
    }
  },
  methods: {
    shoot() {
      let settings = {
        particleType: this.particleType.selected,
        startingSpeed: this.startingSpeed,
        sightingParameter: this.sightingParameter,
      }
      this.$emit('create-graph', settings);
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