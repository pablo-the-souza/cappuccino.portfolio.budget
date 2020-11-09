import { NgModule } from '@angular/core';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button'


@NgModule({
    imports:[
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule

    ],
    exports:[
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule
    ]
})
export class MaterialModule {}




// import { NgModule } from '@angular/core';
// import { MatIconModule } from '@angular/material/icon'
// import { MatDatepickerModule } from '@angular/material/datepicker'
// import { MatNativeDateModule } from '@angular/material/core';
// import { MatSidenavModule } from '@angular/material/sidenav';
// import { MatToolbarModule } from '@angular/material/toolbar';
// import { MatListModule } from '@angular/material/list';
// import { MatTabsModule } from '@angular/material/tabs'; 
// import { MatCardModule } from '@angular/material/card'; 
// import { MatSelectModule } from '@angular/material/select'; 
// import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
// import { MatDialogModule } from '@angular/material/dialog';
// import { MatTableModule } from'@angular/material/table';
// import { MatSortModule } from '@angular/material/sort';
// import { MatPaginatorModule } from '@angular/material/paginator';




// @NgModule({
//     imports:[
//         
//         MatIconModule,
//        
//         MatInputModule,
//         MatDatepickerModule,
//         MatNativeDateModule,
//         MatSidenavModule, 
//         MatToolbarModule,
//         MatListModule,
//         MatTabsModule,
//         MatCardModule,
//         MatSelectModule,
//         MatProgressSpinnerModule,
//         MatDialogModule,
//         MatTableModule,
//         MatSortModule,
//         MatPaginatorModule
//     ],
//     exports:[
//        
//         MatIconModule,
//        
//         MatDatepickerModule,
//         MatNativeDateModule,
//         MatSidenavModule,
//         MatToolbarModule,
//         MatListModule,
//         MatTabsModule,
//         MatCardModule,
//         MatSelectModule,
//         MatProgressSpinnerModule,
//         MatDialogModule,
//         MatTableModule,
//         MatSortModule,
//         MatPaginatorModule
        
//     ]
// })
// export class MaterialModule {}