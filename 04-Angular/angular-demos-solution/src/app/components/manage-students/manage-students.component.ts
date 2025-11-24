import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Student } from '../../models/Student';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-manage-students',
    standalone: true,
    imports: [
    FormsModule
],
    templateUrl: './manage-students.component.html',
    styleUrls: ['./manage-students.component.css']
})
export class ManageStudentsComponent implements OnInit {
    students: Student[] = [];
    selectedStudent: Student | null = null;
    registerNumber: number = 0;
    name: string = '';

    public constructor(private location: Location){
    }

    public ngOnInit(): void {
        this.students = [
            new Student(4711, 'Emma'),
            new Student(4712, 'Paul'),
            new Student(8000, 'Anna')
        ];
    }

    public selectStudent(student: Student): void {
        this.selectedStudent = student;
        this.registerNumber = student.registerNumber;
        this.name = student.name;
    }

    public save(): void {
        this.selectedStudent!.name = this.name;
        this.selectedStudent = null; // hide form
    }

    public cancel(): void {
        this.selectedStudent = null;  // hide form
    }
}