import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // 1st questionn
  selectedMenu: string = '';


  chooseMenu(menu: string) {
    this.selectedMenu = menu;
  }

  // 2nd 
  backgroundColor: string = 'white'; 

  changeColor(color: string) {
    this.backgroundColor = color;
  }


  // 3rd  
  userInput: string = ''; 

  displayInput() {
    alert(this.userInput);
  }
  
}
