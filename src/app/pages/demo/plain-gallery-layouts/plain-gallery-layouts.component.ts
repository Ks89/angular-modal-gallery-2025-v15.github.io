/*
 * MIT License
 *
 * Copyright (c) 2017-2025 Stefano Cappa
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import { Component, OnInit, inject } from '@angular/core';

import {
  GridLayout,
  Image,
  PlainLibConfig,
  LineLayout,
  ModalGalleryRef,
  ModalGalleryService,
  PlainGalleryConfig,
  PlainGalleryStrategy,
  PlainGalleryComponent
} from '@ks89/angular-modal-gallery';

import { IMAGES_ARRAY } from '../../../shared/images';
import { TitleService } from '../../../core/services/title.service';
import { codemirrorHtml, codemirrorTs } from '../../codemirror.config';
import { Metadata, UiService } from '../../../core/services/ui.service';
import { CodemirrorModule } from '@ks89/ngx-codemirror6';

@Component({
  selector: 'app-plain-gallery-layouts-page',
  templateUrl: 'plain-gallery-layouts.html',
  imports: [PlainGalleryComponent, CodemirrorModule]
})
export class PlainGalleryLayoutsComponent implements OnInit {
  private uiService = inject(UiService);
  private modalGalleryService = inject(ModalGalleryService);
  private titleService = inject(TitleService);

  images: Image[] = [...IMAGES_ARRAY];

  configHtml: any = codemirrorHtml;
  configTs: any = codemirrorTs;

  codeHtml: string;
  codeTypescript: string;

  libConfigPlainGalleryRow: PlainLibConfig = {
    plainGalleryConfig: {
      strategy: PlainGalleryStrategy.ROW,
      layout: new LineLayout({width: '80px', height: '80px'}, {length: 2, wrap: true}, 'flex-start')
    } as PlainGalleryConfig
  };
  libConfigPlainGalleryRowSpaceAround: PlainLibConfig = {
    plainGalleryConfig: {
      strategy: PlainGalleryStrategy.ROW,
      layout: new LineLayout({width: '50px', height: '50px'}, {length: 2, wrap: true}, 'space-around')
    } as PlainGalleryConfig
  };
  libConfigPlainGalleryColumn: PlainLibConfig = {
    plainGalleryConfig: {
      strategy: PlainGalleryStrategy.COLUMN,
      layout: new LineLayout({width: '50px', height: '50px'}, {length: 3, wrap: true}, 'flex-start')
    } as PlainGalleryConfig
  };
  libConfigPlainGalleryGrid: PlainLibConfig = {
    plainGalleryConfig: {
      strategy: PlainGalleryStrategy.GRID,
      layout: new GridLayout({width: '80px', height: '80px'}, {length: 3, wrap: true})
    } as PlainGalleryConfig
  };

  constructor() {

    this.titleService.titleEvent.emit('Examples - Plain gallery layouts');

    this.codeHtml = `<section>
    <h4>Plain gallery layout (limit 2) and custom size</h4>
    <br>
    <ks-plain-gallery [id]="200" [images]="images"
                      [config]="libConfigPlainGalleryRow"
                      (clickImage)="onShow(200, $event)"></ks-plain-gallery>
  </section>
  <section>
    <h4>Plain gallery row layout space around (limit 2)</h4>
    <br>
    <ks-plain-gallery [id]="201" [images]="images"
                      [config]="libConfigPlainGalleryRowSpaceAround"
                      (clickImage)="onShow(201, $event)"></ks-plain-gallery>
  </section>
  <section>
    <h4>Plain gallery column layout (limit 3)</h4>
    <br>
    <ks-plain-gallery [id]="202" [images]="images"
                      [config]="libConfigPlainGalleryColumn"
                      (clickImage)="onShow(202, $event)"></ks-plain-gallery>
  </section>
  <section>
    <h4>Plain gallery grid layout and custom size</h4>
    <br>
    <ks-plain-gallery [id]="203" [images]="images"
                      [config]="libConfigPlainGalleryGrid"
                      (clickImage)="onShow(203, $event)"></ks-plain-gallery>
  </section>`;

    this.codeTypescript = `
  constructor(private modalGalleryService: ModalGalleryService) {}

  libConfigPlainGalleryRow: PlainLibConfig = {
    plainGalleryConfig: {
      strategy: PlainGalleryStrategy.ROW,
      layout: new LineLayout({ width: '80px', height: '80px' }, { length: 2, wrap: true }, 'flex-start')
    }
  };
  libConfigPlainGalleryRowSpaceAround: PlainLibConfig = {
    plainGalleryConfig: {
      strategy: PlainGalleryStrategy.ROW,
      layout: new LineLayout({width: '50px', height: '50px'}, {length: 2, wrap: true}, 'space-around')
    }
  };
  libConfigPlainGalleryColumn: PlainLibConfig = {
    plainGalleryConfig: {
      strategy: PlainGalleryStrategy.COLUMN,
      layout: new LineLayout({ width: '50px', height: '50px' }, { length: 3, wrap: true }, 'flex-start')
    }
  };
  libConfigPlainGalleryGrid: PlainLibConfig = {
    plainGalleryConfig: {
      strategy: PlainGalleryStrategy.GRID,
      layout: new GridLayout({ width: '80px', height: '80px' }, { length: 3, wrap: true })
    }
  };

  onShow(id: number, index: number, images: Image[] = this.images): void {
    const dialogRef: ModalGalleryRef = this.modalGalleryService.open({
      id,
      images,
      currentImage: images[index]
    }) as ModalGalleryRef;
  }`;
  }

  ngOnInit(): void {
    this.metaData();
  }

  onShow(id: number, index: number, images: Image[] = this.images): void {
    const dialogRef: ModalGalleryRef = this.modalGalleryService.open({
      id,
      images,
      currentImage: images[index]
    }) as ModalGalleryRef;
  }

  metaData(): void {
    this.uiService.setMetaData({
      title: 'Demo plain layouts'
    } as Metadata);
  }
}
