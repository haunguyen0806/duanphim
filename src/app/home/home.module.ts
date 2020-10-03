import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrangchuComponent } from './trangchu/trangchu.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MovieComponent } from './movie/movie.component';
import { PhimDangChieuComponent } from './phim-dang-chieu/phim-dang-chieu.component';
import { PhimSapChieuComponent } from './phim-sap-chieu/phim-sap-chieu.component';
import { ItemPhimComponent } from './item-phim/item-phim.component';
import { TintucComponent } from './tintuc/tintuc.component';
import { DienanhComponent } from './dienanh/dienanh.component';
import { ReviewComponent } from './review/review.component';
import { KhuyenmaiComponent } from './khuyenmai/khuyenmai.component';

import { SlickCarouselModule } from 'ngx-slick-carousel';
import { BannerModule } from './banner/banner.module';
import { SearchMovieComponent } from './search-movie/search-movie.component';
import { CumRapComponent } from './cum-rap/cum-rap.component';
import { UngDungComponent } from './ung-dung/ung-dung.component';




@NgModule({
  declarations: [
    TrangchuComponent,
    HeaderComponent,
    FooterComponent,
    MovieComponent,
    PhimDangChieuComponent,
    PhimSapChieuComponent,
    ItemPhimComponent, TintucComponent, DienanhComponent, ReviewComponent, KhuyenmaiComponent, SearchMovieComponent, CumRapComponent, UngDungComponent],
  imports: [
    CommonModule,
    SlickCarouselModule,
    BannerModule
  ],
  exports: [
    TrangchuComponent,
    HeaderComponent,
    FooterComponent,
    MovieComponent,
    PhimDangChieuComponent,
    PhimSapChieuComponent, ItemPhimComponent, TintucComponent, DienanhComponent, ReviewComponent, KhuyenmaiComponent]
})
export class HomeModule { }
