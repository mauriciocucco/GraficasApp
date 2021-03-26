import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Color, Label, MultiDataSet } from 'ng2-charts';
import { GraficasService } from '../../services/graficas.service';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: [],
})
export class DonaHttpComponent implements OnInit {
  public doughnutChartLabels: Label[] = [
    // 'Download Sales',
    // 'In-Store Sales',
    // 'Mail-Order Sales',
    // 'Cuarto label',
    // 'Quinto label',
  ];
  public doughnutChartData: MultiDataSet = [
    // [350, 450, 100, 200, 170]
  ];
  public doughnutChartType: ChartType = 'doughnut';
  colors: Color[] = [
    {
      backgroundColor: ['#ED6532', '#F74D34', '#E13A45', '#F734A3', '#E632ED'],
    },
  ];

  constructor(private graficasService: GraficasService) {}

  ngOnInit(): void {
    // this.graficasService.getInfoUsers().subscribe((resp) => {
    //   this.doughnutChartLabels = Object.keys(resp);
    //   this.doughnutChartData.push(Object.values(resp));
    // });

    this.graficasService.getInfoDona().subscribe(({ labels, data }) => {
      this.doughnutChartLabels = labels;
      this.doughnutChartData.push(data);
    });
  }
}
