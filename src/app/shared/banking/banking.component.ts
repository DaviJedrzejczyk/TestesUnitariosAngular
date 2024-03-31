import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ListComponent } from '../investiments/components/list/list.component';

@Component({
  selector: 'app-banking',
  standalone: true,
  imports: [CommonModule, ListComponent],
  templateUrl: './banking.component.html',
  styleUrl: './banking.component.scss',
})
export class BankingComponent {
  private _poupanca: number = 10;
  private _carteira: number = 50;

  get getPoupanca(): number {
    return this._poupanca;
  }

  get getCarteira(): number {
    return this._carteira;
  }

  public setSacar(value: string): number | undefined {
    const sacar = Number(value);
    if (isNaN(sacar) || this._poupanca < sacar) {
      return;
    }

    this._poupanca -= sacar;
    return (this._carteira += sacar);
  }

  public setDepositar(value: string): number | undefined {
    const depositar = Number(value);

    if (isNaN(depositar) || this._carteira < depositar) {
      return;
    }

    this._carteira -= depositar;
    return (this._poupanca += depositar);
  }
}
