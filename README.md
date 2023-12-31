# Angular MFE

This project shows an example of using Webpack 5 Module Federation with Angular `15.0.4` using shared module and NGRX state management.

- shared library will maintain the application state.
- des-shell (host) and dashboard/Alarm/logs/Analytics (remote) can access the store, dispatch actions etc.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.8.

## Host Micro-frontend

```
des-shell-mfe: http://localhost:4200/
```

## Remote Micro-frontend

```
1. dashboard-mfe: http://localhost:4201/
2. alarm-mfe: http://localhost:4202/
3. logs-mfe: http://localhost:4203/
4. Analytics-mfe: http://localhost:4204/
```

## Development server

- Install packages: `npm install`
- Build the shared library `npm build:shared`
- Start the mdmf-shell: `npm run start`
- Open the shell at http://localhost:4200, will load all the microfrontend app specified in package.json

- Run `ng run start` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## How to create new project (mfe) in host application.

1. Create a project using : `ng g application <mfe_app-name> --routing --style=scss`
2. Add Module Federation : `ng add @angular-architects/module-federation --project <mfe_app_name> --port <port_number> --type remote`
3. create a module which you want to expose in shell-mfe application :
4. expose the module in webpack.config.ts:
5. update the manifest file in host application:
6. update the routes in app_routes.ts in host app:

## Project Structure

### 1. Shell (des-shell-mfe)

The shell project located in: `projects/des-shell-mfe` folder, its contains the shell application which is used to load remote all Microfrontends using dynamic routing constructed from the Microfrontend array. The list of Microfrontends can be loaded from a config if required, but for the example it is just an hardcoded array.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
