import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataProtectionComponent } from './data-protection/data-protection.component';
import { ImgSlideContainerComponent } from './img-slide-container/img-slide-container.component';
import{ImprintComponent} from './imprint/imprint.component';

const routes: Routes = [
  {path: '', component: ImgSlideContainerComponent},

  // wenn Phat /imprint ist,
  {path: 'imprint', component: ImprintComponent},
  {path: 'data-protection', component: DataProtectionComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
