import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { RouterModule } from '@angular/router';
import { LogoComponent } from 'src/app/components/standalone/logo/logo.component';



@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    LogoComponent,
    RouterModule.forRoot([
    ])
  ]
})
export class LayoutModule { }
