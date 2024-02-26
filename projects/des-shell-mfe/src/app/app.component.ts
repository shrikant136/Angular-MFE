import { getManifest } from '@angular-architects/module-federation';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomRemoteConfig } from 'projects/des-shared/src/lib/model';
import { CustomManifest } from './utils/config';
import { buildRoutes } from './utils/routes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  remotes: CustomRemoteConfig[] = [];

  constructor(private router: Router) {}

  async ngOnInit(): Promise<void> {
    const customManifest = getManifest<CustomManifest>();

    const routes = buildRoutes(customManifest);
    this.router.resetConfig(routes);

    this.remotes = Object.values(customManifest);
  }
}
