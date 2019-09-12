import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-gif-card',
  templateUrl: './gif-card.component.html',
  styleUrls: ['./gif-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GifCardComponent {

  @Input() gifItem: Gif;

  constructor() { }

}
