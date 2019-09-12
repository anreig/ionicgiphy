import { HttpClient, HttpHandler } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { GifModule } from './../../gif.module';
import { GiphyService } from './../../services/giphy.service';
import { GifListComponent } from './gif-list.component';


describe('GifListComponent', () => {
  let component: GifListComponent;
  let fixture: ComponentFixture<GifListComponent>;

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      imports: [
        IonicModule,
        GifModule
      ],
      providers: [HttpClient, HttpHandler]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GifListComponent);
    component = fixture.componentInstance;
    fixture.debugElement.injector.get(GiphyService)
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should NO search', () => {
    const event = { target: { value: '' } };
    component.search(event);
    expect(component.searching).toBe(false);
  });

  it('should search', () => {
    const event = { target: { value: 'hola' } };
    component.search(event);
    expect(component.searching).toBe(true);
  });
});
