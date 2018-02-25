import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.scss'],
    animations: [routerTransition()]
})
export class HomePageComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}
