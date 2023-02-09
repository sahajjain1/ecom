import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { LayoutComponent } from './layout/layout.component';
import { AboutComponent } from './about/about.component';
import { ExpComponent } from './exp/exp.component';
import { ContactComponent } from './contact/contact.component';
import { WorkComponent } from './work/work.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/layout',
    pathMatch: 'full'
  }

  ,
  {
    path: 'main',
    component: MainComponent
  }, {
    path: 'layout',
    component: LayoutComponent
  }, {
    path: 'about',
    component: AboutComponent
  }, {
    path: 'exp',
    component: ExpComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'work',
    component: WorkComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }