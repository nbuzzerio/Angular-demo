import { Component } from '@angular/core';

@Component({
    selector: 'courses', //references css selectors --> <course> = "courses" | <dive class=courses> = ".courses" | <div id=courses> = "#courses"
    template: '<h2>{{"Title: " + title}}</h2>' //html markup to be rendered in the component
})
export class CoursesComponent {
    title = "List of Courses"

    getTitle() {
        return this.title;
    }
}