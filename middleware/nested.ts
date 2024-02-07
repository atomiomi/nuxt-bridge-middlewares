export default defineNuxtRouteMiddleware((to) => {
  console.log('>>> Nested middleware called');
})
