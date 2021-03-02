import { Component } from '@angular/core';

@Component({
    selector: 'courses', //references css selectors --> <course> = "courses" | <dive class=courses> = ".courses" | <div id=courses> = "#courses"
    template: '<h2>Courses</h2>' //html markup to be rendered in the component
})
export class CoursesComponent {
    
}