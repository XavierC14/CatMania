import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cat } from '../models/cat.model';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    readonly baseUrl = 'https://api.thecatapi.com/v1/images/search';

    readonly apiKey = 'api_key=live_GyUzdtYS2ctXdIo3C9drJJihUXQeIbhRVu3o98CFTPNmz4u8Fm2swxUTfFxLr55r';

    constructor(
        private http: HttpClient
    ) { }

    getCats(amount?: number) {

        let url: string = this.baseUrl;

        if (amount) {
            url += '?' + this.apiKey + '&limit=' + amount;
        }
        return this.http.get<Cat[]>(url);
    }
}