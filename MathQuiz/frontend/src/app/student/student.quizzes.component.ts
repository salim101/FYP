import {Component, OnInit, OnDestroy } from '@angular/core';
import { Router              } from '@angular/router';
import { Student               } from '../student/student';
import { StudentService        } from '../student/student.service';

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
                        <li><a routerLink="/student/{{student.id}}/home" routerLinkActive="active">Welcome Page</a></li>
                        <li class="active"><a routerLink="/student/{{student.id}}/quizzes" routerLinkActive="active">My Assigned Quizzes</a></li>
                    </ul>
                    <ul class="nav navbar-nav navbar-right">
                        <li><a ><span class="glyphicon glyphicon-user"></span>{{student.firstName}}</a></li>
                        <li><a routerLink="/student/login" routerLinkActive="active" (click)="logout()"><span class="glyphicon glyphicon-log-out"></span>Bye</a></li>
                    </ul>
                </div>
            </div>
        </nav>

        <div class="container-fluid">
            <div class="row">
                <div class="col-xs-12 col-sm-6 col-sm-offset-3">
                    <h3 class="text-center">Select the Operator</h3>
                </div>
            </div><br>

            <div class="row">
                <div class="col-xs-12 col-sm-1 col-sm-offset-5">
                    <button type="button" routerLink="/student/{{this.student.id}}/quizzes/addition"><img src="/assets/images/addition.png" width="60" height="60"></button>
                </div>
                <div class="col-xs-12 col-sm-1 ">
                    <button type="button" routerLink="/student/{{this.student.id}}/quizzes/subtraction"><img src="/assets/images/subtraction.png" width="60" height="60"></button>
                </div>
            </div>

            <div class="row"><br><br>
                <div class="col-xs-12 col-sm-1 col-sm-offset-5">
                    <button type="button" routerLink="/student/{{this.student.id}}/quizzes/multiplication"><img src="/assets/images/multiplication.png" width="60" height="60"></button>
                </div>
                <div class="col-xs-12 col-sm-1 ">
                    <button type="button" routerLink="/student/{{this.student.id}}/quizzes/division"><img src="/assets/images/division.png" width="60" height="60"></button>
                </div>
            </div>
           
        </div>
    `,
  styles:[`
    div{font-family: "Comic Sans MS";}
  `
  ]
})
export class StudentQuizzesComponent implements OnInit {

    private isIn    : boolean = false;
    private student : Student = new Student();
    private quizzes : Object[];
    private indx    : number = -1;
    private message : string = '';

    constructor(private studentService: StudentService,
                private router : Router) {
                if(this.studentService.student)
                    this.student = this.studentService.student; 
    }

    ngOnInit() {
        this.studentService.getSetting(this.student.id);
    }

     ngOnDestroy() {
         this.studentService.student = this.student;
     }

    logout() {
        this.studentService.logout();
    }

    toggleState() {
        this.isIn = !this.isIn; 
    }
    
}