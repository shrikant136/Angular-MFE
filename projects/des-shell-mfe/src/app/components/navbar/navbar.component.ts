import { Component, Input, OnInit } from '@angular/core';
import { CustomRemoteConfig } from '../../utils/config';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  @Input() remotes: CustomRemoteConfig[] = [];
  constructor() {}

  ngOnInit() {}
}
