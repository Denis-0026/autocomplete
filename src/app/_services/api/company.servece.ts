import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ICompany } from '@app/_models';

@Injectable({ providedIn: 'root' })
export class CompanyService {

    private apiURL: string = 'https://autocomplete.clearbit.com';
    private version: string = 'v1';

    constructor(private httpClient: HttpClient) {
    }

    public findCompany(companyName: string): Observable<Array<ICompany>> {
        return this.httpClient.get<Array<ICompany>>(`${this.apiURL}/${this.version}/companies/suggest?query=${companyName}`);
    }
}