/***********************************************************************************************
 * User Configuration.
 */
/** Map relative paths to URLs. */
var map = {};
/** User packages configuration. */
var packages = {};
////////////////////////////////////////////////////////////////////////////////////////////////
/*
 * Everything underneath this line is managed by the CLI.
 */
var barrels = [
    // Angular specific barrels.
    '@angular/core',
    '@angular/common',
    '@angular/compiler',
    '@angular/forms',
    '@angular/http',
    '@angular/router',
    '@angular/platform-browser',
    '@angular/platform-browser-dynamic',
    // Thirdparty barrels.
    'rxjs',
    // Library specific barrels.
    'platform',
    'platform/core',
    'platform/highlight',
    'platform/file-upload',
    'platform/markdown',
    'platform/http',
    'platform/json-formatter',
    'platform/chips',
    // App specific barrels.
    'app',
    'app/components/home',
    'app/components/components',
    'app/components/components/overview',
    'app/components/components/highlight',
    'app/components/components/steps',
    'app/components/components/expansion-panel',
    'app/components/components/file-upload',
    'app/components/components/loading',
    'app/components/components/pipes',
    'app/components/components/media',
    'app/components/components/http',
    'app/components/components/json-formatter',
    'app/components/components/chips',
    'app/components/components/markdown',
    'app/components/docs',
    'app/components/docs/overview',
    'app/components/docs/creating',
    'app/components/docs/angular-material',
    'app/components/docs/angular-2',
    'app/components/docs/build-tasks',
    'app/components/docs/deployment',
    'app/components/docs/icons',
    'app/components/docs/theme',
    'app/components/docs/testing',
    'app/components/layouts',
    'app/components/layouts/overview',
    'app/components/layouts/nav-view',
    'app/components/layouts/nav-list',
    'app/components/layouts/card-over',
    'app/components/layouts/manage-list',
    'app/components/style-guide',
    'app/components/style-guide/colors',
    'app/components/style-guide/iconography',
    'app/components/style-guide/logo',
    'app/components/style-guide/product-icons',
    'app/components/style-guide/typography',
    'app/components/style-guide/material-components',
    'app/components/style-guide/cards',
    'app/components/style-guide/utility-styles',
];
var cliSystemConfigPackages = {};
barrels.forEach(function (barrelName) {
    cliSystemConfigPackages[barrelName] = { main: 'index' };
});
// Angular Material 2 Packages
var materialPackages = [
    'button',
    'card',
    'checkbox',
    'core',
    'icon',
    'input',
    'list',
    'progress-bar',
    'progress-circle',
    'radio',
    'sidenav',
    'tabs',
    'toolbar',
    'grid-list',
    'slide-toggle',
    'menu',
];
materialPackages.forEach(function (pkg) {
    var name = '@angular2-material/' + pkg;
    packages[name] = {
        defaultExtension: 'js',
        format: 'cjs',
        main: pkg + '.js',
    };
});
// Apply the CLI SystemJS configuration.
System.config({
    map: {
        '@angular': 'vendor/@angular',
        'rxjs': 'vendor/rxjs',
        'main': 'main.js',
        '@angular2-material': 'vendor/@angular2-material',
    },
    packages: cliSystemConfigPackages,
});
// Apply the user's configuration.
System.config({ map: map, packages: packages, materialPackages: materialPackages });
//# sourceMappingURL=../system-config.js.map