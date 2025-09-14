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
  Image, ModalLibConfig, ModalGalleryConfig,
  ModalGalleryRef,
  ModalGalleryService,
  CurrentImageConfig
} from '@ks89/angular-modal-gallery';

import { IMAGES_ARRAY } from '../../../shared/images';
import { TitleService } from '../../../core/services/title.service';
import { Metadata, UiService } from '../../../core/services/ui.service';
import { codemirrorHtml, codemirrorTs } from '../../codemirror.config';
import { CodemirrorModule } from '@ks89/ngx-codemirror6';

@Component({
  selector: 'app-invert-swipe-page',
  templateUrl: 'invert-swipe.html',
  imports: [CodemirrorModule]
})
export class InvertSwipeComponent implements OnInit {
  private uiService = inject(UiService);
  private titleService = inject(TitleService);
  private modalGalleryService = inject(ModalGalleryService);

  images: Image[] = [...IMAGES_ARRAY];

  configHtml: any = codemirrorHtml;
  configTs: any = codemirrorTs;

  codeHtml: string;
  codeTypescript: string;

  constructor() {

    this.titleService.titleEvent.emit('Examples - Invert swipe direction');

    this.codeHtml =
      `  <button (click)="openModal(319, 0)">Open modal gallery id=1 at index=0</button>`;

    this.codeTypescript = `
  images: Image[]; // init this array with your images

  constructor(private modalGalleryService: ModalGalleryService) {}

  openModal(id: number, imageIndex: number): void {
    const dialogRef: ModalGalleryRef = this.modalGalleryService.open({
      id: id,
      images: this.images,
      currentImage: this.images[imageIndex],
      libConfig: {
        currentImageConfig: {
          invertSwipe: true
        }
      } as ModalLibConfig
    } as ModalGalleryConfig) as ModalGalleryRef;
  }`;
  }

  ngOnInit(): void {
    this.metaData();
  }

  openModal(id: number, imageIndex: number): void {
    const dialogRef: ModalGalleryRef = this.modalGalleryService.open({
      id,
      images: this.images,
      currentImage: this.images[imageIndex],
      libConfig: {
        currentImageConfig: {
          invertSwipe: true
        } as CurrentImageConfig
      } as ModalLibConfig
    } as ModalGalleryConfig) as ModalGalleryRef;
  }

  metaData() {
    this.uiService.setMetaData({
      title: 'Demo invert swipe'
    } as Metadata);
  }
}
