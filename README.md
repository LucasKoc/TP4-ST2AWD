## TP3 - ST2AWD - Interface Development and Design (I2 - 2425S7)

07-Oct-2024 | SE Promo 2026 | KOCOGLU Lucas


#### Question 1 - Difference between installing a package locally and globally

The difference between installing a package locally and globally is that when you install a package locally, it is installed in the node_modules folder of the current project, while when you install a package globally, it is installed in the global node_modules folder. 
This means that when you install a package locally, it is only available to the current project, while when you install a package globally, it is available to all projects on your machine.

To install globally, we use the `-g` flag. Installing locally doesn't need any flag.

We can install locally package using for specific projects (eg. Vue.js) and install globally package for general use (eg. JSDoc).

#### Exercice 1 - Create a new Vue.js project

To create a new Vue project, we can use the following command:

```bash
vue create vue-oath-microsoft-graph
```

This view is shown in the terminal:

```bash
Vue CLI v5.0.8
? Please pick a preset: 
❯ Default ([Vue 3] babel, eslint) 
  Default ([Vue 2] babel, eslint) 
  Manually select features 
```

After successful installation, the folder `vue-oath-microsoft-graph` with project inside.

#### Question 2 - Webpack and Vue

Webpack bundle all the files in the project into a single file. This is useful because it reduces the number of requests that the browser has to make to the server, which can improve the performance of the application.

#### Question 3: The role of Babel and how browserslist may configure its output?

The role of Babel is to transpile the Js code to a version that is compatible with all browsers.
To configure the output of Babel, we can use the browserslist configuration file (`.browserslistrc`) or in `package.json`.
Here's an example:
```json
  "browserslist": [
    "> 1%",
    "last 2 versions",
    "not dead",
    "not ie 11"
  ]
```

#### Question 4: The role of ESLint

ESLint is a tool that helps to identify and fix problems in the code. It checks the code for errors, style issues, and other problems, and provides suggestions for how to fix them.
Current configuration is as following:

```json
  "eslintConfig": {
    "root": true, // to prevent ESLint from looking for configuration files in parent directories
    "env": {
      "node": true // to enable Node.js global variables
    },
    "extends": [
      "plugin:vue/vue3-essential", // to enable Vue.js specific rules
      "eslint:recommended" // to enable recommended rules
    ],
    "parserOptions": {
      "parser": "@babel/eslint-parser" // to enable Babel parser, which allows ESLint to understand modern JavaScript syntax
    },
    "rules": {} // to enable custom rules, no rules here
  },
```

#### Exercise 2: Run serv

To run server, we can use the following command:

```bash
npm run serve
```

![We can see the default page of Vue.js.](https://raw.githubusercontent.com/LucasKoc/TP3-ST2AWD/refs/heads/main/Ressources/Screenshot%202024-10-04%20at%2010.05.22.png "Default page of Vue.js")

#### Exercise 3: Cleanup the project

After deleting the `HelloWorld.vue` file, and all related assets in the `App.vue` file, we can see the following result:

![We see nothing but the text we placed in our page](https://raw.githubusercontent.com/LucasKoc/TP3-ST2AWD/refs/heads/main/Ressources/Screenshot%202024-10-04%20at%2010.17.59.png "Empty page with a little message saying that there is nothing like in the subject")

#### Exercise 4: Create a new component

To create the HomePage, we create a new file `HomePage.vue` in the `src/pages` folder, and update `App.vue` file. We can see the following content:

![We see our new page with HomePage components](https://raw.githubusercontent.com/LucasKoc/TP3-ST2AWD/refs/heads/main/Ressources/Screenshot%202024-10-04%20at%2010.38.50.png "Our new page with HomePage components")

#### Exercise 5: Create new components

To create the `Header` and `Footer` components, we create new files `Header.vue` and `Footer.vue` in the `src/components` folder, and update `HomePage.vue` file.
Note that fontawesome is used for the icons and added in our lab using this [thread](https://stackoverflow.com/questions/66389974/using-font-awesome-in-vue-3).

Here's the result:

![We see our new page with new components](https://raw.githubusercontent.com/LucasKoc/TP3-ST2AWD/refs/heads/main/Ressources/Screenshot%202024-10-04%20at%2012.01.35.png "Our new page with new components")

#### Question 5: What is the difference between scoped and non-scoped CSS?

Scoped css is only applied to the component it is defined in, while non-scoped css is applied to the entire application.

#### Exercise 6: BaseLayout

In this exercise, the file `App.vue` has been updated to include the `BaseLayout` component. The `BaseLayout` component has been created in the `src/layouts` folder.

#### Question 6: non-prop attributes

When a non-prop attribute is passed down to a component, it is automatically added to the root element of the component's template. This is because Vue.js automatically binds all attributes to the root element of the component's template.

#### Exercise 7: Implement BaseButton

The base button component has been implemented in the `src/components/BaseButton.vue` file. The `BaseButton` component has been used in the `HomePage` component.

#### Exercise 8: Color palette and prop for BaseButton

For this part, the file `src/assets/css/base.css` hase been added with (modified) color palette template from Vue.js. File has been imported into `main.js` to spread the color palette to the entire application.
The `BaseButton` component has been updated to accept a `color` prop. It also accept `icon` prop to add an `font-awesome-icon` to the button.
Three levels of buttons has been added :
- Primary
- Warn
- Danger

Here's the result:

![Page with new color palette](https://raw.githubusercontent.com/LucasKoc/TP3-ST2AWD/refs/heads/main/Ressources/Screenshot%202024-10-06%20at%2023.40.31.png "Our page with new color palette")

#### Exercise 9: Add Async Button

We imported the original code provided by the subject of `AsyncButton.vue` and added it to the `src/components` folder. 
`AsyncButton` has been added to the `HomePage` component and a 2 second cooldown has been set to the button.

#### Exercise 10: slowing down the button on click

We added a `clickCount` to track the number of clicks on the button. We changed the `timeout` from 2seconds to `clickCount * 1 second` to have a cooldown of 1s/click.
Added a text to show the number of clicks.

### Question 7: AsyncButton, finally() and then() methods

The `AsyncButton` component is designed to handle asynchronous operations. When the button is clicked, the `onClick` handler is called (triggered in `HomePage.vue`), which returns a Promise. The `AsyncButton` component is aware of the returned Promise by the parent `onClick` handler because it is passed as a prop to the `AsyncButton` component. The `AsyncButton` component then uses the `Promise` to determine the state of the button (`isPending` = true/false => disabled/enabled).

The callback is executed when the Promise is resolved, running the `finally()` method regardless of the Promise's state.

The `finally()` method is used instead of `then()` because it is called regardless of the Promise's state. The `then()` method is only called when the Promise is resolved.


### Question 8: Which bug is introduced if inheritAttrs: false is missing or set to true in AsyncBut ton? Why?

Bug introduced:
- The parent's non-prop attributes are automatically added to the root element of the component's template. This can cause unexpected behavior if the parent's non-prop attributes are not intended to be passed down to the component (Loss of control).
- If `inheritAttrs: true`, there can be duplicate event handling (eg. `handleAsyncClick` will be applied to `AsyncButton` and `BaseButton` in root element => multiple invocation).

### Bonus: Added TypeScript

We added TypeScript to the project by running the following command:

```bash
vue add typescript
```

Files has been modified to be compatible with TypeScript.
Here's the result from the terminal, with new compilation check:
```bash
 DONE  Compiled successfully in 273ms                                                                                                                                                                     4:21:27 PM


  App running at:
  - Local:   http://localhost:8080/ 
  - Network: http://10.3.217.198:8080/

No issues found.
```