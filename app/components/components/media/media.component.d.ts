import { OnInit, NgZone, OnDestroy } from '@angular/core';
import { TdMediaService } from '../../../../platform/core';
export declare class MediaDemoComponent implements OnInit, OnDestroy {
    private _mediaService;
    private _ngZone;
    private _subcriptions;
    mediaDemo: any[];
    mediaServiceMethods: Object[];
    mediaBreakpoints: Object[];
    mediaAttrs: Object[];
    constructor(_mediaService: TdMediaService, _ngZone: NgZone);
    ngOnInit(): void;
    ngOnDestroy(): void;
}
