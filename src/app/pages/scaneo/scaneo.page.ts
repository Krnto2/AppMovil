import { Component } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-scaneo',
  templateUrl: './scaneo.page.html',
  styleUrls: ['./scaneo.page.scss'],
})
export class ScaneoPage {

  constructor(private alertController: AlertController, private navCtrl: NavController) {}

  async registrarAsistencia() {
    const alert = await this.alertController.create({
      header: 'Asistencia',
      message: 'Asistencia registrada con éxito.',
      buttons: [
        {
          text: 'OK',
          handler: () => {
            this.navCtrl.navigateRoot('/registro');  
          }
        }
      ]
    });

    await alert.present();
  }
}
