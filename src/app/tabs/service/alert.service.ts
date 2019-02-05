import {Injectable} from '@angular/core';
import {AlertController} from '@ionic/angular';
import {AlertButton} from '@ionic/core';

@Injectable({
    providedIn: 'root'
})
export class AlertService {

    constructor(private alertController: AlertController) {
    }

    async presentAlert(option: AlertOption) {
        const alert = await this.alertController.create(option);
        await alert.present();
    }

    async presentAlertConfirm(header: string, message: string, buttons: AlertButton[]) {
        const alert = await this.alertController.create({
            header: header,
            message: message,
            buttons: buttons
        });
        await alert.present();
    }
}

interface AlertOption {
    header: string;
    subHeader?: string;
    message: string;
    buttons: string[];
}
