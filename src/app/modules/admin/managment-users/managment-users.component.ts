import { Component, ViewChild } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatExpansionModule} from '@angular/material/expansion';
import { usuario } from '@interfaces/usuario';
import { UsersService } from '@service/users.service';
import { Router } from '@angular/router';



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
  imports: [MatTableModule,MatIconModule, MatSortModule, MatInputModule, MatFormFieldModule, MatPaginatorModule, MatExpansionModule],
})

export class ManagmentUsersComponent {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns: string[] = ['id', 'nombre', 'correo', 'rol', 'pais', 'acciones' ];
  clickedRows = new Set<usuario>();
  //dataSource = new MatTableDataSource(list_usuarios);
  dataSource:any =[];
 
  constructor(private usersService:UsersService,private router: Router){
    this.usersService.getUsers().subscribe({
      next:(response)=>{
        this.dataSource = response
      },
      complete:()=>{},
      error:(err)=>{}
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  showDetails(data:any){
    this.router.navigate(['/admin/user-detail/', data.user.id]);
  }

  updateUser(data:any){}

  deletUser(data:any){}

}



