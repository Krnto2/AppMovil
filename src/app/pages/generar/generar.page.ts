import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-generar',
  templateUrl: './generar.page.html',
  styleUrls: ['./generar.page.scss'],
})
export class GenerarPage {
  selectedClass: string = '';  
  generatedClass: string = '';  
  qrCode: any = null; 

  constructor(private sanitizer: DomSanitizer, private alertController: AlertController) {}

  async generateQR() {
    if (this.selectedClass) {
      const randomString = Math.random().toString(36).substring(2, 15); 
      const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?data=${randomString}&size=200x200`; 
      this.qrCode = this.sanitizer.bypassSecurityTrustUrl(qrUrl); 
      this.generatedClass = this.selectedClass; 
    } else {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Por favor, selecciona una clase.',
        buttons: ['OK']
      });
      await alert.present();
    }
  }


  async showAttendance() {
    const alert = await this.alertController.create({
      header: 'Asistencia',
      message: `Clase: ${this.generatedClass}              Asistencia: 80% (24 de 30 alumnos)`,
      buttons: [
        {
          text: 'OK',
          handler: () => {
            this.clearFields(); 
          }
        }
      ]
    });

    await alert.present();
  }

 
  clearFields() {
    this.qrCode = null; 
    this.generatedClass = ''; 
    this.selectedClass = ''; 
  }
}
