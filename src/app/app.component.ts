import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ShareDataComponent } from './modules/share-data/share-data.component';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ShareDataComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-18';

  ngOnInit(): void {
    initFlowbite();
  }
}
