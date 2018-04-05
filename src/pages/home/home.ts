import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { AlertController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private alert: AlertController ,private platform:Platform) {

  }
      async onNotification(){

        try{
          await this.platform.ready();

          FCMPlugin.onNotification((data) => {
              this.alert.create({

                message: data.message
              }).present();

          }, (error) => console.error(error));
          
        }
        catch(e){
          console.error(e)
        }
      }
}
