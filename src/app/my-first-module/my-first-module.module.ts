import { NgModule } from '@angular/core';
import { MyFirstComponentComponent } from '../my-first-component/my-first-component.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: MyFirstComponentComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyFirstModuleModule { }