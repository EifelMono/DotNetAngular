import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-blank-pagex',
    templateUrl: './blank-pagex.component.html',
    styleUrls: ['./blank-pagex.component.scss'],
    animations: [routerTransition()]
})
export class BlankPagexComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}
