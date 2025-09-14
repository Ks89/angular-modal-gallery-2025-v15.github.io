/*
 * MIT License
 *
 * Copyright (c) 2022 locinus
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

import { Component, OnInit, TemplateRef, inject, viewChild } from '@angular/core';

import {
  Image,
  PlainLibConfig,
  ModalGalleryConfig,
  ModalGalleryRef,
  ModalGalleryService,
  PreviewConfig,
  ModalImage
} from '@ks89/angular-modal-gallery';

import { IMAGES_ARRAY } from '../../../shared/images';
import { TitleService } from '../../../core/services/title.service';
import { codemirrorHtml, codemirrorTs } from '../../codemirror.config';
import { Metadata, UiService } from '../../../core/services/ui.service';
import { NgTemplateOutlet, DatePipe } from '@angular/common';
import { CodemirrorModule } from '@ks89/ngx-codemirror6';

// Here, we extends ModalImage, but we could extend Image and/or PlainImage as well
interface CustomModalImage extends ModalImage {
  pictureDate: Date;
}

@Component({
  selector: 'app-previews-template',
  templateUrl: './previews-template-additional-data.component.html',
  styleUrls: ['./previews-template-additional-data.component.scss'],
  imports: [NgTemplateOutlet, CodemirrorModule, DatePipe]
})
export class PreviewsTemplateAdditionalDataComponent implements OnInit {
  private uiService = inject(UiService);
  private titleService = inject(TitleService);
  private modalGalleryService = inject(ModalGalleryService);

  readonly previewsTemplate = viewChild<TemplateRef<HTMLElement>>('previewsTemplate');

  images: Image[];

  configHtml: any = codemirrorHtml;
  configTs: any = codemirrorTs;

  codeHtml: string;
  codeCss: string;
  codeTypescript: string;

  constructor() {

    this.titleService.titleEvent.emit('Examples - Previews custom template');

    this.codeHtml =
      `<button (click)="openModal(334, 0)">Open modal gallery id=1 at index=0</button>
<ng-template #previewsTemplate let-preview="preview" let-defaultTemplate="defaultTemplate">
  <div class="preview-block">
    <div class="preview-date">{{ preview.modal.pictureDate | date }}</div>
    <div class="preview-default">
      <ng-container *ngTemplateOutlet="defaultTemplate"></ng-container>
    </div>
  </div>
</ng-template>`;
    this.codeCss = `.preview-block {
  scroll-margin-left: 10px;
  margin-right: 10px;
}
.preview-date {
  text-align: center;
  color: #fff;
  margin-bottom: 3px;
  opacity: 0.8;
}
.preview-default {
  text-align: center;
}`;
    this.codeTypescript = `// Here, we extends ModalImage, but we could extend Image and/or PlainImage as well
interface CustomModalImage extends ModalImage {
  pictureDate: Date;
}

@Component()
export class MyComponent implements OnInit {
    // a reference to the template defined in the HTML part
  @ViewChild('previewsTemplate') previewsTemplate?: TemplateRef<HTMLElement>;

  images: Image[] = []; // init this array with your images

  constructor(private modalGalleryService: ModalGalleryService) {}

  ngOnInit(): void {
    // when creating the Image array, use the CustomModalImage structure
    // to add the picture-specific data
    this.images.push(new Image(
      imageId,
      {
        img: imageUrl,
        pictureDate: imageDate, // here, we provide the date of each picture, to show in the previews
        ...,
      } as CustomModalImage,
      // Thumbnail (aka 'plain' image)
      {
        img: thumbUrl,
      } as PlainImage,
    );
  }

  openModal(id: number, imageIndex: number): void {
    const dialogRef: ModalGalleryRef = this.modalGalleryService.open({
      id: id,
      images: this.images,
      currentImage: this.images[imageIndex],
      libConfig: {
        previewConfig: {
          visible: true,
        }
      } as PlainLibConfig,
      previewsTemplate: this.previewsTemplate,
    } as ModalGalleryConfig) as ModalGalleryRef;
  }
}`;
    const IMAGES_DATES = [
      new Date(2022, 1, 13, 14, 15),
      new Date(2022, 1, 15, 16, 30),
      new Date(2022, 1, 16, 11, 0),
      new Date(2022, 1, 20, 14, 15),
      new Date(2022, 2, 2, 17, 0),
      new Date(2022, 2, 10, 18, 0),
      new Date(2022, 2, 13, 9, 0),
      new Date(2022, 3, 3, 9, 30)
    ];

    this.images = IMAGES_ARRAY.map((image, index) => {
      return new Image(
        image.id,
        Object.assign({}, image.modal, {pictureDate: IMAGES_DATES[index]}) as CustomModalImage,
        image.plain
      );
    });

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
        previewConfig: {
          visible: true
        } as PreviewConfig
      } as PlainLibConfig,
      previewsTemplate: this.previewsTemplate()
    } as ModalGalleryConfig) as ModalGalleryRef;
  }

  metaData() {
    this.uiService.setMetaData({
      title: 'Demo previews custom template'
    } as Metadata);
  }
}
