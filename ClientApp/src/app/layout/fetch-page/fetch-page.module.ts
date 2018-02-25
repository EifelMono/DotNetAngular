import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FetchPageRoutingModule } from './fetch-page-routing.module';
import { FetchPageComponent } from './fetch-page.component';
import { PageHeaderModule } from './../../shared';

@NgModule({
    imports: [CommonModule, FetchPageRoutingModule, PageHeaderModule],
    declarations: [FetchPageComponent]
})
export class FetchPageModule {}
