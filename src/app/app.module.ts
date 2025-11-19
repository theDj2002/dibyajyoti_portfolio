import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

// Routing
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule // 👈 enable router support
  ],
  bootstrap: [] // 👈 main entry point
})
export class AppModule {}
