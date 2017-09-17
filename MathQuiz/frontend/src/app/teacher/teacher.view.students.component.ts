import { Component, OnInit} from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Teacher } from './teacher';
import { TeacherService } from './teacher.service';
import { ValidationService } from '../services/validation.service';


@Component ({
    template: `
        <nav class="navbar navbar-default">
            <div class="container-fluid">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" (click)="toggleState()">
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>                        
                    </button>   
                </div>
                <div class="collapse navbar-collapse" [ngClass]="{ 'in': isIn }">
                    <ul class="nav navbar-nav">
                        <li><a routerLink="/teacher/{{teacher.id}}/home" routerLinkActive="active">Home</a></li>
                        <li><a routerLink="/teacher/{{teacher.id}}/add-student" routerLinkActive="active">Add Student</a></li>
                        <li class="active"><a routerLink="/teacher/{{teacher.id}}/students" routerLinkActive="active">View Students</a></li>
                        <li><a routerLink="/teacher/{{teacher.id}}/quiz" routerLinkActive="active">Create Quiz</a></li>
                        <li><a routerLink="/teacher/{{teacher.id}}/dashboard" routerLinkActive="active">Dashboard</a></li>
                        <li><a routerLink="/teacher/{{teacher.id}}/colour" routerLinkActive="active">Customize Colour</a></li>
                    </ul>
                    <ul class="nav navbar-nav navbar-right">
                        <li><a routerLink="/teacher/{{teacher.id}}/profile" routerLinkActive="active"><span class="glyphicon glyphicon-user"></span>{{teacher.firstName}}</a></li>
                        <li><a routerLink="/teacher/login" routerLinkActive="active" (click)="logout()"><span class="glyphicon glyphicon-log-out"></span>Logout</a></li>
                    </ul>
                </div>
            </div>
        </nav>

        <div class="container-fluid well">
            <div class="row">
                <div class="form-group col-xs-12 col-md-4">
                    <h3 class="text-center">Viewing Students</h3>
                    <label>Full Name</label>
                    <div id="allStudents" class="pre-scrollable">
                        <ol>
                            <li *ngFor="let student of students; let i = index" (click)="showStudentDetails(i, student)"><button class=" btn btn-link">{{student.firstName}} {{student.lastName}}</button></li>
                        </ol>
                    </div>
                </div><!------------------  END OF DIV ON THE LEFT ------------------------>

                <div *ngIf="studentDetails" class="col-xs-12 col-md-8">
                    <form [formGroup]="form">
                        <h3 class="text-center">Student Details</h3>
                        <div class="form-group col-xs-12 col-md-6">
                            <label>Student ID:</label>
                            <input type="text" [disabled]="true" class="form-control" placeholder="Student ID" value="{{students[indx].id}}" > 
                        </div>

                        <div class="form-group col-xs-12 col-md-6">
                            <label>FirstName:</label>
                            <input type="text" formControlName="firstName" id="firstName" class="form-control" placeholder="Student FirstName" value="{{students[indx].firstName}}" >
                            <control-messages [control]="form.controls.firstName"></control-messages> 
                        </div>

                        <div class="form-group col-xs-12 col-md-6">
                            <label>LastName:</label>
                            <input type="text" formControlName="lastName" id="lastName" class="form-control" placeholder="Student LastName" value="{{students[indx].lastName}}"> 
                            <control-messages [control]="form.controls.lastName"></control-messages> 
                        </div>

                        <div class="form-group col-xs-12 col-md-6">
                            <label>Level:</label>
                            <select name="select" class="form-control" formControlName="level" id="level" value="{{students[indx].level}}">
                                <option>Beginner</option>
                                <option>Intermediate</option>
                                <option>Advance</option>
                            </select>
                        </div>

                        <div class="form-group col-xs-12 col-md-6">
                            <label>Userrname:</label>
                            <input type="text" formControlName="username" id="username" class="form-control" placeholder="Student Username" value="{{students[indx].username}}"> 
                            <control-messages [control]="form.controls.username"></control-messages>
                        </div>

                        <div class="form-group col-xs-12 col-md-6">
                            <label>Password:</label>
                            <input type="text" formControlName="password" id="password" class="form-control" placeholder="Student Password" value="{{students[indx].password}}"> 
                            <control-messages [control]="form.controls.password"></control-messages>
                        </div>

                        <div class="form-group col-xs-12 col-md-6">
                            <button type="button" class="btn btn-danger" (click)="this.studentDetails=false">Close Student Details</button>
                            <button type="button" [disabled]="!form.valid" class="btn btn-primary" (click)="update(form.value)">Update Records</button>
                        </div>
                        <div class="row">
                            <div class="form-group col-xs-12  col-sm-4 col-sm-offset-4 alert alert-danger" *ngIf="error">{{error}}</div>
                        </div>
                    </form>
                <div>
        
            </div> <!--  END OF THE ROW -->

        </div> <!--  END OF THE CONTAINER -->

    `,
    styles:[`
		#allStudents {
			height:200px;
		}
	`]
    
  
})

export class TeacherViewStudentsComponent implements OnInit {

    private isIn            : boolean = false;
    private studentDetails  : boolean = false;
    private teacher         : Teacher = new Teacher();
    private students        : Object[];
    private indx            : number = -1;
    private form            : FormGroup;
    private error           : string  = '';

    constructor(private teacherService: TeacherService, private fb : FormBuilder,) {
        if(this.teacherService.teacher)
            this.teacher = this.teacherService.teacher;
            this.teacherService
                .getStudents()
                .subscribe(students => this.students = students);
    }

    showStudentDetails(i, student){
        this.studentDetails = true;
        this.indx = i;
    }

    update(f){
        console.log(f);
    }

    ngOnInit() {
        this.form = this.fb.group({
            "firstName": [null, Validators.compose([Validators.required, Validators.minLength(3),Validators.maxLength(15)])],
            "lastName" : [null, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(15)])],
            "level"    : [null, Validators.compose([Validators.required])],
            "username" : [null, Validators.compose([Validators.required])],
            "password" : [null, Validators.compose([Validators.required])]            
        });
    }

    ngOnDestroy() {
         this.teacherService.teacher = this.teacher;
     }

    logout() {
        this.teacherService.logout();
    }


    toggleState() {
        this.isIn = !this.isIn; 
    }

    
    
}