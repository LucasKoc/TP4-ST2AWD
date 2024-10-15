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