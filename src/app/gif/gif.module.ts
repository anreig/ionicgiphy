import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { GifCardComponent } from './components/gif-card/gif-card.component';
import { GifRatingComponent } from './components/gif-rating/gif-rating.component';
import { GifDetailComponent } from './features/gif-detail/gif-detail.component';
import { GifListComponent } from './features/gif-list/gif-list.component';

const routes: Routes = [
  {
    path: '',
    component: GifListComponent
  }, {
    path: ':id',
    component: GifDetailComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    TranslateModule.forChild()
  ],
  providers: [],
  declarations: [GifListComponent, GifDetailComponent, GifCardComponent, GifRatingComponent]
})
export class GifModule { }
