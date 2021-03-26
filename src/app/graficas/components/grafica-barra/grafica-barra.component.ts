import { Component, Input, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-grafica-barra',
  templateUrl: './grafica-barra.component.html',
  styles: [],
})
export class GraficaBarraComponent implements OnInit {
  @Input() horizontal: boolean = false;
  @Input() barChartLabels: Label[] = [
    // '2006',
    // '2007',
    // '2008',
    // '2009',
    // '2010',
    // '2011',
    // '2012',
  ];
  @Input() barChartData: ChartDataSets[] = [
    // {
    //   data: [65, 59, 80, 81, 56, 55, 40],
    //   label: 'Series A',
    //   backgroundColor: '#FF03B8',
    // },
    // {
    //   data: [28, 48, 40, 19, 86, 27, 90],
    //   label: 'Series B',
    //   backgroundColor: '#3B07D9',
    // },
    // {
    //   data: [32, 43, 55, 45, 96, 24, 75],
    //   label: 'Series C',
    //   hoverBackgroundColor: '#8D14F0',
    // },
  ];
  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;

  constructor() {}

  ngOnInit(): void {
    if (this.horizontal) {
      //lo pongo acá porque antes no lee el input
      this.barChartType = 'horizontalBar';
    }
  }
}
