import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AvatarComponent } from './avatar.component';
import { CommonModule } from '@angular/common';

describe('AvatarComponent', () => {
  let component: AvatarComponent;
  let fixture: ComponentFixture<AvatarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ],
      imports:[
        AvatarComponent,CommonModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvatarComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should have imageUrl input', () => {
    const expectedUrl = 'https://example.com/avatar.png';
    component.imageUrl = expectedUrl;
    fixture.detectChanges();
    const imgElement: HTMLImageElement = fixture.nativeElement.querySelector('img');
    expect(imgElement.src).toContain(expectedUrl);
  });

  it('should have width input with default value', () => {
    component.imageUrl = 'https://example.com/avatar.png';
    fixture.detectChanges();
    const imgElement: HTMLImageElement = fixture.nativeElement.querySelector('img');
    expect(imgElement.width).toEqual(50);
  });

  it('should have width input with custom value', () => {
    component.imageUrl = 'https://example.com/avatar.png';
    component.width = 100;
    fixture.detectChanges();
    const imgElement: HTMLImageElement = fixture.nativeElement.querySelector('img');
    expect(imgElement.width).toEqual(100);
  });

  it('should have both inputs', () => {
    const expectedUrl = 'https://example.com/avatar.png';
    const expectedWidth = 100;
    component.imageUrl = expectedUrl;
    component.width = expectedWidth;
    fixture.detectChanges();
    const imgElement: HTMLImageElement = fixture.nativeElement.querySelector('img');
    expect(imgElement.src).toContain(expectedUrl);
    expect(imgElement.width).toEqual(expectedWidth);
  });
});
