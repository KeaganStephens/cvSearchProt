import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cvSearchProt';

  value = ''

  displayData : {name : string, age : number}[] = []

  search(text : any){
    this.value = text.target.value.toLowerCase()
    console.log("hello")
    for(let i in this.students_database){
      if(this.value in this.students_database[i].subjects){
        
        this.displayData.push(
          { 
            name : this.students_database[i].name,
            age: this.students_database[i].age })
      }
    }
  }

  students_database = [
    {
        'name': 'john smith',
        'age': 20,
        'subjects': {'math': 85, 'physics': 78, 'english': 92}
    },
     {
        'name': 'alice johnson',
        'age': 21,
        'subjects': {'chemistry': 90, 'history': 88, 'biology': 79}
    },
    {
        'name': 'bob williams',
        'age': 19,
        'subjects': {'computer science': 95, 'statistics': 91, 'psychology': 87}
    },
    {
        'name': 'emily davis',
        'age': 22,
        'subjects': {'geography': 82, 'economics': 88, 'art': 94}
    },
    {
        'name': 'michael brown',
        'age': 20,
        'subjects': {'sociology': 89, 'music': 93, 'physical education': 85}
    },
     {
        'name': 'sophia rodriguez',
        'age': 20,
        'subjects': {'history': 88, 'political science': 95, 'literature': 91}
    },
     {
        'name': 'matthew turner',
        'age': 21,
        'subjects': {'physics': 90, 'chemistry': 85, 'math': 92}
    },
     {
        'name': 'liam garcia',
        'age': 20,
        'subjects': {'computer science': 88, 'math': 92, 'physics': 85}
    },
     {
        'name': 'ava robinson',
        'age': 21,
        'subjects': {'chemistry': 90, 'biology': 87, 'psychology': 94}
    },
    {
        'name': 'noah hernandez',
        'age': 19,
        'subjects': {'history': 85, 'economics': 89, 'geography': 92}
    },
    {
        'name': 'isabella reed',
        'age': 22,
        'subjects': {'literature': 93, 'art': 88, 'music': 91}
    },
    {
        'name': 'james brooks',
        'age': 20,
        'subjects': {'statistics': 94, 'political science': 87, 'sociology': 90}
    },
     {
        'name': 'emma campbell',
        'age': 21,
        'subjects': {'chemistry': 91, 'physics': 86, 'computer science': 89}
    },
     {
        'name': 'alexander price',
        'age': 19,
        'subjects': {'math': 90, 'history': 88, 'psychology': 93}
    },
    {
        'name': 'mia simmons',
        'age': 22,
        'subjects': {'biology': 87, 'art': 92, 'economics': 89}
    },
    {
        'name': 'ethan morgan',
        'age': 20,
        'subjects': {'geography': 91, 'music': 90, 'political science': 88}
    },
    {
        'name': 'grace taylor',
        'age': 21,
        'subjects': {'sociology': 89, 'statistics': 93, 'literature': 87}
    }
]


}