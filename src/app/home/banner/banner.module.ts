import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner.component';
import { CarouselComponent } from './carousel/carousel.component';
import { HomeToolsComponent } from './home-tools/home-tools.component';
import { CarouselItemComponent } from './carousel/carousel-item/carousel-item.component';
import { SharingCommonModule } from '../../_core/sharing-common/sharing-common.module';
import { ModalTrailerComponent } from '../../components/modal-trailer/modal-trailer.component'

@NgModule({
  declarations: [BannerComponent, CarouselComponent, HomeToolsComponent, CarouselItemComponent,
     ModalTrailerComponent
    ],
  imports: [
    CommonModule,SharingCommonModule
  ],
  exports: [
    BannerComponent
  ]
})
export class BannerModule { }
