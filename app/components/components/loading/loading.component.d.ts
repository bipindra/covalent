import { ViewContainerRef, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { TdLoadingService } from '../../../../platform/core';
export declare class LoadingDemoComponent implements AfterViewInit {
    private _changeDetectorRef;
    private _loadingService;
    demo: {
        name?: string;
        description?: string;
    };
    demo2: {
        name?: string;
        description?: string;
    };
    replaceRegistered: number;
    loadingAttrs: Object[];
    loadingServiceMethods: Object[];
    constructor(viewContainer: ViewContainerRef, _changeDetectorRef: ChangeDetectorRef, _loadingService: TdLoadingService);
    ngAfterViewInit(): void;
    registerCircleLoadingOverlay(): void;
    registerLinearLoadingOverlay(): void;
    registerLoadingReplace(): void;
    resolveLoadingReplace(): void;
}
