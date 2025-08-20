import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SHARED_COMPONENTS } from './components/components';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        SHARED_COMPONENTS
    ],
    exports: [
        SHARED_COMPONENTS
    ],
    providers: []
})

export class SharedModule {}
