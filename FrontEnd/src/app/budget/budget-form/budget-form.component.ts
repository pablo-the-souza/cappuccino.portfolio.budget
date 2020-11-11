import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BudgetService } from '../budget.service';

@Component({
  selector: 'app-budget-form',
  templateUrl: './budget-form.component.html',
  styles: [
  ]
})
export class BudgetFormComponent implements OnInit {

  constructor(public service: BudgetService) { }

  ngOnInit(): void {
    this.resetForm();
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
      type: ""
    }
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
    if (this.service.formData.id == 0)
      this.insertRecord(form)
    else 
      this.updateRecord(form)
  }

  insertRecord(form: NgForm) {
    this.service.postRecordDetail().subscribe(
      res => {
        console.log("Insert ok")
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
