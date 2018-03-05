import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule as Ng2Charts } from 'ng2-charts';
import { FormsModule } from '@angular/forms';

import { TemplatePageRoutingModule } from './template-page-routing.module';
import { TemplatePageComponent } from './template-page.component';
import { PageHeaderModule } from './../../shared';

@NgModule({
    imports: [CommonModule, Ng2Charts, FormsModule,
        TemplatePageRoutingModule, PageHeaderModule],
    declarations: [TemplatePageComponent]
})
export class TemplatePageModule {}
