import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-gif-card',
  templateUrl: './gif-card.component.html',
  styleUrls: ['./gif-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GifCardComponent implements OnInit {

  @Input() gifItem: Gif;

  constructor() { }

  ngOnInit() { }

}
