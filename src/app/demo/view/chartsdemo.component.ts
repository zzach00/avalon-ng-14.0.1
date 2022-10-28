import {Component, OnInit, OnDestroy} from '@angular/core';
import {Subscription} from 'rxjs';
import {AppConfig} from '../domain/appconfig';
import {ConfigService} from '../service/app.config.service';

@Component({
    templateUrl: './chartsdemo.component.html'
})
export class ChartsDemoComponent implements OnInit, OnDestroy {

    lineData: any;

    barData: any;

    pieData: any;

    polarData: any;

    radarData: any;

    lineOptions: any;

    barOptions: any;

    pieOptions: any;

    polarOptions: any;

    radarOptions: any;

    config: AppConfig;

    subscription: Subscription;

    constructor(public configService: ConfigService) {}

    ngOnInit() {
        this.config = this.configService.config;
        this.subscription = this.configService.configUpdate$.subscribe(config => {
            this.config = config;
            this.updateChartOptions();
        });

        this.lineData = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'First Dataset',
                    data: [65, 59, 80, 81, 56, 55, 40],
                    fill: false,
                    backgroundColor: 'rgb(255, 205, 86)',
                    borderColor: 'rgb(255, 205, 86)',
                    tension: .4
                },
                {
                    label: 'Second Dataset',
                    data: [28, 48, 40, 19, 86, 27, 90],
                    fill: false,
                    backgroundColor: 'rgb(75, 192, 192)',
                    borderColor: 'rgb(75, 192, 192)',
                    tension: .4
                }
            ]
        };

        this.lineOptions = {
            plugins: {
                legend: {
                    labels: {
                        fontColor: '#A0A7B5'
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: '#A0A7B5'
                    },
                    grid: {
                        color:  'rgba(160, 167, 181, .3)',
                    }
                },
                y: {
                    ticks: {
                        color: '#A0A7B5'
                    },
                    grid: {
                        color:  'rgba(160, 167, 181, .3)',
                    }
                },
            }
        };

        this.barData = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'My First dataset',
                    backgroundColor: 'rgb(255, 99, 132)',
                    borderColor: 'rgb(255, 99, 132)',
                    data: [65, 59, 80, 81, 56, 55, 40]
                },
                {
                    label: 'My Second dataset',
                    backgroundColor: 'rgb(54, 162, 235)',
                    borderColor: 'rgb(54, 162, 235)',
                    data: [28, 48, 40, 19, 86, 27, 90]
                }
            ]
        };

        this.barOptions = {
            plugins: {
                legend: {
                    labels: {
                        fontColor: '#A0A7B5'
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: '#A0A7B5'
                    },
                    grid: {
                        color:  'rgba(160, 167, 181, .3)',
                    }
                },
                y: {
                    ticks: {
                        color: '#A0A7B5'
                    },
                    grid: {
                        color:  'rgba(160, 167, 181, .3)',
                    }
                },
            }
        };

        this.pieData = {
            labels: ['A', 'B', 'C'],
            datasets: [
                {
                    data: [540, 325, 702, 421],
                    backgroundColor: [
                        'rgb(54, 162, 235)',
                        'rgb(255, 99, 132)',
                        'rgb(255, 205, 86)',
                        'rgb(75, 192, 192)'
                    ]
                }]
        };

        this.pieOptions = {
            plugins: {
                legend: {
                    labels: {
                        fontColor: '#A0A7B5'
                    }
                }
            }
        };

        this.polarData = {
            datasets: [{
                data: [
                    11,
                    16,
                    7,
                    3
                ],
                backgroundColor: [
                    'rgb(54, 162, 235)',
                    'rgb(255, 99, 132)',
                    'rgb(255, 205, 86)',
                    'rgb(75, 192, 192)'
                ],
                label: 'My dataset'
            }],
            labels: [
                'Blue',
                'Purple',
                'Orange',
                'Green'
            ]
        };

        this.polarOptions = {
            plugins: {
                legend: {
                    labels: {
                        fontColor: '#A0A7B5'
                    }
                }
            },
            scales: {
                r: {
                    grid: {
                        color: 'rgba(160, 167, 181, .3)'
                    }
                }
            }
        };

        this.radarData = {
            labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
            datasets: [
                {
                    label: 'My First dataset',
                    backgroundColor: 'rgba(54, 162, 235,0.2)',
                    borderColor: 'rgba(54, 162, 235,1)',
                    pointBackgroundColor: 'rgba(54, 162, 235,1)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(54, 162, 235,1)',
                    data: [65, 59, 90, 81, 56, 55, 40]
                },
                {
                    label: 'My Second dataset',
                    backgroundColor: 'rgba(255, 99, 132,0.2)',
                    borderColor: 'rgba(255, 99, 132,1)',
                    pointBackgroundColor: 'rgba(255, 99, 132,1)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(255, 99, 132,1)',
                    data: [28, 48, 40, 19, 96, 27, 100]
                }
            ]
        };

        this.radarOptions = {
            plugins: {
                legend: {
                    labels: {
                        fontColor: '#A0A7B5'
                    }
                }
            },
            scales: {
                r: {
                    grid: {
                        color: 'rgba(160, 167, 181, .3)'
                    }
                }
            }
        };
    }

    updateChartOptions() {
        if (this.config.dark)
            this.applyDarkTheme();
        else
            this.applyLightTheme();
    }

    applyLightTheme() {
        this.lineOptions = {
            plugins: {
                legend: {
                    labels: {
                        color: '#A0A7B5'
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: '#A0A7B5'
                    },
                    grid: {
                        color:  '#ebedef',
                    }
                },
                y: {
                    ticks: {
                        color: '#A0A7B5'
                    },
                    grid: {
                        color:  '#ebedef',
                    }
                },
            }
        };

        this.barOptions = {
            plugins: {
                legend: {
                    labels: {
                        color: '#A0A7B5'
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: '#A0A7B5'
                    },
                    grid: {
                        color:  '#ebedef',
                    }
                },
                y: {
                    ticks: {
                        color: '#A0A7B5'
                    },
                    grid: {
                        color:  '#ebedef',
                    }
                },
            }
        };

        this.pieOptions = {
            plugins: {
                legend: {
                    labels: {
                        color: '#A0A7B5'
                    }
                }
            }
        };

        this.polarOptions = {
            plugins: {
                legend: {
                    labels: {
                        color: '#A0A7B5'
                    }
                }
            },
            scales: {
                r: {
                    grid: {
                        color: '#ebedef'
                    }
                }
            }
        };

        this.radarOptions = {
            plugins: {
                legend: {
                    labels: {
                        color: '#A0A7B5'
                    }
                }
            },
            scales: {
                r: {
                    grid: {
                        color: '#ebedef'
                    }
                }
            }
        };

    }

    applyDarkTheme() {
        this.lineOptions = {
            plugins: {
                legend: {
                    labels: {
                        color: '#ebedef'
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: '#ebedef'
                    },
                    grid: {
                        color:  'rgba(160, 167, 181, .3)',
                    }
                },
                y: {
                    ticks: {
                        color: '#ebedef'
                    },
                    grid: {
                        color:  'rgba(160, 167, 181, .3)',
                    }
                },
            }
        };

        this.barOptions = {
            plugins: {
                legend: {
                    labels: {
                        color: '#ebedef'
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: '#ebedef'
                    },
                    grid: {
                        color:  'rgba(160, 167, 181, .3)',
                    }
                },
                y: {
                    ticks: {
                        color: '#ebedef'
                    },
                    grid: {
                        color:  'rgba(160, 167, 181, .3)',
                    }
                },
            }
        };

        this.pieOptions = {
            plugins: {
                legend: {
                    labels: {
                        color: '#ebedef'
                    }
                }
            }
        };

        this.polarOptions = {
            plugins: {
                legend: {
                    labels: {
                        color: '#ebedef'
                    }
                }
            },
            scales: {
                r: {
                    grid: {
                        color: 'rgba(160, 167, 181, .3)'
                    }
                }
            }
        };

        this.radarOptions = {
            plugins: {
                legend: {
                    labels: {
                        color: '#ebedef'
                    }
                }
            },
            scales: {
                r: {
                    grid: {
                        color: 'rgba(160, 167, 181, .3)'
                    }
                }
            }
        };
    }

    ngOnDestroy() {
        if(this.subscription){
            this.subscription.unsubscribe();
        }
    }
}
