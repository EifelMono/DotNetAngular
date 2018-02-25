import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-counter-page',
    templateUrl: './counter-page.component.html',
    styleUrls: ['./counter-page.component.scss'],
    animations: [routerTransition()]
})
export class CounterPageComponent implements OnInit {
    public currentCount = 0;
    constructor() {}

    ngOnInit() {}

    public incrementCounter() {
        this.currentCount++;
      }
}
