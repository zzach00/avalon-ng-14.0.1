import {Component, OnInit} from '@angular/core';
import {SelectItem} from 'primeng/api';
import { ProductService } from '../service/productservice';
import { Product } from '../domain/product';
import { MenuItem } from 'primeng/api';

@Component({
    templateUrl: './dashboard.component.html',
    styleUrls: ['./tabledemo.scss']
})
export class DashboardDemoComponent implements OnInit {

    products: Product[];

    chartData: any;

    chartOptions: any;

    chart: any;

    items: MenuItem[];

    constructor(private productService: ProductService) { }

    ngOnInit() {
        this.productService.getProducts().then(data => this.products = data);

        this.items = [
            {
                label: 'Options',
                items: [
                    {label: 'Add New', icon: 'pi pi-fw pi-plus'},
                    {label: 'Search', icon: 'pi pi-fw pi-search'}
                ]
            }];

        this.chartData = {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [
                {
                    label: 'New',
                    data: [11, 17, 30, 60, 88, 92],
                    backgroundColor: 'rgba(13, 202, 240, .2)',
                    borderColor: '#0dcaf0',
                    pointBorderColor: 'transparent',
                    pointBackgroundColor: 'transparent',
                    fill: false,
                    tension: .4
                },
                {
                    label: 'Completed',
                    data: [11, 19, 39, 59, 69, 71],
                    backgroundColor: 'rgba(253, 126, 20, .2)',
                    borderColor: '#fd7e14',
                    pointBorderColor: 'transparent',
                    pointBackgroundColor: 'transparent',
                    fill: false,
                    tension: .4
                },
                {
                    label: 'Canceled',
                    data: [11, 17, 21, 30, 47, 83],
                    backgroundColor: 'rgba(111, 66, 193, .2)',
                    borderColor: '#6f42c1',
                    pointBorderColor: 'transparent',
                    pointBackgroundColor: 'transparent',
                    fill: true,
                    tension: .4
                }
            ]
        };

        this.chartOptions = {
            plugins: {
                legend: {
                    fill: true
                }
            },
            scales: {
                y: {
                    max: 100,
                    min: 0,
                    ticks: {
                        color: '#A0A7B5'
                    }
                },
                x: {
                    grid: {
                        display: true,
                    },
                    ticks: {
                        color: '#A0A7B5',
                        beginAtZero: true,
                    }
                }
            }
        };

        this.getGradient();
    }

    getGradient() {
        this.chart = document.getElementsByTagName('canvas')[0].getContext('2d');
        const gradientStroke1 = this.chart.createLinearGradient(100, 0, 500, 100);
        gradientStroke1.addColorStop(0, 'rgba(63, 213, 250, 0)');
        gradientStroke1.addColorStop(0.5, 'rgba(63, 213, 250, 1)');
        gradientStroke1.addColorStop(1, 'rgba(10, 162, 192, 1)');
        this.chartData.datasets[0].borderColor = gradientStroke1;

        const gradientStroke2 = this.chart.createLinearGradient(100, 0, 500, 100);
        gradientStroke2.addColorStop(0, 'rgba(253, 152, 67, 0)');
        gradientStroke2.addColorStop(0.5, 'rgba(253, 152, 67, 1)');
        gradientStroke2.addColorStop(1, 'rgba(202, 101, 16, 1)');
        this.chartData.datasets[1].borderColor = gradientStroke2;

        const gradientStroke3 = this.chart.createLinearGradient(100, 0, 500, 100);
        gradientStroke3.addColorStop(0, 'rgba(140, 104, 205, 0)');
        gradientStroke3.addColorStop(0.5, 'rgba(140, 104, 205, 1)');
        gradientStroke3.addColorStop(1, 'rgba(89, 53, 154, 1)');
        this.chartData.datasets[2].borderColor = gradientStroke3;

        const gradientFill = this.chart.createLinearGradient(0, 0, 500, 0);
        gradientFill.addColorStop(1, 'rgba(89, 53, 154, 0.34)');
        gradientFill.addColorStop(0, 'rgba(140, 104, 205, 0.2)');
        this.chartData.datasets[2].backgroundColor = gradientFill;
    }
}
