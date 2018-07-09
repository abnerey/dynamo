// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
    production: false,
    firebaseConfig: {
        apiKey: "AIzaSyCc-oBOEm-VD8lmIQq8XCXS_OvCEbB2INg",
        authDomain: "dynamo-presenter.firebaseapp.com",
        databaseURL: "https://dynamo-presenter.firebaseio.com",
        projectId: "dynamo-presenter",
        storageBucket: "dynamo-presenter.appspot.com",
        messagingSenderId: "119472635123"
    }
};
