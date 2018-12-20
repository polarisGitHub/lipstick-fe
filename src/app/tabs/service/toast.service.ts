import {Injectable} from '@angular/core';
import {ToastController} from '@ionic/angular';

@Injectable({
    providedIn: 'root'
})
export class ToastService {

    constructor(public toastController: ToastController) {
    }

    async presentTopToast(message: string, extension: object) {
        const option: object = {
            message: message,
            position: 'top',
            duration: 2000
        };
        Object.assign(option, extension);
        return this.presentToast(option);
    }

    async presentMidToast(message: string, extension: object) {
        const option: object = {
            message: message,
            position: 'middle',
            cssClass: 'width: 50%',
            duration: 200000
        };
        Object.assign(option, extension);
        return this.presentToast(option);
    }

    async presentButtonToast(message: string, extension: object) {
        const option: object = {
            message: message,
            position: 'bottom',
            duration: 2000
        };
        Object.assign(option, extension);
        return this.presentToast(option);
    }

    async presentToast(option: object) {
        const toast = await this.toastController.create(option);
        return toast.present();
    }
}
