import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { BudgetService } from '../budget.service';
import { Record } from '../record.model';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-budget-list',
  templateUrl: './budget-list.component.html',
  styleUrls: ['./budget-list.component.css']
})
export class BudgetListComponent implements OnInit, AfterViewInit {
  displayedColumns = ['id', 'date', 'name', 'value', 'category', 'type', 'button']
  dataSource = this.service.dataSource;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(public service: BudgetService) { }

  ngOnInit() {
    this.getAllReports();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  doFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  // hideValues () {
  //   this.dataSource.filteredData()
  // }
  

  populateForm(rd: Record) {
    this.service.formData = Object.assign({}, rd)
  }

  public getAllReports() {
    let resp = this.service.getRecords();
    console.log(resp)
    resp.then(records => this.dataSource.data = records as Record[]);
  }

  onDelete(id) {
    if (confirm('Are you sure?')) {
      this.service.deleteRecordDetail(id)
        .subscribe(
          res => { this.service.getRecords(); },
          err => {
            console.log(err);
          })
    }
  }
}