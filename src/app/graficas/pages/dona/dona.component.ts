import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Color, Label, MultiDataSet } from 'ng2-charts';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [],
})
export class DonaComponent implements OnInit {
  public doughnutChartLabels: Label[] = [
    'Download Sales',
    'In-Store Sales',
    'Mail-Order Sales',
    'Cuarto label',
    'Quinto label',
  ];
  public doughnutChartData: MultiDataSet = [[350, 450, 100, 200, 170]];
  public doughnutChartType: ChartType = 'doughnut';
  colors: Color[] = [
    {
      backgroundColor: ['#ED6532', '#F74D34', '#E13A45', '#F734A3', '#E632ED'],
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
