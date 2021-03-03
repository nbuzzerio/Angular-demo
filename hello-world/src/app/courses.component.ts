import { Component } from '@angular/core';

@Component({
    selector: 'courses', //references css selectors --> <course> = "courses" | <dive class=courses> = ".courses" | <div id=courses> = "#courses"
    template: `
        <h2>{{title}}</h2>
        <ul>
            <li *ngFor="let course of courses">
                {{ course }}
            </li>
        </ul>
    `
    //prefix Directuves with an *
    //use ngFor to create attributes
})
export class CoursesComponent {
    title = "List of Courses";

    courses = ["course 1", "course 2", "course 3"];
}