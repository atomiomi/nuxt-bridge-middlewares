export default defineNuxtRouteMiddleware(async (to) => {
  console.log('>>> Root middleware called');

  if (!to.fullPath.includes('redirect')) {
    return navigateTo('/redirect?from=root');
  }
})
