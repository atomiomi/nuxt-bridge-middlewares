# Nuxt bridge middlewares issue

In nuxt bridge if you return navigateTo from a middleware, it doesn't break middleware chain, resulting in the next middleware to be called. Which causes error in some cases (for example root middleware checks user authentication and blocks access to a page).

## How to reproduce
- Install dependencies: `npm ci`
- Run the app: `npm start`
- Go to http://localhost:3000/
- In terminal you will see that both middlewares are called, even though root returns result of `navigateTo()` utility.
```
>>> Root middleware called
>>> Nested middleware called
>>> Root middleware called
```
