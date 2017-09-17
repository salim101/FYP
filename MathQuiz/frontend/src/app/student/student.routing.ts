import { NgModule                             } from '@angular/core';
import { RouterModule, Routes                 } from '@angular/router';
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

import { AuthGuard } from '../services/auth.guard';

const studentRoutes: Routes = [
    {
        path: '',
        component: StudentComponent,
        children: [
            { path: 'login',                     component: StudentLoginComponent   },
            { path: ':id/home',                  component: StudentHomeComponent,                  canActivate:[AuthGuard] },
            { path: ':id/quizzes',               component: StudentQuizzesComponent,               canActivate:[AuthGuard] },
            { path: ':id/quizzes/addition',      component: StudentAdditionQuizzesComponent,       canActivate:[AuthGuard] },
            { path: ':id/quizzes/subtraction',   component: StudentSubtractionQuizzesComponent,    canActivate:[AuthGuard] },
            { path: ':id/quizzes/multiplication',component: StudentMultiplicationQuizzesComponent, canActivate:[AuthGuard] },
            { path: ':id/quizzes/division',      component: StudentDivisionQuizzesComponent,       canActivate:[AuthGuard] },
            { path: ':id/quizzes/quiz/:id',      component: StudentQuizComponent,                  canActivate:[AuthGuard] },
            { path: ':id/quiz/completed',        component: StudentCompletedComponent,             canActivate:[AuthGuard] },
            { path: '',                          component: StudentLoginComponent    },
            { path: '**',                        component: StudentLoginComponent    }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(studentRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class StudentRoutes {}