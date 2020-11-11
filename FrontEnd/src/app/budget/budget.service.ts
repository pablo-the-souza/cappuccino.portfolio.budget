import { Injectable } from '@angular/core';
import { Record } from './record.model';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { Category } from './category.model';


@Injectable({
  providedIn: 'root'
})
export class BudgetService {
  formData: Record;
  ELEMENT_DATA: Record[] = []
  dataSource = new MatTableDataSource<Record>(this.ELEMENT_DATA);
  categoryList : Category[];

  // readonly rootURL = 'https://boxestest.azurewebsites.net/api';
  readonly rootURL = 'https://localhost:5001/api'; 

  private fbSubs: Subscription[] = [];

  constructor(private http: HttpClient) { }

  postRecordDetail() {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }
    return this.http.post(this.rootURL + '/records', this.formData, httpOptions)
  }

  putRecordDetail() {
    return this.http.put(
      this.rootURL + '/records/' + this.formData.id,
      this.formData)
  }

  deleteRecordDetail(id) {
    return this.http.delete(
      this.rootURL + '/records/' + id,
    )
  }

  public getRecords() {
    return this.http.get(this.rootURL + '/records').toPromise()
      .then(records => this.dataSource.data = records as Record[])
  }

  public getCategories() {
    return this.http.get(this.rootURL + '/categories').toPromise()
    .then(res => this.categoryList = res as Category[])
  }

  cancelSubscriptions() {
    this.fbSubs.forEach(sub => sub.unsubscribe());
  }

}
// ngOnInit(): void {
//   forkJoin([this.data.getUsers(), this.otherData.getUnitAssignments()])
//       .subscribe(result => {
//           this.firstRequestResult = result[0];
//           this.secondRequestResult = result[1];
//           //building your dataSource here

//       });
// }