import { Component, OnInit } from '@angular/core';
import { PopoverController, NavParams, Events } from '@ionic/angular';
import { OpenNativeSettings } from '@ionic-native/open-native-settings/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent implements OnInit {
  page;

  constructor(
    private events: Events, private router: Router,
    private navParams: NavParams,
    private popoverController: PopoverController) {
  }

  ngOnInit() {
    //Get data from popover page
    this.page = this.navParams.get('data');
  }

  home() {
    // code for setting home option in apps
    this.router.navigate(['home']);
  }

  slider() {
    // code for setting wifi option in apps
    this.router.navigate(['login']);
  }

  logout() {
    // code for setting logiut option in apps
    this.router.navigate(['login']);
  }

  eventFromPopover() {
    this.events.publish('fromPopoverEvent');
    this.popoverController.dismiss();
  }
}