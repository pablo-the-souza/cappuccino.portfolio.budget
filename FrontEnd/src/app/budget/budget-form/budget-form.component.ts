import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { BudgetService } from '../budget.service';
import { Category } from '../category.model';

@Component({
  selector: 'app-budget-form',
  templateUrl: './budget-form.component.html',
  styleUrls: ['./budget-form.component.css']
})
export class BudgetFormComponent implements OnInit {
  update: String;
  selectedOption: number; 
  categories: Observable<any>; 
  records : Observable<any>; 
  isAddingCategory : boolean; 

  constructor(public service: BudgetService) { }

  ngOnInit(): void {
    this.isAddingCategory = false; 
    this.resetForm();
    this.records = this.service.getRecordsForForm();
    this.categories = this.service.getCategories();

    this.service.categoryFormData = {
      id: 0,
      name: ""
    }
  }



  onSubmit(form: NgForm) {
    console.log(form.value)
    if (this.service.formData.id == 0)
      this.insertRecord(form)
    else 
      this.updateRecord(form)
  }

  insertRecord(form: NgForm) {
    console.log("I'm categoryID = " + form.value.categoryId)
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


  updateCategory(event: any) {
    this.service.formData.categoryId = this.selectedOption;
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

  changeIsAddingCategory(){
    this.isAddingCategory = true; 
  }

  insertCategory(categoryForm: NgForm){
    this.isAddingCategory = false; 
    this.service.postCategory().subscribe(
      res => {
        console.log("Category Inserted")
        this.categories = this.service.getCategories();
      },
      err => {
        console.log(err);
      }
    );
  }


}
