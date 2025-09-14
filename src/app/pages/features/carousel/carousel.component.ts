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

import { Image, CarouselComponent as CarouselComponentLib } from '@ks89/angular-modal-gallery';

import { TitleService } from '../../../core/services/title.service';
import { Metadata, UiService } from '../../../core/services/ui.service';
import { IMAGES_RECT_ARRAY } from '../../../shared/images';
import { codemirrorHtml, codemirrorTs } from '../../codemirror.config';
import { RouterLink } from '@angular/router';
import { CodemirrorModule } from '@ks89/ngx-codemirror6';
import { TableLibconfigComponent } from '../../../shared/components/table-libconfig/table-libconfig.component';
import { TableImageComponent } from '../../../shared/components/table-image/table-image.component';

@Component({
  selector: 'app-carousel-page',
  templateUrl: 'carousel.html',
  styleUrls: ['carousel.scss'],
  imports: [RouterLink, CarouselComponentLib, CodemirrorModule, TableLibconfigComponent, TableImageComponent]
})
export class CarouselComponent implements OnInit {
  private uiService = inject(UiService);
  private titleService = inject(TitleService);

  images: Image[] = [...IMAGES_RECT_ARRAY];

  configHtml: any = codemirrorHtml;
  configTs: any = codemirrorTs;

  codeHtml: string;
  codeTypescript: string;

  constructor() {
    this.titleService.titleEvent.emit('Features - Carousel');

    this.codeHtml =
      `  <ks-carousel [id]="100" [images]="images"></ks-carousel>`;

    this.codeTypescript =
      `  images: Image[] = [
     new Image(0, {
        img: '../assets/img1.jpg'
      })
  ];`;
  }

  ngOnInit(): void {
    this.metaData();
  }

  metaData() {
    this.uiService.setMetaData({
      title: 'Carousel'
    } as Metadata);
  }
}
