import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-gif-rating',
  templateUrl: './gif-rating.component.html',
  styleUrls: ['./gif-rating.component.scss']
})
export class GifRatingComponent implements OnInit {

  @Input() gifRating: string;

  constructor() { }

  ngOnInit() {
  }

}
