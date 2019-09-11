import { Component, OnInit } from '@angular/core';
import { map, tap } from 'rxjs/operators';
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

  constructor(
    private gifService: GiphyService
  ) { }

  ngOnInit() {
    this.getTrendingGifs();
  }

  doInfinite(infiniteScroll?) {

    const params = {};
    params['limit'] = 10;
    params['offset'] = this.offset += 10;
    this.gifService.trending(params).pipe(
      map(result => {
        this.items.push(...result);
        return this.items;
      })
    );
    infiniteScroll.target.complete();


  }


  private getTrendingGifs(infiniteScroll?) {
    const params = {};
    params['limit'] = 10;
    if (infiniteScroll) {
      params['offset'] = this.offset += 10;
    }

    this.gifService.trending(params).pipe(
      map(result => {
        this.items.push(...result);
        return this.items;
      }),
      tap(() => {
        if (infiniteScroll) {
          infiniteScroll.target.complete();
        }
      })
    ).subscribe();
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
