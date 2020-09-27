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
                    <i class="fa fa-times"></i>
                </a>
                <p-tabView>
                    <p-tabPanel header="Real">
                        <div class="layout-config-content">

                        <h5 style="margin-top: 0">Input Style</h5>
                        <div class="p-formgroup-inline">
                            <div class="p-field-radiobutton">
                                <p-radioButton id="input_outlined" name="inputstyle" [(ngModel)]="app.inputStyle"  value="outlined"></p-radioButton>
                                <label for="input_outlined">Outlined</label>
                            </div>
                            <div class="p-field-radiobutton">
                                <p-radioButton id="input_filled" name="inputstyle" [(ngModel)]="app.inputStyle" value="filled"></p-radioButton>
                                <label for="input_filled">Filled</label>
                            </div>
                        </div>
            
                        <h5 style="margin-top: 0;">Ripple Effect</h5>
                        <p-inputSwitch [ngModel]="app.ripple" (onChange)="app.onRippleChange($event)"></p-inputSwitch>
            
                        <h5>Menu Type</h5>
                        <div class="p-grid">
                            <div class="p-col-6">
                                <div class="p-field-radiobutton">
                                    <p-radioButton id="static" name="layoutMode" value="static" [(ngModel)]="app.layoutMode"></p-radioButton>
                                    <label for="static">Static</label>
                                </div>
                            </div>
                            <div class="p-col-6">
                                <div class="p-field-radiobutton">
                                    <p-radioButton id="overlay" name="layoutMode" value="overlay" [(ngModel)]="app.layoutMode"></p-radioButton>
                                    <label for="overlay">Overlay</label>
                                </div>
                            </div>
                        </div>
                        <div class="p-grid">
                            <div class="p-col-6">
                                <div class="p-field-radiobutton">
                                    <p-radioButton id="horizontal" name="layoutMode" value="horizontal" [(ngModel)]="app.layoutMode" (onClick)="app.profileMode = 'top'"></p-radioButton>
                                    <label for="horizontal">Horizontal</label>
                                </div>
                            </div>
                            <div class="p-col-6">
                                <div class="p-field-radiobutton">
                                    <p-radioButton id="slim" name="layoutMode" value="slim" [(ngModel)]="app.layoutMode"></p-radioButton>
                                    <label for="slim">Slim</label>
                                </div>
                            </div>
                        </div>
            
                        <h5 style="margin-top: 0;">Menu Colors</h5>
                        <div class="p-grid">
                            <div class="p-col-6">
                                <div class="p-field-radiobutton">
                                    <p-radioButton id="dark" name="menuColor" [value]="true" [(ngModel)]="app.darkMenu"></p-radioButton>
                                    <label for="dark">Dark</label>
                                </div>
                            </div>
                            <div class="p-col-6">
                                <div class="p-field-radiobutton">
                                    <p-radioButton id="light" name="menuColor" [value]="false" [(ngModel)]="app.darkMenu"></p-radioButton>
                                    <label for="light">Light</label>
                                </div>
                            </div>
                        </div>
            
                        <h5 style="margin-top: 0;">User Profile</h5>
                        <div class="p-grid">
                            <div class="p-col-6">
                                <div class="p-field-radiobutton">
                                    <p-radioButton id="inline" name="profileMode" value="inline" [(ngModel)]="app.profileMode"[disabled]="app.isHorizontal()"></p-radioButton>
                                    <label for="inline">Inline</label>
                                </div>
                            </div>
                            <div class="p-col-6">
                                <div class="p-field-radiobutton">
                                    <p-radioButton id="top" name="profileMode" value="top" [(ngModel)]="app.profileMode" [disabled]="app.isHorizontal()"></p-radioButton>
                                    <label for="top">Overlay</label>
                                </div>
                            </div>
                        </div>
            
                        <h5 style="margin-top: 0;">Flat Layout Colors</h5>
                        <div class="layout-themes">
                            <div *ngFor="let flatLayoutColor of flatLayoutColors">
                                <a href="#" (click)="changeLayout(flatLayoutColor.file, false)"  [ngStyle]="{'background-color': flatLayoutColor.color}">
                                    <i class="pi pi-check" *ngIf="layout === flatLayoutColor.file"></i>
                                </a>
                            </div>
                        </div>
            
                        <h5>Special Layout Colors</h5>
                        <div class="layout-themes">
                            <div *ngFor="let specialLayoutColor of specialLayoutColors">
                                <a href="#" (click)="changeLayout(specialLayoutColor.file, true)" [ngStyle]="{'background-image': 'linear-gradient(to right,' + specialLayoutColor.color1 + ',' + specialLayoutColor.color2 + ')'}">
                                    <i class="pi pi-check" *ngIf="layout === specialLayoutColor.file"></i>
                                </a>
                            </div>
                        </div>
            
                        <h5>Themes</h5>
                        <div class="layout-themes">
                            <div *ngFor="let t of themes">
                                <a href="#" (click)="changeTheme($event, t.file)" [ngStyle]="{'background-color': t.color}">
                                    <i class="pi pi-check" *ngIf="theme === t.file"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    </p-tabPanel>
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
                                <span>Inline</span>
                            </div>
                            <div class="panel-item">
                                <span>Overlay</span>
                            </div>
                        </div>
                    </p-tabPanel>
                    <p-tabPanel header="Bootstrap">
                        <div class="panel-items">
                            <div class="panel-item">
                                <a style="cursor: pointer" (click)="changeVersion('v3')">
                                    <img src="assets/layout/images/configurator/v3/avalon-bootstrap3.png" alt="avalon"/>
                                    <i class="pi pi-check" *ngIf="version === 'v3'"></i>
                                </a>
                                <span>V3</span>
                            </div>
                            <div class="panel-item">
                                <a style="cursor: pointer" (click)="changeVersion('v4')">
                                    <img src="assets/layout/images/configurator/v4/avalon-bootstrap4.png" alt="avalon"/>
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
                                <a style="cursor: pointer" class="layout-config-layout-option"
                                   (click)="changeLayout(flatLayoutColor.label)">
                                    <i class="pi pi-check" *ngIf="layout === flatLayoutColor.label"></i>
                                </a>
                            </div>
                        </div>
                        <h1>Special</h1>
                        <div class="panel-items">
                            <div class="panel-item colors" *ngFor="let specialLayoutColor of specialLayoutColors">
                                <a style="cursor: pointer" class="layout-config-layout-option"
                                   (click)="changeLayout(specialLayoutColor.label, true)">
                                    <img src="assets/layout/images/configurator/{{version}}/layouts/special/{{specialLayoutColor.label}}.png" alt="avalon"/>
                                    <i class="pi pi-check" *ngIf="layout === specialLayoutColor.label"></i>
                                </a>
                            </div>
                        </div>
                    </p-tabPanel>
                    <p-tabPanel header="Themes">
                        <div class="panel-items">
                            <div class="panel-item" *ngFor="let theme of themes">
                                <a style="cursor: pointer" class="layout-config-option" (click)="changeTheme(theme.label)">
                                    <img src="assets/layout/images/configurator/{{version}}/themes/{{theme.image}}" alt="avalon"/>
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
            {name: "Blue", file: "blue", color: "#146fd7"},
            {name: "Cyan", file: "cyan", color: "#0A616F"},
            {name: "Indigo", file: "indigo", color: "#470EA2"},
            {name: "Purple", file: "purple", color: "#391F68"},
            {name: "Teal", file: "teal", color: "#136E52"},
            {name: "Pink", file: "pink", color: "#771340"},
            {name: "Lime", file: "lime", color: "#407916"},
            {name: "Green", file: "green", color: "#1F8E38"},
            {name: "Amber", file: "amber", color: "#7A5E06"},
            {name: "Brown", file: "brown", color: "#593E22"},
            {name: "Orange", file: "orange", color: "#904100"},
            {name: "Deep Purple", file: "deeppurple", color: "#341A64"},
            {name: "Light Blue", file: "lightblue", color: "#14569D"},
            {name: "Light Green", file: "lightgreen", color: "#2E8942"},
            {name: "Dark Grey", file: "darkgrey", color: "#343A40"},
        ];
        this.specialLayoutColors = [
            {name: "Influenza", file: "influenza", color1: "#a83279", color2:"#f38e00"},
            {name: "Calm", file: "calm", color1: "#5f2c82", color2:"#0DA9A4"},
            {name: "Crimson", file: "crimson", color1: "#521c52", color2:"#c6426e"},
            {name: "Night", file: "night", color1: "#2c0747", color2:"#6441a5"},
            {name: "Skyline", file: "skyline", color1: "#2b32b2", color2:"#1488cc"},
            {name: "Sunkist", file: "sunkist", color1: "#ee8a21", color2:"#f2c94c"},
            {name: "Little Leaf", file: "littleleaf", color1: "#4DB865", color2:"#80D293"},
            {name: "Joomla", file: "joomla", color1: "#1e3c72", color2:"#2a5298"},
            {name: "Firewatch", file: "firewatch", color1: "#cb2d3e", color2:"#ef473a"},
            {name: "Suzy", file: "suzy", color1: "#834d9b", color2:"#d04ed6"},
        ];
        this.themes = [
                {name: "Amber", file: "amber", color: "#F8BD0C"},
				{name: "Blue", file: "blue", color: "#007bff"},
				{name: "Cyan", file: "cyan", color: "#17A2B8"},
				{name: "Indigo", file: "indigo", color: "#6610F2"},
				{name: "Purple", file: "purple", color: "#883cae"},
				{name: "Teal", file: "teal", color: "#20C997"},
				{name: "Orange", file: "orange", color: "#FD7E14"},
				{name: "Deep Purple", file: "deeppurple", color: "#612FBE"},
				{name: "Light Blue", file: "lightblue", color: "#4DA3FF"},
				{name: "Green", file: "green", color: "#28A745"},
				{name: "Light Green", file: "lightgreen", color: "#61CC79"},
				{name: "Brown", file: "brown", color: "#986839"},
				{name: "Dark Grey", file: "darkgrey", color: "#6C757D"},
				{name: "Pink", file: "pink", color: "#E83E8C"},
				{name: "Lime", file: "lime", color: "#74CD32"},
        ];
    }

    changeLayout(layout: string, special?: boolean) {
        if (special) {
            this.app.darkMenu = special;
        }
        
        this.changeStyleSheetsColor('layout-css', 'layout-' + layout + '.css');
        this.layout = layout;
    }

    changeTheme(theme: string) {
        this.changeStyleSheetsColor('theme-css', 'theme-' + theme + '.css');

        this.themeColor = theme;
    }

    changeVersion(version: string) {
            this.changeStyleSheetsColor('theme-css', 'theme-' + this.themeColor + '.css');
            this.changeStyleSheetsColor('layout-css', 'layout-' + this.layout + '.css');
    }

    changeStyleSheetsColor(id, value) {
        const element = document.getElementById(id);
        const urlTokens = element.getAttribute('href').split('/');
        urlTokens[urlTokens.length - 1] = value;

        const newURL = urlTokens.join('/');

        this.replaceLink(element, newURL);
    }

    replaceLink(linkElement, href) {
        if (this.isIE()) {
            linkElement.setAttribute('href', href);
        } 
        else {
            const id = linkElement.getAttribute('id');
            const cloneLinkElement = linkElement.cloneNode(true);

            cloneLinkElement.setAttribute('href', href);
            cloneLinkElement.setAttribute('id', id + '-clone');

            linkElement.parentNode.insertBefore(cloneLinkElement, linkElement.nextSibling);

            cloneLinkElement.addEventListener('load', () => {
                linkElement.remove();
                cloneLinkElement.setAttribute('id', id);
            });
        }
    }

    isIE() {
        return /(MSIE|Trident\/|Edge\/)/i.test(window.navigator.userAgent);
    }

    onProfileModeClick(mode: string) {
        if (this.app.layoutMode === "horizontal") {
            return;
        }

        this.app.profileMode = mode;
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
