import {Component,OnInit} from '@angular/core';

@Component({
    templateUrl: './chartsdemo.html'
})
export class ChartsDemo implements OnInit {
    
    lineData: any;
    
    barData: any;
    
    pieData: any;
    
    polarData: any;
    
    radarData: any;
    
    ngOnInit() {
        this.lineData = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'First Dataset',
                    data: [65, 59, 80, 81, 56, 55, 40],
                    fill: false,
                    borderColor: '#9189fd'
                },
                {
                    label: 'Second Dataset',
                    data: [28, 48, 40, 19, 86, 27, 90],
                    fill: false,
                    borderColor: '#ffbf79'
                }
            ]
        };
        
        this.barData = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'My First dataset',
                    backgroundColor: '#337ab7',
                    borderColor: '#6F5499',
                    data: [65, 59, 80, 81, 56, 55, 40]
                },
                {
                    label: 'My Second dataset',
                    backgroundColor: '#ffbf79',
                    borderColor: '#ffbf79',
                    data: [28, 48, 40, 19, 86, 27, 90]
                }
            ]
        }
        
        this.pieData = {
            labels: ['A','B','C'],
            datasets: [
                {
                    data: [300, 50, 100],
                    backgroundColor: [
                        "#6F5499",
                        "#FF8800",
                        "#7cb342"
                    ],
                    hoverBackgroundColor: [
                        "#6F5499",
                        "#FF8800",
                        "#7cb342"
                    ]
                }]    
            };
            
        this.polarData = {
            datasets: [{
                data: [
                    11,
                    16,
                    7,
                    3,
                    14
                ],
                backgroundColor: [
                    "#6F5499",
                    "#FF8800",
                    "#d81b60",
                    "#7cb342",
                    "#ffb300"
                ],
                label: 'My dataset'
            }],
            labels: [
                "Purple",
                "Orange",
                "Pink",
                "Green",
                "Yellow"
            ]
        };
        
        this.radarData = {
            labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
            datasets: [
                {
                    label: 'My First dataset',
                    backgroundColor: 'rgba(179,181,198,0.2)',
                    borderColor: 'rgba(179,181,198,1)',
                    pointBackgroundColor: 'rgba(179,181,198,1)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(179,181,198,1)',
                    data: [65, 59, 90, 81, 56, 55, 40]
                },
                {
                    label: 'My Second dataset',
                    backgroundColor: 'rgba(255,99,132,0.2)',
                    borderColor: 'rgba(255,99,132,1)',
                    pointBackgroundColor: 'rgba(255,99,132,1)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(255,99,132,1)',
                    data: [28, 48, 40, 19, 96, 27, 100]
                }
            ]
        };
    }
}