import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FaqPageComponent } from './faq-page/faq-page.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
    { path: '', component: HomePageComponent},
    { path: 'faq', component: FaqPageComponent},
    { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
