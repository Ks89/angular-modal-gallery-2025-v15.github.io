import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { routing } from './demo.routing';

import { DEMO_COMPONENTS } from './components';
import { SharedModule } from '../../shared/shared.module';

// ********************** angular-modal-gallery *****************************
import { GalleryModule } from '@ks89/angular-modal-gallery';
import { CodemirrorModule } from '@ks89/ngx-codemirror6';
// **************************************************************************

@NgModule({
  imports: [
    CommonModule,
    routing,
    SharedModule,
    FormsModule,
    GalleryModule,
    CodemirrorModule
  ],
  declarations: [
    DEMO_COMPONENTS
  ]
})
export class DemoModule {
}
