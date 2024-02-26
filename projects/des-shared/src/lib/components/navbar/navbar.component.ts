import { Component, Input, OnInit } from '@angular/core';
import { CustomRemoteConfig } from '../../model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  @Input() remotes: CustomRemoteConfig[] = [];
  @Input() fullScreen: boolean = false;
  constructor() {}
  docElement!: HTMLElement;
  isFullScreen: boolean = false;

  ngOnInit(): void {
    this.docElement = document.documentElement;
  }

  toggleFullScreen() {
    if (!this.isFullScreen) {
      this.docElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
    this.isFullScreen = !this.isFullScreen;
  }
}
