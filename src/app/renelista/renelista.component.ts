import { Component, OnInit } from '@angular/core';
import { RenedisciplinasService } from '../renedisciplinas.service';
import { listData } from '../list';


@Component({
  selector: 'app-renelista',
  templateUrl: './renelista.component.html',
  styleUrls: ['./renelista.component.css']
})
export class RenelistaComponent implements OnInit {
  list = listData

  constructor(public renelista: RenedisciplinasService) { }

  ngOnInit() {
  }

}