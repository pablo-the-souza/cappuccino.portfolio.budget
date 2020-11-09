import { Injectable } from '@angular/core';
import { Record } from './record.model';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { MatTableDataSource } from '@angular/material/table';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {
  ELEMENT_DATA: Record[] = []
  formData: Record;
  readonly rootURL = 'https://localhost:5001/api'; 
  dataSource = new MatTableDataSource<Record>(this.ELEMENT_DATA);

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
}
