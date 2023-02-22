import { Component, ViewChildren, QueryList} from '@angular/core';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css'],
})
export class AboutmeComponent {
  @ViewChildren('myParagraphs')
  myParagraphs!: QueryList<any>;

  title = 'My, Myself &';
  logo_img = './assets/img/torreslogo.PNG';
  first_line =
    "I'm a student of Computer Engineering at University of Buenos Aires - Argentina.";
  second_line =
    'I have been working with some programming language like Python, JavaScript, TypeScript, C and Java.';
  third_line =
    'Also I development a game like university project. In tecnology industry I have experience with IT Support.';
  fourth_line =
    'I would like to work in a company to give my knowledge while I get up my profesional career.';
  show_noshow = '0';
  transition = '';
  validation = '0';
  count = 0;
  edit_or_add = '¿Would you like to add or edit paragraphs?';
  what_paragraph = '¿Which paragraph would you like to edit?';
  paragraphs: String[] = [];

  ngAfterViewInit() {
    const count = this.myParagraphs.length;
    for (let i = 0; i < count; i++) {
      switch (i) {
        case 0:
          this.paragraphs.push('First paragraph');
          break;
        case 1:
          this.paragraphs.push('Second paragraph');
          break;
        case 2:
          this.paragraphs.push('Third paragraph');
          break;
        case 3:
          this.paragraphs.push('Fourth paragraph');
          break;
        case 4:
          this.paragraphs.push('Fifth paragraph');
          break;
        case 5:
          this.paragraphs.push('Sixth paragraph');
          break;
        case 6:
          this.paragraphs.push('Seventh paragraph');
          break;
        case 7:
          this.paragraphs.push('Eighth paragraph');
          break;
        case 8:
          this.paragraphs.push('Ninth paragraph');
          break;

        default:
          this.paragraphs.push('Tenth paragraph');
          break;


      }

    }
  }
  change_paragraph(): void {
    this.show_noshow = '1';
    this.transition = 'all linear .5s';
  }
  edit_paragraph(): void {
    this.validation = '1';
    if (this.validation === '1') {
      this.transition = 'all linear .9s';
    }

  }
}

// botones mas chicos.
//Hacer un Keyup o Ngmodel para tomar los datos en el campo del input
// y asi cambiar los paragrahps.
// Encuenta, quieres saber mas de mi?
// si la respuesta es si, dale click a la tecnologia que te interesa
// Se despliega la imagen interactativa de la tecnologia usada con una breve reseña de mi experiencia y su logo.
// un loading, introduccion con animacion de imagenes de fondo, con nombre y apellido.
// y un boton de acceder.
