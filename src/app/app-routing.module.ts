import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImgSlideContainerComponent } from './img-slide-container/img-slide-container.component';
import{ImprintComponent} from './imprint/imprint.component';

const routes: Routes = [
  {path: '', component: ImgSlideContainerComponent},

  // wenn Phat /imprint ist,
  {path: 'imprint', component: ImprintComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
