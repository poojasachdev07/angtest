import { Component, OnInit, ViewChild, ViewChildren,QueryList } from '@angular/core';
import { StudentCountComponent } from '../student-count/student-count.component';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
public test1=0;
selectedStudentCountRadioButton: string = 'All';
@ViewChild(StudentCountComponent) std:StudentCountComponent;
@ViewChildren(StudentCountComponent) std1:QueryList<StudentCountComponent>;
constructor() {
  //console.log(`new - jokeViewChild is ${this.std.jokes}`);
  //console.log(`new - jokeViewChild1 is ${this.std1.jokes}`);
}

ngAfterViewInit() {
  console.log(`ngAfterViewInit - jokeViewChild is ${this.std.jokes}`);
  console.log(`ngAfterViewInit - jokeViewChild 1is ${this.std1}`);
  let jokes: StudentCountComponent[] = this.std1.toArray();
  console.log(jokes);
}
  ngOnInit(): void {
    this.test1=90;
  }

  students: any[] = [
    {
        ID: 'std101', FirstName: 'Pranaya', LastName: 'Rout',
        DOB: '12/8/1988', Gender: 'Male', CourseFee: 1234.56
    },
    {
        ID: 'std102', FirstName: 'Anurag', LastName: 'Mohanty',
        DOB: '10/14/1989', Gender: 'Male', CourseFee: 6666.00
    },
    {
        ID: 'std103', FirstName: 'Priyanka', LastName: 'Dewangan',
        DOB: '7/24/1992', Gender: 'Female', CourseFee: 6543.15
    },
    {
        ID: 'std104', FirstName: 'Hina', LastName: 'Sharma',
        DOB: '8/19/1990', Gender: 'Female', CourseFee: 9000.50
    },
    {
        ID: 'std105', FirstName: 'Sambit', LastName: 'Satapathy',
        DOB: '4/12/1991', Gender: 'Male', CourseFee: 9876.54
    }
];
getTotalStudentsCount(): number {
    return this.students.length;
}
getMaleStudentsCount(): number {
    return this.students.filter(std => std.Gender === 'Male').length;
}
getFemaleStudentsCount(): number {
    return this.students.filter(std => std.Gender === 'Female').length;
}

onStudentCountRadioButtonChange(selectedRadioButtonValue: string): void {
  alert (selectedRadioButtonValue);
  this.selectedStudentCountRadioButton = selectedRadioButtonValue;
}

inc()
{
  this.std.incbyone();
}
dec()
{
  this.std.decbyone();
}
}
