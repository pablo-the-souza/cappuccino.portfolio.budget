import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { BudgetService } from '../budget.service';
import { Category } from '../category.model';

@Component({
  selector: 'app-budget-form',
  templateUrl: './budget-form.component.html',
  styles: [
  ]
})
export class BudgetFormComponent implements OnInit {
  records : Observable<any>; 

  constructor(public service: BudgetService) { }

  ngOnInit(): void {
    this.resetForm();
    this.records = this.service.getRecordsForForm();
    console.log(this.records)
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();

    this.service.formData = {
      id: 0,
      date: new Date,
      name: "",
      value: 0,
      categoryId: 0, 
      // category: new Category(),
      type: ""
    }
  }

  onSubmit(form: NgForm) {
    console.log("I'm category Id = " + form.value.categoryId)
    if (this.service.formData.id == 0)
      this.insertRecord(form)
    else 
      this.updateRecord(form)
  }

  insertRecord(form: NgForm) {
    this.service.postRecordDetail().subscribe(
      res => {
        this.resetForm(form);
        this.service.getRecords();
      },
      err => {
        console.log(err);
      }
    );
  }

  updateRecord(form: NgForm) {
    this.service.putRecordDetail().subscribe(
      res => {
        console.log("Update ok")
        this.resetForm(form);
        this.service.getRecords();
      },
      err => {
        console.log(err);
        
      }
    );
  }

}
