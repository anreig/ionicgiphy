import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '@ionic/angular';
import { AppCommonModule } from './../../../common/common.module';
import { LoggerService } from './../../../common/services/logger.service';
import { GifModule } from './../../gif.module';
import { GiphyService } from './../../services/giphy.service';
import { GifDetailComponent } from './gif-detail.component';


describe('GifDetailComponent', () => {
  let component: GifDetailComponent;
  let fixture: ComponentFixture<GifDetailComponent>;

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
        RouterTestingModule,
        HttpClientModule
      ],
      providers: [LoggerService, { provide: ActivatedRoute, useValue: fakeActivatedRoute }, HttpClient, HttpHandler]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GifDetailComponent);
    component = fixture.componentInstance;
    fixture.debugElement.injector.get(GiphyService)
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should addOrRemoveToFavorite', () => {
    component.favorite = false;
    component.addOrRemoveToFavorite();
    expect(component.favorite).toBe(true);
  });

  it('should share', () => {
    const gif = {
      id: 1,
      title: 'string',
      url: 'string',
      rating: 'string'
    };
    component.share(gif);
  });
});
