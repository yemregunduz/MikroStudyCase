import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LogoComponent } from './logo.component';
import { CommonModule } from '@angular/common';

describe('LogoComponent', () => {
  let component: LogoComponent;
  let fixture: ComponentFixture<LogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ LogoComponent,CommonModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should render the logo image', () => {
    const imgElement: HTMLImageElement = fixture.nativeElement.querySelector('img');
    expect(imgElement).toBeTruthy();
    expect(imgElement.src).toContain('logo.svg');
    expect(imgElement.width).toEqual(36);
    expect(imgElement.height).toEqual(51);
  });

  it('should render the logo text', () => {
    const textElement: HTMLElement = fixture.nativeElement.querySelector('.logo-text');
    expect(textElement).toBeTruthy();
    expect(textElement.textContent).toEqual('Google Maps');
    expect(textElement.classList).toContain('logo-text');
  });
});
