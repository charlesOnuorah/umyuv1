// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  version: "0.0.0", //env.npm_package_version + '-dev',
  serverUrl: '/api',
  // api_url: 'https://pgmerchantapi.azurewebsites.net/api',
  api_url: 'http://umyu.easystudy.com.ng/api/v1/api/v1/course',
  defaultLanguage: 'en-US',
  supportedLanguages: [
    'en-US',
    'fr-FR'
  ]
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
