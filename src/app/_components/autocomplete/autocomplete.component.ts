import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { tap } from 'rxjs';

import { ICompany } from '@app/_models';
import { CompanyService } from '@app/_services/api';

@Component({
    selector: 'app-autocomplete',
    templateUrl: 'autocomplete.component.html',
    styleUrls: ['./autocomplete.component.scss'],
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => AutocompleteComponent),
        multi: true
    }]
})

export class AutocompleteComponent implements ControlValueAccessor, OnInit {

    public companies: Array<ICompany> = new Array<ICompany>;
    public query: string = '';

    private _company!: ICompany;

    get company() {
        return this._company;
    }

    @Input()
    set company(value: ICompany) {
        this._company = value;
        this.onChange(this._company);
    }

    constructor(private companyService: CompanyService) {
    }

    ngOnInit(): void {
    }

    findCompany(query: string): void {
        this.companyService.findCompany(query).pipe(
            tap(sourse => this.companies = sourse)
        ).subscribe();
    }

    onInput(event: KeyboardEvent): void {
        this.query = (event.target as HTMLInputElement).value;
        if (this.query && this.query.length > 0) {
            this.findCompany(this.query);
        }
    }

    selectCompany(company: ICompany): void {
        this.company = company;
        this.query = '';
    }

    onChange(_: ICompany): void { }

    writeValue(value: ICompany): void {
        this.company = value;
    }

    registerOnChange(fn: (_: ICompany) => void): void {
        this.onChange = fn;
    }

    registerOnTouched(): void { }
}