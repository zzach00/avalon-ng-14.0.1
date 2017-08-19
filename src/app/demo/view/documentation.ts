import {Component} from '@angular/core';

@Component({
    templateUrl: './documentation.html',
    styles: [`
        .docs h1 {
            margin-top: 30px;
        }
        
        .docs pre {
            font-family: monospace;
            background-color: #f7f7f9;
            padding: 1em;
            font-size: 14px;
            border-radius: 3px;
            overflow: auto;
        }
        
        .inline-code {
            background-color: #f7f7f9;
            font-style: normal;
            font-size: 13px;
            padding: 0 .5em;
        }
        
        .video-container {
            position: relative;
            width: 100%;
            height: 0;
            padding-bottom: 56.25%;
        }
        
        .video-container iframe {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }`
    ]
})
export class Documentation {
}