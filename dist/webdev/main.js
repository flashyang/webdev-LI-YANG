(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./assignment/directives/sortable.directive.ts":
/*!*****************************************************!*\
  !*** ./assignment/directives/sortable.directive.ts ***!
  \*****************************************************/
/*! exports provided: SortableDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortableDirective", function() { return SortableDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SortableDirective = /** @class */ (function () {
    function SortableDirective(el) {
        this.el = el;
        this.newIndexes = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](); // this will emit an event for the parent component or the directive calling component
    }
    // Lifecycle hook that is called after a component's view has been fully initialized
    SortableDirective.prototype.ngAfterViewInit = function () {
        this.appSortable(this);
    };
    SortableDirective.prototype.appSortable = function (refe) {
        jQuery(this.el.nativeElement).sortable({
            axis: 'y',
            start: function (event, ui) {
                refe.initialIndex = ui.item.index();
            },
            stop: function (event, ui) {
                refe.newIndexes.emit({
                    startIndex: refe.initialIndex,
                    endIndex: ui.item.index()
                });
            }
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SortableDirective.prototype, "newIndexes", void 0);
    SortableDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appSortable]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], SortableDirective);
    return SortableDirective;
}());



/***/ }),

/***/ "./assignment/pipes/order-by-pipe/order-by-pipe.pipe.ts":
/*!**************************************************************!*\
  !*** ./assignment/pipes/order-by-pipe/order-by-pipe.pipe.ts ***!
  \**************************************************************/
/*! exports provided: OrderByPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderByPipe", function() { return OrderByPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var OrderByPipe = /** @class */ (function () {
    function OrderByPipe() {
    }
    OrderByPipe.prototype.transform = function (array, args) {
        array.sort(function (a, b) {
            if (a.position < b.position) {
                return -1;
            }
            else if (a.position > b.position) {
                return 1;
            }
            else {
                return 0;
            }
        });
        return array;
    };
    OrderByPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'orderBy'
        })
    ], OrderByPipe);
    return OrderByPipe;
}());



/***/ }),

/***/ "./assignment/pipes/safe/safe.pipe.ts":
/*!********************************************!*\
  !*** ./assignment/pipes/safe/safe.pipe.ts ***!
  \********************************************/
/*! exports provided: SafePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafePipe", function() { return SafePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");



var SafePipe = /** @class */ (function () {
    function SafePipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafePipe.prototype.transform = function (url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(String(url));
    };
    SafePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'safe'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
    ], SafePipe);
    return SafePipe;
}());



/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _components_user_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/user/login/login.component */ "./src/app/components/user/login/login.component.ts");
/* harmony import */ var _components_user_register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/user/register/register.component */ "./src/app/components/user/register/register.component.ts");
/* harmony import */ var _components_user_profile_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/user/profile/profile.component */ "./src/app/components/user/profile/profile.component.ts");
/* harmony import */ var _components_page_page_edit_page_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/page/page-edit/page-edit.component */ "./src/app/components/page/page-edit/page-edit.component.ts");
/* harmony import */ var _components_page_page_list_page_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/page/page-list/page-list.component */ "./src/app/components/page/page-list/page-list.component.ts");
/* harmony import */ var _components_page_page_new_page_new_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/page/page-new/page-new.component */ "./src/app/components/page/page-new/page-new.component.ts");
/* harmony import */ var _components_website_website_edit_website_edit_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/website/website-edit/website-edit.component */ "./src/app/components/website/website-edit/website-edit.component.ts");
/* harmony import */ var _components_website_website_list_website_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/website/website-list/website-list.component */ "./src/app/components/website/website-list/website-list.component.ts");
/* harmony import */ var _components_website_website_new_website_new_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/website/website-new/website-new.component */ "./src/app/components/website/website-new/website-new.component.ts");
/* harmony import */ var _components_widget_widget_list_widget_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/widget/widget-list/widget-list.component */ "./src/app/components/widget/widget-list/widget-list.component.ts");
/* harmony import */ var _components_widget_widget_chooser_widget_chooser_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/widget/widget-chooser/widget-chooser.component */ "./src/app/components/widget/widget-chooser/widget-chooser.component.ts");
/* harmony import */ var _components_widget_widget_edit_widget_edit_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/widget/widget-edit/widget-edit.component */ "./src/app/components/widget/widget-edit/widget-edit.component.ts");
/* harmony import */ var _components_widget_widget_edit_widget_image_flickr_image_search_flickr_image_search_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component */ "./src/app/components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.ts");
















var routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: _components_user_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'register', component: _components_user_register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"] },
    { path: 'user/:uid', component: _components_user_profile_profile_component__WEBPACK_IMPORTED_MODULE_5__["ProfileComponent"] },
    { path: 'user/:uid/website', component: _components_website_website_list_website_list_component__WEBPACK_IMPORTED_MODULE_10__["WebsiteListComponent"] },
    { path: 'user/:uid/website/new', component: _components_website_website_new_website_new_component__WEBPACK_IMPORTED_MODULE_11__["WebsiteNewComponent"] },
    { path: 'user/:uid/website/:wid', component: _components_website_website_edit_website_edit_component__WEBPACK_IMPORTED_MODULE_9__["WebsiteEditComponent"] },
    { path: 'user/:uid/website/:wid/page', component: _components_page_page_list_page_list_component__WEBPACK_IMPORTED_MODULE_7__["PageListComponent"] },
    { path: 'user/:uid/website/:wid/page/new', component: _components_page_page_new_page_new_component__WEBPACK_IMPORTED_MODULE_8__["PageNewComponent"] },
    { path: 'user/:uid/website/:wid/page/:pid', component: _components_page_page_edit_page_edit_component__WEBPACK_IMPORTED_MODULE_6__["PageEditComponent"] },
    { path: 'user/:uid/website/:wid/page/:pid/widget', component: _components_widget_widget_list_widget_list_component__WEBPACK_IMPORTED_MODULE_12__["WidgetListComponent"] },
    { path: 'user/:uid/website/:wid/page/:pid/widget/new', component: _components_widget_widget_chooser_widget_chooser_component__WEBPACK_IMPORTED_MODULE_13__["WidgetChooserComponent"] },
    { path: 'user/:uid/website/:wid/page/:pid/widget/:wgid', component: _components_widget_widget_edit_widget_edit_component__WEBPACK_IMPORTED_MODULE_14__["WidgetEditComponent"] },
    { path: 'user/:uid/website/:wid/page/:pid/widget/:wgid/flickr', component: _components_widget_widget_edit_widget_image_flickr_image_search_flickr_image_search_component__WEBPACK_IMPORTED_MODULE_15__["FlickrImageSearchComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            providers: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

//export const AppRoutingModule = RouterModule.forRoot(routes)


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<ul id = \"sortable-1\">-->\n  <!--<li class = \"default\">Product 1</li>-->\n  <!--<li class = \"default\">Product 2</li>-->\n  <!--<li class = \"default\">Product 3</li>-->\n  <!--<li class = \"default\">Product 4</li>-->\n  <!--<li class = \"default\">Product 5</li>-->\n  <!--<li class = \"default\">Product 6</li>-->\n  <!--<li class = \"default\">Product 7</li>-->\n<!--</ul>-->\n\n<!--<p appChangeBgColor [changeBgColor]=\"color\" >Hellow world</p>-->\n\n<!--The content below is only a placeholder and can be replaced.-->\n<!--<a routerLink=\"/login\">Login</a>-->\n<!--<a routerLink=\"/register\">Register</a>-->\n<!--<a routerLink=\"/profile\">Profile</a>-->\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'webdev';
        this.color = 'green';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_user_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/user/login/login.component */ "./src/app/components/user/login/login.component.ts");
/* harmony import */ var _components_user_register_register_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/user/register/register.component */ "./src/app/components/user/register/register.component.ts");
/* harmony import */ var _components_user_profile_profile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/user/profile/profile.component */ "./src/app/components/user/profile/profile.component.ts");
/* harmony import */ var _components_page_page_list_page_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/page/page-list/page-list.component */ "./src/app/components/page/page-list/page-list.component.ts");
/* harmony import */ var _components_page_page_new_page_new_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/page/page-new/page-new.component */ "./src/app/components/page/page-new/page-new.component.ts");
/* harmony import */ var _components_page_page_edit_page_edit_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/page/page-edit/page-edit.component */ "./src/app/components/page/page-edit/page-edit.component.ts");
/* harmony import */ var _components_website_website_list_website_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/website/website-list/website-list.component */ "./src/app/components/website/website-list/website-list.component.ts");
/* harmony import */ var _components_website_website_new_website_new_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/website/website-new/website-new.component */ "./src/app/components/website/website-new/website-new.component.ts");
/* harmony import */ var _components_website_website_edit_website_edit_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/website/website-edit/website-edit.component */ "./src/app/components/website/website-edit/website-edit.component.ts");
/* harmony import */ var _components_widget_widget_chooser_widget_chooser_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/widget/widget-chooser/widget-chooser.component */ "./src/app/components/widget/widget-chooser/widget-chooser.component.ts");
/* harmony import */ var _components_widget_widget_edit_widget_edit_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/widget/widget-edit/widget-edit.component */ "./src/app/components/widget/widget-edit/widget-edit.component.ts");
/* harmony import */ var _components_widget_widget_list_widget_list_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/widget/widget-list/widget-list.component */ "./src/app/components/widget/widget-list/widget-list.component.ts");
/* harmony import */ var _components_widget_widget_edit_widget_header_widget_header_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/widget/widget-edit/widget-header/widget-header.component */ "./src/app/components/widget/widget-edit/widget-header/widget-header.component.ts");
/* harmony import */ var _components_widget_widget_edit_widget_image_widget_image_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/widget/widget-edit/widget-image/widget-image.component */ "./src/app/components/widget/widget-edit/widget-image/widget-image.component.ts");
/* harmony import */ var _components_widget_widget_edit_widget_youtube_widget_youtube_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/widget/widget-edit/widget-youtube/widget-youtube.component */ "./src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.ts");
/* harmony import */ var _components_widget_widget_edit_widget_image_flickr_image_search_flickr_image_search_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component */ "./src/app/components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.ts");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _services_page_service_client__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./services/page.service.client */ "./src/app/services/page.service.client.ts");
/* harmony import */ var _services_widget_service_client__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./services/widget.service.client */ "./src/app/services/widget.service.client.ts");
/* harmony import */ var _services_website_service_client__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./services/website.service.client */ "./src/app/services/website.service.client.ts");
/* harmony import */ var _services_flickr_service_client__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./services/flickr.service.client */ "./src/app/services/flickr.service.client.ts");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./services/shared.service */ "./src/app/services/shared.service.ts");
/* harmony import */ var _assignment_directives_sortable_directive__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../assignment/directives/sortable.directive */ "./assignment/directives/sortable.directive.ts");
/* harmony import */ var _assignment_pipes_order_by_pipe_order_by_pipe_pipe__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../assignment/pipes/order-by-pipe/order-by-pipe.pipe */ "./assignment/pipes/order-by-pipe/order-by-pipe.pipe.ts");
/* harmony import */ var _assignment_pipes_safe_safe_pipe__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../../assignment/pipes/safe/safe.pipe */ "./assignment/pipes/safe/safe.pipe.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _components_widget_widget_edit_widget_html_widget_html_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/widget/widget-edit/widget-html/widget-html.component */ "./src/app/components/widget/widget-edit/widget-html/widget-html.component.ts");
/* harmony import */ var _components_widget_widget_edit_widget_text_widget_text_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/widget/widget-edit/widget-text/widget-text.component */ "./src/app/components/widget/widget-edit/widget-text/widget-text.component.ts");
/* harmony import */ var ngx_quill_editor__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ngx-quill-editor */ "./node_modules/ngx-quill-editor/index.js");



































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _components_user_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
                _components_user_register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"],
                _components_user_profile_profile_component__WEBPACK_IMPORTED_MODULE_8__["ProfileComponent"],
                _components_page_page_list_page_list_component__WEBPACK_IMPORTED_MODULE_9__["PageListComponent"],
                _components_page_page_new_page_new_component__WEBPACK_IMPORTED_MODULE_10__["PageNewComponent"],
                _components_page_page_edit_page_edit_component__WEBPACK_IMPORTED_MODULE_11__["PageEditComponent"],
                _components_website_website_list_website_list_component__WEBPACK_IMPORTED_MODULE_12__["WebsiteListComponent"],
                _components_website_website_new_website_new_component__WEBPACK_IMPORTED_MODULE_13__["WebsiteNewComponent"],
                _components_website_website_edit_website_edit_component__WEBPACK_IMPORTED_MODULE_14__["WebsiteEditComponent"],
                _components_widget_widget_chooser_widget_chooser_component__WEBPACK_IMPORTED_MODULE_15__["WidgetChooserComponent"],
                _components_widget_widget_edit_widget_edit_component__WEBPACK_IMPORTED_MODULE_16__["WidgetEditComponent"],
                _components_widget_widget_list_widget_list_component__WEBPACK_IMPORTED_MODULE_17__["WidgetListComponent"],
                _components_widget_widget_edit_widget_header_widget_header_component__WEBPACK_IMPORTED_MODULE_18__["WidgetHeaderComponent"],
                _components_widget_widget_edit_widget_image_widget_image_component__WEBPACK_IMPORTED_MODULE_19__["WidgetImageComponent"],
                _components_widget_widget_edit_widget_youtube_widget_youtube_component__WEBPACK_IMPORTED_MODULE_20__["WidgetYoutubeComponent"],
                _components_widget_widget_edit_widget_image_flickr_image_search_flickr_image_search_component__WEBPACK_IMPORTED_MODULE_21__["FlickrImageSearchComponent"],
                _assignment_directives_sortable_directive__WEBPACK_IMPORTED_MODULE_28__["SortableDirective"],
                _assignment_pipes_order_by_pipe_order_by_pipe_pipe__WEBPACK_IMPORTED_MODULE_29__["OrderByPipe"],
                _assignment_pipes_safe_safe_pipe__WEBPACK_IMPORTED_MODULE_30__["SafePipe"],
                _components_widget_widget_edit_widget_html_widget_html_component__WEBPACK_IMPORTED_MODULE_32__["WidgetHtmlComponent"],
                _components_widget_widget_edit_widget_text_widget_text_component__WEBPACK_IMPORTED_MODULE_33__["WidgetTextComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_31__["HttpClientModule"],
                ngx_quill_editor__WEBPACK_IMPORTED_MODULE_34__["QuillEditorModule"]
            ],
            providers: [_services_user_service_client__WEBPACK_IMPORTED_MODULE_22__["UserService"], _services_page_service_client__WEBPACK_IMPORTED_MODULE_23__["PageService"], _services_website_service_client__WEBPACK_IMPORTED_MODULE_25__["WebsiteService"], _services_widget_service_client__WEBPACK_IMPORTED_MODULE_24__["WidgetService"], _services_flickr_service_client__WEBPACK_IMPORTED_MODULE_26__["FlickrService"], _services_shared_service__WEBPACK_IMPORTED_MODULE_27__["SharedService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/page/page-edit/page-edit.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/components/page/page-edit/page-edit.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZS9wYWdlLWVkaXQvcGFnZS1lZGl0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/page/page-edit/page-edit.component.html":
/*!********************************************************************!*\
  !*** ./src/app/components/page/page-edit/page-edit.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-light bg-light\">\n  <form class=\"form-inline\">\n    <a class=\"navbar-brand\" routerLink=\"/user/{{userId}}/website/{{websiteId}}/page\">\n      <span class=\"fa fa-chevron-left rotate\"></span>\n    </a>\n    <a class=\"navbar-text cl-text-bold\" [routerLink]=\"\">\n      Edit Page\n    </a>\n  </form>\n  <ul class=\"navbar-nav ml-auto\">\n    <a (click)=\"update()\" routerLink=\"/user/{{userId}}/website/{{websiteId}}/page\" class=\"navbar-brand pull-right\">\n      <span class=\"fa fa-check\"></span>\n    </a>\n  </ul>\n</nav>\n\n<div class=\"container-fluid\">\n  <form #inputForm=\"ngForm\">\n    <div class=\"form-group\">\n      <label for=\"page-name\"><h5>Name</h5></label>\n      <input type=\"text\" class=\"form-control\" id=\"page-name\" placeholder=\"Page Name\" name=\"name\" [(ngModel)]=\"page.name\" required>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"page-title\"><h5>Title</h5></label>\n      <input type=\"text\" class=\"form-control\" id=\"page-title\" placeholder=\"Page Title\" name=\"title\" [(ngModel)]=\"page.title\" required>\n    </div>\n    <a class=\"btn btn-danger  btn-block\"\n       (click)=\"delete()\" routerLink=\"/user/{{userId}}/website/{{websiteId}}/page\">Delete</a>\n  </form>\n</div>\n\n<nav class=\"navbar fixed-bottom navbar-light bg-light\">\n  <ul class=\"navbar-nav ml-auto\">\n    <a class=\"navbar-brand pull-right\" routerLink=\"/user/{{userId}}\">\n      <span class=\"fa fa-user\"></span>\n    </a>\n  </ul>\n</nav>\n"

/***/ }),

/***/ "./src/app/components/page/page-edit/page-edit.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/page/page-edit/page-edit.component.ts ***!
  \******************************************************************/
/*! exports provided: PageEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageEditComponent", function() { return PageEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_page_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/page.service.client */ "./src/app/services/page.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var PageEditComponent = /** @class */ (function () {
    function PageEditComponent(pageService, activatedRoute) {
        this.pageService = pageService;
        this.activatedRoute = activatedRoute;
    }
    PageEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.userId = params['uid'];
            _this.websiteId = params['wid'];
            _this.pageId = params['pid'];
            return _this.pageService.findPageById(_this.pageId).subscribe(function (page) {
                _this.page = page;
            });
        });
    };
    PageEditComponent.prototype.delete = function () {
        return this.pageService.deletePage(this.pageId).subscribe(function (date) {
            console.log('delete page');
        });
    };
    PageEditComponent.prototype.update = function () {
        var _this = this;
        var newPage = {
            name: this.updateForm.value.name,
            websiteId: this.websiteId,
            title: this.updateForm.value.title
        };
        return this.pageService.updatePage(this.pageId, newPage).subscribe(function (page) {
            _this.page.name = page.name;
            _this.page.websiteId = page.websiteId;
            _this.page.title = page.title;
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('inputForm'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"])
    ], PageEditComponent.prototype, "updateForm", void 0);
    PageEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-edit',
            template: __webpack_require__(/*! ./page-edit.component.html */ "./src/app/components/page/page-edit/page-edit.component.html"),
            styles: [__webpack_require__(/*! ./page-edit.component.css */ "./src/app/components/page/page-edit/page-edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_page_service_client__WEBPACK_IMPORTED_MODULE_2__["PageService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], PageEditComponent);
    return PageEditComponent;
}());



/***/ }),

/***/ "./src/app/components/page/page-list/page-list.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/components/page/page-list/page-list.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZS9wYWdlLWxpc3QvcGFnZS1saXN0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/page/page-list/page-list.component.html":
/*!********************************************************************!*\
  !*** ./src/app/components/page/page-list/page-list.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-light bg-light\">\n  <form class=\"form-inline\">\n    <a class=\"navbar-brand pull-left\" routerLink=\"/user/{{userId}}/website\">\n      <span class=\"fa fa-chevron-left rotate\"></span>\n    </a>\n    <a class=\"navbar-text cl-text-bold\" [routerLink]=\"\">\n      Pages\n    </a>\n  </form>\n  <ul class=\"navbar-nav ml-auto\">\n    <a class=\"navbar-brand pull-right\" routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/new\">\n      <span class=\"fa fa-plus\"></span>\n    </a>\n  </ul>\n</nav>\n\n<div class=\"container-fluid\">\n  <ul class=\"list-group cl-list-group-borderless\">\n    <li class=\"list-group-item cl-list-item-borderless\" *ngFor = \"let page of pages\">\n      <a routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{page._id}}\"><span class=\"fa fa-cog pull-right\"></span></a>\n      <a routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{page._id}}/widget\" class=\"list-name\">{{page.name}}</a>\n    </li>\n  </ul>\n</div>\n\n<nav class=\"navbar fixed-bottom navbar-light bg-light\">\n  <ul class=\"navbar-nav ml-auto\">\n    <a class=\"navbar-brand pull-right\" routerLink=\"/user/{{userId}}\">\n      <span class=\"fa fa-user\"></span>\n    </a>\n  </ul>\n</nav>\n"

/***/ }),

/***/ "./src/app/components/page/page-list/page-list.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/page/page-list/page-list.component.ts ***!
  \******************************************************************/
/*! exports provided: PageListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageListComponent", function() { return PageListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_page_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/page.service.client */ "./src/app/services/page.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var PageListComponent = /** @class */ (function () {
    function PageListComponent(pageService, activatedRoute) {
        this.pageService = pageService;
        this.activatedRoute = activatedRoute;
        this.pages = [];
    }
    PageListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.userId = params['uid'];
            _this.websiteId = params['wid'];
            return _this.pageService.findPageByWebsiteId(_this.websiteId).subscribe(function (pages) {
                _this.pages = pages;
            });
        });
    };
    PageListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-list',
            template: __webpack_require__(/*! ./page-list.component.html */ "./src/app/components/page/page-list/page-list.component.html"),
            styles: [__webpack_require__(/*! ./page-list.component.css */ "./src/app/components/page/page-list/page-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_page_service_client__WEBPACK_IMPORTED_MODULE_2__["PageService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], PageListComponent);
    return PageListComponent;
}());



/***/ }),

/***/ "./src/app/components/page/page-new/page-new.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/components/page/page-new/page-new.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZS9wYWdlLW5ldy9wYWdlLW5ldy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/page/page-new/page-new.component.html":
/*!******************************************************************!*\
  !*** ./src/app/components/page/page-new/page-new.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-light bg-light\">\n\n  <form class=\"form-inline\">\n    <a class=\"navbar-brand float-left\" routerLink=\"/user/{{userId}}/website/{{websiteId}}/page\">\n      <span class=\"fa fa-chevron-left rotate\"></span>\n    </a>\n    <a class=\"navbar-text cl-text-bold\" [routerLink]=\"\">\n      New Page\n    </a>\n  </form>\n  <ul class=\"navbar-nav ml-auto\">\n    <a (click)=\"create()\" routerLink=\"/user/{{userId}}/website/{{websiteId}}/page\" class=\"navbar-brand pull-right\">\n      <span class=\"fa fa-check\"></span>\n    </a>\n  </ul>\n</nav>\n\n<div class=\"container-fluid\">\n  <form #inputForm=\"ngForm\">\n    <div class=\"form-group\">\n      <label for=\"page-name\"><h5>Name</h5></label>\n      <input type=\"text\" class=\"form-control\" id=\"page-name\" name=\"name\" placeholder=\"Page Name\" ngModel required #name=\"ngModel\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"page-title\"><h5>Title</h5></label>\n      <input type=\"text\" class=\"form-control\" id=\"page-title\" name=\"title\" placeholder=\"Page Title\" ngModel required #title=\"ngModel\">\n    </div>\n  </form>\n</div>\n\n<nav class=\"navbar fixed-bottom navbar-light bg-light\">\n  <ul class=\"navbar-nav ml-auto\">\n    <a class=\"navbar-brand pull-right\" routerLink=\"/user/{{userId}}\">\n      <span class=\"fa fa-user\"></span>\n    </a>\n  </ul>\n</nav>\n"

/***/ }),

/***/ "./src/app/components/page/page-new/page-new.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/page/page-new/page-new.component.ts ***!
  \****************************************************************/
/*! exports provided: PageNewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNewComponent", function() { return PageNewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_page_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/page.service.client */ "./src/app/services/page.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var PageNewComponent = /** @class */ (function () {
    function PageNewComponent(pageService, activatedRoute) {
        this.pageService = pageService;
        this.activatedRoute = activatedRoute;
    }
    PageNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.userId = params['uid'];
            _this.websiteId = params['wid'];
        });
    };
    PageNewComponent.prototype.create = function () {
        var new_page = {
            name: this.createForm.value.name,
            websiteId: this.websiteId,
            title: this.createForm.value.title
        };
        return this.pageService.createPage(new_page).subscribe(function (page) {
            console.log('create');
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('inputForm'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"])
    ], PageNewComponent.prototype, "createForm", void 0);
    PageNewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-new',
            template: __webpack_require__(/*! ./page-new.component.html */ "./src/app/components/page/page-new/page-new.component.html"),
            styles: [__webpack_require__(/*! ./page-new.component.css */ "./src/app/components/page/page-new/page-new.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_page_service_client__WEBPACK_IMPORTED_MODULE_2__["PageService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], PageNewComponent);
    return PageNewComponent;
}());



/***/ }),

/***/ "./src/app/components/user/login/login.component.css":
/*!***********************************************************!*\
  !*** ./src/app/components/user/login/login.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlci9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/user/login/login.component.html":
/*!************************************************************!*\
  !*** ./src/app/components/user/login/login.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div *ngIf=\"errorFlag\" class=\"alert alert-danger\">\n    {{errorMsg}}\n  </div>\n\n  <h1>Login</h1>\n  <form (ngSubmit)=\"login()\" #inputForm=\"ngForm\">\n\n    <div class=\"form-group\">\n      <input type=\"text\" name=\"username\" placeholder=\"username\" class=\"form-control\" ngModel required #username=\"ngModel\">\n    </div>\n    <span class=\"help-block\" *ngIf=\"!username.valid && username.touched\">\n      Please enter username!\n    </span>\n\n    <div class=\"form-group\">\n      <input type=\"password\" name=\"password\" placeholder=\"password\" class=\"form-control\" ngModel required #password=\"ngModel\">\n    </div>\n    <span class=\"help-block\" *ngIf=\"!password.valid && password.touched\">\n      Please enter password!\n    </span>\n\n    <div class=\"form-group\">\n      <button [disabled]=\"!inputForm.valid\" class=\"btn btn-primary btn-block\" type=\"submit\">Login</button>\n    </div>\n\n    <div class=\"form-group\">\n      <a routerLink=\"/register\" class=\"btn btn-success btn-block\">Register</a>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/components/user/login/login.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/components/user/login/login.component.ts ***!
  \**********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/user.service.client */ "./src/app/services/user.service.client.ts");





var LoginComponent = /** @class */ (function () {
    function LoginComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.errorMsg = 'Invalid username or password !';
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        var username = this.loginForm.value.username;
        var password = this.loginForm.value.password;
        return this.userService.findUserByCredentials(username, password).subscribe(function (user) {
            if (user) {
                _this.router.navigate(['/user', user._id]);
            }
            else {
                _this.errorFlag = true;
            }
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('inputForm'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"])
    ], LoginComponent.prototype, "loginForm", void 0);
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/user/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/user/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service_client__WEBPACK_IMPORTED_MODULE_4__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/user/profile/profile.component.css":
/*!***************************************************************!*\
  !*** ./src/app/components/user/profile/profile.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlci9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/user/profile/profile.component.html":
/*!****************************************************************!*\
  !*** ./src/app/components/user/profile/profile.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-dark cl-blue-navbar\">\n  <a class=\"navbar-brand\" [routerLink]=\"\">\n    Profile\n  </a>\n  <a class=\"navbar-brand pull-right\" (click)=\"updateUser()\" routerLink=\"/user/{{user._id}}\">\n    <span class=\"fa fa-check\"></span>\n  </a>\n</nav>\n<div class=\"container main\">\n  <form #inputForm=\"ngForm\">\n    <div class=\"form-group\">\n      <label for=\"username\">\n        <h5>Username</h5>\n      </label>\n      <input type=\"text\" id='username' name='username' class=\"form-control\" [(ngModel)]=\"user.username\" required>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"email\">\n        <h5>Email address</h5>\n      </label>\n      <input type=\"email\" id=\"email\" name='email' class=\"form-control\" [(ngModel)]=\"user.email\" required>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"first-name\">\n        <h5>First Name</h5>\n      </label>\n      <input type=\"text\" id=\"first-name\" name='firstName' class=\"form-control\" [(ngModel)]=\"user.firstName\" required>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"last-name\">\n        <h5>Last Name</h5>\n      </label>\n      <input type=\"text\" id=\"last-name\" name='lastName' class=\"form-control\" [(ngModel)]=\"user.lastName\" required>\n    </div>\n\n    <div class=\"form-group\">\n      <a class=\"btn btn-block btn-primary\"\n         routerLink=\"/user/{{user._id}}/website\">\n        Websites\n      </a>\n    </div>\n\n    <div class=\"form-group\">\n      <button class=\"btn btn-danger btn-block\" routerLink=\"/login\">Logout</button>\n    </div>\n\n  </form>\n</div>\n<nav class=\"navbar navbar-dark fixed-bottom cl-blue-navbar\"></nav>\n"

/***/ }),

/***/ "./src/app/components/user/profile/profile.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/user/profile/profile.component.ts ***!
  \**************************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(userService, route) {
        this.userService = userService;
        this.route = route;
    }
    ProfileComponent.prototype.updateUser = function () {
        var _this = this;
        var newUser = {
            username: this.user.username,
            firstName: this.user.firstName,
            lastName: this.user.lastName,
            email: this.user.email,
        };
        return this.userService.updateUser(newUser, this.user._id).subscribe(function (user) {
            _this.user.username = user.username;
            _this.user.firstName = user.firstName;
            _this.user.lastName = user.lastName;
            _this.user.email = user.email;
        });
    };
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            return _this.userService.findUserById(params['uid']).subscribe(function (user) {
                _this.user = user;
            });
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('inputForm'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"])
    ], ProfileComponent.prototype, "createForm", void 0);
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/components/user/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/components/user/profile/profile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service_client__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/user/register/register.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/components/user/register/register.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlci9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/user/register/register.component.html":
/*!******************************************************************!*\
  !*** ./src/app/components/user/register/register.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div *ngIf=\"errorFlag\" class=\"alert alert-danger\">\n    {{errorMsg}}\n  </div>\n\n  <h1>Register</h1>\n  <form #inputForm=\"ngForm\">\n\n    <div class=\"form-group\">\n      <input type=\"text\" name=\"username\" placeholder=\"username\" class=\"form-control\" ngModel required #username=\"ngModel\">\n    </div>\n    <span class=\"help-block\" *ngIf=\"!username.valid && username.touched\">\n      Please enter username!\n    </span>\n\n    <div class=\"form-group\">\n      <input type=\"password\" name=\"password\" placeholder=\"password\" class=\"form-control\" ngModel required #password=\"ngModel\">\n    </div>\n    <span class=\"help-block\" *ngIf=\"!password.valid && password.touched\">\n      Please enter password!\n    </span>\n\n    <div class=\"form-group\">\n      <input type=\"password\" name=\"v_password\" placeholder=\"verify password\" class=\"form-control\" ngModel required #v_password=\"ngModel\">\n    </div>\n    <span class=\"help-block\" *ngIf=\"!v_password.valid && v_password.touched\">\n      Please enter verify password!\n    </span>\n\n    <div class=\"form-group\">\n      <input type=\"text\" name=\"firstName\" placeholder=\"firstName\" class=\"form-control\" ngModel required #firstName=\"ngModel\">\n    </div>\n    <span class=\"help-block\" *ngIf=\"!firstName.valid && firstName.touched\">\n      Please enter firstName!\n    </span>\n\n    <div class=\"form-group\">\n      <input type=\"text\" name=\"lastName\" placeholder=\"lastName\" class=\"form-control\" ngModel required #lastName=\"ngModel\">\n    </div>\n    <span class=\"help-block\" *ngIf=\"!lastName.valid && lastName.touched\">\n      Please enter lastName!\n    </span>\n\n    <div class=\"form-group\">\n      <button [disabled]=\"!inputForm.valid\" class=\"btn btn-primary btn-block\" type=\"submit\" routerLink=\"/login\" (click)=\"register()\">Register</button>\n    </div>\n\n    <div class=\"form-group\">\n      <a routerLink=\"/login\" class=\"btn btn-danger btn-block\">Cancel</a>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/components/user/register/register.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/user/register/register.component.ts ***!
  \****************************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");




var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(userService) {
        this.userService = userService;
        this.errorMsg = 'Password mis-matching!';
    }
    RegisterComponent.prototype.register = function () {
        var password = this.registerForm.value.password;
        var v_password = this.registerForm.value.v_password;
        if (v_password === password) {
            this.errorFlag = false;
            var newUser = {
                username: this.registerForm.value.username,
                password: this.registerForm.value.password,
                firstName: this.registerForm.value.firstName,
                lastName: this.registerForm.value.lastName
            };
            this.userService.createUser(newUser).subscribe(function (user) { return console.log('register!'); });
        }
        else {
            this.errorFlag = true;
        }
    };
    RegisterComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('inputForm'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"])
    ], RegisterComponent.prototype, "registerForm", void 0);
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/components/user/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/components/user/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service_client__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/components/website/website-edit/website-edit.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/website/website-edit/website-edit.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvd2Vic2l0ZS93ZWJzaXRlLWVkaXQvd2Vic2l0ZS1lZGl0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/website/website-edit/website-edit.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/website/website-edit/website-edit.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-dark cl-blue-navbar\">\n  <div class=\"row container-fluid\">\n    <div class=\"col-sm-4 d-none d-sm-block\">\n      <a class=\"navbar-brand float-left\" routerLink=\"/user/{{userId}}/website\">\n        <span class=\"fa fa-chevron-left rotate\"></span>\n      </a>\n      <a class=\"navbar-brand\" [routerLink]=\"\">\n        Websites\n      </a>\n      <a routerLink=\"/user/{{userId}}/website/new\" class=\"navbar-brand pull-right\">\n        <span class=\"fa fa-plus\"></span>\n      </a>\n    </div>\n    <div class=\"col-sm-8 text-left\">\n      <a class=\"navbar-brand \" href=\"#\">\n        Edit Websites\n      </a>\n      <a (click)=\"update()\" routerLink=\"/user/{{userId}}/website\" class=\"navbar-brand pull-right\">\n        <span class=\"fa fa-check\"></span>\n      </a>\n    </div>\n  </div>\n</nav>\n\n<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-sm-4 d-none d-sm-block\">\n      <ul class=\"list-group cl-list-group-borderless\">\n        <li class=\"list-group-item cl-list-item-borderless\"  *ngFor = \"let website of websites\">\n          <a routerLink=\"/user/{{userId}}/website/{{website._id}}\"><span class=\"fa fa-cog pull-right\"></span></a>\n          <a routerLink=\"/user/{{userId}}/website/{{website._id}}/page\" class=\"list-name\">{{website.name}}</a>\n        </li>\n      </ul>\n    </div>\n    <div class=\"col-sm-8\">\n      <form #inputForm=\"ngForm\">\n        <div class=\"form-group\">\n          <label for=\"website-name\"><h5>Website Name</h5></label>\n          <input type=\"text\" class=\"form-control\" id=\"website-name\" placeholder=\"Name\" name=\"name\" [(ngModel)]=\"website.name\" required>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"website-description\"><h5>Website Description</h5></label>\n          <textarea id=\"website-description\" class=\"form-control\" rows=\"5\" placeholder=\"Description\" name=\"description\" [(ngModel)]=\"website.description\"></textarea>\n        </div>\n        <a class=\"btn btn-danger  btn-block\"\n           (click)=\"delete()\" routerLink=\"/user/{{userId}}/website\">Delete</a>\n      </form>\n    </div>\n  </div>\n</div>\n\n<nav class=\"navbar navbar-dark fixed-bottom cl-blue-navbar\">\n  <ul class=\"navbar-nav ml-auto\">\n    <a class=\"navbar-brand pull-right\" routerLink=\"/user/{{userId}}\">\n      <span class=\"fa fa-user\"></span>\n    </a>\n  </ul>\n</nav>\n"

/***/ }),

/***/ "./src/app/components/website/website-edit/website-edit.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/website/website-edit/website-edit.component.ts ***!
  \***************************************************************************/
/*! exports provided: WebsiteEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsiteEditComponent", function() { return WebsiteEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_website_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/website.service.client */ "./src/app/services/website.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");






var WebsiteEditComponent = /** @class */ (function () {
    function WebsiteEditComponent(websiteService, activatedRoute, router) {
        this.websiteService = websiteService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.websites = [];
    }
    WebsiteEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.userId = params['uid'];
            _this.website_id = params['wid'];
            return _this.websiteService.findWebsitesById(_this.userId, _this.website_id).subscribe(function (website) {
                _this.website = website;
                return _this.websiteService.findWebsitesByUser(_this.userId).subscribe(function (websites) {
                    _this.websites = websites;
                });
            });
        });
    };
    WebsiteEditComponent.prototype.delete = function () {
        return this.websiteService.deleteWebsite(this.userId, this.website_id).subscribe(function (data) {
            console.log('delete website');
        });
    };
    WebsiteEditComponent.prototype.update = function () {
        var _this = this;
        var newWebsite = {
            name: this.createForm.value.name,
            developerId: this.userId,
            description: this.createForm.value.description
        };
        return this.websiteService.updateWebsite(newWebsite, this.website._id).subscribe(function (website) {
            _this.website.name = website.name;
            _this.website.developerId = website.developerId;
            _this.website.description = website.description;
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('inputForm'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"])
    ], WebsiteEditComponent.prototype, "createForm", void 0);
    WebsiteEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-website-edit',
            template: __webpack_require__(/*! ./website-edit.component.html */ "./src/app/components/website/website-edit/website-edit.component.html"),
            styles: [__webpack_require__(/*! ./website-edit.component.css */ "./src/app/components/website/website-edit/website-edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_website_service_client__WEBPACK_IMPORTED_MODULE_2__["WebsiteService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], WebsiteEditComponent);
    return WebsiteEditComponent;
}());



/***/ }),

/***/ "./src/app/components/website/website-list/website-list.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/website/website-list/website-list.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvd2Vic2l0ZS93ZWJzaXRlLWxpc3Qvd2Vic2l0ZS1saXN0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/website/website-list/website-list.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/website/website-list/website-list.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-dark cl-blue-navbar\">\n  <form class=\"form-inline\">\n    <a class=\"navbar-brand pull-left\" routerLink=\"/user/{{userId}}\">\n      <span class=\"fa fa-chevron-left rotate\"></span>\n    </a>\n    <a class=\"navbar-brand\" [routerLink]=\"\">\n      Websites\n    </a>\n  </form>\n  <ul class=\"navbar-nav ml-auto\">\n    <a class=\"navbar-brand pull-right\" routerLink=\"new\">\n      <span class=\"fa fa-plus\"></span>\n    </a>\n  </ul>\n</nav>\n\n<div class=\"container-fluid\">\n  <ul class=\"list-group cl-list-group-borderless\">\n    <li class=\"list-group-item cl-list-item-borderless\"  *ngFor = \"let website of websites\">\n      <a routerLink=\"{{website._id}}\"><span class=\"fa fa-cog pull-right\"></span></a>\n      <a routerLink=\"{{website._id}}/page\" class=\"list-name\">{{website.name}}</a>\n    </li>\n  </ul>\n</div>\n\n<nav class=\"navbar navbar-dark fixed-bottom cl-blue-navbar\">\n  <ul class=\"navbar-nav ml-auto\">\n    <a class=\"navbar-brand pull-right\" routerLink=\"/user/{{userId}}\">\n      <span class=\"fa fa-user\"></span>\n    </a>\n  </ul>\n</nav>\n"

/***/ }),

/***/ "./src/app/components/website/website-list/website-list.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/website/website-list/website-list.component.ts ***!
  \***************************************************************************/
/*! exports provided: WebsiteListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsiteListComponent", function() { return WebsiteListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_website_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/website.service.client */ "./src/app/services/website.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var WebsiteListComponent = /** @class */ (function () {
    function WebsiteListComponent(websiteService, activatedRoute) {
        this.websiteService = websiteService;
        this.activatedRoute = activatedRoute;
        this.websites = [];
    }
    WebsiteListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.userId = params['uid'];
            return _this.websiteService.findWebsitesByUser(_this.userId).subscribe(function (websites) {
                _this.websites = websites;
            });
        });
    };
    WebsiteListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-website-list',
            template: __webpack_require__(/*! ./website-list.component.html */ "./src/app/components/website/website-list/website-list.component.html"),
            styles: [__webpack_require__(/*! ./website-list.component.css */ "./src/app/components/website/website-list/website-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_website_service_client__WEBPACK_IMPORTED_MODULE_2__["WebsiteService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], WebsiteListComponent);
    return WebsiteListComponent;
}());



/***/ }),

/***/ "./src/app/components/website/website-new/website-new.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/website/website-new/website-new.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvd2Vic2l0ZS93ZWJzaXRlLW5ldy93ZWJzaXRlLW5ldy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/website/website-new/website-new.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/website/website-new/website-new.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-dark cl-blue-navbar\">\n  <div class=\"row container-fluid\">\n    <div class=\"col-sm-4 d-none d-sm-block\">\n      <a class=\"navbar-brand float-left\" routerLink=\"/user/{{userId}}/website\">\n        <span class=\"fa fa-chevron-left rotate\"></span>\n      </a>\n      <a class=\"navbar-brand\" [routerLink]=\"\">\n        Websites\n      </a>\n      <a routerLink=\"/user/{{userId}}/website/new\" class=\"navbar-brand pull-right\">\n        <span class=\"fa fa-plus\"></span>\n      </a>\n    </div>\n    <div class=\"col-sm-8 text-left\">\n      <a class=\"navbar-brand \" href=\"#\">\n        New Websites\n      </a>\n      <a class=\"navbar-brand float-right\" routerLink=\"/user/{{userId}}/website\" (click)=\"create()\">\n        <span class=\"fa fa-check\"></span>\n      </a>\n    </div>\n  </div>\n</nav>\n\n<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-sm-4 d-none d-sm-block\">\n      <ul class=\"list-group cl-list-group-borderless\">\n        <li class=\"list-group-item cl-list-item-borderless\"  *ngFor = \"let website of websites\">\n          <a routerLink=\"/user/{{userId}}/website/{{website._id}}\"><span class=\"fa fa-cog pull-right\"></span></a>\n          <a routerLink=\"/user/{{userId}}/website/{{website._id}}/page\" class=\"list-name\">{{website.name}}</a>\n        </li>\n      </ul>\n    </div>\n    <div class=\"col-sm-8\">\n      <form #inputForm=\"ngForm\">\n        <div class=\"form-group\">\n          <label for=\"website-name\"><h5>Name</h5></label>\n          <input type=\"text\" id=\"website-name\" name=\"name\" placeholder=\"Name\" class=\"form-control\" ngModel required #name=\"ngModel\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"website-description\"><h5>Description</h5></label>\n          <input type=\"text\" id=\"website-description\" name=\"description\" placeholder=\"Description\" class=\"form-control\" ngModel required #description=\"ngModel\">\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n\n<nav class=\"navbar navbar-dark fixed-bottom cl-blue-navbar\">\n  <ul class=\"navbar-nav ml-auto\">\n    <a class=\"navbar-brand pull-right\" routerLink=\"/user/{{userId}}\">\n      <span class=\"fa fa-user\"></span>\n    </a>\n  </ul>\n</nav>\n"

/***/ }),

/***/ "./src/app/components/website/website-new/website-new.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/website/website-new/website-new.component.ts ***!
  \*************************************************************************/
/*! exports provided: WebsiteNewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsiteNewComponent", function() { return WebsiteNewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_website_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/website.service.client */ "./src/app/services/website.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var WebsiteNewComponent = /** @class */ (function () {
    function WebsiteNewComponent(websiteService, activatedRoute) {
        this.websiteService = websiteService;
        this.activatedRoute = activatedRoute;
        this.websites = [];
    }
    WebsiteNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.userId = params['uid'];
            return _this.websiteService.findWebsitesByUser(_this.userId).subscribe(function (websites) {
                _this.websites = websites;
            });
        });
    };
    WebsiteNewComponent.prototype.create = function () {
        var _this = this;
        var newWebsite = {
            name: this.createForm.value.name,
            developerId: this.userId,
            description: this.createForm.value.description
        };
        return this.websiteService.createWebsite(newWebsite).subscribe(function (website) {
            _this.website = website;
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('inputForm'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"])
    ], WebsiteNewComponent.prototype, "createForm", void 0);
    WebsiteNewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-website-new',
            template: __webpack_require__(/*! ./website-new.component.html */ "./src/app/components/website/website-new/website-new.component.html"),
            styles: [__webpack_require__(/*! ./website-new.component.css */ "./src/app/components/website/website-new/website-new.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_website_service_client__WEBPACK_IMPORTED_MODULE_2__["WebsiteService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], WebsiteNewComponent);
    return WebsiteNewComponent;
}());



/***/ }),

/***/ "./src/app/components/widget/widget-chooser/widget-chooser.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/components/widget/widget-chooser/widget-chooser.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvd2lkZ2V0L3dpZGdldC1jaG9vc2VyL3dpZGdldC1jaG9vc2VyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/widget/widget-chooser/widget-chooser.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/components/widget/widget-chooser/widget-chooser.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-light bg-light\">\n  <form class=\"form-inline\">\n    <a class=\"navbar-brand pull-left\" routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget\">\n      <span class=\"fa fa-chevron-left rotate\"></span>\n    </a>\n    <a class=\"navbar-text cl-text-bold\" [routerLink]=\"\">\n      Choose Widget\n    </a>\n  </form>\n</nav>\n\n<div class=\"container-fluid\">\n  <ul class=\"list-group cl-list-group-borderless\">\n    <li class=\"list-group-item cl-list-item-borderless\">\n      <a [routerLink]=\"\" (click)=\"create('HEADING')\" class=\"list-name\">Header</a>\n    </li>\n    <li class=\"list-group-item cl-list-item-borderless\">\n      <a href=\"#\" class=\"list-name\">Label</a>\n    </li>\n    <li class=\"list-group-item cl-list-item-borderless\">\n      <a [routerLink]=\"\" (click)=\"create('HTML')\" class=\"list-name\">HTML</a>\n    </li>\n    <li class=\"list-group-item cl-list-item-borderless\">\n      <a [routerLink]=\"\" (click)=\"create('TEXT')\" class=\"list-name\">Text</a>\n    </li>\n    <li class=\"list-group-item cl-list-item-borderless\">\n      <a href=\"#\" class=\"list-name\">Link</a>\n    </li>\n    <li class=\"list-group-item cl-list-item-borderless\">\n      <a href=\"#\" class=\"list-name\">Button</a>\n    </li>\n    <li class=\"list-group-item cl-list-item-borderless\">\n      <a [routerLink]=\"\" (click)=\"create('IMAGE')\" class=\"list-name\">Image</a>\n    </li>\n    <li class=\"list-group-item cl-list-item-borderless\">\n      <a [routerLink]=\"\" (click)=\"create('YOUTUBE')\" class=\"list-name\">YouTube</a>\n    </li>\n    <li class=\"list-group-item cl-list-item-borderless\">\n      <a href=\"#\" class=\"list-name\">Data Table</a>\n    </li>\n    <li class=\"list-group-item cl-list-item-borderless\">\n      <a href=\"#\" class=\"list-name\">Repeater</a>\n    </li>\n  </ul>\n</div>\n\n<nav class=\"navbar fixed-bottom navbar-light bg-light\">\n  <ul class=\"navbar-nav ml-auto\">\n    <a class=\"navbar-brand pull-right\" href=\"/user/{{userId}}\">\n      <span class=\"fa fa-user\"></span>\n    </a>\n  </ul>\n</nav>\n"

/***/ }),

/***/ "./src/app/components/widget/widget-chooser/widget-chooser.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/components/widget/widget-chooser/widget-chooser.component.ts ***!
  \******************************************************************************/
/*! exports provided: WidgetChooserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetChooserComponent", function() { return WidgetChooserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_widget_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/widget.service.client */ "./src/app/services/widget.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var WidgetChooserComponent = /** @class */ (function () {
    function WidgetChooserComponent(widgetService, activatedRoute, router) {
        this.widgetService = widgetService;
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    WidgetChooserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.userId = params['uid'];
            _this.websiteId = params['wid'];
            _this.pageId = params['pid'];
        });
    };
    WidgetChooserComponent.prototype.create = function (type) {
        var _this = this;
        var newWidget = {
            widgetType: type,
            pageId: this.pageId,
            size: 4,
            name: '',
            text: 'default',
            url: '',
            width: 4,
            rows: 0,
            placeholder: '',
            formatted: false
        };
        return this.widgetService.createWidget(newWidget).subscribe(function (widget) {
            _this.router.navigate(['/user/' + _this.userId + '/website/' + _this.websiteId + '/page/' + _this.pageId + '/widget/' + widget._id]);
        });
    };
    WidgetChooserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-chooser',
            template: __webpack_require__(/*! ./widget-chooser.component.html */ "./src/app/components/widget/widget-chooser/widget-chooser.component.html"),
            styles: [__webpack_require__(/*! ./widget-chooser.component.css */ "./src/app/components/widget/widget-chooser/widget-chooser.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_widget_service_client__WEBPACK_IMPORTED_MODULE_2__["WidgetService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], WidgetChooserComponent);
    return WidgetChooserComponent;
}());



/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-edit.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/components/widget/widget-edit/widget-edit.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvd2lkZ2V0L3dpZGdldC1lZGl0L3dpZGdldC1lZGl0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-edit.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/components/widget/widget-edit/widget-edit.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [ngSwitch]=\"widget.widgetType\">\n  <div *ngSwitchCase=\"'HEADING'\">\n    <app-widget-header [widget]=\"widget\" [userId]=\"userId\" [websiteId]=\"websiteId\" [pageId]=\"pageId\"></app-widget-header>\n  </div>\n  <div *ngSwitchCase=\"'IMAGE'\">\n    <app-widget-image [widget]=\"widget\" [userId]=\"userId\" [websiteId]=\"websiteId\" [pageId]=\"pageId\"></app-widget-image>\n  </div>\n  <div *ngSwitchCase=\"'YOUTUBE'\">\n    <app-widget-youtube [widget]=\"widget\" [userId]=\"userId\" [websiteId]=\"websiteId\" [pageId]=\"pageId\"></app-widget-youtube>\n  </div>\n\n  <div *ngSwitchCase=\"'HTML'\">\n    <app-widget-html [widget]=\"widget\" [userId]=\"userId\" [websiteId]=\"websiteId\" [pageId]=\"pageId\"></app-widget-html>\n  </div>\n\n  <div *ngSwitchCase=\"'TEXT'\">\n    <app-widget-text [widget]=\"widget\" [userId]=\"userId\" [websiteId]=\"websiteId\" [pageId]=\"pageId\"></app-widget-text>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-edit.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/widget/widget-edit/widget-edit.component.ts ***!
  \************************************************************************/
/*! exports provided: WidgetEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetEditComponent", function() { return WidgetEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_widget_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/widget.service.client */ "./src/app/services/widget.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var WidgetEditComponent = /** @class */ (function () {
    function WidgetEditComponent(widgetService, activatedRoute) {
        this.widgetService = widgetService;
        this.activatedRoute = activatedRoute;
    }
    WidgetEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.userId = params['uid'];
            _this.websiteId = params['wid'];
            _this.pageId = params['pid'];
            _this.widgetId = params['wgid'];
            return _this.widgetService.findWidgetById(_this.widgetId).subscribe(function (widget) {
                _this.widget = widget;
            });
        });
    };
    WidgetEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-edit',
            template: __webpack_require__(/*! ./widget-edit.component.html */ "./src/app/components/widget/widget-edit/widget-edit.component.html"),
            styles: [__webpack_require__(/*! ./widget-edit.component.css */ "./src/app/components/widget/widget-edit/widget-edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_widget_service_client__WEBPACK_IMPORTED_MODULE_2__["WidgetService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], WidgetEditComponent);
    return WidgetEditComponent;
}());



/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-header/widget-header.component.css":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/widget/widget-edit/widget-header/widget-header.component.css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvd2lkZ2V0L3dpZGdldC1lZGl0L3dpZGdldC1oZWFkZXIvd2lkZ2V0LWhlYWRlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-header/widget-header.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/components/widget/widget-edit/widget-header/widget-header.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-light bg-light\">\n  <form class=\"form-inline\">\n    <a class=\"navbar-brand\" routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget\">\n      <span class=\"fa fa-chevron-left rotate\"></span>\n    </a>\n    <a class=\"navbar-text cl-text-bold\" [routerLink]=\"\">\n      Widgets Edit\n    </a>\n  </form>\n  <ul class=\"navbar-nav ml-auto\">\n    <a (click)=\"update()\" class=\"navbar-brand pull-right\">\n      <span class=\"fa fa-check\"></span>\n    </a>\n  </ul>\n</nav>\n\n<div class=\"container\">\n  <form #inputForm=\"ngForm\">\n    <div class=\"form-group\">\n      <label for=\"heading-text\">Text</label>\n      <input type=\"text\" class=\"form-control\" id=\"heading-text\" name=\"Text\" placeholder=\"Text\" [(ngModel)]=\"widget.text\" required>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"heading-size\">Size</label>\n      <input type=\"text\" class=\"form-control\" id=\"heading-size\" name=\"Size\" placeholder=\"3\" [(ngModel)]=\"widget.size\" required>\n    </div>\n  </form>\n  <a class=\"btn btn-danger  btn-block\" routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget\" (click)=\"delete()\">Delete</a>\n</div>\n\n<nav class=\"navbar fixed-bottom navbar-light bg-light\">\n  <ul class=\"navbar-nav ml-auto\">\n    <a class=\"navbar-brand pull-right\" routerLink=\"/user/{{userId}}\">\n      <span class=\"fa fa-user\"></span>\n    </a>\n  </ul>\n</nav>\n"

/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-header/widget-header.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/components/widget/widget-edit/widget-header/widget-header.component.ts ***!
  \****************************************************************************************/
/*! exports provided: WidgetHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetHeaderComponent", function() { return WidgetHeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_widget_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/widget.service.client */ "./src/app/services/widget.service.client.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var WidgetHeaderComponent = /** @class */ (function () {
    function WidgetHeaderComponent(widgetService, router) {
        this.widgetService = widgetService;
        this.router = router;
    }
    WidgetHeaderComponent.prototype.ngOnInit = function () {
    };
    WidgetHeaderComponent.prototype.update = function () {
        var _this = this;
        return this.widgetService.updateWidget(this.widget._id, this.widget).subscribe(function (data) {
            _this.router.navigate(['/user/' + _this.userId + '/website/' + _this.websiteId + '/page/' + _this.pageId + '/widget']);
        });
    };
    WidgetHeaderComponent.prototype.delete = function () {
        return this.widgetService.deleteWidget(this.widget._id).subscribe(function (data) {
            console.log('delete');
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], WidgetHeaderComponent.prototype, "widget", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], WidgetHeaderComponent.prototype, "userId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], WidgetHeaderComponent.prototype, "websiteId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], WidgetHeaderComponent.prototype, "pageId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('inputForm'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"])
    ], WidgetHeaderComponent.prototype, "createForm", void 0);
    WidgetHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-header',
            template: __webpack_require__(/*! ./widget-header.component.html */ "./src/app/components/widget/widget-edit/widget-header/widget-header.component.html"),
            styles: [__webpack_require__(/*! ./widget-header.component.css */ "./src/app/components/widget/widget-edit/widget-header/widget-header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_widget_service_client__WEBPACK_IMPORTED_MODULE_2__["WidgetService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], WidgetHeaderComponent);
    return WidgetHeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-html/widget-html.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/components/widget/widget-edit/widget-html/widget-html.component.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvd2lkZ2V0L3dpZGdldC1lZGl0L3dpZGdldC1odG1sL3dpZGdldC1odG1sLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-html/widget-html.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/components/widget/widget-edit/widget-html/widget-html.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-light bg-light\">\n  <form class=\"form-inline\">\n    <a class=\"navbar-brand\" routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget\">\n      <span class=\"fa fa-chevron-left rotate\"></span>\n    </a>\n    <a class=\"navbar-text cl-text-bold\" [routerLink]=\"\">\n      Widgets Edit\n    </a>\n  </form>\n  <ul class=\"navbar-nav ml-auto\">\n    <a (click)=\"update()\" class=\"navbar-brand pull-right\">\n      <span class=\"fa fa-check\"></span>\n    </a>\n  </ul>\n</nav>\n\n<div class=\"container\">\n  <form>\n    <div class=\"form-group\">\n      <label for=\"heading-name\">Name</label>\n      <input [(ngModel)]=\"widget.name\" type=\"text\" class=\"form-control\" id=\"heading-name\" placeholder=\"Name\" [ngModelOptions]=\"{standalone: true}\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"html-editor\">HTML</label>\n      <quill-editor [(ngModel)]=\"widget.text\" id=\"html-editor\" name=\"text\"></quill-editor>\n    </div>\n  </form>\n  <a class=\"btn btn-danger  btn-block\" (click)=\"deleteWidget()\">Delete</a>\n</div>\n\n<nav class=\"navbar fixed-bottom navbar-light bg-light\">\n  <ul class=\"navbar-nav ml-auto\">\n    <a class=\"navbar-brand pull-right\" routerLink=\"/user/{{userId}}\">\n      <span class=\"fa fa-user\"></span>\n    </a>\n  </ul>\n</nav>\n"

/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-html/widget-html.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/components/widget/widget-edit/widget-html/widget-html.component.ts ***!
  \************************************************************************************/
/*! exports provided: WidgetHtmlComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetHtmlComponent", function() { return WidgetHtmlComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_widget_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/widget.service.client */ "./src/app/services/widget.service.client.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var WidgetHtmlComponent = /** @class */ (function () {
    function WidgetHtmlComponent(widgetService, router) {
        this.widgetService = widgetService;
        this.router = router;
    }
    WidgetHtmlComponent.prototype.ngOnInit = function () {
    };
    WidgetHtmlComponent.prototype.update = function () {
        var _this = this;
        return this.widgetService.updateWidget(this.widget._id, this.widget).subscribe(function (data) {
            _this.router.navigate(['/user/' + _this.userId + '/website/' + _this.websiteId + '/page/' + _this.pageId + '/widget']);
        });
    };
    WidgetHtmlComponent.prototype.delete = function () {
        return this.widgetService.deleteWidget(this.widget._id).subscribe(function (data) {
            console.log('delete');
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], WidgetHtmlComponent.prototype, "widget", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], WidgetHtmlComponent.prototype, "userId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], WidgetHtmlComponent.prototype, "websiteId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], WidgetHtmlComponent.prototype, "pageId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('inputForm'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"])
    ], WidgetHtmlComponent.prototype, "createForm", void 0);
    WidgetHtmlComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-html',
            template: __webpack_require__(/*! ./widget-html.component.html */ "./src/app/components/widget/widget-edit/widget-html/widget-html.component.html"),
            styles: [__webpack_require__(/*! ./widget-html.component.css */ "./src/app/components/widget/widget-edit/widget-html/widget-html.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_widget_service_client__WEBPACK_IMPORTED_MODULE_2__["WidgetService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], WidgetHtmlComponent);
    return WidgetHtmlComponent;
}());



/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.css":
/*!******************************************************************************************************************!*\
  !*** ./src/app/components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.css ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvd2lkZ2V0L3dpZGdldC1lZGl0L3dpZGdldC1pbWFnZS9mbGlja3ItaW1hZ2Utc2VhcmNoL2ZsaWNrci1pbWFnZS1zZWFyY2guY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.html ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-light bg-light\">\n  <form class=\"form-inline\">\n    <a class=\"navbar-brand\" routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget/{{widgetId}}\">\n      <span class=\"fa fa-chevron-left rotate\"></span>\n    </a>\n    <a class=\"navbar-text cl-text-bold\" [routerLink]=\"\">\n      Search Flickr\n    </a>\n  </form>\n</nav>\n\n<!--!!Material on the page!!-->\n<div class = \"container\">\n  <div class=\"input-group\">\n    <input [(ngModel)]=\"searchText\" type=\"text\" class=\"form-control\">\n    <span class=\"input-group-btn\">\n            <a (click)=\"searchPhotos()\" class=\"btn btn-default\" type=\"button\">\n                <span class=\"fa fa-search\"></span>\n            </a>\n        </span>\n  </div>\n\n  <div class=\"row\">\n    <!--<div *ngFor = \"let pic of photos['photo']\"-->\n    <div *ngFor = \"let pic of photos\"\n         class=\"col-xs-4\">\n      <img    (click)=\"selectPhoto(pic)\"\n              width=\"100%\"\n              [src] = \"['https://farm' + pic.farm + '.staticflickr.com/' + pic.server + '/' + pic.id + '_' + pic.secret + '_s.jpg']\"/>\n\n      <!--[src] = \"https://farm\" + photo.farm + \".staticflickr.com/\" + photo.server + \"/\" + photo.id + \"_\" + photo.secret + \"_\" + \"s.jpg\"/>-->\n      <p></p>\n    </div>\n  </div>\n\n</div>\n<!-- Footer -->\n\n<nav class=\"navbar fixed-bottom navbar-light bg-light\">\n  <ul class=\"navbar-nav ml-auto\">\n    <a class=\"navbar-brand pull-right\" routerLink=\"/user/{{userId}}\">\n      <span class=\"fa fa-user\"></span>\n    </a>\n  </ul>\n</nav>\n"

/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.ts":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: FlickrImageSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlickrImageSearchComponent", function() { return FlickrImageSearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_flickr_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../services/flickr.service.client */ "./src/app/services/flickr.service.client.ts");
/* harmony import */ var _services_widget_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../services/widget.service.client */ "./src/app/services/widget.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../services/shared.service */ "./src/app/services/shared.service.ts");






var FlickrImageSearchComponent = /** @class */ (function () {
    function FlickrImageSearchComponent(flickrService, widgetService, router, activatedRoute, sharedService) {
        this.flickrService = flickrService;
        this.widgetService = widgetService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.sharedService = sharedService;
    }
    FlickrImageSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.userId = params['uid'];
            _this.websiteId = params['wid'];
            _this.pageId = params['pid'];
            _this.widgetId = params['wgid'];
        });
    };
    FlickrImageSearchComponent.prototype.searchPhotos = function () {
        var _this = this;
        this.flickrService
            .searchPhotos(this.searchText)
            .subscribe(function (data) {
            // let val = data._body;
            // val = val.replace('jsonFlickrApi(', '');
            // val = val.substring(0, val.length - 1);
            // val = JSON.parse(val);
            _this.photos = data.photos.photo;
        });
    };
    FlickrImageSearchComponent.prototype.selectPhoto = function (photo) {
        var _this = this;
        var url = 'https://farm' + photo.farm + '.staticflickr.com/' + photo.server;
        url += '/' + photo.id + '_' + photo.secret + '_b.jpg';
        var widget = {
            websiteId: this.websiteId,
            pageId: this.pageId,
            url: url,
            widgetType: 'IMAGE'
        };
        console.log("start to update");
        this.widgetService.updateWidget(this.widgetId, widget).subscribe(function (data) {
            console.log("finish update");
            console.log(data);
            var result = data;
            if (result) {
                _this.router.navigate(["/user/" + _this.userId + "/website/" + _this.websiteId + "/page/" + _this.pageId + "/widget/" + _this.widgetId]);
            }
            else {
                _this.error = 'failed!';
            }
        });
    };
    FlickrImageSearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-flickr-image-search',
            template: __webpack_require__(/*! ./flickr-image-search.component.html */ "./src/app/components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.html"),
            styles: [__webpack_require__(/*! ./flickr-image-search.component.css */ "./src/app/components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_flickr_service_client__WEBPACK_IMPORTED_MODULE_2__["FlickrService"], _services_widget_service_client__WEBPACK_IMPORTED_MODULE_3__["WidgetService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"]])
    ], FlickrImageSearchComponent);
    return FlickrImageSearchComponent;
}());



/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-image/widget-image.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/components/widget/widget-edit/widget-image/widget-image.component.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvd2lkZ2V0L3dpZGdldC1lZGl0L3dpZGdldC1pbWFnZS93aWRnZXQtaW1hZ2UuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-image/widget-image.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/components/widget/widget-edit/widget-image/widget-image.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-light bg-light\">\n  <form class=\"form-inline\">\n    <a class=\"navbar-brand\" routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget\">\n      <span class=\"fa fa-chevron-left rotate\"></span>\n    </a>\n    <a class=\"navbar-text cl-text-bold\" [routerLink]=\"\">\n      Widgets Edit\n    </a>\n  </form>\n  <ul class=\"navbar-nav ml-auto\">\n    <a (click)=\"update()\" class=\"navbar-brand pull-right\">\n      <span class=\"fa fa-check\"></span>\n    </a>\n  </ul>\n</nav>\n\n<div class=\"container\">\n  <form #inputForm=\"ngForm\">\n    <div class=\"form-group\">\n      <label for=\"image-URL\">URL</label>\n      <input type=\"text\" class=\"form-control\" id=\"image-URL\" placeholder=\"Image URL\" name='Url' [(ngModel)]=\"widget.url\" required>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"image-width\">Width</label>\n      <input type=\"text\" class=\"form-control\" id=\"image-width\" placeholder=\"100%\" name='Text' [(ngModel)]=\"widget.width\" required>\n    </div>\n  </form>\n  <form ngNoForm action=\"{{baseUrl}}api/upload\" method=\"post\" enctype=\"multipart/form-data\" >\n    <label for=\"myFile\">Upload Image</label>\n    <input  name=\"myFile\" id=\"myFile\"  type=\"file\" class=\"form-control form-group\"/>\n    <input  name=\"widgetId\" value=\"{{widget._id}}\" style=\"display: none\"/>\n    <input  name=\"pageId\" value=\"{{pageId}}\" style=\"display: none\"/>\n    <input  name=\"websiteId\" value=\"{{websiteId}}\" style=\"display: none\"/>\n    <input  name=\"userId\" value=\"{{userId}}\" style=\"display: none\"/>\n    <button type=\"submit\" class=\"btn btn-block btn-primary\">Upload Image</button>\n  </form>\n  <a class=\"btn btn-block btn-secondary\" routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget/{{widget._id}}/flickr\" >Search</a>\n  <a class=\"btn btn-danger  btn-block\" routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget\" (click)=\"delete()\">Delete</a>\n</div>\n\n<nav class=\"navbar fixed-bottom navbar-light bg-light\">\n  <ul class=\"navbar-nav ml-auto\">\n    <a class=\"navbar-brand pull-right\" routerLink=\"/user/{{userId}}\">\n      <span class=\"fa fa-user\"></span>\n    </a>\n  </ul>\n</nav>\n"

/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-image/widget-image.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/components/widget/widget-edit/widget-image/widget-image.component.ts ***!
  \**************************************************************************************/
/*! exports provided: WidgetImageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetImageComponent", function() { return WidgetImageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_widget_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/widget.service.client */ "./src/app/services/widget.service.client.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var WidgetImageComponent = /** @class */ (function () {
    function WidgetImageComponent(widgetService, router) {
        this.widgetService = widgetService;
        this.router = router;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseUrl;
    }
    WidgetImageComponent.prototype.ngOnInit = function () {
    };
    WidgetImageComponent.prototype.update = function () {
        var _this = this;
        return this.widgetService.updateWidget(this.widget._id, this.widget).subscribe(function (data) {
            _this.router.navigate(['/user/' + _this.userId + '/website/' + _this.websiteId + '/page/' + _this.pageId + '/widget']);
        });
    };
    WidgetImageComponent.prototype.delete = function () {
        return this.widgetService.deleteWidget(this.widget._id).subscribe(function (data) {
            console.log('delete');
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], WidgetImageComponent.prototype, "widget", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], WidgetImageComponent.prototype, "userId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], WidgetImageComponent.prototype, "websiteId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], WidgetImageComponent.prototype, "pageId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('inputForm'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"])
    ], WidgetImageComponent.prototype, "createForm", void 0);
    WidgetImageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-image',
            template: __webpack_require__(/*! ./widget-image.component.html */ "./src/app/components/widget/widget-edit/widget-image/widget-image.component.html"),
            styles: [__webpack_require__(/*! ./widget-image.component.css */ "./src/app/components/widget/widget-edit/widget-image/widget-image.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_widget_service_client__WEBPACK_IMPORTED_MODULE_2__["WidgetService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], WidgetImageComponent);
    return WidgetImageComponent;
}());



/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-text/widget-text.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/components/widget/widget-edit/widget-text/widget-text.component.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvd2lkZ2V0L3dpZGdldC1lZGl0L3dpZGdldC10ZXh0L3dpZGdldC10ZXh0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-text/widget-text.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/components/widget/widget-edit/widget-text/widget-text.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-light bg-light\">\n  <form class=\"form-inline\">\n    <a class=\"navbar-brand\" routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget\">\n      <span class=\"fa fa-chevron-left rotate\"></span>\n    </a>\n    <a class=\"navbar-text cl-text-bold\" [routerLink]=\"\">\n      Widgets Edit\n    </a>\n  </form>\n  <ul class=\"navbar-nav ml-auto\">\n    <a (click)=\"update()\" class=\"navbar-brand pull-right\">\n      <span class=\"fa fa-check\"></span>\n    </a>\n  </ul>\n</nav>\n\n<div class=\"container\">\n  <form>\n    <div class=\"form-group\">\n      <label for=\"heading-name\">Name</label>\n      <input [(ngModel)]=\"widget.name\" type=\"text\" class=\"form-control\" id=\"heading-name\" placeholder=\"Name\" [ngModelOptions]=\"{standalone: true}\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"text-text\">Text</label>\n      <input [(ngModel)]=\"widget.text\" type=\"text\" class=\"form-control\" id=\"text-text\" placeholder=\"Text\" [ngModelOptions]=\"{standalone: true}\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"text-rows\">Rows</label>\n      <input [(ngModel)]=\"widget.rows\" type=\"number\" class=\"form-control\" id=\"text-rows\" placeholder=\"Rows\" [ngModelOptions]=\"{standalone: true}\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"text-placeholder\">Placeholder</label>\n      <input [(ngModel)]=\"widget.placeholder\" type=\"text\" class=\"form-control\" id=\"text-placeholder\" placeholder=\"Placeholder\" [ngModelOptions]=\"{standalone: true}\" required>\n    </div>\n    <div class=\"input-group\">\n      <input type=\"text\" readonly value=\"Formatted\" class=\"form-control\"/>\n      <span class=\"input-group-addon\">\n        <input [(ngModel)]=\"widget.formatted\" type=\"checkbox\" [ngModelOptions]=\"{standalone: true}\"/>\n      </span>\n    </div><br/>\n  </form>\n  <a class=\"btn btn-danger btn-block\" (click)=\"deleteWidget()\">Delete</a>\n</div>\n\n<nav class=\"navbar fixed-bottom navbar-light bg-light\">\n  <ul class=\"navbar-nav ml-auto\">\n    <a class=\"navbar-brand pull-right\" routerLink=\"/user/{{userId}}\">\n      <span class=\"fa fa-user\"></span>\n    </a>\n  </ul>\n</nav>\n"

/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-text/widget-text.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/components/widget/widget-edit/widget-text/widget-text.component.ts ***!
  \************************************************************************************/
/*! exports provided: WidgetTextComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetTextComponent", function() { return WidgetTextComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_widget_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/widget.service.client */ "./src/app/services/widget.service.client.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var WidgetTextComponent = /** @class */ (function () {
    function WidgetTextComponent(widgetService, router) {
        this.widgetService = widgetService;
        this.router = router;
    }
    WidgetTextComponent.prototype.ngOnInit = function () {
    };
    WidgetTextComponent.prototype.update = function () {
        var _this = this;
        return this.widgetService.updateWidget(this.widget._id, this.widget).subscribe(function (data) {
            _this.router.navigate(['/user/' + _this.userId + '/website/' + _this.websiteId + '/page/' + _this.pageId + '/widget']);
        });
    };
    WidgetTextComponent.prototype.delete = function () {
        return this.widgetService.deleteWidget(this.widget._id).subscribe(function (data) {
            console.log('delete');
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], WidgetTextComponent.prototype, "widget", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], WidgetTextComponent.prototype, "userId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], WidgetTextComponent.prototype, "websiteId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], WidgetTextComponent.prototype, "pageId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('inputForm'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"])
    ], WidgetTextComponent.prototype, "createForm", void 0);
    WidgetTextComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-text',
            template: __webpack_require__(/*! ./widget-text.component.html */ "./src/app/components/widget/widget-edit/widget-text/widget-text.component.html"),
            styles: [__webpack_require__(/*! ./widget-text.component.css */ "./src/app/components/widget/widget-edit/widget-text/widget-text.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_widget_service_client__WEBPACK_IMPORTED_MODULE_2__["WidgetService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], WidgetTextComponent);
    return WidgetTextComponent;
}());



/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.css":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.css ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvd2lkZ2V0L3dpZGdldC1lZGl0L3dpZGdldC15b3V0dWJlL3dpZGdldC15b3V0dWJlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-light bg-light\">\n  <form class=\"form-inline\">\n    <a class=\"navbar-brand\" routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget\">\n      <span class=\"fa fa-chevron-left rotate\"></span>\n    </a>\n    <a class=\"navbar-text cl-text-bold\" [routerLink]=\"\">\n      Widgets Edit\n    </a>\n  </form>\n  <ul class=\"navbar-nav ml-auto\">\n    <a (click)=\"update()\" class=\"navbar-brand pull-right\">\n      <span class=\"fa fa-check\"></span>\n    </a>\n  </ul>\n</nav>\n\n<div class=\"container\">\n  <form #inputForm=\"ngForm\">\n    <div class=\"form-group\">\n      <label for=\"youtube-URL\">URL</label>\n      <input type=\"text\" class=\"form-control\" id=\"youtube-URL\" placeholder=\"Youtube URL\" name=\"Url\" [(ngModel)]=\"widget.url\" required>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"youtube-width\">Width</label>\n      <input type=\"text\" class=\"form-control\" id=\"youtube-width\" placeholder=\"100%\" name=\"Width\" [(ngModel)]=\"widget.width\" required>\n    </div>\n  </form>\n  <a class=\"btn btn-danger btn-block\" routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget\" (click)=\"delete()\">Delete</a>\n</div>\n\n<nav class=\"navbar fixed-bottom navbar-light bg-light\">\n  <ul class=\"navbar-nav ml-auto\">\n    <a class=\"navbar-brand pull-right\" routerLink=\"/user/{{userId}}\">\n      <span class=\"fa fa-user\"></span>\n    </a>\n  </ul>\n</nav>\n"

/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.ts ***!
  \******************************************************************************************/
/*! exports provided: WidgetYoutubeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetYoutubeComponent", function() { return WidgetYoutubeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_widget_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/widget.service.client */ "./src/app/services/widget.service.client.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var WidgetYoutubeComponent = /** @class */ (function () {
    function WidgetYoutubeComponent(widgetService, router) {
        this.widgetService = widgetService;
        this.router = router;
    }
    WidgetYoutubeComponent.prototype.ngOnInit = function () {
    };
    WidgetYoutubeComponent.prototype.update = function () {
        var _this = this;
        return this.widgetService.updateWidget(this.widget._id, this.widget).subscribe(function (widget) {
            _this.router.navigate(['/user/' + _this.userId + '/website/' + _this.websiteId + '/page/' + _this.pageId + '/widget']);
        });
    };
    WidgetYoutubeComponent.prototype.delete = function () {
        return this.widgetService.deleteWidget(this.widget._id).subscribe(function (data) {
            console.log('delete');
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], WidgetYoutubeComponent.prototype, "widget", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], WidgetYoutubeComponent.prototype, "userId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], WidgetYoutubeComponent.prototype, "websiteId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], WidgetYoutubeComponent.prototype, "pageId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('inputForm'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"])
    ], WidgetYoutubeComponent.prototype, "createForm", void 0);
    WidgetYoutubeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-youtube',
            template: __webpack_require__(/*! ./widget-youtube.component.html */ "./src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.html"),
            styles: [__webpack_require__(/*! ./widget-youtube.component.css */ "./src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_widget_service_client__WEBPACK_IMPORTED_MODULE_2__["WidgetService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], WidgetYoutubeComponent);
    return WidgetYoutubeComponent;
}());



/***/ }),

/***/ "./src/app/components/widget/widget-list/widget-list.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/components/widget/widget-list/widget-list.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".youtube-widget {\n  position: relative;\n  padding-bottom: 56.25%; /* 16:9 */\n  height: 0;\n}\n.youtube-widget iframe {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy93aWRnZXQvd2lkZ2V0LWxpc3Qvd2lkZ2V0LWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixzQkFBc0IsRUFBRSxTQUFTO0VBQ2pDLFNBQVM7QUFDWDtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsV0FBVztFQUNYLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvd2lkZ2V0L3dpZGdldC1saXN0L3dpZGdldC1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIueW91dHViZS13aWRnZXQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctYm90dG9tOiA1Ni4yNSU7IC8qIDE2OjkgKi9cbiAgaGVpZ2h0OiAwO1xufVxuLnlvdXR1YmUtd2lkZ2V0IGlmcmFtZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/components/widget/widget-list/widget-list.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/components/widget/widget-list/widget-list.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-light bg-light\">\n  <form class=\"form-inline\">\n    <a class=\"navbar-brand pull-left\" routerLink=\"/user/{{userId}}/website/{{websiteId}}/page\">\n      <span class=\"fa fa-chevron-left rotate\"></span>\n    </a>\n    <a class=\"navbar-text cl-text-bold\" [routerLink]=\"\">\n      Widgets\n    </a>\n  </form>\n  <ul class=\"navbar-nav ml-auto\">\n    <a class=\"navbar-brand pull-right\" routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget/new\">\n      <span class=\"fa fa-plus\"></span>\n    </a>\n  </ul>\n</nav>\n\n<div class=\"container cl-container-padding\" appSortable (newIndexes)=\"reorderWidgets($event)\">\n  <div *ngFor = \"let widget of widgets | orderBy\">\n    <div [ngSwitch]=\"widget.widgetType\">\n      <div *ngSwitchCase=\"'HEADING'\">\n        <div class=\"pull-right\">\n          <a routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget/{{widget._id}}\">\n            <span class=\"fa fa-cog\"></span>\n          </a>\n        </div>\n        <div [ngSwitch]=\"widget.size\">\n          <h1 *ngSwitchCase=\"1\">{{widget.text}}</h1>\n          <h2 *ngSwitchCase=\"2\">{{widget.text}}</h2>\n          <h3 *ngSwitchCase=\"3\">{{widget.text}}</h3>\n          <h4 *ngSwitchCase=\"4\">{{widget.text}}</h4>\n          <h5 *ngSwitchCase=\"5\">{{widget.text}}</h5>\n          <h6 *ngSwitchCase=\"6\">{{widget.text}}</h6>\n        </div>\n      </div>\n\n      <div *ngSwitchCase=\"'IMAGE'\">\n        <div>\n          <a routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget/{{widget._id}}\" class=\"pull-right\">\n            <span class=\"fa fa-cog\"></span>\n          </a>\n          <img class=\"img-responsive img-rounded cl-widget-images\"\n               src=\"{{widget.url}}\">\n        </div>\n      </div>\n\n      <div *ngSwitchCase=\"'YOUTUBE'\" class=\"youtube-widget\">\n        <div class=\"embed-responsive embed-responsive-16by9\">\n          <a routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget/{{widget._id}}\" class=\"pull-right sticky-top\">\n            <span class=\"fa fa-cog youtube\" ></span>\n          </a>\n          <h1>{{widget.url}}</h1>\n          <iframe width=\"640\" height=\"360\" [src]=\"widget.url | safe\" frameborder=\"0\" allowfullscreen></iframe>\n        </div>\n      </div>\n\n      <div *ngSwitchCase=\"'HTML'\" [innerHTML]=\"widget.text\">\n        <h1>ca ca ca ca</h1>\n        <div class=\"pull-right\">\n          <a routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget/{{widget._id}}\">\n            <span class=\"fa fa-cog\"></span>\n          </a>\n        </div>\n      </div>\n\n      <div *ngSwitchCase=\"'TEXT'\">\n        <h1>duo duo duo duo</h1>\n        <div class=\"pull-right\">\n          <a routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget/{{widget._id}}\">\n            <span class=\"fa fa-cog\"></span>\n          </a>\n        </div>\n        <div *ngIf=\"widget.formatted\">\n          <quill-editor [(ngModel)]=\"widget.text\" name=\"text\"></quill-editor>\n        </div>\n\n        <input *ngIf=\"!widget.formatted && (!widget.rows || widget.rows === 1)\"\n               [(ngModel)]=\"widget.text\" placeholder=\"{{widget.placeholder}}\" class=\"form-control\"/>\n\n        <textarea *ngIf=\"!widget.formatted && (widget.rows > 1)\"\n                  rows=\"{{widget.rows}}\" placeholder=\"{{widget.placeholder}}\"\n                  class=\"form-control\">{{widget.text}}</textarea>\n      </div>\n\n    </div>\n  </div>\n</div>\n\n\n<nav class=\"navbar fixed-bottom navbar-light bg-light\">\n  <form class=\"form-inline\">\n    <a [routerLink]=\"\" class=\"navbar-brand\">\n      <span class=\"fa fa-play\"></span>\n    </a>\n    <a [routerLink]=\"\" class=\"navbar-brand\">\n      <span class=\"fa fa-eye\"></span>\n    </a>\n  </form>\n  <ul class=\"navbar-nav ml-auto\">\n    <a class=\"navbar-brand pull-right\" routerLink=\"/user/{{userId}}\">\n      <span class=\"fa fa-user\"></span>\n    </a>\n  </ul>\n</nav>\n"

/***/ }),

/***/ "./src/app/components/widget/widget-list/widget-list.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/widget/widget-list/widget-list.component.ts ***!
  \************************************************************************/
/*! exports provided: WidgetListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetListComponent", function() { return WidgetListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_widget_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/widget.service.client */ "./src/app/services/widget.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");





var WidgetListComponent = /** @class */ (function () {
    function WidgetListComponent(widgetService, activatedRoute, sanitizer) {
        this.widgetService = widgetService;
        this.activatedRoute = activatedRoute;
        this.sanitizer = sanitizer;
        this.widgets = [];
    }
    WidgetListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.userId = params['uid'];
            _this.websiteId = params['wid'];
            _this.pageId = params['pid'];
            return _this.widgetService.findWidgetsByPageId(_this.pageId).subscribe(function (widgets) {
                _this.widgets = widgets;
            });
        });
    };
    WidgetListComponent.prototype.url = function (url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    // receiving the emitted event
    WidgetListComponent.prototype.reorderWidgets = function (indexes) {
        // call widget service function to update widget as per index
        this.widgetService.reorderWidgets(indexes.startIndex, indexes.endIndex, this.pageId)
            .subscribe(function (data) { return console.log('reorder'); });
    };
    WidgetListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-list',
            template: __webpack_require__(/*! ./widget-list.component.html */ "./src/app/components/widget/widget-list/widget-list.component.html"),
            styles: [__webpack_require__(/*! ./widget-list.component.css */ "./src/app/components/widget/widget-list/widget-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_widget_service_client__WEBPACK_IMPORTED_MODULE_2__["WidgetService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"]])
    ], WidgetListComponent);
    return WidgetListComponent;
}());



/***/ }),

/***/ "./src/app/services/flickr.service.client.ts":
/*!***************************************************!*\
  !*** ./src/app/services/flickr.service.client.ts ***!
  \***************************************************/
/*! exports provided: FlickrService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlickrService", function() { return FlickrService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var FlickrService = /** @class */ (function () {
    function FlickrService(_http) {
        this._http = _http;
        this.key = '7fba5128545496763fd3c4be85cac0a0';
        this.secret = '2d453d91fea8131a';
        this.urlBase = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&format=json&api_key=API_KEY&text=TEXT'
            + '&format=json&nojsoncallback=1';
    }
    FlickrService.prototype.searchPhotos = function (searchTerm) {
        var url = this.urlBase
            .replace('API_KEY', this.key)
            .replace('TEXT', searchTerm);
        return this._http.get(url);
    };
    FlickrService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])() // needed as we're injecting Http service into this service
        ,
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], FlickrService);
    return FlickrService;
}());



/***/ }),

/***/ "./src/app/services/page.service.client.ts":
/*!*************************************************!*\
  !*** ./src/app/services/page.service.client.ts ***!
  \*************************************************/
/*! exports provided: PageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageService", function() { return PageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");




var PageService = /** @class */ (function () {
    function PageService(http) {
        this.http = http;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl;
    }
    PageService.prototype.createPage = function (page) {
        return this.http.post(this.baseUrl + 'api/website/' + page.websiteId + '/page', page);
    };
    PageService.prototype.findPageByWebsiteId = function (websiteId) {
        return this.http.get(this.baseUrl + 'api/website/' + websiteId + '/page');
    };
    PageService.prototype.findPageById = function (pageId) {
        return this.http.get(this.baseUrl + 'api/page/' + pageId);
    };
    PageService.prototype.updatePage = function (pageId, page) {
        return this.http.put(this.baseUrl + 'api/page/' + pageId, page);
    };
    PageService.prototype.deletePage = function (pageId) {
        return this.http.delete(this.baseUrl + 'api/page/' + pageId);
    };
    PageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PageService);
    return PageService;
}());



/***/ }),

/***/ "./src/app/services/shared.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/shared.service.ts ***!
  \********************************************/
/*! exports provided: SharedService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedService", function() { return SharedService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SharedService = /** @class */ (function () {
    function SharedService() {
        this.user = '';
    }
    SharedService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], SharedService);
    return SharedService;
}());



/***/ }),

/***/ "./src/app/services/user.service.client.ts":
/*!*************************************************!*\
  !*** ./src/app/services/user.service.client.ts ***!
  \*************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");




var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl;
    }
    UserService.prototype.createUser = function (user) {
        return this.http.post(this.baseUrl + 'api/user', user);
    };
    UserService.prototype.findUserById = function (userId) {
        return this.http.get(this.baseUrl + 'api/user/' + userId);
    };
    UserService.prototype.findUserByUsername = function (username) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        params = params.append('username', username);
        return this.http.get(this.baseUrl + 'api/user', { params: params });
    };
    UserService.prototype.findUserByCredentials = function (username, password) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        params = params.append('username', username);
        params = params.append('password', password);
        return this.http.get(this.baseUrl + 'api/user', { params: params });
    };
    UserService.prototype.updateUser = function (user, userId) {
        return this.http.put(this.baseUrl + 'api/user/' + userId, user);
    };
    UserService.prototype.deleteUser = function (userId) {
        return this.http.delete(this.baseUrl + 'api/user/' + userId);
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/services/website.service.client.ts":
/*!****************************************************!*\
  !*** ./src/app/services/website.service.client.ts ***!
  \****************************************************/
/*! exports provided: WebsiteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsiteService", function() { return WebsiteService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");




var WebsiteService = /** @class */ (function () {
    function WebsiteService(http) {
        this.http = http;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl;
    }
    WebsiteService.prototype.createWebsite = function (website) {
        return this.http.post(this.baseUrl + 'api/user/' + website.developerId + '/website', website);
    };
    WebsiteService.prototype.findWebsitesByUser = function (userId) {
        return this.http.get(this.baseUrl + 'api/user/' + userId + '/website');
    };
    WebsiteService.prototype.findWebsitesById = function (userId, websiteId) {
        return this.http.get(this.baseUrl + 'api/website/' + websiteId);
    };
    WebsiteService.prototype.updateWebsite = function (newWebSite, webid) {
        return this.http.put(this.baseUrl + 'api/website/' + webid, newWebSite);
    };
    WebsiteService.prototype.deleteWebsite = function (userId, websiteId) {
        return this.http.delete(this.baseUrl + 'api/website/' + websiteId);
    };
    WebsiteService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], WebsiteService);
    return WebsiteService;
}());



/***/ }),

/***/ "./src/app/services/widget.service.client.ts":
/*!***************************************************!*\
  !*** ./src/app/services/widget.service.client.ts ***!
  \***************************************************/
/*! exports provided: WidgetService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetService", function() { return WidgetService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");




var WidgetService = /** @class */ (function () {
    function WidgetService(http) {
        this.http = http;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl;
    }
    WidgetService.prototype.createWidget = function (widget) {
        var newWidget = {
            size: widget.size,
            text: widget.text,
            name: widget.name,
            url: widget.url,
            widgetType: widget.widgetType,
            pageId: widget.pageId,
            width: widget.width,
            rows: widget.rows,
            placeholder: widget.placeholder,
            formatted: widget.formatted
        };
        return this.http.post(this.baseUrl + 'api/page/' + newWidget.pageId + '/widget', newWidget);
    };
    WidgetService.prototype.findWidgetsByPageId = function (pageId) {
        return this.http.get(this.baseUrl + 'api/page/' + pageId + '/widget');
    };
    WidgetService.prototype.findWidgetById = function (widgetId) {
        return this.http.get(this.baseUrl + 'api/widget/' + widgetId);
    };
    WidgetService.prototype.updateWidget = function (widgetId, widget) {
        var newWidget = {
            size: widget.size,
            text: widget.text,
            name: widget.name,
            url: widget.url,
            widgetType: widget.widgetType,
            pageId: widget.pageId,
            width: widget.width,
            rows: widget.rows,
            placeholder: widget.placeholder,
            formatted: widget.formatted
        };
        return this.http.put(this.baseUrl + 'api/widget/' + widgetId, newWidget);
    };
    WidgetService.prototype.deleteWidget = function (widgetId) {
        return this.http.delete(this.baseUrl + 'api/widget/' + widgetId);
    };
    WidgetService.prototype.reorderWidgets = function (startIndex, endIndex, pageId) {
        return this.http.put(this.baseUrl + 'api/page/' + pageId + '/widget?start=' + startIndex + '&end=' + endIndex, '');
    };
    WidgetService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], WidgetService);
    return WidgetService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    baseUrl: 'http://localhost:3200/'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/Yang/Documents/cs5610/webdev-LI-YANG/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map