import {Injectable} from '@angular/core';
import {ToastController} from '@ionic/angular';

@Injectable({
    providedIn: 'root'
})
export class ToastService {

    constructor(public toastController: ToastController) {
    }

    async presentTopToast(message: string, extension?: object) {
        const option: object = {
            message: message,
            position: 'top',
            duration: 2000,
        };
        if (extension) {
            Object.assign(option, extension);
        }
        return this.presentToast(option);
    }

    async presentMidToast(message: string, extension?: object) {
        const option: object = {
            message: message,
            position: 'middle',
            duration: 2000
        };
        if (extension) {
            Object.assign(option, extension);
        }
        return this.presentToast(option);
    }

    async presentButtonToast(message: string, extension?: object) {
        const option: object = {
            message: message,
            position: 'bottom',
            duration: 2000
        };
        if (extension) {
            Object.assign(option, extension);
        }
        return this.presentToast(option);
    }

    async presentToast(option: object) {
        const toast = await this.toastController.create(option);
        return toast.present();
    }
}
