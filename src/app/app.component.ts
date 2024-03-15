import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
 // templateUrl: './app.component.html',// se puede elinar este y el de stilo
  template:'<router-outlet><router-outlet/>'
  //styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'store';
}
