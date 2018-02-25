import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-template-page',
    templateUrl: './template-page.component.html',
    styleUrls: ['./template-page.component.scss'],
    animations: [routerTransition()]
})
export class TemplatePageComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}
