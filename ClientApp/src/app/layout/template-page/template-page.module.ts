import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplatePageRoutingModule } from './template-page-routing.module';
import { TemplatePageComponent } from './template-page.component';
import { PageHeaderModule } from './../../shared';

@NgModule({
    imports: [CommonModule, TemplatePageRoutingModule, PageHeaderModule],
    declarations: [TemplatePageComponent]
})
export class TemplatePageModule {}
