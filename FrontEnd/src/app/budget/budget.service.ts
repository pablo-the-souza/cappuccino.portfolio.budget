import { Injectable } from '@angular/core';
import { Record } from './record.model';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {
  formData: Record;
  ELEMENT_DATA: Record[] = []
  readonly rootURL = 'https://boxestest.azurewebsites.net/api';
  // readonly rootURL = 'https://localhost:4200/api'; 
  dataSource = new MatTableDataSource<Record>(this.ELEMENT_DATA);

  private fbSubs: Subscription[] = [];

  constructor(private http: HttpClient) { }

  postRecordDetail() {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }
    return this.http.post(this.rootURL+'/records', this.formData, httpOptions)
  }

  putRecordDetail() {
    return this.http.put(
      this.rootURL+'/records/' + this.formData.id, 
      this.formData)
  }

  deleteRecordDetail(id) {
    return this.http.delete(
      this.rootURL+'/records/' + id, 
  )
  }

  public getList() {
    return this.http.get(this.rootURL+'/records').toPromise()
    .then(records => this.dataSource.data = records as Record[])
  }

  cancelSubscriptions() {
    this.fbSubs.forEach(sub => sub.unsubscribe());
}

}
