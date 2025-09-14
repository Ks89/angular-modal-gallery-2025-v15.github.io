import { Routes } from '@angular/router';



















































export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./demo.component').then(m => m.DemoComponent),
    children: [
      {path: '', loadComponent: () => import('./array-simple/array-simple.component').then(m => m.ArraySimpleComponent)},
      {path: 'array-simple', loadComponent: () => import('./array-simple/array-simple.component').then(m => m.ArraySimpleComponent)},
      {path: 'output-events', loadComponent: () => import('./output-events/output-events.component').then(m => m.OutputEventsComponent)},
      {path: 'add-image-array', loadComponent: () => import('./add-image-array/add-image-array.component').then(m => m.AddImageArrayComponent)},

      {path: 'no-dots-and-previews', loadComponent: () => import('./no-dots-and-previews/no-dots-and-previews.component').then(m => m.NoDotsAndPreviewsComponent)},
      {path: 'side-previews-hidden', loadComponent: () => import('./side-previews-hidden/side-previews-hidden.component').then(m => m.SidePreviewsHiddenComponent)},
      {path: 'only-current-img', loadComponent: () => import('./only-current-img/only-current-img.component').then(m => m.OnlyCurrentImgComponent)},

      {path: 'close-outside', loadComponent: () => import('./close-outside/close-outside.component').then(m => m.CloseOusideComponent)},
      {path: 'download-simple', loadComponent: () => import('./download-simple/download-simple.component').then(m => m.DownloadSimpleComponent)},
      {path: 'download-advanced', loadComponent: () => import('./download-advanced/download-advanced.component').then(m => m.DownloadAdvancedComponent)},
      {path: 'download-custom-filename', loadComponent: () => import('./download-custom-filename/download-custom-filename.component').then(m => m.DownloadCustomFilenameComponent)},

      {path: 'infinite-sliding', loadComponent: () => import('./infinite-sliding/infinite-sliding.component').then(m => m.InfiniteSlidingComponent)},

      {path: 'loading-spinner-disable', loadComponent: () => import('./loading-spinner-disable/loading-spinner-disable.component').then(m => m.LoadingSpinnerDisableComponent)},
      {path: 'loading-spinner-type', loadComponent: () => import('./loading-spinner-type/loading-spinner-type.component').then(m => m.LoadingSpinnerTypeComponent)},

      {path: 'keyboard-config', loadComponent: () => import('./keyboard-config/keyboard-config.component').then(m => m.KeyboardConfigComponent)},
      {path: 'description-strategy', loadComponent: () => import('./description-custom/description-custom.component').then(m => m.DescriptionCustomComponent)},
      {path: 'description-full-custom', loadComponent: () => import('./description-full-custom/description-full-custom.component').then(m => m.DescriptionFullCustomComponent)},

      {path: 'previews-custom-size', loadComponent: () => import('./previews-custom-size/previews-custom-size.component').then(m => m.PreviewsCustomSizeComponent)},
      {path: 'previews-length', loadComponent: () => import('./previews-length/previews-length.component').then(m => m.PreviewsLengthComponent)},
      {path: 'previews-no-arrows', loadComponent: () => import('./previews-no-arrows/previews-no-arrows.component').then(m => m.PreviewsNoArrowsComponent)},
      {path: 'previews-not-clickable', loadComponent: () => import('./previews-not-clickable/previews-not-clickable.component').then(m => m.PreviewsNotClickableComponent)},
      {path: 'previews-template', loadComponent: () => import('./previews-template/previews-template.component').then(m => m.PreviewsTemplateComponent)},
      {path: 'previews-template-additional-data', loadComponent: () => import('./previews-template-additional-data/previews-template-additional-data.component').then(m => m.PreviewsTemplateAdditionalDataComponent)},

      {path: 'buttons-strategies', loadComponent: () => import('./buttons-strategies/buttons-strategies.component').then(m => m.ButtonsStrategiesComponent)},
      {path: 'buttons-exturl-newtab', loadComponent: () => import('./buttons-exturl-newtab/buttons-exturl-newtab.component').then(m => m.ButtonsExturlNewtabComponent)},
      {path: 'buttons-custom-fa', loadComponent: () => import('./buttons-custom-fa/buttons-custom-fa.component').then(m => m.ButtonsCustomFaComponent)},

      {path: 'plain-layouts', loadComponent: () => import('./plain-gallery-layouts/plain-gallery-layouts.component').then(m => m.PlainGalleryLayoutsComponent)},
      {path: 'plain-atags', loadComponent: () => import('./plain-gallery-atags/plain-gallery-atags.component').then(m => m.PlainGalleryAtagsComponent)},
      {path: 'plain-image-pointer', loadComponent: () => import('./plain-gallery-image-pointer/plain-gallery-image-pointer.component').then(m => m.PlainGalleryImagePointerComponent)},
      {path: 'plain-custom-desc', loadComponent: () => import('./plain-gallery-custom-with-desc/plain-gallery-custom-with-desc.component').then(m => m.PlainGalleryCustomWithDescComponent)},

      {path: 'accessibility', loadComponent: () => import('./accessibility/accessibility.component').then(m => m.AccessibilityComponent)},
      {path: 'auto-close-and-auto-update', loadComponent: () => import('./auto-close-and-auto-update/auto-close-and-auto-update.component').then(m => m.AutoCloseAndAutoUpdateComponent)},
      {path: 'base64', loadComponent: () => import('./base64/base64.component').then(m => m.Base64Component)},
      {path: 'invert-swipe', loadComponent: () => import('./invert-swipe/invert-swipe.component').then(m => m.InvertSwipeComponent)},
      {path: 'same-images', loadComponent: () => import('./same-images/same-images.component').then(m => m.SameImagesComponent)},

      {path: 'autoplay-minimal', loadComponent: () => import('./modal-autoplay-minimal/modal-autoplay-minimal.component').then(m => m.ModalAutoplayMinimalComponent)},
      {path: 'autoplay-custom', loadComponent: () => import('./modal-autoplay-custom/modal-autoplay-custom.component').then(m => m.ModalAutoplayCustomComponent)},

      {path: 'carousel', loadComponent: () => import('./carousel-minimal/carousel-minimal.component').then(m => m.CarouselMinimalComponent)},
      {path: 'carousel-fixed', loadComponent: () => import('./carousel-fixed/carousel-fixed.component').then(m => m.CarouselFixedComponent)},
      {path: 'carousel-content-projection', loadComponent: () => import('./carousel-content-projection/carousel-content-projection.component').then(m => m.CarouselContentProjectionComponent)},
      {path: 'carousel-features-disable', loadComponent: () => import('./carousel-features-disables/carousel-features-disables.component').then(m => m.CarouselFeaturesDisablesComponent)},
      {path: 'carousel-noautoplay', loadComponent: () => import('./carousel-no-autoplay/carousel-no-autoplay.component').then(m => m.CarouselNoAutoplayComponent)},
      {path: 'carousel-noinfinite', loadComponent: () => import('./carousel-no-infinite/carousel-no-infinite.component').then(m => m.CarouselNoInfiniteComponent)},
      {path: 'carousel-custom-autoplay', loadComponent: () => import('./carousel-custom-autoplay/carousel-custom-autoplay.component').then(m => m.CarouselCustomAutoplayComponent)},
      {path: 'carousel-custom-previews', loadComponent: () => import('./carousel-custom-previews/carousel-custom-previews.component').then(m => m.CarouselCustomPreviewsComponent)},
      {path: 'carousel-with-description', loadComponent: () => import('./carousel-with-description/carousel-with-description.component').then(m => m.CarouselWithDescriptionComponent)},
      {path: 'carousel-outputs', loadComponent: () => import('./carousel-outputs/carousel-outputs.component').then(m => m.CarouselOutputsComponent)},
      {path: 'carousel-breakpoints', loadComponent: () => import('./carousel-breakpoints/carousel-breakpoints.component').then(m => m.CarouselBreakpointsComponent)},
      {path: 'carousel-lcp', loadComponent: () => import('./carousel-lcp/carousel-lcp.component').then(m => m.CarouselLcpComponent)}
    ]
  }
];
