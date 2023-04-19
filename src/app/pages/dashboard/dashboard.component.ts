import { Component } from '@angular/core';
import { PageRequest, PagedResponse, User } from 'src/app/contracts';
import { Helpers } from 'src/app/helpers/functions';
import { UserService } from 'src/app/services';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  constructor(private userService:UserService){}
  userResponse : PagedResponse<User>
  loading : boolean = true
  limit : number = 10
  async ngOnInit(){
    await this.getAllUsers({limit:10})
  }


  async getAllUsers(pageRequest:PageRequest){
    this.loading = true
    this.userResponse= await this.userService.getUsers(pageRequest)
    if(this.userResponse?.data?.length>0){
      this.userResponse.data.map((user)=>{
        user.email = Helpers.dummy.generateRandomEmailAddress(user.firstName,user.lastName)
        user.phone = Helpers.dummy.generateRandomPhoneNumber()
        return user
      })
    }
    this.loading = false
  }
  async loadMore(){
    this.limit = this.limit +10
    await this.getAllUsers({limit: this.limit})
  }
}
