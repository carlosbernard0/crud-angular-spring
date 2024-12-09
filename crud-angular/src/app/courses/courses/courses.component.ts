import { Component } from '@angular/core';
import { Course } from '../model/course';
import { CoursesService } from '../services/courses.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent {

  courses: Observable<Course[]>;
  displayedColumns = ['name', 'category'];

  constructor(private coursesServices: CoursesService){
    this.courses = this.coursesServices.list();
  }

}
