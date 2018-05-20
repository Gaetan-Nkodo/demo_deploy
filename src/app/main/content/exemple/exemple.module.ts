import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TranslateModule } from '@ngx-translate/core';

import { FuseSharedModule } from '@fuse/shared.module';

import { FuseExempleComponent } from './exemple.component';

const routes = [
    {
        path     : 'exemple',
        component: FuseExempleComponent
    }
];

@NgModule({
    declarations: [
        FuseExempleComponent
    ],
    imports     : [
        RouterModule.forChild(routes),

        TranslateModule,

        FuseSharedModule
    ],
    exports     : [
        FuseExempleComponent
    ]
})

export class FuseExempleModule
{
}
