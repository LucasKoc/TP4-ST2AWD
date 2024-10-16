## TP3 - ST2AWD - Interface Development and Design (I2 - 2425S7)

07-Oct-2024 | SE Promo 2026 | KOCOGLU Lucas


### Question 1 -  Why you should not commit credentials on git?

We should not commit credentials on git for evident security reasons.
If we commit credentials on git, they will be visible to everyone who has access to the repository.
This is a common error happening now like the OpenAI API Key leak on GitHub.

### Question 2: Why may you want different configurations depending on the environment? Give an example.

We may want different configurations depending on the environment because we may have different needs depending on the environment.
For example, we may want to have different configurations for the development environment and the production environment (eg. database url/credentials).

### Exercise 1: 

Before doing this part, we need to install the @azure/msal-browser package. To do this, we need to run the following command in the terminal:

```bash
npm install @azure/msal-browser
```

After registering an application on Microsoft Azure App registrations, we set in the `.env.development.local` file the variable `VUE_APP_OAUTH_CLIENT_ID` with the client ID of the application.
We created the file `src/lib/microsoftGraph.ts` and pasted the code from subject into the file. It retrieves the OAUTH client ID from the environment variables.
After that, we created the `src/components/SigninButton.vue`.

When launching for the clicking for the first time on the Sign in button, there will be an error shown in the client console related to `microsoftGraph.ts`. This code will fix this part:
```typescript
export async function initializeMsalInstance() {
    // Added function
    if (!msalInstance.getActiveAccount()) {
        await msalInstance.initialize();
    }
}

export async function signInAndGetUser () {
    await initializeMsalInstance(); // We're adding this line to initialize the msalInstance

    const authResult = await msalInstance.loginPopup(requestedScopes)
    msalInstance.setActiveAccount(authResult.account)
    return authResult.account
}
```

Also, we need to modify the Manifest file of the application. On this line, we need to verify the following value is set to accept all Microsoft Account Type:
```json
	"signInAudience": "AzureADandPersonalMicrosoftAccount" // From originaly "PersonalMicrosoftAccount"
```

Here's the result:
![Login page from Microsoft MAS](https://raw.githubusercontent.com/LucasKoc/TP4-ST2AWD/refs/heads/main/Ressources/Screenshot%202024-10-08%20at%2017.01.27.png "Our login page")
![Logged as](https://raw.githubusercontent.com/LucasKoc/TP4-ST2AWD/refs/heads/main/Ressources/Screenshot%202024-10-08%20at%2017.12.00.png "Logged as user")

### Exercise 2: state management with props/events

We added props and event to communicate between components. Event: `userChanged`  and Prop: `user`.
`microsoftGraph.ts` has been updated to fix the error when the user log, refresh the page and couldn't log again.

Here's the result:
![Logged as](https://raw.githubusercontent.com/LucasKoc/TP4-ST2AWD/refs/heads/main/Ressources/Screenshot%202024-10-15%20at%2021.36.18.png "Logged as user")

### Question 3: While being a well-working solution, it suffers from maintainability issues. Please expose and discuss them.

The solution suffers from maintainability issues because it is not scalable.
If we want to add more components that need to communicate with each other, we will have to pass props and events between all the components.
This will make the code harder to maintain and understand.
Also, if we want to change the structure of the components, we will have to change all the props and events passed between the components.

### Exercise 3 and Question 4 skiped as subject preconizes to skip them.

### Exercise 4: state management with a store

First of all, we need to install the Vuex package. To do this, we need to run the following command in the terminal:

```bash
npm install vuex@next
```

Vuex has been added to the project. We created a store at `src/store/index.ts`, added the `user` state to the store, and imported at `main.ts`.
Props and event related to `user` has been removed in all components and replaced by the store when needed

Here's the result:
![Logged as](https://raw.githubusercontent.com/LucasKoc/TP4-ST2AWD/refs/heads/main/Ressources/Screenshot%202024-10-15%20at%2022.36.55.png "Logged as user from store")

### Question 5: Build a comparison table between the various state management strategies available, especially about pro and cons. Optionally, feel free to explore other ways not covered in that tutorial.

| Strategy                            | Pros                                                                                        | Cons                                                                  |
|-------------------------------------|---------------------------------------------------------------------------------------------|-----------------------------------------------------------------------|
| Props/Events                        | Easy to implement<br/>Clear parent-child data flow<br/>No additional libraries required.    | Not scalable<br/>Need event to update parent                          |
| Store                               | Scalable<br/>Predictable state changes via mutations<br/> Well-integrated with Vue DevTools | More complex to implement                                             |
| Composition API with Reactive State | More flexible<br/>No need for external libraries<br/>Cleaner code                           | More complex to implement<br/>Not suitable for very large application |

### Question 6: Imagine a developer in your team suggests to exclusively manage the state with stores. Therefore, it recommends not to rely on props and provide anymore. Would you accept this? An argued answer is expected.

I would not prefer to exclusively manage the state with stores. There's some cases where using props is more appropriate than using a store (eg. global data that has not to be shared between components).
Over reliance on stores can lead to performance issues and make the code harder to maintain. Every state change in the store can trigger re-renders in all components that depend on that state, which might not be efficient for frequently changing data.

### Exercise 5: add vue-router dependency

To add the vue-router dependency, we need to run the following command in the terminal:

```bash
npm install vue-router@4
```

### Exercise 6: add / and /conversations routes

We created the `src/router/index.ts` file and created routes for the Home and Conversation pages.
Routes has been mounted in the `main.ts` file.
Component Router-view has been added to the `App.vue` file.

Here's the result:

![Home page](https://raw.githubusercontent.com/LucasKoc/TP4-ST2AWD/refs/heads/main/Ressources/Screenshot%202024-10-15%20at%2023.56.26.png "Home page")
![Conversation page](https://raw.githubusercontent.com/LucasKoc/TP4-ST2AWD/refs/heads/main/Ressources/Screenshot%202024-10-15%20at%2023.56.38.png "Conversation page")

### Exercise 7: add header navigation

We updated in `BaseHeader.vue` the header with `router-link` pointing to Home (/) and ConversationsIndex (/conversation).

Here's the result:

![Updated Header](https://raw.githubusercontent.com/LucasKoc/TP4-ST2AWD/refs/heads/main/Ressources/Screenshot%202024-10-16%20at%2016.10.38.png "Updated Header")

### Question 7: What is the performance difference between <a> and <router-link>?

- `<a>` is a standard HTML element that is used to create hyperlinks. When you click on a link created with `<a>`, the browser will make a full page reload.
- `<router-link>` is a component provided by Vue Router that is used to create links between pages in a Vue application. When you click on a link created with `<router-link>`, the Vue Router will update the URL in the browser without making a full page reload, and will render only the component associated with the new route.

The performance difference between `<a>` and `<router-link>` is that `<router-link>` is faster because it does not require a full page reload. This makes the navigation between pages in a Vue application smoother and faster.

### Exercise 8: add guards for authenticated routes

`src/router/index.ts` has been updated to add guards for authenticated routes.
We ensure that the user is authenticated before accessing the Conversations page.
