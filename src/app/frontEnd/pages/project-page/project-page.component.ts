import { Component, OnInit } from '@angular/core';
import { DatabaseServiceService } from 'src/app/service/database-service.service';

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.scss']
})
export class ProjectPageComponent  implements OnInit{

  constructor(private service: DatabaseServiceService){}

  onlineProjects!: any;

  ngOnInit(): void {
    this.service.getAllProjects().subscribe(
      {
        next: r=>{
         this.onlineProjects = r;
        },
        error: e=>{
          console.log(e);
          
        }
      }
    )
  }



  
  defaultProjects =[
    
  ]



}
