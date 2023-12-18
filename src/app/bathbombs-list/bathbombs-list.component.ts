import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { currentBathbombs, Bathbombs } from '../currentBathbombs';

@Component({
  selector: 'app-bathbombs-list',
  templateUrl: './bathbombs-list.component.html',
  styleUrl: './bathbombs-list.component.css',
})
export class BathbombsListComponent {
  currentBathbombs = [...currentBathbombs];
}
