import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy {

    public companyForm!: FormGroup;
    private selectedCompanySubscription!: Subscription;

    constructor() {
        this.createForm();
        this.formValuesChanges();
    }

    ngOnInit(): void {
    }

    ngOnDestroy(): void {
        this.selectedCompanySubscription.unsubscribe();
    }

    createForm(): void {
        this.companyForm = new FormGroup({
            "company": new FormControl()
        });
    }

    formValuesChanges(): void {
        this.selectedCompanySubscription = this.companyForm.valueChanges.subscribe(
            (values) => {
                console.log(values);
            }
        );
    }
}
