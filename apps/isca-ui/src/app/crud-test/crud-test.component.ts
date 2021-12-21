import { Component, OnInit } from '@angular/core';
import { APIService, Deseases } from "../API.service";
import { Storage } from 'aws-amplify'
import { Subscription } from 'rxjs';
import {FormBuilder, FormGroup, Validators} from "@angular/forms"

@Component({
  selector: 'app-crud-test',
  templateUrl: './crud-test.component.html',
  styleUrls: ['./crud-test.component.css']
})
export class CrudTestComponent implements OnInit {

  public deseases: Array<Deseases> = [];

  private subscription: Subscription | null = null;

  public createForm: FormGroup;

  public static selectedThumbnail: File;
  public static selectedBanner: File;
  public static selectedCommon: File;

  constructor(private api: APIService, private fb: FormBuilder) {
    this.createForm = this.fb.group({
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
  
  async ngOnInit(){
    this.api.ListDeseases().then((event) => {
      this.deseases = event.items;
      console.log(this.deseases)
    });
  }

  ngOnDestroy(){
    if(this.subscription) {
      this.subscription.unsubscribe();
    }
    this.subscription = null;
  }

  onThumbnailSelected(event: any){
    const selected= CrudTestComponent.selectedThumbnail = <File>event.target.files[0];
    console.log(selected.name.split(".")[1])
  }
  onBannerSelected(event: any){
    console.log(event)
    CrudTestComponent.selectedBanner = <File>event.target.files[0];
  }
  onCommonSelected(event: any){
    CrudTestComponent.selectedCommon = <File>event.target.files[0];
  }

  public onCreate(desease: Deseases) {
    
    const selectedThumb = CrudTestComponent.selectedThumbnail;
    const selectedBanner = CrudTestComponent.selectedBanner;
    const selectedCommon = CrudTestComponent.selectedCommon;
    
    desease.thumbnail = desease.name + "-thumbnail." + selectedThumb.name.split(".")[1]
    desease.banner = desease.name + "-banner." + selectedBanner.name.split(".")[1]
    desease.commonImage = desease.name + "-common." +selectedCommon.name.split(".")[1]

    this.api
      .CreateDeseases(desease)
      .then((event) => {
        
        console.log("item created!");
        
       
        Storage.put(desease.thumbnail, selectedThumb,{
          contentType: selectedThumb.type
        })

        Storage.put(desease.banner, selectedBanner,{
          contentType: selectedBanner.type
        })

        Storage.put(desease.commonImage, selectedCommon,{
          contentType: selectedCommon.type
        })

        this.createForm.reset();
        this.ngOnInit()
      })
      .catch((e) => {
        console.log("error creating desease...", e);
      });

  }

  public onDelete(desease: Deseases) {

    const newObj = {
      id: desease.id
    }
    this.api
      .DeleteDeseases(newObj)
      .then((event) => {

        console.log("item Deleted!");
        this.ngOnInit()
      })
      .catch((e) => {
        console.log("error deleting desease...", e);
      });
  }

  public onUpdate(desease: Deseases) {
    
    const deseaseUP = {
      id: desease.id,
      name: "Johnny",
      anatomy: "Boy",
      etiology: "Boy",
      epidemiology: "Boy",
      transmission: "Boy",
      pathogeny: "Boy",
      symptom: "Boy",
      diagnosis: "Boy",
      differential: "Boy",
      treatment: "Boy",
      control: "Boy",
      bibliography: ["Boy"],
      categories: ["Boy"],
      thumbnail: "Boy"
    }

    this.api
      .UpdateDeseases(deseaseUP)
      .then((event) => {

        console.log("item Updated!");

      })
      .catch((e) => {
        console.log("error updating desease...", e);
      });
    
  }
}
