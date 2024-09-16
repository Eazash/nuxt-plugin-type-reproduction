export default defineNuxtPlugin({
  name: 'one',
  setup(){
    return {
      provide: {
        one: () => console.log('Into the void')
      }
    }
  }
})