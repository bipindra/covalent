import { OnInit } from '@angular/core';
export declare class IconographyComponent implements OnInit {
    colors: string[];
    neutrals: string[];
    icons: string[];
    query: string;
    filteredList: string[];
    ngOnInit(): void;
    filter(): void;
}
