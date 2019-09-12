import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { GiphyService } from './../../services/giphy.service';

@Component({
  selector: 'app-gif-list',
  templateUrl: './gif-list.component.html',
  styleUrls: ['./gif-list.component.scss']
})
export class GifListComponent implements OnInit {

  searching = false;
  offset = 0;
  items = [];
  params = {};

  constructor(
    private gifService: GiphyService
  ) { }

  ngOnInit() {
    this.params['limit'] = 10;
    this.getTrendingGifs(this.params);
  }

  doInfinite(infiniteScroll?) {
    this.params['offset'] = this.offset += 10;
    this.getTrendingGifs(this.params);
    infiniteScroll.target.complete();
  }

  getTrendingGifs(params?) {
    this.gifService.trending(params).pipe(map(result => {
      this.items.push(...result);
      return this.items;
    })).subscribe();
  }

  search(event) {
    if (event.target.value) {
      this.searching = true;
      this.gifService.search(event.target.value).subscribe(data => this.items = data);
    } else {
      this.searching = false;
      this.items = [];
      this.getTrendingGifs();
    }
  }

  doRefresh(event) {
    this.getTrendingGifs();
    event.target.complete();
  }

}
