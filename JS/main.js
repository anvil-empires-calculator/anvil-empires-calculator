const { createApp, ref } = Vue

createApp({
  setup() {
    const message = ref('Vue is functional')
    return {
      message
    }
  }
}).mount('#app')