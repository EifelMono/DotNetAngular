import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlankPagexRoutingModule } from './blank-pagex-routing.module';
import { BlankPagexComponent } from './blank-pagex.component';
import { PageHeaderModule } from './../../shared';

@NgModule({
    imports: [CommonModule, BlankPagexRoutingModule, PageHeaderModule],
    declarations: [BlankPagexComponent]
})
export class BlankPagexModule {}
