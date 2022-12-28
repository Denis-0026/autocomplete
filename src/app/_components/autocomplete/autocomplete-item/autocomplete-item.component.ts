import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { ICompany } from '@app/_models';

@Component({
    selector: 'app-autocomplete-item',
    templateUrl: 'autocomplete-item.component.html',
    styleUrls: ['./autocomplete-item.component.scss']
})

export class AutocompleteItemComponent implements OnInit {

    @Input() company!: ICompany;
    @Output() onSelect = new EventEmitter<ICompany>();

    public logoSize: number = 48;

    constructor() {
    }

    ngOnInit(): void { }

    selectCompany(company: ICompany): void {
        this.onSelect.next(company);
    }
}