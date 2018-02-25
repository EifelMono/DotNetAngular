import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CounterPageRoutingModule } from './counter-page-routing.module';
import { CounterPageComponent } from './counter-page.component';
import { PageHeaderModule } from './../../shared';

@NgModule({
    imports: [CommonModule, CounterPageRoutingModule, PageHeaderModule],
    declarations: [CounterPageComponent]
})
export class CounterPageModule {}
