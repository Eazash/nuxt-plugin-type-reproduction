export default defineNuxtPlugin({
  name: 'two',
  dependsOn: ['one'],
  setup() {
    const nuxtApp = useNuxtApp()
    
    return {
      provide: {
        two: () =>  {
          nuxtApp.$one()
          console.log('So long and thanks for all the bugs')
        }
      }
    }
  }
})