import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-carousel-item',
  templateUrl: './carousel-item.component.html',
  styleUrls: ['./carousel-item.component.scss']
})
export class CarouselItemComponent implements OnInit {
  @Input() item;
  constructor() { }

  ngOnInit(): void {
  }

  clickPlayButton(){
    // this.sharingDataService.sharingTrailerMethod(this.item.trailer);
  }
}
