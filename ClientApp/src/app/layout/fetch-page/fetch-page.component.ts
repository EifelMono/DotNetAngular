import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-fetch-page',
    templateUrl: './fetch-page.component.html',
    styleUrls: ['./fetch-page.component.scss'],
    animations: [routerTransition()]
})
export class FetchPageComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}
