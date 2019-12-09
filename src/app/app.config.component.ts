import {Component, OnInit} from '@angular/core';
import { AppMainComponent } from './app.main.component';

@Component({
    selector: 'app-config',
    template: `
        <div class="layout-config" [ngClass]="{'layout-config-active': app.configActive}" (click)="app.onConfigClick($event)">
            <div class="layout-config-content">
                <a style="cursor: pointer" id="layout-config-button" class="layout-config-button" (click)="onConfigButtonClick($event)">
                    <i class="pi pi-cog"></i>
                </a>
                <a style="cursor: pointer" class="layout-config-close" (click)="onConfigCloseClick($event)">
                    <i class="pi pi-times"></i>
                </a>
                <p-tabView>
                    <p-tabPanel header="Menu">
                        <h1>Menu Modes</h1>
                        <div class="panel-items">
                            <div class="panel-item">
                                <a style="cursor: pointer" (click)="app.changeToStaticMenu()">
                                    <img src="assets/layout/images/configurator/menu/Avalon-Static.png" alt="avalon"/>
                                    <i class="pi pi-check" *ngIf="app.isStatic()"></i>
                                </a>
                                <span>Static</span>
                            </div>
                            <div class="panel-item">
                                <a style="cursor: pointer" (click)="app.changeToOverlayMenu()">
                                    <img src="assets/layout/images/configurator/menu/Avalon-Overlay.png" alt="avalon"/>
                                    <i class="pi pi-check" *ngIf="app.isOverlay()"></i>
                                </a>
                                <span>Overlay</span>
                            </div>
                            <div class="panel-item">
                                <a style="cursor: pointer" (click)="app.changeToHorizontalMenu()">
                                    <img src="assets/layout/images/configurator/menu/Avalon-Horizontal.png" alt="avalon"/>
                                    <i class="pi pi-check" *ngIf="app.isHorizontal()"></i>
                                </a>
                                <span>Horizontal</span>
                            </div>
                            <div class="panel-item">
                                <a style="cursor: pointer" (click)="app.changeToSlimMenu()">
                                    <img src="assets/layout/images/configurator/menu/Avalon-Slim.png" alt="avalon"/>
                                    <i class="pi pi-check" *ngIf="app.isSlim()"></i>
                                </a>
                                <span>Slim</span>
                            </div>
                        </div>
                        <h1>Menu Colors</h1>
                        <div class="panel-items">
                            <div class="panel-item">
                                <a style="cursor: pointer" (click)="this.app.darkMenu = true">
                                    <img src="assets/layout/images/configurator/menu/Avalon-Dark.png" alt="avalon"/>
                                    <i class="pi pi-check" *ngIf="app.darkMenu"></i>
                                </a>
                                <span>Dark</span>
                            </div>
                            <div class="panel-item">
                                <a style="cursor: pointer" (click)="this.app.darkMenu = false">
                                    <img src="assets/layout/images/configurator/menu/Avalon-Static.png" alt="avalon"/>
                                    <i class="pi pi-check" *ngIf="!app.darkMenu"></i>
                                </a>
                                <span>Light</span>
                            </div>
                        </div>
                    </p-tabPanel>
                    <p-tabPanel header="User Profile">
                        <div class="panel-items">
                            <div class="panel-item">
                                <a style="cursor: pointer" (click)="this.app.profileMode = 'inline'">
                                    <img src="assets/layout/images/configurator/menu/Avalon-Inline.png" alt="avalon"/>
                                    <i class="pi pi-check" *ngIf="app.profileMode === 'inline'"></i>
                                </a>
                                <span>Inline</span>
                            </div>
                            <div class="panel-item">
                                <a style="cursor: pointer" (click)="this.app.profileMode = 'top'">
                                    <img src="assets/layout/images/configurator/menu/Avalon-Popup.png" alt="avalon"/>
                                    <i class="pi pi-check" *ngIf="app.profileMode === 'top'"></i>
                                </a>
                                <span>Overlay</span>
                            </div>
                        </div>
                    </p-tabPanel>
                    <p-tabPanel header="Bootstrap">
                        <div class="panel-items">
                            <div class="panel-item">
                                <a style="cursor: pointer" (click)="changeVersion('v3')">
                                    <img src="assets/layout/images/configurator/version/avalon-bootstrap3.png" alt="avalon"/>
                                    <i class="pi pi-check" *ngIf="version === 'v3'"></i>
                                </a>
                                <span>V3</span>
                            </div>
                            <div class="panel-item">
                                <a style="cursor: pointer" (click)="changeVersion('v4')">
                                    <img src="assets/layout/images/configurator/version/avalon-bootstrap4.png" alt="avalon"/>
                                    <i class="pi pi-check" *ngIf="version === 'v4'"></i>
                                </a>
                                <span>V4</span>
                            </div>
                        </div>
                    </p-tabPanel>
                    <p-tabPanel header="Layout">
                        <h1>Flat</h1>
                        <div class="panel-items">
                            <div class="panel-item colors" *ngFor="let flatLayoutColor of flatLayoutColors">
                                <a style="cursor: pointer" class="layout-config-layout-option" (click)="changeLayout(flatLayoutColor.label)">
                                    <img src="assets/layout/images/configurator/layout/{{flatLayoutColor.label}}.png" alt="avalon"/>
                                    <i class="pi pi-check" *ngIf="layout === flatLayoutColor.label"></i>
                                </a>
                            </div>
                        </div>
                        <h1>Special</h1>
                        <div class="panel-items">
                            <div class="panel-item colors" *ngFor="let specialLayoutColor of specialLayoutColors">
                                <a style="cursor: pointer" class="layout-config-layout-option" (click)="changeLayout(specialLayoutColor.label, true)">
                                    <img src="assets/layout/images/configurator/layout/{{specialLayoutColor.label}}.png" alt="avalon"/>
                                    <i class="pi pi-check" *ngIf="layout === specialLayoutColor.label"></i>
                                </a>
                            </div>
                        </div>
                    </p-tabPanel>
                    <p-tabPanel header="Themes">
                        <div class="panel-items">
                            <div class="panel-item" *ngFor="let theme of themes">
                                <a style="cursor: pointer" class="layout-config-option" (click)="changeTheme(theme.label)">
                                    <img src="assets/layout/images/configurator/theme/{{theme.label}}.svg" alt="avalon"/>
                                    <i class="pi pi-check" *ngIf="themeColor === theme.label"></i>
                                </a>
                            </div>
                        </div>
                    </p-tabPanel>
                </p-tabView>
            </div>
        </div>
    `
})
export class AppConfigComponent implements OnInit {

    themes: any[];

    flatLayoutColors: any[];

    specialLayoutColors: any[];

    version = 'v4';

    themeColor = 'blue';

    layout = 'blue';

    constructor(public app: AppMainComponent) {}

    ngOnInit() {
        this.flatLayoutColors = [
            {label: 'blue'},
            {label: 'purple'},
            {label: 'cyan'},
            {label: 'indigo'},
            {label: 'teal'},
            {label: 'pink'},
            {label: 'lime'},
            {label: 'green'},
            {label: 'amber'},
            {label: 'brown'},
            {label: 'orange'},
            {label: 'deeppurple'},
            {label: 'lightblue'},
            {label: 'lightgreen'},
            {label: 'darkgrey'},
        ];
        this.specialLayoutColors = [
            {label: 'influenza'},
            {label: 'suzy'},
            {label: 'calm'},
            {label: 'crimson'},
            {label: 'night'},
            {label: 'skyline'},
            {label: 'sunkist'},
            {label: 'littleleaf'},
            {label: 'joomla'},
            {label: 'firewatch'}
        ];
        this.themes = [
            {label: 'blue'},
            {label: 'cyan'},
            {label: 'indigo'},
            {label: 'purple'},
            {label: 'teal'},
            {label: 'orange'},
            {label: 'deeppurple'},
            {label: 'lightblue'},
            {label: 'green'},
            {label: 'lightgreen'},
            {label: 'lime'},
            {label: 'amber'},
            {label: 'brown'},
            {label: 'darkgrey'},
            {label: 'pink'},
        ];
    }

    changeLayout(layout: string, special?: boolean) {
        const layoutLink: HTMLLinkElement = document.getElementById('layout-css') as  HTMLLinkElement;

        if (this.version === 'v3') {
            layoutLink.href = 'assets/layout/css/layout-' + layout + '.css';
        } else {
            layoutLink.href = 'assets/layout/css/layout-' + layout + '-v4' + '.css';
        }

        this.layout = layout;

        if (special) {
            this.app.darkMenu = true;
        }
    }

    changeTheme(theme: string) {
        const themeLink: HTMLLinkElement = document.getElementById('theme-css') as  HTMLLinkElement;

        if (this.version === 'v3') {
            themeLink.href =  'assets/theme/theme-' + theme + '.css';
        } else {
            themeLink.href =  'assets/theme/theme-' + theme + '-v4' + '.css';
        }

        this.themeColor = theme;
    }

    changeVersion(version: string) {
        const themeLink: HTMLLinkElement = document.getElementById('theme-css') as  HTMLLinkElement;
        const layoutLink: HTMLLinkElement = document.getElementById('layout-css') as  HTMLLinkElement;

        if (version === 'v3' && this.version != version) {
            this.version = 'v3';
            themeLink.href =  'assets/theme/theme-' + this.themeColor + '.css';
            layoutLink.href = 'assets/layout/css/layout-' + this.layout + '.css';
        } 
        else if (version === 'v4' && this.version != version) {
            themeLink.href =  'assets/theme/theme-' + this.themeColor + '-v4' + '.css';
            layoutLink.href = 'assets/layout/css/layout-' + this.layout + '-v4' + '.css';
            this.version = 'v4';
        }
    }

    onConfigButtonClick(event) {
        this.app.configActive = !this.app.configActive;
        event.preventDefault();
    }

    onConfigCloseClick(event) {
        this.app.configActive = false;
        event.preventDefault();
    }
}
