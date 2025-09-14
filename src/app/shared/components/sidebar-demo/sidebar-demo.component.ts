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
import { RouterLink } from '@angular/router';

import { Accordion, AccordionService } from '../../../core/services/services';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-sidebar-demo',
  templateUrl: 'sidebar-demo.html',
  styleUrls: ['sidebar-demo.scss'],
  imports: [RouterLink, NgOptimizedImage]
})
export class SidebarDemoComponent implements OnInit {
  private accordionService = inject(AccordionService);

  showCarousel = false;
  showModal = false;
  showPlain = false;

  ngOnInit(): void {
    const accordion: Accordion | undefined = this.accordionService.getAccordion();
    if (accordion) {
      this.showCarousel = accordion.carouselOpen;
      this.showModal = accordion.modalOpen;
      this.showPlain = accordion.plainOpen;
    }
  }

  onCarouselClick() {
    this.showCarousel = !this.showCarousel;
    this.accordionService.updateCarousel(this.showCarousel);
  }

  onModalClick() {
    this.showModal = !this.showModal;
    this.accordionService.updateModal(this.showModal);
  }

  onPlainClick() {
    this.showPlain = !this.showPlain;
    this.accordionService.updatePlain(this.showPlain);
  }

  getCarouselClick(): string {
    return this.showCarousel ? 'rotate(180deg)' : 'rotate(90deg)';
  }

  getModalClick(): string {
    return this.showModal ? 'rotate(180deg)' : 'rotate(90deg)';
  }

  getPlainClick(): string {
    return this.showPlain ? 'rotate(180deg)' : 'rotate(90deg)';
  }
}
