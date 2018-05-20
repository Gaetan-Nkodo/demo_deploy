import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { FuseTranslationLoaderService } from '@fuse/services/translation-loader.service';

import { locale as english } from './i18n/en';
import { locale as turkish } from './i18n/tr';
import { locale as french } from './i18n/fr';

@Component({
    selector   : 'fuse-exemple',
    templateUrl: './exemple.component.html',
    styleUrls  : ['./exemple.component.scss']
})
export class FuseExempleComponent implements OnInit
{
    rows: any[];
    loadingIndicator = true;
    reorderable = true;

    constructor(private fuseTranslationLoader: FuseTranslationLoaderService, private http: HttpClient)
    {
        this.fuseTranslationLoader.loadTranslations(english, turkish, french);
    }

    ngOnInit()
    {
        this.http.get('api/contacts-contacts')
            .subscribe((contacts: any) => {
                this.rows = contacts;
                this.loadingIndicator = false;
            });
    }

}
