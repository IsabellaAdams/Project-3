import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { currentCandles, Candles } from '../currentCandles';

@Component({
  selector: 'app-candles-list',
  templateUrl: './candles-list.component.html',
  styleUrl: './candles-list.component.css',
})
export class CandlesListComponent {
  currentCandles = [...currentCandles];
}
