import { Routes } from '@angular/router';












export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features.component').then(m => m.FeaturesComponent),
    children: [
      {path: '', loadComponent: () => import('./overview/overview.component').then(m => m.OverviewComponent)},
      {path: 'common', loadComponent: () => import('./common/common.component').then(m => m.CommonComponent)},
      {path: 'description', loadComponent: () => import('./description/description.component').then(m => m.DescriptionComponent)},
      {path: 'accessibility', loadComponent: () => import('./accessibility/accessibility.component').then(m => m.AccessibilityComponent)},
      {path: 'modal-gallery', loadComponent: () => import('./modal-gallery/modal-gallery.component').then(m => m.ModalGalleryComponent)},
      {path: 'plain-gallery', loadComponent: () => import('./plain-gallery/plain-gallery.component').then(m => m.PlainGalleryComponent)},
      {path: 'carousel', loadComponent: () => import('./carousel/carousel.component').then(m => m.CarouselComponent)},
      {path: 'previews', loadComponent: () => import('./previews/previews.component').then(m => m.PreviewsComponent)},
      {path: 'upper-buttons', loadComponent: () => import('./upper-buttons/upper-buttons.component').then(m => m.UpperButtonsComponent)}
    ]
  }
];
