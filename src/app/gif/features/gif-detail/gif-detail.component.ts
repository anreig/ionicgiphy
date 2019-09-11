import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GiphyService } from './../../services/giphy.service';

@Component({
  selector: 'app-gif-detail',
  templateUrl: './gif-detail.component.html',
  styleUrls: ['./gif-detail.component.scss']
})
export class GifDetailComponent implements OnInit {

  gif: GifDetails;
  favorite = false;

  constructor(
    private route: ActivatedRoute,
    private gifService: GiphyService
  ) { }

  ngOnInit() {
    this.gifService.getGif(this.route.snapshot.params.id).subscribe(gif => this.gif = gif.data);
  }

  addOrRemoveToFavorite() {
    this.favorite = !this.favorite;
  }

  share(gif: Gif) {

  }

}
