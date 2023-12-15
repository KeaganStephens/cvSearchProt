import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cvSearchProt';

  value = '';
  displayData: { name: string, cvImg: string}[] = [];

  search(text: any) {
    this.value = text.target.value.toLowerCase();
    this.displayData = [];

    for (let i = 0; i < this.students_database.length; i++) {
      // Check if the entered value is a substring of the lowercase name
      if (this.students_database[i].name.toLowerCase().includes(this.value)) {
        this.displayData.push({
          name: this.students_database[i].name,
          cvImg: this.students_database[i].cvImg
        });
      }
    }
  }

  students_database = [
    {
        "name": "KIAN GRAHAM",
        "cvImg": "/assets/50CvIMG/1.png"
      },
      {
        "name": "RICHARD SANCHEZ",
        "cvImg": "/assets/50CvIMG/2.png"
      },
      {
        "name": "HOWARD ONG",
        "cvImg": "/assets/50CvIMG/3.png"
      },
      {
        "name": "OLIVIA WILSON",
        "cvImg": "/assets/50CvIMG/4.png"
      },
      {
        "name": "Sebastian Bennett",
        "cvImg": "/assets/50CvIMG/5.png"
      },
      {
        "name": "KATE MELANIE",
        "cvImg": "/assets/50CvIMG/6.png"
      },
      {
        "name": "SAMIRA HADID",
        "cvImg": "/assets/50CvIMG/7.png"
      },
      {
        "name": "Samira Hadid",
        "cvImg": "/assets/50CvIMG/8.png"
      },
      {
        "name": "Henrietta Mitchell",
        "cvImg": "/assets/50CvIMG/9.png"
      },
      {
        "name": "Margarita Perez",
        "cvImg": "/assets/50CvIMG/10.png"
      },    {
        "name": "CIA RODRIGUEZ",
        "cvImg": "/assets/50CvIMG/11.png"
      },
      {
        "name": "Helene Paquet",
        "cvImg": "/assets/50CvIMG/12.png"
      },
      {
        "name": "Margarita Perez",
        "cvImg": "/assets/50CvIMG/13.png"
      },
      {
        "name": "JULIANA SILVA",
        "cvImg": "/assets/50CvIMG/14.png"
      },
      {
        "name": "FRANCOIS Mercer",
        "cvImg": "/assets/50CvIMG/15.png"
      },
      {
        "name": "CHAD GIBBONS",
        "cvImg": "/assets/50CvIMG/16.png"
      },
      {
        "name": "Jonathan Patterson",
        "cvImg": "/assets/50CvIMG/17.png"
      },
      {
        "name": " CHIDI EZE",
        "cvImg": "/assets/50CvIMG/18.png"
      },
      {
        "name": "MATT ZHANG",
        "cvImg": "/assets/50CvIMG/19.png"
      },
      {
        "name": "CHIAKI SATO",
        "cvImg": "/assets/50CvIMG/20.png"
      },
      {
        "name": "DANIEL GALLEGO",
        "cvImg": "/assets/50CvIMG/21.png"
      },
      {
        "name": "JAMIE CHASTAIN",
        "cvImg": "/assets/50CvIMG/22.png"
      },
      {
        "name": "CLAUDIA ALVES",
        "cvImg": "/assets/50CvIMG/23.png"
      },
      {
        "name": "JONATHAN PATTERSON",
        "cvImg": "/assets/50CvIMG/24.png"
      },
      {
        "name": "BAILEY DUPONT",
        "cvImg": "/assets/50CvIMG/25.png"
      },
      {
        "name": "MORGAN MAXWELL",
        "cvImg": "/assets/50CvIMG/26.png"
      },
      {
        "name": "SHAWN GARCIA",
        "cvImg": "/assets/50CvIMG/28.png"
      },
      {
        "name": "HANNAH MORALES",
        "cvImg": "/assets/50CvIMG/29.png"
      },
      {
        "name": "CHIAKI SATO",
        "cvImg": "/assets/50CvIMG/30.png"
      },
      {
        "name": "ISABEL MERCADO",
        "cvImg": "/assets/50CvIMG/31.png"
      },
      {
        "name": "KORINA VILLANUEVA",
        "cvImg": "/assets/50CvIMG/32.png"
      },
      {
        "name": "ESTELLE DARCY",
        "cvImg": "/assets/50CvIMG/33.png"
      },
      {
        "name": "SEBASTIAN BENNETT",
        "cvImg": "/assets/50CvIMG/34.png"
      },
      {
        "name": "CONNOR HAMILTON",
        "cvImg": "/assets/50CvIMG/35.png"
      },
      {
        "name": "Bailey Dupont",
        "cvImg": "/assets/50CvIMG/36.png"
      },
      {
        "name": "Nellie Iglesias",
        "cvImg": "/assets/50CvIMG/37.png"
      },
      {
        "name": "LORNA ALVARADO",
        "cvImg": "/assets/50CvIMG/38.png"
      },
      {
        "name": "OLIVIA WILSON",
        "cvImg": "/assets/50CvIMG/39.png"
      },
      {
        "name": "Catrine Ziv",
        "cvImg": "/assets/50CvIMG/40.png"
      },
      {
        "name": "OLIVIA WILSON",
        "cvImg": "/assets/50CvIMG/41.png"
      },
      {
        "name": "KORINA VILLANUEVA",
        "cvImg": "/assets/50CvIMG/42.png"
      },
      {
        "name": "SAMIRA HADID",
        "cvImg": "/assets/50CvIMG/43.png"
      },
      {
        "name": "Samira Hadid",
        "cvImg": "/assets/50CvIMG/44.png"
      },
      {
        "name": "Korina Villanueva",
        "cvImg": "/assets/50CvIMG/45.png"
      },
      {
        "name": "SHAWN GARCIA",
        "cvImg": "/assets/50CvIMG/53.png"
      },
      {
        "name": "Choreographer (Shawn Garcia)",
        "cvImg": "/assets/50CvIMG/47.png"
      },
      {
        "name": "Unknown Individual (Name not provided)",
        "cvImg": "/assets/50CvIMG/48.png"
      },
      {
        "name": "Unknown Individual (Name not provided)",
        "cvImg": "/assets/50CvIMG/49.png"
      },
      {
        "name": "Unknown Individual (Name not provided)",
        "cvImg": "/assets/50CvIMG/50.png"
      }
    ]
  }
  
  