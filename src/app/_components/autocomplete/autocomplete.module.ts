import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutocompleteComponent } from './autocomplete.component';
import { AutocompleteItemComponent } from './autocomplete-item/autocomplete-item.component';

@NgModule({
    imports: [CommonModule],
    exports: [
        AutocompleteComponent,
        AutocompleteItemComponent
    ],
    declarations: [
        AutocompleteComponent,
        AutocompleteItemComponent
    ],
    providers: [],
})
export class AutocompleteModule { }
