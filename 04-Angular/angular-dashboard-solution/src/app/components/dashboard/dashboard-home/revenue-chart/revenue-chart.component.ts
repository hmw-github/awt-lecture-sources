import { NgStyle } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { generateYAxis } from '../../../../utils';
import { BackendService } from '../../../../services/backend.service';
import { Revenue } from '../../../../models/Revenue';
import { SkeletonComponent } from "../../../shared/skeleton/skeleton.component";

@Component({
  selector: 'app-revenue-chart',
  standalone: true,
  imports: [NgStyle, SkeletonComponent],
  templateUrl: './revenue-chart.component.html',
})
export class RevenueChartComponent {
  loading: boolean;
  revenues: Revenue[] = [];
  chartHeight = 350;
  yAxisLabels: string[] = [];
  topLabel: number = 0;

  constructor(private backendService: BackendService) {
    this.loading = true;
    this.backendService.fetchRevenue()
    .subscribe(revenues => {
      this.loading = false;
      this.revenues = revenues;
      const { yAxisLabels, topLabel } = generateYAxis(revenues);
      this.yAxisLabels = yAxisLabels;
      this.topLabel = topLabel;
    });
  }

  chartHeightStyle() {
    return {
      height: `${this.chartHeight}px`
    };
  }

  blockStyle(value: number) {
    const height = (this.chartHeight / this.topLabel) * value;
    return {
      height: `${height}px`
    };
  }
}