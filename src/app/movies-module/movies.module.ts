import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { FormComponent } from './components/form/form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [HomePageComponent, FormComponent],
  imports: [CommonModule, FormsModule],
  exports: [HomePageComponent],
})
export class MoviesModule {}
