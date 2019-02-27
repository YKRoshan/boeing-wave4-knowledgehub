import { Component, OnInit } from '@angular/core';
import { UploadFile, UploadEvent, FileSystemFileEntry } from 'ngx-file-drop';
import { Observable } from 'rxjs';
import { UploadService } from '../service/upload.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  public files: UploadFile[] = [];
  currentFileUpload: File;
  showFile = false;
  fileUploads: Observable<string[]>;
  msg: string = null;

  constructor(private uploadService: UploadService) { }

  ngOnInit() {
  }

  //This method is used to pass the file to the upload service where it uploads the file to 
  //amazon s3
  selectFile(event: UploadEvent) {
    this.files = event.files;
    console.log(event);

    for (const droppedFile of event.files) {
      if (droppedFile.fileEntry.isFile) {
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file((file: File) => {

  //Based on whether the file is uploaded or not the response will be passed to html        
          this.uploadService.pushFileToStorage(file)
            .subscribe(File => {
              this.msg = 'successfully uploaded';
            },
              error => {
                this.msg = 'failed to upload file';
              });
        })
      }
    }
  }

  //This passes the file to the selectFile method and subsequently to upload service
  public fileOver(event) {
    console.log(event);
  }

  //This method passes the file to selectFile method once the file is dropped
  public fileLeave(event) {
    console.log(event);
  }
}
