import { Component, OnInit } from '@angular/core';
import { APIService, Deseases } from "../API.service";
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

  constructor(private api: APIService, private fb: FormBuilder) {

    this.createForm = this.fb.group({
      name: ["", Validators.required],
      description: ["", Validators.required]
    });

  }
  
  async ngOnInit(){
    this.api.ListDeseases().then((event) => {
      this.deseases = event.items;
    });

    this.subscription = <Subscription>(
      this.api.OnCreateDeseasesListener.subscribe((event: any) => {
        const newDeseases = event.value.data.onCreateDeseases;
        this.deseases = [newDeseases, ...this.deseases]
      })
    )
  }

  ngOnDestroy(){
    if(this.subscription) {
      this.subscription.unsubscribe();
    }
    this.subscription = null;
  }

  public onCreate(desease: Deseases) {

    this.api
      .CreateDeseases(desease)
      .then((event) => {
        console.log("item created!");
        this.createForm.reset();
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

      })
      .catch((e) => {
        console.log("error deleting desease...", e);
      });
  }

  public onUpdate(desease: Deseases) {
    
    const deseaseUP = {
      id: desease.id,
      name: "Johnny",
      description: "Boy"
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
