import { Component, OnInit, ViewChild } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { Router } from '@angular/router';
import { IonSlides, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.page.html',
  styleUrls: ['./slider.page.scss'],
})
export class SliderPage implements OnInit {
  @ViewChild(IonSlides, {static: false}) slider: IonSlides;

  options = {
    autoplay: 3000,
    direction: 'horizontal',
    initialSlide: 0,
    loop: true,
    pager: false,
    speed: 1000
  };

  constructor(
    private router: Router,
    public alertController: AlertController) {}

  ngOnInit() {
  }

  slidess = [
    {
      image: "assets/slides/search.png",
      title: "Browse course content by discipline",
      description: "Select your faculty, department and level to display your current courses",
    },
    {
      image: "assets/slides/favorite.png",
      title: "Add course contents as favorites",
      description: "Mark regularly visited course as favorites so you can easily view them later",
    },
    {
      image: "assets/slides/chat.png",
      title: "Collaborate with students online",
      description: "Finding any course difficult to comprehend, ask any members currently online",
    }
  ];
  
  skipSlides() {
    // Get user credentials if user has already login
    this.router.navigate(['home']);
  }

  async presentAlert(header, message, ) {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: [{
          text: 'OK',
          handler: () => {
            this.router.navigate(['login']);
          }
        }]
    });

    await alert.present();
  }
}