import { Component, ViewChild } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
export interface usuario {
  nombre: string;
  id: number;
  correo: string;
}

const list_usuarios: usuario[] = [
  {id: 1, nombre: 'Juan', correo: "Juan@gmail.com"},
  {id: 2, nombre: 'Samuel', correo: "Samuel@gmail.com"},
  {id: 3, nombre: 'Felipe', correo: "Felipe@gmail.com"},
  {id: 4, nombre: 'Santiago', correo: "Santiago@gmail.com"},
  {id: 5, nombre: 'Miguel', correo: "Miguel@gmail.com"},
  {id: 6, nombre: 'Leidy', correo: "Leidy@gmail.com"},
  
];

@Component({
  selector: 'app-managment-users',
  templateUrl: './managment-users.component.html',
  styleUrls: ['./managment-users.component.scss'],
  standalone: true,
  imports: [MatTableModule,MatIconModule, MatSortModule, MatInputModule, MatFormFieldModule, MatPaginatorModule],
})

export class ManagmentUsersComponent {
  displayedColumns: string[] = ['id', 'nombre', 'correo', 'acciones' ];
  clickedRows = new Set<usuario>();
  dataSource = new MatTableDataSource(list_usuarios);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
 

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}



