import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AutocompleteModule } from '@app/_components';
import { MainComponent } from './main.component';

const routes: Routes = [
    {
        path: '',
        component: MainComponent
    }
];

@NgModule({
    declarations: [
        MainComponent
    ],
    imports: [
        AutocompleteModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class MainModule { }
