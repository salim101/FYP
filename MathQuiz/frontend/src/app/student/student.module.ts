import { NgModule                             } from '@angular/core';
import { CommonModule                         } from '@angular/common';
import { FormsModule                          } from '@angular/forms';
import { StudentRoutes                        } from './student.routing';
import { StudentComponent                     } from './student.component';
import { StudentLoginComponent                } from './student.login.component';
import { StudentHomeComponent                 } from './student.home.component';
import { StudentQuizzesComponent              } from './student.quizzes.component';
import {StudentAdditionQuizzesComponent       } from './student.addition.quizzes.component';
import {StudentSubtractionQuizzesComponent    } from './student.subtraction.quizzes.component';
import {StudentMultiplicationQuizzesComponent } from './student.multiplication.quizzes.component';
import {StudentDivisionQuizzesComponent       } from './student.division.quizzes.component';
import { StudentQuizComponent                 } from './student.quiz.component';
import { StudentCompletedComponent            } from './student.completed.component';
import { StudentService                       } from './student.service';
import { AlertService                         } from '../services/alert.service';

import { AuthGuard                    } from '../services/auth.guard';
import { AuthenticationService        } from '../services/authentication.service';
import { ReactiveFormsModule          } from "@angular/forms";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        StudentRoutes
    ],
    declarations: [
        StudentComponent,
        StudentLoginComponent,
        StudentHomeComponent,
        StudentQuizzesComponent,
        StudentAdditionQuizzesComponent,
        StudentSubtractionQuizzesComponent,
        StudentMultiplicationQuizzesComponent,
        StudentDivisionQuizzesComponent,
        StudentQuizComponent,
        StudentCompletedComponent
    ],
    providers: [
        StudentService,AuthGuard, AuthenticationService,AlertService
    ]
})
export class StudentModule {}