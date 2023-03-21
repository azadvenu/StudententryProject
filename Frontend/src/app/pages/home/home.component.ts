import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private apiService: ApiService){}
students:any= []
  ngOnInit(): void {
 this.getData();                    //home page edukumbol tanne list kananam.allathe vere button click cheythattala.
  
   }

   getData(){
    this.apiService.getStudentList().subscribe(res=>{
      this.students = res                 //storing the getStudentlist function response into students array.
    })
   }

  //  editStudent(){
  //   this.apiService.updateStudent(1,2).subscribe(res=>{
  //     this.students = res                 
  //   })
  //  }
   deleteStudent(id:any){
    this.apiService.deleteStudent(id).subscribe(res=>{
      this.students = res                 
    })
   }


}
