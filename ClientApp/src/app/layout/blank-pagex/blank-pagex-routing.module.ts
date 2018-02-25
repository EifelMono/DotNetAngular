import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlankPagexComponent } from './blank-pagex.component';

const routes: Routes = [
    {
        path: '',
        component: BlankPagexComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BlankPagexRoutingModule {}
