import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { currentSoaps, Soaps } from '../currentSoaps';

@Component({
  selector: 'app-soap-list',
  templateUrl: './soap-list.component.html',
  styleUrl: './soap-list.component.css',
})
export class SoapListComponent {
  currentSoaps = [...currentSoaps];
}
