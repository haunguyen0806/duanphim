import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  dangChieuStatus: boolean = true;
  constructor() { }
  HienPhimDangChieu(){
    this.dangChieuStatus = true;
  }
  HienPhimSapChieu(){
    this.dangChieuStatus = false;
  }
  ngOnInit(): void {
  }

}
