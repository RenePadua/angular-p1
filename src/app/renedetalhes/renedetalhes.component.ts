import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { listData } from '../list';

@Component({
  selector: 'app-renedetalhes',
  templateUrl: './renedetalhes.component.html',
  styleUrls: ['./renedetalhes.component.css']
})
export class RenedetalhesComponent implements OnInit {
  item;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
      params => {this.item = listData[params.get("index")]}
    );
  }

}