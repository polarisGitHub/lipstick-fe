import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'color-card',
    templateUrl: './color-card.component.html',
    styleUrls: ['./color-card.component.scss']
})
export class ColorCardComponent implements OnInit {

    @Input() color: string;
    @Input() color1: string;

    constructor() {
    }

    ngOnInit() {
    }

}
