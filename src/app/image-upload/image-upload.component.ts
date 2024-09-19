import { Component } from '@angular/core';
import { ImageUploadService } from '../services/image-upload.service'; // Correct path after moving the service

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.css']
})
export class ImageUploadComponent {
  selectedFile: File | null = null;

  constructor(private imageUploadService: ImageUploadService) {}

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  onUpload() {
    if (this.selectedFile) {
      this.imageUploadService.uploadImage(this.selectedFile).subscribe(
        (response) => {
          console.log('Upload successful!', response);
        },
        (error: any) => { // Explicitly define the error as 'any'
          console.error('Upload failed', error);
        }
      );
    }
  }
}