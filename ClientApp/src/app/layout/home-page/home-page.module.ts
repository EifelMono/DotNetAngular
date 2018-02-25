import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageRoutingModule } from './home-page-routing.module';
import { HomePageComponent } from './home-page.component';
import { PageHeaderModule } from './../../shared';

@NgModule({
    imports: [CommonModule, HomePageRoutingModule, PageHeaderModule],
    declarations: [HomePageComponent]
})
export class HomePageModule {}
