import { Component, OnInit } from '@angular/core';
import { Investiments } from '../../model/investiments';
import { ListInvestimentsService } from '../../services/list-investiments.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent implements OnInit {
  public investiments!: Array<Investiments>;

  constructor(private listInvestiments: ListInvestimentsService) {}

  ngOnInit(): void {
    this.listInvestiments.list().subscribe((res) => (this.investiments = res));
  }
}
