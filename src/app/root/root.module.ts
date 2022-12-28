import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { CoreRoutingModule } from './root-routing.module';
import { RootComponent } from './root.component';

@NgModule({
    declarations: [
        RootComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        CoreRoutingModule
    ],
    providers: [],
    bootstrap: [RootComponent]
})
export class RootModule { }
