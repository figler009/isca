import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { APIService } from '../API.service';

@Component({
  selector: 'app-edit-desease',
  templateUrl: './edit-desease.component.html',
  styleUrls: ['./edit-desease.component.css']
})
export class EditDeseaseComponent implements OnInit {

  public updateForm: FormGroup;

  public static selectedThumbnail: File;
  public static selectedBanner: File;
  public static selectedCommon: File;

  constructor(private api: APIService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.updateForm = this.fb.group({
      name: ["", Validators.required],
      anatomy: ["", Validators.required],
      etiology: ["", Validators.required],
      epidemiology: ["", Validators.required],
      transmission: ["", Validators.required],
      pathogeny: ["", Validators.required],
      symptom: ["", Validators.required],
      diagnosis: ["", Validators.required],
      differential: ["", Validators.required],
      treatment: ["", Validators.required],
      control: ["", Validators.required],
      bibliography: ["", Validators.required],
      categories: ["", Validators.required],
      thumbnail: ["", Validators.required]
    });
  }

  onUpdate(){

    this.updateForm.reset();
  }

  onThumbnailSelected(event: any){
    const selected= EditDeseaseComponent.selectedThumbnail = <File>event.target.files[0];
    console.log(selected.name.split(".")[1])
  }
  onBannerSelected(event: any){
    console.log(event)
    EditDeseaseComponent.selectedBanner = <File>event.target.files[0];
  }
  onCommonSelected(event: any){
    EditDeseaseComponent.selectedCommon = <File>event.target.files[0];
  }
}
