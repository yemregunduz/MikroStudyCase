import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { DashboardComponent } from './dashboard.component';
import { UserService } from 'src/app/services';
import { of } from 'rxjs';
import { PagedResponse, User } from 'src/app/contracts';
import { Helpers } from 'src/app/helpers/functions';
import { SpinnerButtonComponent } from 'src/app/components/standalone/spinner-button/spinner-button.component';
import { UserListModule } from 'src/app/components/user-list/user-list.module';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let userServiceMock: any;

  beforeEach(waitForAsync(() => {
    userServiceMock = jasmine.createSpyObj('UserService', ['getUsers']);
    TestBed.configureTestingModule({
      declarations: [ DashboardComponent ],
      imports:[SpinnerButtonComponent,UserListModule],
      providers: [
        { provide: UserService, useValue: userServiceMock },
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call UserService.getUsers with correct limit value', async () => {
    userServiceMock.getUsers.and.returnValue(of({ data: [], total: 0,limit :10,page :0 } as PagedResponse<any>));
    const limit = 10;
    await component.getAllUsers({ limit });
    expect(userServiceMock.getUsers).toHaveBeenCalledWith({ limit });
  });

  it('should set loading to false after getUsers call', async () => {
    const fakeResponse = { data: [ { id: "1", firstName: 'John', lastName: 'Doe' } ], total: 1,limit :10,page :0  } as PagedResponse<any>;
    userServiceMock.getUsers.and.returnValue(of(fakeResponse));
    await component.getAllUsers({ limit: 10 });
    expect(component.loading).toBeFalsy();
  });

  it('should increment limit value and call getAllUsers after loadMore call', async () => {
    const getAllUsersSpy = spyOn(component, 'getAllUsers').and.returnValue(Promise.resolve());
    await component.loadMore();
    expect(component.limit).toBe(20);
    expect(getAllUsersSpy).toHaveBeenCalledWith({ limit: 20 });
  });
});
