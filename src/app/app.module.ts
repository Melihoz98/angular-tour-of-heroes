import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ImageUploadComponent } from './image-upload/image-upload.component';
import { ImageUploadService } from './services/image-upload.service'; // Correct path after moving the service

@NgModule({
  declarations: [
    AppComponent,
    ImageUploadComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ImageUploadService], // Ensure the service is provided here
  bootstrap: [AppComponent]
})
export class AppModule { }
