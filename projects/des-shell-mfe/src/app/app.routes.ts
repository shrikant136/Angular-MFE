import { loadRemoteModule } from '@angular-architects/module-federation';
import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

interface RouteConfig {
  path: string;
  remoteName: string;
  exposedModule: string;
}

function generateLazyLoadedRoute(config: RouteConfig) {
  return {
    path: config.path,
    loadChildren: () =>
      loadRemoteModule({
        type: 'manifest',
        remoteName: config.remoteName,
        exposedModule: config.exposedModule,
      })
        .then((m) => m[config.exposedModule.replace('./', '')])
        .catch((error) => {
          console.error('ERROR: Failed to load remote module:', error);
          // throw error;
        }),
  };
}

function LazyRoutes(routeConfigs: RouteConfig[]) {
  return routeConfigs.map(generateLazyLoadedRoute);
}

const routesConfig: RouteConfig[] = [
  {
    path: 'dashboard',
    remoteName: 'dashboard-mfe',
    exposedModule: './DashboardModule',
  },
  {
    path: 'alarm',
    remoteName: 'alarm-mfe',
    exposedModule: './AlarmModule',
  },
  {
    path: 'logs',
    remoteName: 'logs-mfe',
    exposedModule: './LogsModule',
  },
  {
    path: 'analytics',
    remoteName: 'analytics-mfe',
    exposedModule: './AnalyticsModule',
  },
  { path: 'admin', remoteName: 'admin-mfe', exposedModule: './AdminModule' },
];

export const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  ...LazyRoutes(routesConfig),
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];
