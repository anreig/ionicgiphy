import { HttpClient, HttpHandler } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '@ionic/angular';
import { AppCommonModule } from './../../../common/common.module';
import { GifModule } from './../../gif.module';
import { GiphyService } from './../../services/giphy.service';
import { GifDetailComponent } from './gif-detail.component';


describe('GifDetailComponent', () => {
  let component: GifDetailComponent;
  let fixture: ComponentFixture<GifDetailComponent>;

  //   const fakeActivatedRoute = {
  //     snapshot:
  //     {
  //       params: [{ id: 1 }]
  //     }
  //   }
  // } as ActivatedRoute;
  const fakeActivatedRoute = {
    snapshot: {
      params: {
      }
    }
  } as ActivatedRoute;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        IonicModule,
        GifModule,
        AppCommonModule,
        RouterTestingModule
      ],
      providers: [{ provide: ActivatedRoute, useValue: fakeActivatedRoute }, HttpClient, HttpHandler]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GifDetailComponent);
    component = fixture.componentInstance;
    fixture.debugElement.injector.get(GiphyService)
    fixture.detectChanges();
  });

});
