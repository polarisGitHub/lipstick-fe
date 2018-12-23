import {Injectable} from '@angular/core';
import {AlertController} from '@ionic/angular';

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
}

interface AlertOption {
    header: string;
    subHeader?: string;
    message: string;
    buttons: string[];
}
