import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { ApiService } from 'src/app/api.service';
@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit {

  studentform : any= new FormGroup({
    'name': new FormControl(''),
    'age': new FormControl('')
  })

  constructor (private apiService: ApiService){}
  ngOnInit(): void {
    
  }
onSubmit(){
  this.apiService.addStudent(this.studentform.value).subscribe(res=>{      //sending value we gotfrom form
console.log(res)
if(res){
  alert("data saved successfully")      
}
  })
}
}
