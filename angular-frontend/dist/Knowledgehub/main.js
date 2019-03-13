(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

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

/***/ "./src/app/admin-ui/admin-ui.component.css":
/*!*************************************************!*\
  !*** ./src/app/admin-ui/admin-ui.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-form {\n    min-width: 150px;\n    max-width: 500px;\n    width: 100%;\n  }\n  \n  #logo{\n\n    height:85px; \n    width:90px;\n}\n  \n  p{\n    font-family: 'Indie Flower', cursive;\n    color: blanchedalmond;\n    font-size: 40px;\n    margin-left: 40px;\n   \n}\n  \n  nav{\n    text-align: center;\n    \n}\n  \n  #searchbutton:hover{\n  color:inherit;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4tdWkvYWRtaW4tdWkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsV0FBVztFQUNiOztFQUVBOztJQUVFLFdBQVc7SUFDWCxVQUFVO0FBQ2Q7O0VBRUE7SUFDSSxvQ0FBb0M7SUFDcEMscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixpQkFBaUI7O0FBRXJCOztFQUNBO0lBQ0ksa0JBQWtCOztBQUV0Qjs7RUFDQTtFQUNFLGFBQWE7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2FkbWluLXVpL2FkbWluLXVpLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1mb3JtIHtcbiAgICBtaW4td2lkdGg6IDE1MHB4O1xuICAgIG1heC13aWR0aDogNTAwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgXG4gICNsb2dve1xuXG4gICAgaGVpZ2h0Ojg1cHg7IFxuICAgIHdpZHRoOjkwcHg7XG59XG5cbnB7XG4gICAgZm9udC1mYW1pbHk6ICdJbmRpZSBGbG93ZXInLCBjdXJzaXZlO1xuICAgIGNvbG9yOiBibGFuY2hlZGFsbW9uZDtcbiAgICBmb250LXNpemU6IDQwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDQwcHg7XG4gICBcbn1cbm5hdntcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgXG59XG4jc2VhcmNoYnV0dG9uOmhvdmVye1xuICBjb2xvcjppbmhlcml0O1xufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/admin-ui/admin-ui.component.html":
/*!**************************************************!*\
  !*** ./src/app/admin-ui/admin-ui.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n <title>Bootstrap Example</title>\n <meta charset=\"utf-8\">\n <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n <link href=\"https://fonts.googleapis.com/css?family=Indie+Flower\" rel=\"stylesheet\">\n <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css\">\n <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js\"></script>\n <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js\"></script>\n</head>\n<body>\n   <!-- <nav class=\"navbar navbar-expand-lg navbar-light bg-dark\" data-spy=\"affix\" data-offset-top=\"197\">\n       <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarTogglerDemo03\"\n         aria-controls=\"navbarTogglerDemo03\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n         <span class=\"navbar-toggler-icon\"></span>\n       </button>\n       <a href=\"#\"><span><img src=\"assets/img/l2.jpg\" alt=\"logo\" id=\"logo\"></span></a>\n       <p>Knowledge hub</p>\n       <div class=\"collapse navbar-collapse\" id=\"navbarTogglerDemo03\">\n         <ul class=\"navbar-nav mr-auto mt-2 mt-lg-0\">\n          </ul>\n       <form class=\"form-inline\">\n           <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\" (click)=\"logging()\">{{this.dataService.login}}</button>\n         </form>\n\n       </div>\n     </nav> -->\n\n\n     <nav class=\"navbar navbar-expand-lg navbar-light bg-dark\" data-spy=\"affix\" data-offset-top=\"197\">\n         <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarTogglerDemo03\"\n           aria-controls=\"navbarTogglerDemo03\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n           <span class=\"navbar-toggler-icon\"></span>\n         </button>\n         <a href=\"#\"><span><img src=\"assets/img/l2.jpg\" alt=\"logo\" id=\"logo\"></span></a>\n         <p>Knowledge hub</p>\n         <div class=\"collapse navbar-collapse\" id=\"navbarTogglerDemo03\">\n           <ul class=\"navbar-nav mr-auto mt-2 mt-lg-0\">\n           </ul>\n         </div>\n       </nav>\n<br>\n\n<br>\n<div class=\"container\">\n <form action=\"/action_page.php\">\n   <div class=\"form-group\">\n     <label for=\"text\">Enter Domain Name :</label>\n     <input type=\"text\" class=\"form-control\" id=\"domain\" placeholder=\"Enter Domain\"  [(ngModel)]=\"domain\" name=\"domainName\">\n   </div>\n   <br>\n   <div class=\"form-group\">\n     <label for=\"text\">Enter Concepts :</label>\n     <input type=\"text\" class=\"form-control\" id=\"Concepts\" placeholder=\"Enter Concepts\" [(ngModel)]=\"concept\" name=\"conceptName\">\n   </div>\n   <br>\n   <button type=\"submit\" class=\"btn btn-default\" (click)=\"display()\">Submit</button>\n </form>\n</div>\n\n</body>\n\n<br>\n<br>\n<br>\n<br>\n<br>\n<app-footer></app-footer>\n\n</html>"

/***/ }),

/***/ "./src/app/admin-ui/admin-ui.component.ts":
/*!************************************************!*\
  !*** ./src/app/admin-ui/admin-ui.component.ts ***!
  \************************************************/
/*! exports provided: AdminUiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminUiComponent", function() { return AdminUiComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var AdminUiComponent = /** @class */ (function () {
    function AdminUiComponent(http) {
        this.http = http;
    }
    AdminUiComponent.prototype.ngOnInit = function () {
    };
    AdminUiComponent.prototype.display = function () {
        this.conceptArray = this.concept.split(",");
        console.log(this.domain);
        console.log(this.concept);
        console.log(this.conceptArray);
        this.http.post("http://localhost:8080/domain", {
            "domain": this.domain,
            "conceptName": this.conceptArray
        }).subscribe(function (data) {
            console.log(data);
        });
    };
    AdminUiComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-ui',
            template: __webpack_require__(/*! ./admin-ui.component.html */ "./src/app/admin-ui/admin-ui.component.html"),
            styles: [__webpack_require__(/*! ./admin-ui.component.css */ "./src/app/admin-ui/admin-ui.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AdminUiComponent);
    return AdminUiComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _upload_upload_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./upload/upload.component */ "./src/app/upload/upload.component.ts");
/* harmony import */ var _searchcard_searchcard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./searchcard/searchcard.component */ "./src/app/searchcard/searchcard.component.ts");
/* harmony import */ var _admin_ui_admin_ui_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./admin-ui/admin-ui.component */ "./src/app/admin-ui/admin-ui.component.ts");








var routes = [
    {
        path: "home",
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    },
    {
        path: "login",
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'addfiles',
        component: _upload_upload_component__WEBPACK_IMPORTED_MODULE_5__["UploadComponent"]
    },
    {
        path: 'cards',
        component: _searchcard_searchcard_component__WEBPACK_IMPORTED_MODULE_6__["SearchcardComponent"]
    },
    {
        path: 'adminUI',
        component: _admin_ui_admin_ui_component__WEBPACK_IMPORTED_MODULE_7__["AdminUiComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { useHash: true })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <app-id-generator></app-id-generator> -->\n<router-outlet></router-outlet>"

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
        this.title = 'Knowledgehub';
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
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/stepper */ "./node_modules/@angular/cdk/esm5/stepper.es5.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm5/tree.es5.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _service_token_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./service/token.service */ "./src/app/service/token.service.ts");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var _service_searchinfo_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./service/searchinfo.service */ "./src/app/service/searchinfo.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _searchbutton_searchbutton_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./searchbutton/searchbutton.component */ "./src/app/searchbutton/searchbutton.component.ts");
/* harmony import */ var ngx_file_drop__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ngx-file-drop */ "./node_modules/ngx-file-drop/fesm5/ngx-file-drop.js");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/fesm5/angular-bootstrap-md.js");
/* harmony import */ var _upload_upload_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./upload/upload.component */ "./src/app/upload/upload.component.ts");
/* harmony import */ var _service_upload_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./service/upload.service */ "./src/app/service/upload.service.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _searchcard_searchcard_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./searchcard/searchcard.component */ "./src/app/searchcard/searchcard.component.ts");
/* harmony import */ var _paginator_paginator_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./paginator/paginator.component */ "./src/app/paginator/paginator.component.ts");
/* harmony import */ var _domain_data_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./domain/data-service */ "./src/app/domain/data-service.ts");
/* harmony import */ var _chat_chat_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./chat/chat.component */ "./src/app/chat/chat.component.ts");
/* harmony import */ var _id_generator_id_generator_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./id-generator/id-generator.component */ "./src/app/id-generator/id-generator.component.ts");
/* harmony import */ var _domain_sessionId__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./domain/sessionId */ "./src/app/domain/sessionId.ts");
/* harmony import */ var _admin_ui_admin_ui_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./admin-ui/admin-ui.component */ "./src/app/admin-ui/admin-ui.component.ts");























// MDB Angular Free












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_14__["LoginComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_15__["HomeComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_20__["FooterComponent"],
                _searchbutton_searchbutton_component__WEBPACK_IMPORTED_MODULE_21__["SearchbuttonComponent"],
                _upload_upload_component__WEBPACK_IMPORTED_MODULE_24__["UploadComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_26__["HeaderComponent"],
                _searchcard_searchcard_component__WEBPACK_IMPORTED_MODULE_27__["SearchcardComponent"],
                _paginator_paginator_component__WEBPACK_IMPORTED_MODULE_28__["PaginatorComponent"],
                _chat_chat_component__WEBPACK_IMPORTED_MODULE_30__["ChatComponent"],
                _id_generator_id_generator_component__WEBPACK_IMPORTED_MODULE_31__["IdGeneratorComponent"],
                _admin_ui_admin_ui_component__WEBPACK_IMPORTED_MODULE_33__["AdminUiComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatSelectModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_19__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"].withServerTransition({ appId: 'serverApp' }),
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserTransferStateModule"],
                _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__["A11yModule"],
                _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__["CdkStepperModule"],
                _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__["CdkTableModule"],
                _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__["CdkTreeModule"],
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__["DragDropModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatBottomSheetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatTreeModule"],
                _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ScrollingModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
                ngx_file_drop__WEBPACK_IMPORTED_MODULE_22__["FileDropModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_23__["IconsModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_23__["ButtonsModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_23__["WavesModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_23__["MDBBootstrapModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_19__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"]
                // RouterModule.forRoot([
                //   {path : 'searchinfo', component: SearchcardComponent}
                // ])
            ],
            providers: [_service_token_service__WEBPACK_IMPORTED_MODULE_16__["TokenService"], _service_searchinfo_service__WEBPACK_IMPORTED_MODULE_18__["SearchinfoService"],
                _service_auth_service__WEBPACK_IMPORTED_MODULE_17__["AuthService"], _service_upload_service__WEBPACK_IMPORTED_MODULE_25__["UploadService"], _domain_data_service__WEBPACK_IMPORTED_MODULE_29__["DataService"], _domain_sessionId__WEBPACK_IMPORTED_MODULE_32__["SessionId"]],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["CUSTOM_ELEMENTS_SCHEMA"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]],
            entryComponents: [_chat_chat_component__WEBPACK_IMPORTED_MODULE_30__["ChatComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/chat/chat.component.css":
/*!*****************************************!*\
  !*** ./src/app/chat/chat.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* .mat-dialog-title{\n\n    background-color: turquoise;\n} */\n\n.message {\n    border-radius: 20px;\n    margin: 0 15px 10px;\n    padding: 15px 20px;\n    position: relative;\n    font-weight: bold;\n}\n\n.message.to {\n    background-color: rgb(243, 149, 105);\n    color: #fff;\n    margin-left: 100px;\n    text-align: right;\n}\n\n.message.from {\n    background-color: rgb(165, 149, 228);\n    color: #363636;\n    margin-right: 100px;\n\n}\n\n/*\n.message.to + .message.to,\n.message.from + .message.from {\nmargin-top: -10px;\n}  */\n\nbody{\n    width: 500px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdC9jaGF0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztHQUdHOztBQUVIO0lBQ0ksbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjs7QUFDQTtJQUNJLG9DQUFvQztJQUNwQyxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjs7QUFDQTtJQUNJLG9DQUFvQztJQUNwQyxjQUFjO0lBQ2QsbUJBQW1COztBQUV2Qjs7QUFFQTs7OztJQUlJOztBQUVKO0lBQ0ksWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2NoYXQvY2hhdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogLm1hdC1kaWFsb2ctdGl0bGV7XG5cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0dXJxdW9pc2U7XG59ICovXG5cbi5tZXNzYWdlIHtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIG1hcmdpbjogMCAxNXB4IDEwcHg7XG4gICAgcGFkZGluZzogMTVweCAyMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5tZXNzYWdlLnRvIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQzLCAxNDksIDEwNSk7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuLm1lc3NhZ2UuZnJvbSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE2NSwgMTQ5LCAyMjgpO1xuICAgIGNvbG9yOiAjMzYzNjM2O1xuICAgIG1hcmdpbi1yaWdodDogMTAwcHg7XG5cbn1cblxuLypcbi5tZXNzYWdlLnRvICsgLm1lc3NhZ2UudG8sXG4ubWVzc2FnZS5mcm9tICsgLm1lc3NhZ2UuZnJvbSB7XG5tYXJnaW4tdG9wOiAtMTBweDtcbn0gICovXG5cbmJvZHl7XG4gICAgd2lkdGg6IDUwMHB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/chat/chat.component.html":
/*!******************************************!*\
  !*** ./src/app/chat/chat.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\n\n  <h1 mat-dialog-title>Knowledge Bot</h1>\n  \n  \n  <div mat-dialog-content>\n  \n  \n  <ng-container  *ngFor=\"let message of messages | async\">\n  \n    <div class=\"message\" [ngClass]=\"{ 'from': message.sentBy === 'bot',\n                                      'to':   message.sentBy === 'user' }\">\n      {{ message.content }}\n    </div>\n  \n  </ng-container>\n  \n  </div>\n  \n  \n  <label for=\"nameField\">Your Message</label>\n  \n  <div mat-dialog-actions>\n    <mat-form-field>\n      <input matInput [(ngModel)]=\"formValue\" (keyup.enter)=\"sendMessage()\" type=\"text\"><br>\n    </mat-form-field>\n  \n  <button mat-stroked-button  (click)=\"sendMessage()\">Send</button>\n  <button mat-stroked-button type=\"button\" mat-dialog-close>Close Bot</button>\n  \n  </div>\n  \n  </body>"

/***/ }),

/***/ "./src/app/chat/chat.component.ts":
/*!****************************************!*\
  !*** ./src/app/chat/chat.component.ts ***!
  \****************************************/
/*! exports provided: ChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function() { return ChatComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_add_operator_scan__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/scan */ "./node_modules/rxjs-compat/_esm5/add/operator/scan.js");
/* harmony import */ var _service_chat_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/chat.service */ "./src/app/service/chat.service.ts");




var ChatComponent = /** @class */ (function () {
    function ChatComponent(chat) {
        this.chat = chat;
    }
    ChatComponent.prototype.ngOnInit = function () {
        // appends to array after each new message is added to feedSource
        this.messages = this.chat.conversation.asObservable()
            .scan(function (acc, val) { return acc.concat(val); });
    };
    ChatComponent.prototype.sendMessage = function () {
        this.chat.converse(this.formValue);
        this.formValue = '';
    };
    ChatComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-chat',
            template: __webpack_require__(/*! ./chat.component.html */ "./src/app/chat/chat.component.html"),
            styles: [__webpack_require__(/*! ./chat.component.css */ "./src/app/chat/chat.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_chat_service__WEBPACK_IMPORTED_MODULE_3__["ChatService"]])
    ], ChatComponent);
    return ChatComponent;
}());



/***/ }),

/***/ "./src/app/domain/data-service.ts":
/*!****************************************!*\
  !*** ./src/app/domain/data-service.ts ***!
  \****************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
var DataService = /** @class */ (function () {
    function DataService() {
        this.login = "Login";
    }
    return DataService;
}());



/***/ }),

/***/ "./src/app/domain/sessionId.ts":
/*!*************************************!*\
  !*** ./src/app/domain/sessionId.ts ***!
  \*************************************/
/*! exports provided: SessionId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionId", function() { return SessionId; });
var SessionId = /** @class */ (function () {
    function SessionId() {
        this.greetings = [];
        this.show = false;
    }
    return SessionId;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* /* #footer{\n    background-color: blue;\n    margin-top: 217px;\n    height: 102px;\n} \n\n.page-footer{\n    height: 102px;\n}\n.container-fluid{\n    background-color: lightslategray;\n}\n.footer-copyright{\n    background-color: lightslategray;\n}\n.text-uppercase{\n    margin-top: 20px;\n    text-align: center;\n}\n.icons8-facebook { \n    display: inline-block;\n    width: 24px;\n    height: 24px;\n    background: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMjQiIGhlaWdodD0iMjQiCnZpZXdCb3g9IjAgMCAyNCAyNCIKc3R5bGU9IiBmaWxsOiMwMDAwMDA7Ij4gICAgPHBhdGggZD0iTTE5LDNINUMzLjg5NSwzLDMsMy44OTUsMyw1djE0YzAsMS4xMDUsMC44OTUsMiwyLDJoNy42MjF2LTYuOTYxaC0yLjM0M3YtMi43MjVoMi4zNDNWOS4zMDkgYzAtMi4zMjQsMS40MjEtMy41OTEsMy40OTUtMy41OTFjMC42OTktMC4wMDIsMS4zOTcsMC4wMzQsMi4wOTIsMC4xMDV2Mi40M2gtMS40MjhjLTEuMTMsMC0xLjM1LDAuNTM0LTEuMzUsMS4zMjJ2MS43MzVoMi43IGwtMC4zNTEsMi43MjVoLTIuMzY1VjIxSDE5YzEuMTA1LDAsMi0wLjg5NSwyLTJWNUMyMSwzLjg5NSwyMC4xMDUsMywxOSwzeiI+PC9wYXRoPjwvc3ZnPg==') 50% 50% no-repeat;\n    background-size: 100%;\n    margin-top:10px;\n    margin-left:290px;\n }\n\n .icons8-twitter-filled { \n    display: inline-block;\n    width: 24px;\n    height: 24px;\n    background: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMjQiIGhlaWdodD0iMjQiCnZpZXdCb3g9IjAgMCA1MCA1MCIKc3R5bGU9IiBmaWxsOiMwMDAwMDA7Ij48ZyBpZD0ic3VyZmFjZTEiPjxwYXRoIHN0eWxlPSIgIiBkPSJNIDUwLjA2MjUgMTAuNDM3NSBDIDQ4LjIxNDg0NCAxMS4yNTc4MTMgNDYuMjM0Mzc1IDExLjgwODU5NCA0NC4xNTIzNDQgMTIuMDU4NTk0IEMgNDYuMjc3MzQ0IDEwLjc4NTE1NiA0Ny45MTAxNTYgOC43Njk1MzEgNDguNjc1NzgxIDYuMzcxMDk0IEMgNDYuNjkxNDA2IDcuNTQ2ODc1IDQ0LjQ4NDM3NSA4LjQwMjM0NCA0Mi4xNDQ1MzEgOC44NjMyODEgQyA0MC4yNjk1MzEgNi44NjMyODEgMzcuNTk3NjU2IDUuNjE3MTg4IDM0LjY0MDYyNSA1LjYxNzE4OCBDIDI4Ljk2MDkzOCA1LjYxNzE4OCAyNC4zNTU0NjkgMTAuMjE4NzUgMjQuMzU1NDY5IDE1Ljg5ODQzOCBDIDI0LjM1NTQ2OSAxNi43MDMxMjUgMjQuNDQ5MjE5IDE3LjQ4ODI4MSAyNC42MjUgMTguMjQyMTg4IEMgMTYuMDc4MTI1IDE3LjgxMjUgOC41MDM5MDYgMTMuNzE4NzUgMy40Mjk2ODggNy40OTYwOTQgQyAyLjU0Mjk2OSA5LjAxOTUzMSAyLjAzOTA2MyAxMC43ODUxNTYgMi4wMzkwNjMgMTIuNjY3OTY5IEMgMi4wMzkwNjMgMTYuMjM0Mzc1IDMuODUxNTYzIDE5LjM4MjgxMyA2LjYxMzI4MSAyMS4yMzA0NjkgQyA0LjkyNTc4MSAyMS4xNzU3ODEgMy4zMzk4NDQgMjAuNzEwOTM4IDEuOTUzMTI1IDE5Ljk0MTQwNiBDIDEuOTUzMTI1IDE5Ljk4NDM3NSAxLjk1MzEyNSAyMC4wMjczNDQgMS45NTMxMjUgMjAuMDcwMzEzIEMgMS45NTMxMjUgMjUuMDU0Njg4IDUuNSAyOS4yMDcwMzEgMTAuMTk5MjE5IDMwLjE1NjI1IEMgOS4zMzk4NDQgMzAuMzkwNjI1IDguNDI5Njg4IDMwLjUxNTYyNSA3LjQ5MjE4OCAzMC41MTU2MjUgQyA2LjgyODEyNSAzMC41MTU2MjUgNi4xODM1OTQgMzAuNDUzMTI1IDUuNTU0Njg4IDMwLjMyODEyNSBDIDYuODY3MTg4IDM0LjQxMDE1NiAxMC42NjQwNjMgMzcuMzkwNjI1IDE1LjE2MDE1NiAzNy40NzI2NTYgQyAxMS42NDQ1MzEgNDAuMjMwNDY5IDcuMjEwOTM4IDQxLjg3MTA5NCAyLjM5MDYyNSA0MS44NzEwOTQgQyAxLjU1ODU5NCA0MS44NzEwOTQgMC43NDIxODggNDEuODI0MjE5IC0wLjA1ODU5MzggNDEuNzI2NTYzIEMgNC40ODgyODEgNDQuNjQ4NDM4IDkuODk0NTMxIDQ2LjM0NzY1NiAxNS43MDMxMjUgNDYuMzQ3NjU2IEMgMzQuNjE3MTg4IDQ2LjM0NzY1NiA0NC45NjA5MzggMzAuNjc5Njg4IDQ0Ljk2MDkzOCAxNy4wOTM3NSBDIDQ0Ljk2MDkzOCAxNi42NDg0MzggNDQuOTQ5MjE5IDE2LjE5OTIxOSA0NC45MzM1OTQgMTUuNzYxNzE5IEMgNDYuOTQxNDA2IDE0LjMxMjUgNDguNjgzNTk0IDEyLjUgNTAuMDYyNSAxMC40Mzc1IFogIj48L3BhdGg+PC9nPjwvc3ZnPg==') 50% 50% no-repeat;\n    background-size: 100%;\n    margin-left:290px;\n} */\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FvQ0ciLCJmaWxlIjoic3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAvKiAjZm9vdGVye1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XG4gICAgbWFyZ2luLXRvcDogMjE3cHg7XG4gICAgaGVpZ2h0OiAxMDJweDtcbn0gXG5cbi5wYWdlLWZvb3RlcntcbiAgICBoZWlnaHQ6IDEwMnB4O1xufVxuLmNvbnRhaW5lci1mbHVpZHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHNsYXRlZ3JheTtcbn1cbi5mb290ZXItY29weXJpZ2h0e1xuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0c2xhdGVncmF5O1xufVxuLnRleHQtdXBwZXJjYXNle1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmljb25zOC1mYWNlYm9vayB7IFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogMjRweDtcbiAgICBoZWlnaHQ6IDI0cHg7XG4gICAgYmFja2dyb3VuZDogdXJsKCdkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUI0Yld4dWN6MGlhSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNakF3TUM5emRtY2lJSGc5SWpCd2VDSWdlVDBpTUhCNElncDNhV1IwYUQwaU1qUWlJR2hsYVdkb2REMGlNalFpQ25acFpYZENiM2c5SWpBZ01DQXlOQ0F5TkNJS2MzUjViR1U5SWlCbWFXeHNPaU13TURBd01EQTdJajRnSUNBZ1BIQmhkR2dnWkQwaVRURTVMRE5JTlVNekxqZzVOU3d6TERNc015NDRPVFVzTXl3MWRqRTBZekFzTVM0eE1EVXNNQzQ0T1RVc01pd3lMREpvTnk0Mk1qRjJMVFl1T1RZeGFDMHlMak0wTTNZdE1pNDNNalZvTWk0ek5ETldPUzR6TURrZ1l6QXRNaTR6TWpRc01TNDBNakV0TXk0MU9URXNNeTQwT1RVdE15NDFPVEZqTUM0Mk9Ua3RNQzR3TURJc01TNHpPVGNzTUM0d016UXNNaTR3T1RJc01DNHhNRFYyTWk0ME0yZ3RNUzQwTWpoakxURXVNVE1zTUMweExqTTFMREF1TlRNMExURXVNelVzTVM0ek1qSjJNUzQzTXpWb01pNDNJR3d0TUM0ek5URXNNaTQzTWpWb0xUSXVNelkxVmpJeFNERTVZekV1TVRBMUxEQXNNaTB3TGpnNU5Td3lMVEpXTlVNeU1Td3pMamc1TlN3eU1DNHhNRFVzTXl3eE9Td3plaUkrUEM5d1lYUm9Qand2YzNablBnPT0nKSA1MCUgNTAlIG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XG4gICAgbWFyZ2luLXRvcDoxMHB4O1xuICAgIG1hcmdpbi1sZWZ0OjI5MHB4O1xuIH1cblxuIC5pY29uczgtdHdpdHRlci1maWxsZWQgeyBcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDI0cHg7XG4gICAgaGVpZ2h0OiAyNHB4O1xuICAgIGJhY2tncm91bmQ6IHVybCgnZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCNGJXeHVjejBpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TWpBd01DOXpkbWNpSUhnOUlqQndlQ0lnZVQwaU1IQjRJZ3AzYVdSMGFEMGlNalFpSUdobGFXZG9kRDBpTWpRaUNuWnBaWGRDYjNnOUlqQWdNQ0ExTUNBMU1DSUtjM1I1YkdVOUlpQm1hV3hzT2lNd01EQXdNREE3SWo0OFp5QnBaRDBpYzNWeVptRmpaVEVpUGp4d1lYUm9JSE4wZVd4bFBTSWdJaUJrUFNKTklEVXdMakEyTWpVZ01UQXVORE0zTlNCRElEUTRMakl4TkRnME5DQXhNUzR5TlRjNE1UTWdORFl1TWpNME16YzFJREV4TGpnd09EVTVOQ0EwTkM0eE5USXpORFFnTVRJdU1EVTROVGswSUVNZ05EWXVNamMzTXpRMElERXdMamM0TlRFMU5pQTBOeTQ1TVRBeE5UWWdPQzQzTmprMU16RWdORGd1TmpjMU56Z3hJRFl1TXpjeE1EazBJRU1nTkRZdU5qa3hOREEySURjdU5UUTJPRGMxSURRMExqUTRORE0zTlNBNExqUXdNak0wTkNBME1pNHhORFExTXpFZ09DNDROak15T0RFZ1F5QTBNQzR5TmprMU16RWdOaTQ0TmpNeU9ERWdNemN1TlRrM05qVTJJRFV1TmpFM01UZzRJRE0wTGpZME1EWXlOU0ExTGpZeE56RTRPQ0JESURJNExqazJNRGt6T0NBMUxqWXhOekU0T0NBeU5DNHpOVFUwTmprZ01UQXVNakU0TnpVZ01qUXVNelUxTkRZNUlERTFMamc1T0RRek9DQkRJREkwTGpNMU5UUTJPU0F4Tmk0M01ETXhNalVnTWpRdU5EUTVNakU1SURFM0xqUTRPREk0TVNBeU5DNDJNalVnTVRndU1qUXlNVGc0SUVNZ01UWXVNRGM0TVRJMUlERTNMamd4TWpVZ09DNDFNRE01TURZZ01UTXVOekU0TnpVZ015NDBNamsyT0RnZ055NDBPVFl3T1RRZ1F5QXlMalUwTWprMk9TQTVMakF4T1RVek1TQXlMakF6T1RBMk15QXhNQzQzT0RVeE5UWWdNaTR3TXprd05qTWdNVEl1TmpZM09UWTVJRU1nTWk0d016a3dOak1nTVRZdU1qTTBNemMxSURNdU9EVXhOVFl6SURFNUxqTTRNamd4TXlBMkxqWXhNekk0TVNBeU1TNHlNekEwTmprZ1F5QTBMamt5TlRjNE1TQXlNUzR4TnpVM09ERWdNeTR6TXprNE5EUWdNakF1TnpFd09UTTRJREV1T1RVek1USTFJREU1TGprME1UUXdOaUJESURFdU9UVXpNVEkxSURFNUxqazRORE0zTlNBeExqazFNekV5TlNBeU1DNHdNamN6TkRRZ01TNDVOVE14TWpVZ01qQXVNRGN3TXpFeklFTWdNUzQ1TlRNeE1qVWdNalV1TURVME5qZzRJRFV1TlNBeU9TNHlNRGN3TXpFZ01UQXVNVGs1TWpFNUlETXdMakUxTmpJMUlFTWdPUzR6TXprNE5EUWdNekF1TXprd05qSTFJRGd1TkRJNU5qZzRJRE13TGpVeE5UWXlOU0EzTGpRNU1qRTRPQ0F6TUM0MU1UVTJNalVnUXlBMkxqZ3lPREV5TlNBek1DNDFNVFUyTWpVZ05pNHhPRE0xT1RRZ016QXVORFV6TVRJMUlEVXVOVFUwTmpnNElETXdMak15T0RFeU5TQkRJRFl1T0RZM01UZzRJRE0wTGpReE1ERTFOaUF4TUM0Mk5qUXdOak1nTXpjdU16a3dOakkxSURFMUxqRTJNREUxTmlBek55NDBOekkyTlRZZ1F5QXhNUzQyTkRRMU16RWdOREF1TWpNd05EWTVJRGN1TWpFd09UTTRJRFF4TGpnM01UQTVOQ0F5TGpNNU1EWXlOU0EwTVM0NE56RXdPVFFnUXlBeExqVTFPRFU1TkNBME1TNDROekV3T1RRZ01DNDNOREl4T0RnZ05ERXVPREkwTWpFNUlDMHdMakExT0RVNU16Z2dOREV1TnpJMk5UWXpJRU1nTkM0ME9EZ3lPREVnTkRRdU5qUTRORE00SURrdU9EazBOVE14SURRMkxqTTBOelkxTmlBeE5TNDNNRE14TWpVZ05EWXVNelEzTmpVMklFTWdNelF1TmpFM01UZzRJRFEyTGpNME56WTFOaUEwTkM0NU5qQTVNemdnTXpBdU5qYzVOamc0SURRMExqazJNRGt6T0NBeE55NHdPVE0zTlNCRElEUTBMamsyTURrek9DQXhOaTQyTkRnME16Z2dORFF1T1RRNU1qRTVJREUyTGpFNU9USXhPU0EwTkM0NU16TTFPVFFnTVRVdU56WXhOekU1SUVNZ05EWXVPVFF4TkRBMklERTBMak14TWpVZ05EZ3VOamd6TlRrMElERXlMalVnTlRBdU1EWXlOU0F4TUM0ME16YzFJRm9nSWo0OEwzQmhkR2crUEM5blBqd3ZjM1puUGc9PScpIDUwJSA1MCUgbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcbiAgICBtYXJnaW4tbGVmdDoyOTBweDtcbn0gKi9cbiJdfQ== */"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <!-- Footer -->\n<footer class=\"page-footer font-small mdb-color pt-4\">\n\n  <!-- Footer Links -->\n  <div class=\"container text-center text-md-left\">\n\n    <!-- Footer links -->\n    <div class=\"row text-center text-md-left mt-3 pb-3\">\n\n      <!-- Grid column -->\n      <div class=\"col-md-3 col-lg-3 col-xl-3 mx-auto mt-3\">\n        <h6 class=\"text-uppercase mb-4 font-weight-bold\">Company name</h6>\n        <p>KnowledgeHub is a system that takes unstructured data as input in a wide variety of formats \n          such as Web documents, PDF, PPT, RTF and so on. \n        </p>\n      </div>\n      <!-- Grid column -->\n\n      <hr class=\"w-100 clearfix d-md-none\">\n\n      <!-- Grid column -->\n      <div class=\"col-md-2 col-lg-2 col-xl-2 mx-auto mt-3\">\n        <h6 class=\"text-uppercase mb-4 font-weight-bold\">Products</h6>\n        <p>\n          <a href=\"#!\">Knowledge Hub Graph</a>\n        </p>\n        <p>\n          <a href=\"#!\">Movie Domain</a>\n        </p>\n        <p>\n          <a href=\"#!\">Java Domain</a>\n        </p>\n        <p>\n          <a href=\"#!\">Angular Domain</a>\n        </p>\n      </div>\n      <!-- Grid column -->\n\n      <hr class=\"w-100 clearfix d-md-none\">\n\n      <!-- Grid column -->\n      <div class=\"col-md-3 col-lg-2 col-xl-2 mx-auto mt-3\">\n        <h6 class=\"text-uppercase mb-4 font-weight-bold\">Useful links</h6>\n        <p>\n          <a href=\"#!\">Admin login</a>\n        </p>\n        <p>\n          <a href=\"#!\">Ontology Contribution</a>\n        </p>\n        <p>\n          <a href=\"#!\">Content Contribution</a>\n        </p>\n        <p>\n          <a href=\"#!\">Donation</a>\n        </p>\n      </div>\n\n      <!-- Grid column -->\n      <hr class=\"w-100 clearfix d-md-none\">\n\n      <!-- Grid column -->\n      <div class=\"col-md-4 col-lg-3 col-xl-3 mx-auto mt-3\">\n        <h6 class=\"text-uppercase mb-4 font-weight-bold\">Contact</h6>\n        <p>\n          <mdb-icon fas icon=\"home\" class=\"mr-3\"></mdb-icon> NIIT Stackroute centre\n        </p>\n        <p>\n          <mdb-icon fas icon=\"envelope\" class=\"mr-3\"></mdb-icon> info@Stackroute.com\n        </p>\n        <p>\n          <mdb-icon fas icon=\"phone\" class=\"mr-3\"></mdb-icon> + 91-7015533897\n        </p>\n        <p>\n          <mdb-icon fas icon=\"print\" class=\"mr-3\"></mdb-icon> + 001 2534394\n        </p>\n      </div>\n      <!-- Grid column -->\n\n    </div>\n    <!-- Footer links -->\n\n    <hr>\n\n    <!-- Grid row -->\n    <div class=\"row d-flex align-items-center\">\n\n      <!-- Grid column -->\n      <div class=\"col-md-7 col-lg-8\">\n\n        <!--Copyright-->\n        <p class=\"text-center text-md-left\">© 2019 Copyright:\n          <a href=\"https://mdbootstrap.com/education/bootstrap/\">\n            <strong> stackRoute.com</strong>\n          </a>\n        </p>\n\n      </div>\n      <!-- Grid column -->\n\n      <!-- Grid column -->\n      <div class=\"col-md-5 col-lg-4 ml-lg-0\">\n\n        <!-- Social buttons -->\n        <div class=\"text-center text-md-right\">\n          <ul class=\"list-unstyled list-inline\">\n            <li class=\"list-inline-item\">\n              <a mdbBtn floating=\"true\" size=\"sm\" class=\"rgba-white-slight mx-1\" mdbWavesEffect>\n                <mdb-icon fab icon=\"facebook\"></mdb-icon>\n              </a>\n            </li>\n            <li class=\"list-inline-item\">\n              <a mdbBtn floating=\"true\" size=\"sm\" class=\"rgba-white-slight mx-1\" mdbWavesEffect>\n                <mdb-icon fab icon=\"twitter\"></mdb-icon>\n              </a>\n            </li>\n            <li class=\"list-inline-item\">\n              <a mdbBtn floating=\"true\" size=\"sm\" class=\"rgba-white-slight mx-1\" mdbWavesEffect>\n                <mdb-icon fab fab icon=\"google-plus\"></mdb-icon>\n              </a>\n            </li>\n            <li class=\"list-inline-item\">\n              <a mdbBtn floating=\"true\" size=\"sm\" class=\"rgba-white-slight mx-1\" mdbWavesEffect>\n                <mdb-icon fab icon=\"linkedin\"></mdb-icon>\n              </a>\n            </li>\n          </ul>\n        </div>\n\n      </div>\n      <!-- Grid column -->\n\n    </div>\n    <!-- Grid row -->\n\n  </div>\n  <!-- Footer Links -->\n\n</footer>\n<!-- Footer -->\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\" class=\"head\">\n  <mat-toolbar-row>\n    <a href=\"#\"><span><img src=\"assets/img/logo.jpg\" alt=\"logo\" id=\"logo\"></span></a>\n    <a href=\"#\" id=\"title\">Knowledge Hub</a>\n    <!-- <button mat-raised-button color=\"accent\" id=\"loginbutton\" (click)=\"logging()\">{{Islogged}}</button> -->\n    <button mat-raised-button color=\"accent\" id=\"loginbutton\" (click)=\"logging()\">Login</button>\n    </mat-toolbar-row>\n</mat-toolbar>\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_token_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/token.service */ "./src/app/service/token.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/auth.service */ "./src/app/service/auth.service.ts");





var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(token, router, auth) {
        this.token = token;
        this.router = router;
        this.auth = auth;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.logging = function () {
        if (this.token.getToken()) {
            this.token.signout();
            window.location.reload();
        }
        else {
            this.router.navigate(['/login']);
        }
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_token_service__WEBPACK_IMPORTED_MODULE_2__["TokenService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _service_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " #logo{\n\n    height:85px; \n    width:90px;\n}\n\np{\n    font-family: 'Indie Flower', cursive;\n    color: blanchedalmond;\n    font-size: 40px;\n    margin-left: 40px;\n   \n}\n\nnav{\n    text-align: center;\n    \n}\n\n/*\n#title{\n    margin-left:300px;\n    text-decoration: none;\n    color:inherit;\n}\n#title a:hover{\n    text-decoration: none;\n}\n#loginbutton{\n    margin-left: 420px;\n    float: inherit;\n}\n.navbar{\n    background-color: blueviolet;\n}\n.dragDrop{\n    background-color: aqua;\n}\n.dragDropColour{\n    margin: 25px;\n    width: 500px;\n    margin: auto;\n    height: 250px;\n    padding-top: 60px;\n}\n.form-inline{\n    background-color: rgb(6, 190, 247);\n}\nbody{\n    min-width: 1000px;\n\n}\n\napp-searchbutton{\n    margin-top: 3rem;\n} */\n\n#searchbutton:hover{\n    color:inherit;\n}\n\n#mic{\n    margin-top:0px;\n    height:45px;\n    width:45px;\n    margin-left:2px;\n}\n\n.form-inline{\n    float: right;\n}\n\n.rig{\n    float: right;\n}\n\n#add-button{\n    top: auto;\n    right: 100px;\n    bottom: 200px;\n    background-color: rgb(40, 187, 40);\n    height: 75px;\n    width: 75px;\n    left: auto;\n    position: fixed;\n    font-size: 18px;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUM7O0lBRUcsV0FBVztJQUNYLFVBQVU7QUFDZDs7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyxxQkFBcUI7SUFDckIsZUFBZTtJQUNmLGlCQUFpQjs7QUFFckI7O0FBQ0E7SUFDSSxrQkFBa0I7O0FBRXRCOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FvQ0c7O0FBR0g7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksY0FBYztJQUNkLFdBQVc7SUFDWCxVQUFVO0lBQ1YsZUFBZTtBQUNuQjs7QUFJQTtJQUNJLFlBQVk7QUFDaEI7O0FBQ0E7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksU0FBUztJQUNULFlBQVk7SUFDWixhQUFhO0lBQ2Isa0NBQWtDO0lBQ2xDLFlBQVk7SUFDWixXQUFXO0lBQ1gsVUFBVTtJQUNWLGVBQWU7SUFDZixlQUFlO0VBQ2pCIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgI2xvZ297XG5cbiAgICBoZWlnaHQ6ODVweDsgXG4gICAgd2lkdGg6OTBweDtcbn1cblxucHtcbiAgICBmb250LWZhbWlseTogJ0luZGllIEZsb3dlcicsIGN1cnNpdmU7XG4gICAgY29sb3I6IGJsYW5jaGVkYWxtb25kO1xuICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICBtYXJnaW4tbGVmdDogNDBweDtcbiAgIFxufVxubmF2e1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBcbn1cbi8qXG4jdGl0bGV7XG4gICAgbWFyZ2luLWxlZnQ6MzAwcHg7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOmluaGVyaXQ7XG59XG4jdGl0bGUgYTpob3ZlcntcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4jbG9naW5idXR0b257XG4gICAgbWFyZ2luLWxlZnQ6IDQyMHB4O1xuICAgIGZsb2F0OiBpbmhlcml0O1xufVxuLm5hdmJhcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVldmlvbGV0O1xufVxuLmRyYWdEcm9we1xuICAgIGJhY2tncm91bmQtY29sb3I6IGFxdWE7XG59XG4uZHJhZ0Ryb3BDb2xvdXJ7XG4gICAgbWFyZ2luOiAyNXB4O1xuICAgIHdpZHRoOiA1MDBweDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgaGVpZ2h0OiAyNTBweDtcbiAgICBwYWRkaW5nLXRvcDogNjBweDtcbn1cbi5mb3JtLWlubGluZXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNiwgMTkwLCAyNDcpO1xufVxuYm9keXtcbiAgICBtaW4td2lkdGg6IDEwMDBweDtcblxufVxuXG5hcHAtc2VhcmNoYnV0dG9ue1xuICAgIG1hcmdpbi10b3A6IDNyZW07XG59ICovXG5cblxuI3NlYXJjaGJ1dHRvbjpob3ZlcntcbiAgICBjb2xvcjppbmhlcml0O1xufVxuXG4jbWlje1xuICAgIG1hcmdpbi10b3A6MHB4O1xuICAgIGhlaWdodDo0NXB4O1xuICAgIHdpZHRoOjQ1cHg7XG4gICAgbWFyZ2luLWxlZnQ6MnB4O1xufSBcblxuXG5cbi5mb3JtLWlubGluZXtcbiAgICBmbG9hdDogcmlnaHQ7XG59XG4ucmlne1xuICAgIGZsb2F0OiByaWdodDtcbn1cblxuI2FkZC1idXR0b257XG4gICAgdG9wOiBhdXRvO1xuICAgIHJpZ2h0OiAxMDBweDtcbiAgICBib3R0b206IDIwMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0MCwgMTg3LCA0MCk7XG4gICAgaGVpZ2h0OiA3NXB4O1xuICAgIHdpZHRoOiA3NXB4O1xuICAgIGxlZnQ6IGF1dG87XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <!--  Navigation bar for the home page -->\n\n\n<!-- <nav >\n  <mat-toolbar color=\"primary\">\n          <span class=\"example-fill-remaining-space\"></span>\n          <a href=\"#\"><span><img src=\"assets/img/logo.jpg\" alt=\"logo\" id=\"logo\"></span></a>\n          <button mat-button (click)='navigate()'>Home</button>\n          <span class=\"align-center\">\n         \n          <button mat-button  (click)=\"logging()\">{{Islogged}}</button>\n          <button mat-raised-button color=\"warn\" (click)=\"openDialog()\">Knowledge Bot</button>\n        </span>\n      </mat-toolbar>\n      </nav>  -->\n\n\n\n\n<!-- <mat-toolbar color=\"primary\">\n    <a href=\"#\"><span><img src=\"assets/img/logo.jpg\" alt=\"logo\" id=\"logo\"></span></a>\n    \n    <a href=\"#\" id=\"title\">Knowledge Hub</a>\n    <button mat-raised-button color=\"gray\" id=\"loginbutton\" (click)=\"open()\">{{Islogged}}</button>\n     <button mat-raised-button color=\"accent\" id=\"loginbutton\" (click)=\"logging()\">{{Islogged}}</button> \n    \n    <button mat-raised-button color=\"warn\" (click)=\"openDialog()\">Knowledge Bot</button>\n\n</mat-toolbar> -->\n<!-- <div class=\"dragDrop\" *ngIf=\"this.token.getToken()\">\n  <div class=\"dragDropColour\">\n    <app-upload></app-upload>\n  </div>\n</div> -->\n\n<!DOCTYPE html>\n<html>\n\n<head>\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <link href=\"https://fonts.googleapis.com/css?family=Indie+Flower\" rel=\"stylesheet\">\n  \n  <style>\n    .parallax {\n  /* The image used */\n  background-image: url(\"assets/img/senses.jpg\");\n\n  /* Set a specific height */\n  min-height: 500px; \n\n  /* Create the parallax scrolling effect */\n  background-attachment: fixed;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.affix {\n    top: 0;\n    width: 100%;\n    z-index: 9999 !important;\n  }\n\n  .container{\n    padding-top: 120px;\n    position: sticky;\n  }\n</style>\n</head>\n\n<body>\n  <nav class=\"navbar navbar-expand-lg navbar-light bg-dark\" data-spy=\"affix\" data-offset-top=\"197\">\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarTogglerDemo03\"\n      aria-controls=\"navbarTogglerDemo03\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <a href=\"#\"><span><img src=\"assets/img/l2.jpg\" alt=\"logo\" id=\"logo\"></span></a>\n    <p>Knowledge hub</p>\n    <div class=\"collapse navbar-collapse\" id=\"navbarTogglerDemo03\">\n      <ul class=\"navbar-nav mr-auto mt-2 mt-lg-0\">\n       </ul>\n    <form class=\"form-inline\">\n        <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\" (click)=\"logging()\">{{this.dataService.login}}</button>\n      </form>\n\n    </div>\n  </nav>\n\n  <div class=\"dragDrop\" *ngIf=\"this.token.getToken()\">\n    <div class=\"dragDropColour\">\n      <app-upload></app-upload>\n    </div>\n  </div>\n  <div class=\"parallax\">\n    <div class=\"container\" data-spy=\"affix\" data-offset-top=\"197\">\n      <br />\n      <div class=\"row justify-content-center\">\n        <div class=\"col-12 col-md-10 col-lg-8\">\n          <form class=\"card card-sm\">\n            <div class=\"card-body row no-gutters align-items-center\">\n\n              <!--end of col-->\n              <div class=\"col\">\n                <input class=\"form-control form-control-lg form-control-borderless\" #searchKey name=\"q\" id=\"searchKey\"\n                  type=\"search\" [(ngModel)]=\"searchTerm\" placeholder=\"Search topics or keywords\">\n\n              </div>\n              <!--end of col-->\n              <form #form #gSearch method=\"GET\" id=\"gSearch\">\n                <div id=\"voicesearch\">\n                  <div class=\"col-auto\">\n                    <img src=\"assets/img/mic.png\" alt=\"mic\" (click)=\"voiceSearch()\" id=\"mic\">\n                    <button class=\"btn btn-lg btn-success\" type=\"submit\" (click)=\"subscribe(searchTerm)\" >Search</button>\n                  </div>\n                </div>\n              </form>\n              <!--end of col-->\n            </div>\n          </form>\n        </div>\n        <!--end of col-->\n      </div>\n    </div>\n  </div>\n  <app-id-generator></app-id-generator>\n\n  <button mat-fab color=\"primary\" id=\"add-button\" (click)=\"openDialog()\" matTooltip=\"Knowledge Bot\"><ng-md-icon class=\"material-icons\">Bot</ng-md-icon></button>\n\n  <div *ngIf = \"this.result.show==true\">\n    <app-searchcard></app-searchcard>\n  </div>\n\n  <app-footer></app-footer>\n\n</body>\n\n</html> "

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_token_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/token.service */ "./src/app/service/token.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _chat_chat_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../chat/chat.component */ "./src/app/chat/chat.component.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _service_searchinfo_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../service/searchinfo.service */ "./src/app/service/searchinfo.service.ts");
/* harmony import */ var _domain_data_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../domain/data-service */ "./src/app/domain/data-service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _domain_sessionId__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../domain/sessionId */ "./src/app/domain/sessionId.ts");













var configKey = Object(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["makeStateKey"])('CONFIG');
var HomeComponent = /** @class */ (function () {
    function HomeComponent(token, router, auth, dialog, injector, state, searchService, SessionIdNew, dataService, result, platformid, route) {
        this.token = token;
        this.router = router;
        this.auth = auth;
        this.dialog = dialog;
        this.injector = injector;
        this.state = state;
        this.searchService = searchService;
        this.SessionIdNew = SessionIdNew;
        this.dataService = dataService;
        this.result = result;
        this.platformid = platformid;
        this.route = route;
        this.Islogged = this.dataService.login;
        this.title = 'Voice Search POC';
        //isPlatformServer -Returns whether a platform id represents a server platform.
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_11__["isPlatformServer"])(this.platformid)) {
            //this.injector.get - Retrieves an instance from the injector based on the provided token.
            //injector get - abstract get<T>(token: Type<T> | InjectionToken<T>, notFoundValue?: T, flags?: InjectFlags): T
            var envJson = this.injector.get('CONFIG') ? this.injector.get('CONFIG') : {};
            //state of TransferState set method- set<T>(key: StateKey<T>, value: T): void
            this.state.set(configKey, envJson);
        }
    }
    //This method checks for token on when you load the component.
    HomeComponent.prototype.ngOnInit = function () {
        // window.sessionStorage.clear();
        if (this.token.getToken()) {
            this.user = this.token.getUser();
            this.dataService.login = "LogOut";
            //  this.Islogged = "Log Out";
        }
        else {
            // this.Islogged="Login"
            // close();
        }
    };
    HomeComponent.prototype.openDialog = function () {
        this.chatComponent = this.dialog.open(_chat_chat_component__WEBPACK_IMPORTED_MODULE_7__["ChatComponent"], { disableClose: true });
    };
    // This method is to"Log Out" signout or
    //  naviagte to login component based on whether admin logged in or not.
    HomeComponent.prototype.logging = function () {
        if (this.token.getToken()) {
            this.token.signout();
            //  window.location.reload();
            this.dataService.login = "Login";
        }
        else {
            this.dialog.open(_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"]);
        }
    };
    HomeComponent.prototype.reloadPage = function () {
        window.location.reload();
    };
    // This method is used to navigate to home component. 
    HomeComponent.prototype.navigate = function () {
        this.router.navigate(['/home']);
    };
    HomeComponent.prototype.addfiles = function () {
        this.add = true;
    };
    HomeComponent.prototype.open = function () {
        this.dialog.open(_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"]);
    };
    HomeComponent.prototype.close = function () {
        this.dialog.closeAll();
    };
    HomeComponent.prototype.voiceSearch = function () {
        //we create the webkitSpeechRecognition object which provides the speech interface,
        // and set some of its attributes and event handlers.
        if ('webkitSpeechRecognition' in window) {
            var vSearch_1 = new webkitSpeechRecognition();
            vSearch_1.continuous = false;
            vSearch_1.interimresults = false;
            vSearch_1.lang = 'en-US';
            // activate the speech recognizer by .start()
            vSearch_1.start();
            var voiceSearchForm = this.formSearch.nativeElement;
            var voiceHandler_1 = this.hiddenSearchHandler.nativeElement;
            vSearch_1.onresult = function (event) {
                //storing the result in value
                //returns a string containing the transcript of the recognised word(s).
                voiceHandler_1.value = event.results[0][0].transcript;
                vSearch_1.stop();
                //submitting the form with the value
                // voiceSearchForm.submit();
            };
            //if error is encountered, show error in console and stop the speech recognition
            vSearch_1.onerror = function (event) {
                console.log(event);
                vSearch_1.stop();
            };
        }
        //if browser does not have webkitspeechrecognition
        else {
            console.log("Your browser does not support voice recognition feature.");
        }
    };
    HomeComponent.prototype.google = function () {
        this.route.navigateByUrl("https://www.google.com/search");
    };
    // getdata() {  
    //   this.dataService.dataService = this.searchTerm; 
    //   this.router.navigate(['/cards']);
    // }
    // post(search:string){
    //   var chatMessage = {
    //     sessionId : this.SessionIdNew.SessionId,
    //     searchString : search,
    //    };
    //    console.log(this.SessionIdNew.SessionId);
    //   this.searchService.getResults(chatMessage).subscribe((data)=>{
    //     console.log(",mnmnjnk,")
    //   });
    // }
    HomeComponent.prototype.subscribe = function (search) {
        var output = {
            sessionId: this.SessionIdNew.SessionId,
            searchString: search
        };
        this.searchService.postResults(output).subscribe();
        this.dataService.dataService = this.searchTerm;
        // console.log("home :"+this.result.greetings);
        // console.log("TO searchservice :"+output.sessionId+" "+output.searchString);
        // this.object = this.result.greetings;
        this.result.show = true;
        // this.router.navigate(['/cards'])
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gSearch'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], HomeComponent.prototype, "formSearch", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('searchKey'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], HomeComponent.prototype, "hiddenSearchHandler", void 0);
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](10, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_token_service__WEBPACK_IMPORTED_MODULE_2__["TokenService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _service_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["TransferState"],
            _service_searchinfo_service__WEBPACK_IMPORTED_MODULE_9__["SearchinfoService"],
            _domain_sessionId__WEBPACK_IMPORTED_MODULE_12__["SessionId"],
            _domain_data_service__WEBPACK_IMPORTED_MODULE_10__["DataService"],
            _domain_sessionId__WEBPACK_IMPORTED_MODULE_12__["SessionId"],
            Object, _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/id-generator/id-generator.component.css":
/*!*********************************************************!*\
  !*** ./src/app/id-generator/id-generator.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2lkLWdlbmVyYXRvci9pZC1nZW5lcmF0b3IuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/id-generator/id-generator.component.html":
/*!**********************************************************!*\
  !*** ./src/app/id-generator/id-generator.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div style=\"text-align:center\">\n    <div class=\"chat\">\n    </div>\n</div>  -->\n"

/***/ }),

/***/ "./src/app/id-generator/id-generator.component.ts":
/*!********************************************************!*\
  !*** ./src/app/id-generator/id-generator.component.ts ***!
  \********************************************************/
/*! exports provided: IdGeneratorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdGeneratorComponent", function() { return IdGeneratorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var stompjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! stompjs */ "./node_modules/stompjs/index.js");
/* harmony import */ var stompjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(stompjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var sockjs_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sockjs-client */ "./node_modules/sockjs-client/lib/entry.js");
/* harmony import */ var sockjs_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sockjs_client__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _domain_sessionId__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../domain/sessionId */ "./src/app/domain/sessionId.ts");





var IdGeneratorComponent = /** @class */ (function () {
    function IdGeneratorComponent(SessionIdNew) {
        this.SessionIdNew = SessionIdNew;
        this.title = 'WebSockets chat';
        this.sessionId = this.IDGenerator();
        this.SessionIdNew.SessionId = this.sessionId;
        this.initializeWebSocketConnection();
        console.log(this.SessionIdNew.SessionId);
    }
    IdGeneratorComponent.prototype.initializeWebSocketConnection = function () {
        var id = this.sessionId + "";
        var socket = new sockjs_client__WEBPACK_IMPORTED_MODULE_3___default.a('https://localhost:8097/socket');
        this.stompClient = stompjs__WEBPACK_IMPORTED_MODULE_2___default.a.over(socket);
        var _this = this;
        this.stompClient.connect({}, function (frame) {
            _this.stompClient.subscribe("/topic/public/" + id, function (message) {
                var res = JSON.parse(message.body);
                res.forEach(function (element) {
                    _this.show(element);
                });
            });
        });
    };
    IdGeneratorComponent.prototype.show = function (name) {
        this.SessionIdNew.greetings.push(name);
    };
    IdGeneratorComponent.prototype.IDGenerator = function () {
        length = 16;
        // Random number from 0 to length
        var randomNumber = function (length) {
            return Math.floor(Math.random() * length);
        };
        // Generate Pseudo Random String, if safety is important use dedicated crypto/math library for less possible collisions!
        var generateID = function (length) {
            var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
            var text = "";
            for (var i = 0; i < length; i++) {
                text += possible.charAt(randomNumber(possible.length));
            }
            return text;
        };
        return generateID(16);
    };
    IdGeneratorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-id-generator',
            template: __webpack_require__(/*! ./id-generator.component.html */ "./src/app/id-generator/id-generator.component.html"),
            styles: [__webpack_require__(/*! ./id-generator.component.css */ "./src/app/id-generator/id-generator.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_domain_sessionId__WEBPACK_IMPORTED_MODULE_4__["SessionId"]])
    ], IdGeneratorComponent);
    return IdGeneratorComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " /* custom styles for html page of login component\n body{\n    padding:10%;\n    padding-left: 0%;\n    display: block;\n    border: 0.3rem;\n    border-style: solid;\n    padding-left: 32%;\n    background-color: darkgray;\n}  \n\n.warn{\n    color: red;\n}\n\n#logo{\n    margin-top:2px;\n    height:55px; \n    width:60px;\n}\n#title{\n    margin-left:500px;\n    text-decoration: none;\n    color:inherit;\n} */\n/* #title a:hover{\n    text-decoration: none;\n} */\n/* #loginbutton{\n    margin-left: 420px;\n} */\n/* .mat-card{\n    width: 430px;\n    margin: auto;\n    background-color: aqua;\n    margin-top: 50px;\n    margin-bottom: 50px\n} */\n.my-card{\n     width: 400px; \n    margin: auto;\n\n    /* margin-top: 40px; */\n}\n.close{\n    float: right; \n}\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JFO0FBQ0g7O0dBRUc7QUFDSDs7R0FFRztBQUNIOzs7Ozs7R0FNRztBQUNIO0tBQ0ssWUFBWTtJQUNiLFlBQVk7O0lBRVosc0JBQXNCO0FBQzFCO0FBRUE7SUFDSSxZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiAvKiBjdXN0b20gc3R5bGVzIGZvciBodG1sIHBhZ2Ugb2YgbG9naW4gY29tcG9uZW50XG4gYm9keXtcbiAgICBwYWRkaW5nOjEwJTtcbiAgICBwYWRkaW5nLWxlZnQ6IDAlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGJvcmRlcjogMC4zcmVtO1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgcGFkZGluZy1sZWZ0OiAzMiU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2dyYXk7XG59ICBcblxuLndhcm57XG4gICAgY29sb3I6IHJlZDtcbn1cblxuI2xvZ297XG4gICAgbWFyZ2luLXRvcDoycHg7XG4gICAgaGVpZ2h0OjU1cHg7IFxuICAgIHdpZHRoOjYwcHg7XG59XG4jdGl0bGV7XG4gICAgbWFyZ2luLWxlZnQ6NTAwcHg7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOmluaGVyaXQ7XG59ICovXG4vKiAjdGl0bGUgYTpob3ZlcntcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59ICovXG4vKiAjbG9naW5idXR0b257XG4gICAgbWFyZ2luLWxlZnQ6IDQyMHB4O1xufSAqL1xuLyogLm1hdC1jYXJke1xuICAgIHdpZHRoOiA0MzBweDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYXF1YTtcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDUwcHhcbn0gKi9cbi5teS1jYXJke1xuICAgICB3aWR0aDogNDAwcHg7IFxuICAgIG1hcmdpbjogYXV0bztcblxuICAgIC8qIG1hcmdpbi10b3A6IDQwcHg7ICovXG59XG5cbi5jbG9zZXtcbiAgICBmbG9hdDogcmlnaHQ7IFxufVxuXG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <mat-toolbar color=\"primary\">\n   <mat-toolbar-row>\n      <a href=\"#\"><span><img src=\"assets/img/logo.jpg\" alt=\"logo\" id=\"logo\"></span></a>\n      <a href=\"#\" id=\"title\">Knowledge Hub</a>\n      <button mat-raised-button color=\"accent\" id=\"loginbutton\" (click)=\"logging()\">Login As Admin</button> -->\n  <!--- </mat-toolbar-row>\n</mat-toolbar> -->\n\n<!-- <body> -->\n   <mat-card-title *ngIf=\"isLogin==true\">\n      Already logged in;\n   </mat-card-title>\n   <!-- <mat-card class=\"bo\"> -->\n   <mat-card *ngIf=\"isLogin==false\" class=\"my-card\">\n      <mat-card-title>Login</mat-card-title>\n      <!-- Matcard foe username and password -->\n         <mat-card-content>\n            <form class=\"my-form\" name=\"form\">\n               <mat-form-field>\n                  <mat-label>Username</mat-label><br>\n                  <input matInput placeholder=\"username\" [formControl]=\"username\" required>\n               </mat-form-field><br>\n               <mat-form-field>\n                  <mat-label>Password</mat-label>\n                  <input matInput type=\"password\" placeholder=\"Password\" [formControl]=\"password\" required>\n               </mat-form-field><br>\n               <mat-toolbar class=\"warn\" *ngIf=\"this.isLoginFailed == true\">\n                  Invalid Credentials\n               </mat-toolbar>\n            </form><br>\n         </mat-card-content>\n\n         <mat-card-actions>\n            <button mat-raised-button (click)=\"validate()\" color=\"primary\">LOGIN</button>\n            <button  mat-stroked-button type=\"button\"  class=\"close\"mat-dialog-close>Cancel</button>\n         </mat-card-actions>\n      \n      <!-- </mat-card> -->\n   </mat-card>\n<!-- </body> -->\n<!-- <app-footer></app-footer> -->"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var _service_token_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/token.service */ "./src/app/service/token.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _domain_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../domain/data-service */ "./src/app/domain/data-service.ts");








var LoginComponent = /** @class */ (function () {
    function LoginComponent(auth, token, router, dialog, dataService) {
        this.auth = auth;
        this.token = token;
        this.router = router;
        this.dialog = dialog;
        this.dataService = dataService;
        this.form = {};
        this.username = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('');
        this.password = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('');
        this.isLoginFailed = false;
    }
    //This method checks for token on when you load the component.
    LoginComponent.prototype.ngOnInit = function () {
        if (this.token.getToken()) {
            this.isLogin = true;
        }
        else {
            this.isLogin = false;
        }
    };
    //This method is to post login credentials to backend and save response.
    LoginComponent.prototype.validate = function () {
        var _this = this;
        this.user = { "username": this.username.value, "password": this.password.value };
        console.log(this.user.username);
        this.auth.auth(this.user).subscribe(function (data) {
            _this.token.saveToken(data.accessToken),
                _this.token.saveUsername(data.username),
                console.log(data.accessToken),
                _this.dataService.login = "LogOut";
            _this.dialog.closeAll();
        }, function (error) {
            console.log(error);
            _this.errorMessage = error.error.message;
            _this.isLoginFailed = true;
        });
    };
    LoginComponent.prototype.reloadPage = function () {
        window.location.reload();
    };
    // This method is used to navigate to home component. 
    LoginComponent.prototype.navigate = function () {
        this.router.navigate(['/home']);
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _service_token_service__WEBPACK_IMPORTED_MODULE_3__["TokenService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"], _domain_data_service__WEBPACK_IMPORTED_MODULE_7__["DataService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/paginator/paginator.component.css":
/*!***************************************************!*\
  !*** ./src/app/paginator/paginator.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nan\n{\n    float:left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnaW5hdG9yL3BhZ2luYXRvci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLFVBQVU7QUFDZCIsImZpbGUiOiJzcmMvYXBwL3BhZ2luYXRvci9wYWdpbmF0b3IuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYW5cbntcbiAgICBmbG9hdDpsZWZ0O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/paginator/paginator.component.html":
/*!****************************************************!*\
  !*** ./src/app/paginator/paginator.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-paginator [length]=\"length\"\n               [hidePageSize]=\"true\"\n              [pageSize]=\"pageSize\"\n              (page)=\"pageEvent = $event\" class = \"nan\">            \n</mat-paginator>"

/***/ }),

/***/ "./src/app/paginator/paginator.component.ts":
/*!**************************************************!*\
  !*** ./src/app/paginator/paginator.component.ts ***!
  \**************************************************/
/*! exports provided: PaginatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginatorComponent", function() { return PaginatorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PaginatorComponent = /** @class */ (function () {
    function PaginatorComponent() {
        this.length = 60;
        this.pageSize = 2;
    }
    PaginatorComponent.prototype.ngOnInit = function () {
    };
    PaginatorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-paginator',
            template: __webpack_require__(/*! ./paginator.component.html */ "./src/app/paginator/paginator.component.html"),
            styles: [__webpack_require__(/*! ./paginator.component.css */ "./src/app/paginator/paginator.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PaginatorComponent);
    return PaginatorComponent;
}());



/***/ }),

/***/ "./src/app/searchbutton/searchbutton.component.css":
/*!*********************************************************!*\
  !*** ./src/app/searchbutton/searchbutton.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* #sbutton{\n    margin-left:700px;\n    display: inline;\n}\n\n#searchbutton{\n    height:35px;\n    margin-left: 2px;\n    margin-top:0px;\n}\n\n#searchbutton:hover{\n    color:inherit;\n}\n\n#mic{\n    margin-top:0px;\n    height:45px;\n    width:45px;\n    margin-left:2px;\n}\n\n#searchKey{\n    margin-top:150px;\n    margin-left:370px;\n    height:35px;\n    width:400px;\n    background-color: rgb(212, 209, 209);\n}\n\n.searchArea{\n    width: auto;\n    height: 450px;\n    margin: auto;\n\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n#sbutton{\n    margin-left:700px;\n    display: inline;\n}\n\n#searchbutton{\n    height:35px;\n    margin-left: 2px;\n    margin-top:0px;\n}*/\n\n#searchbutton:hover{\n    color:inherit;\n}\n\n#mic{\n    margin-top:0px;\n    height:45px;\n    width:45px;\n    margin-left:2px;\n}\n\n/* #searchKey{\n    margin-top:150px;\n    margin-left:370px;\n    height:35px;\n    width:400px;\n    background-color: rgb(212, 209, 209);\n} */\n\n/* .searchArea{\n    width: auto;\n    height: 450px;\n    margin: auto;\n\n} */\n\n.input-group.md-form.form-sm.form-1 input{\n    border: 1px solid #bdbdbd;\n    border-top-right-radius: 0.25rem;\n    border-bottom-right-radius: 0.25rem;\n}\n\n.input-group.md-form.form-sm.form-2 input {\n    border: 1px solid #bdbdbd;\n    border-top-left-radius: 0.25rem;\n    border-bottom-left-radius: 0.25rem;\n}\n\n.input-group.md-form.form-sm.form-2 input.amber-border  {\n    border: 1px solid #ffca28;\n}\n\n.form-control-borderless {\n    border: none;\n}\n\n.form-control-borderless:hover, .form-control-borderless:active, .form-control-borderless:focus {\n    border: none;\n    outline: none;\n    box-shadow: none;\n}\n\nbody{\n    margin-bottom:10rem;\n     \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VhcmNoYnV0dG9uL3NlYXJjaGJ1dHRvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBMERFOztBQUVGO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxXQUFXO0lBQ1gsVUFBVTtJQUNWLGVBQWU7QUFDbkI7O0FBRUE7Ozs7OztHQU1HOztBQUVIOzs7OztHQUtHOztBQUtIO0lBQ0kseUJBQXlCO0lBQ3pCLGdDQUFnQztJQUNoQyxtQ0FBbUM7QUFDdkM7O0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsK0JBQStCO0lBQy9CLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFLQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGdCQUFnQjtBQUNwQjs7QUFDQTtJQUNJLG1CQUFtQjs7QUFFdkIiLCJmaWxlIjoic3JjL2FwcC9zZWFyY2hidXR0b24vc2VhcmNoYnV0dG9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAjc2J1dHRvbntcbiAgICBtYXJnaW4tbGVmdDo3MDBweDtcbiAgICBkaXNwbGF5OiBpbmxpbmU7XG59XG5cbiNzZWFyY2hidXR0b257XG4gICAgaGVpZ2h0OjM1cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDJweDtcbiAgICBtYXJnaW4tdG9wOjBweDtcbn1cblxuI3NlYXJjaGJ1dHRvbjpob3ZlcntcbiAgICBjb2xvcjppbmhlcml0O1xufVxuXG4jbWlje1xuICAgIG1hcmdpbi10b3A6MHB4O1xuICAgIGhlaWdodDo0NXB4O1xuICAgIHdpZHRoOjQ1cHg7XG4gICAgbWFyZ2luLWxlZnQ6MnB4O1xufVxuXG4jc2VhcmNoS2V5e1xuICAgIG1hcmdpbi10b3A6MTUwcHg7XG4gICAgbWFyZ2luLWxlZnQ6MzcwcHg7XG4gICAgaGVpZ2h0OjM1cHg7XG4gICAgd2lkdGg6NDAwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxMiwgMjA5LCAyMDkpO1xufVxuXG4uc2VhcmNoQXJlYXtcbiAgICB3aWR0aDogYXV0bztcbiAgICBoZWlnaHQ6IDQ1MHB4O1xuICAgIG1hcmdpbjogYXV0bztcblxufVxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4jc2J1dHRvbntcbiAgICBtYXJnaW4tbGVmdDo3MDBweDtcbiAgICBkaXNwbGF5OiBpbmxpbmU7XG59XG5cbiNzZWFyY2hidXR0b257XG4gICAgaGVpZ2h0OjM1cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDJweDtcbiAgICBtYXJnaW4tdG9wOjBweDtcbn0qL1xuXG4jc2VhcmNoYnV0dG9uOmhvdmVye1xuICAgIGNvbG9yOmluaGVyaXQ7XG59XG5cbiNtaWN7XG4gICAgbWFyZ2luLXRvcDowcHg7XG4gICAgaGVpZ2h0OjQ1cHg7XG4gICAgd2lkdGg6NDVweDtcbiAgICBtYXJnaW4tbGVmdDoycHg7XG59IFxuXG4vKiAjc2VhcmNoS2V5e1xuICAgIG1hcmdpbi10b3A6MTUwcHg7XG4gICAgbWFyZ2luLWxlZnQ6MzcwcHg7XG4gICAgaGVpZ2h0OjM1cHg7XG4gICAgd2lkdGg6NDAwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxMiwgMjA5LCAyMDkpO1xufSAqL1xuXG4vKiAuc2VhcmNoQXJlYXtcbiAgICB3aWR0aDogYXV0bztcbiAgICBoZWlnaHQ6IDQ1MHB4O1xuICAgIG1hcmdpbjogYXV0bztcblxufSAqL1xuXG5cblxuXG4uaW5wdXQtZ3JvdXAubWQtZm9ybS5mb3JtLXNtLmZvcm0tMSBpbnB1dHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYmRiZGJkO1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwLjI1cmVtO1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwLjI1cmVtO1xufVxuLmlucHV0LWdyb3VwLm1kLWZvcm0uZm9ybS1zbS5mb3JtLTIgaW5wdXQge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNiZGJkYmQ7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMC4yNXJlbTtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwLjI1cmVtO1xufVxuXG4uaW5wdXQtZ3JvdXAubWQtZm9ybS5mb3JtLXNtLmZvcm0tMiBpbnB1dC5hbWJlci1ib3JkZXIgIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZjYTI4O1xufVxuXG5cblxuXG4uZm9ybS1jb250cm9sLWJvcmRlcmxlc3Mge1xuICAgIGJvcmRlcjogbm9uZTtcbn1cblxuLmZvcm0tY29udHJvbC1ib3JkZXJsZXNzOmhvdmVyLCAuZm9ybS1jb250cm9sLWJvcmRlcmxlc3M6YWN0aXZlLCAuZm9ybS1jb250cm9sLWJvcmRlcmxlc3M6Zm9jdXMge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG59XG5ib2R5e1xuICAgIG1hcmdpbi1ib3R0b206MTByZW07XG4gICAgIFxufSJdfQ== */"

/***/ }),

/***/ "./src/app/searchbutton/searchbutton.component.html":
/*!**********************************************************!*\
  !*** ./src/app/searchbutton/searchbutton.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <span id=\"sbutton\"> -->\n  <!-- <mat-toolbar> -->\n    <!-- <div class=\"searchArea\">\n      <form #form #gSearch method=\"GET\" id=\"gSearch\" >\n          <div id=\"voicesearch\">\n              <input #searchKey name=\"q\" id=\"searchKey\" type=\"search\"  [(ngModel)]=\"searchTerm\" placeholder=\" Ask a question\">\n              <img src=\"assets/img/mic.png\" alt=\"mic\" (click)=\"voiceSearch()\" id=\"mic\">\n              <button mat-stroked-button color=\"default\" type=\"submit\" id=\"searchbutton\" (click)=\"getdata()\" >Search</button>\n          </div>\n  </form>\n</div> -->\n  <!-- </mat-toolbar> -->\n<!-- </span> -->\n\n\n\n<body>\n  <!-- <link href=\"//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css\" rel=\"stylesheet\" id=\"bootstrap-css\">\n  <script src=\"//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js\"></script>\n  <script src=\"//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js\"></script> -->\n  <!------ Include the above in your HEAD tag ---------->\n  \n  <link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.1.0/css/all.css\" integrity=\"sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt\"\n    crossorigin=\"anonymous\">\n  <div class=\"container\">\n    <br />\n    <div class=\"row justify-content-center\">\n      <div class=\"col-12 col-md-10 col-lg-8\">\n        <form class=\"card card-sm\">\n          <div class=\"card-body row no-gutters align-items-center\">\n            <div class=\"col-auto\">\n              <i class=\"fas fa-search h4 text-body\"></i>\n            </div>\n            <!--end of col-->\n            <div class=\"col\">\n              <input class=\"form-control form-control-lg form-control-borderless\"  #searchKey name=\"q\" id=\"searchKey\" type=\"search\"  [(ngModel)]=\"searchTerm\"   placeholder=\"Search topics or keywords\">\n              \n            </div>\n            <!--end of col-->\n            <form #form #gSearch method=\"GET\" id=\"gSearch\" >\n                <div id=\"voicesearch\">\n            <div class=\"col-auto\">\n                <img src=\"assets/img/mic.png\" alt=\"mic\" (click)=\"voiceSearch()\" id=\"mic\">\n              <button class=\"btn btn-lg btn-success\" type=\"submit\"  (click)=\"getdata()\">Search</button>\n            </div>\n                </div>\n            </form>\n            <!--end of col-->\n          </div>\n        </form>\n      </div>\n      <!--end of col-->\n    </div>\n  </div>\n  </body>"

/***/ }),

/***/ "./src/app/searchbutton/searchbutton.component.ts":
/*!********************************************************!*\
  !*** ./src/app/searchbutton/searchbutton.component.ts ***!
  \********************************************************/
/*! exports provided: SearchbuttonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchbuttonComponent", function() { return SearchbuttonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _service_searchinfo_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../service/searchinfo.service */ "./src/app/service/searchinfo.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _domain_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../domain/data-service */ "./src/app/domain/data-service.ts");




// @angular/platform-browser Supports delivery of Angular apps on different supported browsers.
//TransferState is a class- A key value store that is transferred from the application on the server side to the application on the client side.
//makeStateKey is a function that create a StateKey<T> that can be used to store value of type T with TransferState.



var configKey = Object(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["makeStateKey"])('CONFIG');
var SearchbuttonComponent = /** @class */ (function () {
    function SearchbuttonComponent(injector, state, search, _route, router, dataService, platformid, route) {
        this.injector = injector;
        this.state = state;
        this.search = search;
        this._route = _route;
        this.router = router;
        this.dataService = dataService;
        this.platformid = platformid;
        this.route = route;
        this.title = 'Voice Search POC';
        //isPlatformServer -Returns whether a platform id represents a server platform.
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["isPlatformServer"])(this.platformid)) {
            //this.injector.get - Retrieves an instance from the injector based on the provided token.
            //injector get - abstract get<T>(token: Type<T> | InjectionToken<T>, notFoundValue?: T, flags?: InjectFlags): T
            var envJson = this.injector.get('CONFIG') ? this.injector.get('CONFIG') : {};
            //state of TransferState set method- set<T>(key: StateKey<T>, value: T): void
            this.state.set(configKey, envJson);
        }
    }
    SearchbuttonComponent.prototype.voiceSearch = function () {
        //we create the webkitSpeechRecognition object which provides the speech interface,
        // and set some of its attributes and event handlers.
        if ('webkitSpeechRecognition' in window) {
            var vSearch_1 = new webkitSpeechRecognition();
            vSearch_1.continuous = false;
            vSearch_1.interimresults = false;
            vSearch_1.lang = 'en-US';
            // activate the speech recognizer by .start()
            vSearch_1.start();
            var voiceSearchForm = this.formSearch.nativeElement;
            var voiceHandler_1 = this.hiddenSearchHandler.nativeElement;
            vSearch_1.onresult = function (event) {
                //storing the result in value
                //returns a string containing the transcript of the recognised word(s).
                voiceHandler_1.value = event.results[0][0].transcript;
                vSearch_1.stop();
                //submitting the form with the value
                // voiceSearchForm.submit();
            };
            //if error is encountered, show error in console and stop the speech recognition
            vSearch_1.onerror = function (event) {
                console.log(event);
                vSearch_1.stop();
            };
        }
        //if browser does not have webkitspeechrecognition
        else {
            console.log("Your browser does not support voice recognition feature.");
        }
    };
    SearchbuttonComponent.prototype.google = function () {
        this.route.navigateByUrl("https://www.google.com/search");
    };
    SearchbuttonComponent.prototype.getdata = function () {
        this.dataService.dataService = this.searchTerm;
        this.router.navigate(['/cards']);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('gSearch'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SearchbuttonComponent.prototype, "formSearch", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('searchKey'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SearchbuttonComponent.prototype, "hiddenSearchHandler", void 0);
    SearchbuttonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-searchbutton',
            template: __webpack_require__(/*! ./searchbutton.component.html */ "./src/app/searchbutton/searchbutton.component.html"),
            styles: [__webpack_require__(/*! ./searchbutton.component.css */ "./src/app/searchbutton/searchbutton.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](6, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_2__["PLATFORM_ID"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["TransferState"],
            _service_searchinfo_service__WEBPACK_IMPORTED_MODULE_1__["SearchinfoService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _domain_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"],
            Object, _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], SearchbuttonComponent);
    return SearchbuttonComponent;
}());



/***/ }),

/***/ "./src/app/searchcard/searchcard.component.html":
/*!******************************************************!*\
  !*** ./src/app/searchcard/searchcard.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css\">\n<script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js\"></script>\n<script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js\"></script>\n<style>\n  /* Note: Try to remove the following lines to see the effect of CSS positioning */\n  .affix {\n    top: 0;\n    width: 100%;\n    z-index: 9999 !important;\n  }\n\n  </style>\n<!-- <nav class=\"ser\" data-spy=\"affix\" data-offset-top=\"197\" style=\"background:#7ad8db \">\n\n  <link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.1.0/css/all.css\" integrity=\"sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt\"\n    crossorigin=\"anonymous\">\n  <div class=\"container\" data-spy=\"affix\" data-offset-top=\"197\">\n    <br />\n    <div class=\"row justify-content-center\">\n      <div class=\"col-12 col-md-10 col-lg-8\">\n        <form class=\"card card-sm\" class=\"ra\">\n          <div class=\"card-body row no-gutters align-items-center\">\n            <div class=\"col\">\n              <input class=\"form-control form-control-lg form-control-borderless\" #searchKey name=\"q\" id=\"searchKey\"\n                type=\"search\" [(ngModel)]=\"searchTerm\" placeholder=\"Search topics or keywords\">\n\n            </div>\n            <div class=\"col-auto\">\n              <form #form #gSearch method=\"GET\" id=\"gSearch\">\n                <div id=\"voicesearch\">\n                  <img src=\"assets/img/mic.png\" alt=\"mic\" (click)=\"voiceSearch()\" id=\"mic\">\n                  <button class=\"btn btn-lg btn-primary\" type=\"submit\" (click)=\"getdata()\">\n                    <h6>Search</h6>\n                  </button>\n                </div>\n              </form>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</nav> -->\n\n\n\n<!-- <div class=\"flex flex-wrap -m-3\" *ngFor='let c of splicedData'>\n\n\n  <div class=\"w-full sm:w-1/2 md:w-1/3 flex flex-col p-3\">\n    <div class=\"bg-white rounded-lg shadow-lg overflow-hidden flex-1 flex flex-col\" style=\"width: 70%; margin: 15px 10px 15px 75px\">\n      <div class=\"bg-cover h-48\" style=\"background-image: url(https://images.unsplash.com/photo-1523978591478-c753949ff840?w=900);\"></div>\n      <div class=\"p-4 flex-1 flex flex-col\">\n        <h3 class=\"mb-4 text-2xl\">{{c.title}}</h3>\n        <div class=\"mb-4 text-grey-darker text-sm flex-1\">\n          <p>{{c.data}}</p>\n        </div>\n        <button type=\"button\" class=\"btn btn-info\" style=\"float:right; margin-bottom:10px\">View More</button>\n      </div>\n    </div>\n  </div>\n</div> -->\n<div *ngFor=\"let data of this.object\">\n  <div class=\"blog-card\">\n    <div class=\"meta\">\n      <div class=\"photo\" style=\"background-image: url(https://storage.googleapis.com/chydlx/codepen/blog-cards/image-1.jpg)\"></div>\n      <ul class=\"details\">\n        <li><i class=\"fa fa-lightbulb-o\" style=\"font-size:14px\"></i><a href=\"#\">  {{ this.data.intentLevel }}  </a></li>\n        <!-- <li class=\"date\">Aug. 24, 2015</li> -->\n        <li class=\"tags\">\n          <ul>\n            <li><a href=\"#\">Learn</a></li>\n            <li><a href=\"#\">Code</a></li>\n            <li><a href=\"#\">HTML</a></li>\n            <li><a href=\"#\">CSS</a></li>\n          </ul>\n        </li>\n      </ul>\n    </div>\n    <div class=\"description\">\n      <h1>{{this.data.concept}}</h1>\n      <h2>Opening a door to the future</h2>\n      <p>{{this.data.name}} </p>\n      <p class=\"read-more\">\n        <a href=\"#\">Read More</a>\n      </p>\n    </div>\n  </div>\n  </div>\n\n<!-- <mat-paginator [length]=\"pageLength\" [pageSize]=\"pageSize\" [pageSizeOptions]=\"pageSizeOptions\" (page)=\"pageChangeEvent($event)\">\n</mat-paginator> -->"

/***/ }),

/***/ "./src/app/searchcard/searchcard.component.scss":
/*!******************************************************!*\
  !*** ./src/app/searchcard/searchcard.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  box-sizing: border-box; }\n\nbody {\n  width: 100%;\n  background: #f1f1f1;\n  margin: 2rem; }\n\n.blog-card {\n  display: flex;\n  flex-direction: column;\n  margin: 1rem auto;\n  box-shadow: 0 3px 7px -1px rgba(0, 0, 0, 0.1);\n  margin-bottom: 1.6%;\n  background: #fff;\n  line-height: 1.4;\n  font-family: sans-serif;\n  border-radius: 5px;\n  overflow: hidden;\n  z-index: 0; }\n\n.blog-card a {\n    color: inherit; }\n\n.blog-card a:hover {\n      color: #5ad67d; }\n\n.blog-card:hover .photo {\n    -webkit-transform: scale(1.3) rotate(3deg);\n            transform: scale(1.3) rotate(3deg); }\n\n.blog-card .meta {\n    position: relative;\n    z-index: 0;\n    height: 200px; }\n\n.blog-card .photo {\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    background-size: cover;\n    background-position: center;\n    transition: -webkit-transform .2s;\n    transition: transform .2s;\n    transition: transform .2s, -webkit-transform .2s; }\n\n.blog-card .details,\n  .blog-card .details ul {\n    margin: auto;\n    padding: 0;\n    list-style: none; }\n\n.blog-card .details {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: -100%;\n    margin: auto;\n    transition: left .2s;\n    background: rgba(0, 0, 0, 0.6);\n    color: #fff;\n    padding: 10px;\n    width: 100%;\n    font-size: .9rem; }\n\n.blog-card .details a {\n      -webkit-text-decoration: dotted underline;\n              text-decoration: dotted underline; }\n\n.blog-card .details ul li {\n      display: inline-block; }\n\n.blog-card .details .author:before {\n      font-family: FontAwesome;\n      margin-right: 10px;\n      content: \"\\f007\"; }\n\n.blog-card .details .date:before {\n      font-family: FontAwesome;\n      margin-right: 10px;\n      content: \"\\f133\"; }\n\n.blog-card .details .tags ul:before {\n      font-family: FontAwesome;\n      content: \"\\f02b\";\n      margin-right: 10px; }\n\n.blog-card .details .tags li {\n      margin-right: 2px; }\n\n.blog-card .details .tags li:first-child {\n        margin-left: -4px; }\n\n.blog-card .description {\n    padding: 1rem;\n    background: #fff;\n    position: relative;\n    z-index: 1; }\n\n.blog-card .description h1,\n    .blog-card .description h2 {\n      font-family: Poppins, sans-serif; }\n\n.blog-card .description h1 {\n      line-height: 1;\n      margin: 0;\n      font-size: 1.7rem; }\n\n.blog-card .description h2 {\n      font-size: 1rem;\n      font-weight: 300;\n      text-transform: uppercase;\n      color: #a2a2a2;\n      margin-top: 5px; }\n\n.blog-card .description .read-more {\n      text-align: right; }\n\n.blog-card .description .read-more a {\n        color: #5ad67d;\n        display: inline-block;\n        position: relative; }\n\n.blog-card .description .read-more a:after {\n          content: \"\\f061\";\n          font-family: FontAwesome;\n          margin-left: -10px;\n          opacity: 0;\n          vertical-align: middle;\n          transition: margin .3s, opacity .3s; }\n\n.blog-card .description .read-more a:hover:after {\n          margin-left: 5px;\n          opacity: 1; }\n\n.blog-card p {\n    position: relative;\n    margin: 1rem 0 0; }\n\n.blog-card p:first-of-type {\n      margin-top: 1.25rem; }\n\n.blog-card p:first-of-type:before {\n        content: \"\";\n        position: absolute;\n        height: 5px;\n        background: #5ad67d;\n        width: 35px;\n        top: -0.75rem;\n        border-radius: 3px; }\n\n.blog-card:hover .details {\n    left: 0%; }\n\n@media (min-width: 640px) {\n    .blog-card {\n      flex-direction: row;\n      max-width: 700px; }\n      .blog-card .meta {\n        flex-basis: 40%;\n        height: auto; }\n      .blog-card .description {\n        flex-basis: 60%; }\n        .blog-card .description:before {\n          -webkit-transform: skewX(-3deg);\n                  transform: skewX(-3deg);\n          content: \"\";\n          background: #fff;\n          width: 30px;\n          position: absolute;\n          left: -10px;\n          top: 0;\n          bottom: 0;\n          z-index: -1; }\n      .blog-card.alt {\n        flex-direction: row-reverse; }\n        .blog-card.alt .description:before {\n          left: inherit;\n          right: -10px;\n          -webkit-transform: skew(3deg);\n                  transform: skew(3deg); }\n        .blog-card.alt .details {\n          padding-left: 25px; } }\n\n#searchbutton:hover {\n  color: inherit; }\n\n#mic {\n  margin-top: 0px;\n  height: 45px;\n  width: 45px;\n  margin-left: 2px; }\n\n.form-inline {\n  float: right; }\n\n.rig {\n  float: right; }\n\n#add-button {\n  top: auto;\n  right: 100px;\n  bottom: 200px;\n  background-color: #28bb28;\n  height: 75px;\n  width: 75px;\n  left: auto;\n  position: fixed;\n  font-size: 18px; }\n\n/* .example-card {\n    max-width: 400px;\n  } */\n\n.nan {\n  width: 50%;\n  display: block; }\n\n.example-header-image {\n  background-image: url(\"https://material.angular.io/assets/img/examples/shiba1.jpg\");\n  background-size: cover; }\n\n#title {\n  font-size: 2rem;\n  color: blue; }\n\n/* \n  #sbutton{\n   \n    display: inline;\n} */\n\n.mat-paginator-sticky {\n  left: 450px;\n  bottom: 20px;\n  position: fixed; }\n\n#searchbutton:hover {\n  color: inherit; }\n\n#mic {\n  margin-top: 0px;\n  height: 25px;\n  width: 25px;\n  margin-left: 2px; }\n\n/* #searchKey{\n    \n     margin-left:100px; \n     height:35px;\n     width: 400px;\n     min-width:100px;  \n    background-color: rgb(212, 209, 209);\n} */\n\n/* body{\n  min-width: 300px;;\n} */\n\n.input-group.md-form.form-sm.form-1 input {\n  border: 1px solid #d61b1b;\n  border-top-right-radius: 0.25rem;\n  border-bottom-right-radius: 0.25rem; }\n\n.input-group.md-form.form-sm.form-2 input {\n  border: 1px solid #bdbdbd;\n  border-top-left-radius: 0.25rem;\n  border-bottom-left-radius: 0.25rem; }\n\n.input-group.md-form.form-sm.form-2 input.amber-border {\n  border: 1px solid #ffca28; }\n\n.form-control-borderless {\n  border: none; }\n\n.form-control-borderless:hover, .form-control-borderless:active, .form-control-borderless:focus {\n  border: none;\n  outline: none;\n  box-shadow: none; }\n\nbody {\n  margin-bottom: 10rem; }\n\n/* \n.searchArea{\n  margin: 0;\n  padding: 0;\n  height: 70px;\n} */\n\n.ser {\n  background-color: #cce26a; }\n\nh6 {\n  padding: 0;\n  margin: 0; }\n\n.card {\n  width: 80rem;\n  margin: 20px; }\n\n.card > .card-body > p {\n  font-size: 17px; }\n\n.card > .card-body {\n  margin-left: 10px; }\n\n.card > .card-body > a {\n  float: right; }\n\nbody {\n  background: #eee;\n  max-width: 900px;\n  margin: 30px auto;\n  padding: 20px;\n  /*   outline: 1px solid #ccc; */ }\n\n/* Still use global css (not utility css) for base typography etc? */\n\np {\n  margin-bottom: 0.8em;\n  display: block;\n  /* or inline-block */\n  text-overflow: ellipsis;\n  word-wrap: break-word;\n  overflow: hidden;\n  max-height: 4.6em;\n  line-height: 0.8em; }\n\n/*---------------------------------------------------------------------------*/\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3VzZXIvS25vd2xlZGdlIGh1Yi92MS4wLjMvYm9laW5nLXdhdmU0LWtub3dsZWRnZWh1Yi9hbmd1bGFyLWZyb250ZW5kL3NyYy9hcHAvc2VhcmNoY2FyZC9zZWFyY2hjYXJkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zZWFyY2hjYXJkL3NlYXJjaGNhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxzQkFBc0IsRUFBQTs7QUFHeEI7RUFDSSxXQUFZO0VBQ2QsbUJBQW1CO0VBQ25CLFlBQVksRUFBQTs7QUFRZDtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLDZDQUFvQztFQUNwQyxtQkFBbUI7RUFDbkIsZ0JBWGdCO0VBWWhCLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixVQUFVLEVBQUE7O0FBWFo7SUFhSSxjQUFjLEVBQUE7O0FBYmxCO01BZU0sY0FuQmUsRUFBQTs7QUFJckI7SUFvQk0sMENBQWtDO1lBQWxDLGtDQUFrQyxFQUFBOztBQXBCeEM7SUF3Qkksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixhQUFhLEVBQUE7O0FBMUJqQjtJQTZCSSxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLFFBQVE7SUFDUixTQUFTO0lBQ1QsT0FBTztJQUNQLHNCQUFzQjtJQUN0QiwyQkFBMkI7SUFDM0IsaUNBQXlCO0lBQXpCLHlCQUF5QjtJQUF6QixnREFBeUIsRUFBQTs7QUFwQzdCOztJQXdDSSxZQUFZO0lBQ1osVUFBVTtJQUNWLGdCQUFnQixFQUFBOztBQTFDcEI7SUE4Q0ksa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixTQUFTO0lBQ1QsV0FBVztJQUNYLFlBQVk7SUFDWixvQkFBb0I7SUFDcEIsOEJBQXFCO0lBQ3JCLFdBMURjO0lBMkRkLGFBQWE7SUFDYixXQUFXO0lBQ1gsZ0JBQWdCLEVBQUE7O0FBeERwQjtNQTBETSx5Q0FDRjtjQURFLGlDQUNGLEVBQUE7O0FBM0RKO01BNkRNLHFCQUFxQixFQUFBOztBQTdEM0I7TUFnRU0sd0JBQXdCO01BQ3hCLGtCQUFrQjtNQUNsQixnQkFBZ0IsRUFBQTs7QUFsRXRCO01Bc0VNLHdCQUF3QjtNQUN4QixrQkFBa0I7TUFDbEIsZ0JBQWdCLEVBQUE7O0FBeEV0QjtNQTZFUSx3QkFBd0I7TUFDeEIsZ0JBQWdCO01BQ2hCLGtCQUFrQixFQUFBOztBQS9FMUI7TUFrRlEsaUJBQWlCLEVBQUE7O0FBbEZ6QjtRQW9GVSxpQkFBaUIsRUFBQTs7QUFwRjNCO0lBMEZJLGFBQWE7SUFDYixnQkFoR2M7SUFpR2Qsa0JBQWtCO0lBQ2xCLFVBQVUsRUFBQTs7QUE3RmQ7O01BZ0dNLGdDQUFnQyxFQUFBOztBQWhHdEM7TUFtR00sY0FBYztNQUNkLFNBQVM7TUFDVCxpQkFBaUIsRUFBQTs7QUFyR3ZCO01Bd0dNLGVBQWU7TUFDZixnQkFBZ0I7TUFDaEIseUJBQXlCO01BQ3pCLGNBN0dtQjtNQThHbkIsZUFBZSxFQUFBOztBQTVHckI7TUErR00saUJBQWlCLEVBQUE7O0FBL0d2QjtRQWlIUSxjQXJIYTtRQXNIYixxQkFBcUI7UUFDckIsa0JBQWtCLEVBQUE7O0FBbkgxQjtVQXFIVSxnQkFBZ0I7VUFDaEIsd0JBQXdCO1VBQ3hCLGtCQUFrQjtVQUNsQixVQUFVO1VBQ1Ysc0JBQXNCO1VBQ3RCLG1DQUFtQyxFQUFBOztBQTFIN0M7VUE4SFUsZ0JBQWdCO1VBQ2hCLFVBQVUsRUFBQTs7QUEvSHBCO0lBcUlJLGtCQUFrQjtJQUNsQixnQkFBZ0IsRUFBQTs7QUF0SXBCO01Bd0lNLG1CQUFtQixFQUFBOztBQXhJekI7UUEwSVEsV0FBVztRQUNYLGtCQUFrQjtRQUNsQixXQUFXO1FBQ1gsbUJBakphO1FBa0piLFdBQVc7UUFDWCxhQUFhO1FBQ2Isa0JBQWtCLEVBQUE7O0FBaEoxQjtJQXNKTSxRQUFRLEVBQUE7O0FBS1o7SUEzSkY7TUE0SkksbUJBQW1CO01BQ25CLGdCQUFnQixFQUFBO01BN0pwQjtRQStKTSxlQUFlO1FBQ2YsWUFBWSxFQUFBO01BaEtsQjtRQW1LTSxlQUFlLEVBQUE7UUFuS3JCO1VBcUtRLCtCQUF1QjtrQkFBdkIsdUJBQXVCO1VBQ3ZCLFdBQVc7VUFDWCxnQkFBZ0I7VUFDaEIsV0FBVztVQUNYLGtCQUFrQjtVQUNsQixXQUFXO1VBQ1gsTUFBTTtVQUNOLFNBQVM7VUFDVCxXQUFXLEVBQUE7TUE3S25CO1FBaUxNLDJCQUEyQixFQUFBO1FBakxqQztVQW9MVSxhQUFhO1VBQ2IsWUFBWTtVQUNaLDZCQUFxQjtrQkFBckIscUJBQXFCLEVBQUE7UUF0TC9CO1VBMExRLGtCQUFrQixFQUFBLEVBQ25COztBQUtQO0VBQ0UsY0FBYSxFQUFBOztBQUdqQjtFQUNJLGVBQWM7RUFDZCxZQUFXO0VBQ1gsV0FBVTtFQUNWLGdCQUFlLEVBQUE7O0FBS25CO0VBQ0ksWUFBWSxFQUFBOztBQUVoQjtFQUNJLFlBQVksRUFBQTs7QUFHaEI7RUFDSSxTQUFTO0VBQ1QsWUFBWTtFQUNaLGFBQWE7RUFDYix5QkFBa0M7RUFDbEMsWUFBWTtFQUNaLFdBQVc7RUFDWCxVQUFVO0VBQ1YsZUFBZTtFQUNmLGVBQWUsRUFBQTs7QUFHakI7O0tDM0RHOztBRCtESDtFQUVFLFVBQVM7RUFDVCxjQUFjLEVBQUE7O0FBR2hCO0VBQ0UsbUZBQW1GO0VBQ25GLHNCQUFzQixFQUFBOztBQUV4QjtFQUNFLGVBQWU7RUFDZixXQUFXLEVBQUE7O0FBR2Y7Ozs7R0M3REc7O0FEbUVIO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixlQUFlLEVBQUE7O0FBR2pCO0VBQ0ksY0FBYSxFQUFBOztBQUdqQjtFQUNJLGVBQWM7RUFDZCxZQUFXO0VBQ1gsV0FBVTtFQUNWLGdCQUFlLEVBQUE7O0FBR25COzs7Ozs7O0dDOURHOztBRHNFSDs7R0NuRUc7O0FEeUVIO0VBQ0UseUJBQXlCO0VBQ3pCLGdDQUFnQztFQUNoQyxtQ0FBbUMsRUFBQTs7QUFFckM7RUFDRSx5QkFBeUI7RUFDekIsK0JBQStCO0VBQy9CLGtDQUFrQyxFQUFBOztBQUdwQztFQUNFLHlCQUF5QixFQUFBOztBQU0zQjtFQUNFLFlBQVksRUFBQTs7QUFHZDtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsZ0JBQWdCLEVBQUE7O0FBRWxCO0VBQ0Usb0JBQW1CLEVBQUE7O0FBR3JCOzs7OztHQzFFRzs7QURpRkg7RUFFRSx5QkFBeUIsRUFBQTs7QUFHM0I7RUFDRSxVQUFVO0VBQ1YsU0FBUyxFQUFBOztBQUdYO0VBRUUsWUFBWTtFQUNaLFlBQVksRUFBQTs7QUFHZDtFQUVFLGVBQWUsRUFBQTs7QUFHakI7RUFFRSxpQkFBaUIsRUFBQTs7QUFFbkI7RUFFRyxZQUFZLEVBQUE7O0FBR2Y7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2YsK0JBQUEsRUFBZ0M7O0FBR2hDLG9FQUFBOztBQUNBO0VBQ0Usb0JBQW9CO0VBQ3BCLGNBQWM7RUFBRSxvQkFBQTtFQUNoQix1QkFBdUI7RUFDdkIscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsa0JBQWtCLEVBQUE7O0FBR3BCLDhFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2VhcmNoY2FyZC9zZWFyY2hjYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XG4gICAgXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgfVxuICBcbiAgYm9keSB7XG4gICAgICB3aWR0aCA6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogI2YxZjFmMTtcbiAgICBtYXJnaW46IDJyZW07XG4gIH1cbiAgXG4gICRjb2xvcl93aGl0ZTogI2ZmZjtcbiAgJGNvbG9yX3ByaW1lOiAjNWFkNjdkO1xuICAkY29sb3JfZ3JleTogI2UyZTJlMjtcbiAgJGNvbG9yX2dyZXlfZGFyazogI2EyYTJhMjtcbiAgXG4gIC5ibG9nLWNhcmQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBtYXJnaW46IDFyZW0gYXV0bztcbiAgICBib3gtc2hhZG93OiAwIDNweCA3cHggLTFweCByZ2JhKCMwMDAsIC4xKTtcbiAgICBtYXJnaW4tYm90dG9tOiAxLjYlO1xuICAgIGJhY2tncm91bmQ6ICRjb2xvcl93aGl0ZTtcbiAgICBsaW5lLWhlaWdodDogMS40O1xuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHotaW5kZXg6IDA7XG4gICAgYSB7XG4gICAgICBjb2xvcjogaW5oZXJpdDtcbiAgICAgICY6aG92ZXIge1xuICAgICAgICBjb2xvcjogJGNvbG9yX3ByaW1lO1xuICAgICAgfVxuICAgIH1cbiAgICAmOmhvdmVyIHtcbiAgICAgIC5waG90byB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4zKSByb3RhdGUoM2RlZyk7XG4gICAgICB9XG4gICAgfVxuICAgIC5tZXRhIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIHotaW5kZXg6IDA7XG4gICAgICBoZWlnaHQ6IDIwMHB4O1xuICAgIH1cbiAgICAucGhvdG8ge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAwO1xuICAgICAgcmlnaHQ6IDA7XG4gICAgICBib3R0b206IDA7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuMnM7XG4gICAgfVxuICAgIC5kZXRhaWxzLFxuICAgIC5kZXRhaWxzIHVsIHtcbiAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgIHBhZGRpbmc6IDA7XG4gICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIH1cbiAgXG4gICAgLmRldGFpbHMge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAwO1xuICAgICAgYm90dG9tOiAwO1xuICAgICAgbGVmdDogLTEwMCU7XG4gICAgICBtYXJnaW46IGF1dG87XG4gICAgICB0cmFuc2l0aW9uOiBsZWZ0IC4ycztcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoIzAwMCwgLjYpO1xuICAgICAgY29sb3I6ICRjb2xvcl93aGl0ZTtcbiAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGZvbnQtc2l6ZTogLjlyZW07XG4gICAgICBhIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBkb3R0ZWQgdW5kZXJsaW5lXG4gICAgICB9XG4gICAgICB1bCBsaSB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIH1cbiAgICAgIC5hdXRob3I6YmVmb3JlIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IEZvbnRBd2Vzb21lO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgIGNvbnRlbnQ6IFwiXFxmMDA3XCI7XG4gICAgICB9XG4gIFxuICAgICAgLmRhdGU6YmVmb3JlIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IEZvbnRBd2Vzb21lO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgIGNvbnRlbnQ6IFwiXFxmMTMzXCI7XG4gICAgICB9XG4gIFxuICAgICAgLnRhZ3Mge1xuICAgICAgICB1bDpiZWZvcmUge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBGb250QXdlc29tZTtcbiAgICAgICAgICBjb250ZW50OiBcIlxcZjAyYlwiO1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgfVxuICAgICAgICBsaSB7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAycHg7XG4gICAgICAgICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogLTRweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgLmRlc2NyaXB0aW9uIHtcbiAgICAgIHBhZGRpbmc6IDFyZW07XG4gICAgICBiYWNrZ3JvdW5kOiAkY29sb3Jfd2hpdGU7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB6LWluZGV4OiAxO1xuICAgICAgaDEsXG4gICAgICBoMiB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zLCBzYW5zLXNlcmlmO1xuICAgICAgfVxuICAgICAgaDEge1xuICAgICAgICBsaW5lLWhlaWdodDogMTtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBmb250LXNpemU6IDEuN3JlbTtcbiAgICAgIH1cbiAgICAgIGgyIHtcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICBjb2xvcjogJGNvbG9yX2dyZXlfZGFyaztcbiAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgfVxuICAgICAgLnJlYWQtbW9yZSB7XG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICBhIHtcbiAgICAgICAgICBjb2xvcjogJGNvbG9yX3ByaW1lO1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgJjphZnRlciB7XG4gICAgICAgICAgICBjb250ZW50OiBcIlxcZjA2MVwiO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IEZvbnRBd2Vzb21lO1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xuICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBtYXJnaW4gLjNzLCBvcGFjaXR5IC4zcztcbiAgICAgICAgICB9XG4gIFxuICAgICAgICAgICY6aG92ZXI6YWZ0ZXIge1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHAge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgbWFyZ2luOiAxcmVtIDAgMDtcbiAgICAgICY6Zmlyc3Qtb2YtdHlwZSB7XG4gICAgICAgIG1hcmdpbi10b3A6IDEuMjVyZW07XG4gICAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICBoZWlnaHQ6IDVweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAkY29sb3JfcHJpbWU7XG4gICAgICAgICAgd2lkdGg6IDM1cHg7XG4gICAgICAgICAgdG9wOiAtMC43NXJlbTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgJjpob3ZlciB7XG4gICAgICAuZGV0YWlscyB7XG4gICAgICAgIGxlZnQ6IDAlO1xuICAgICAgfVxuICAgIH1cbiAgXG4gIFxuICAgIEBtZWRpYSAobWluLXdpZHRoOiA2NDBweCkge1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIG1heC13aWR0aDogNzAwcHg7XG4gICAgICAubWV0YSB7XG4gICAgICAgIGZsZXgtYmFzaXM6IDQwJTtcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgfVxuICAgICAgLmRlc2NyaXB0aW9uIHtcbiAgICAgICAgZmxleC1iYXNpczogNjAlO1xuICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgdHJhbnNmb3JtOiBza2V3WCgtM2RlZyk7XG4gICAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICBsZWZ0OiAtMTBweDtcbiAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgIHotaW5kZXg6IC0xO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAmLmFsdCB7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcbiAgICAgICAgLmRlc2NyaXB0aW9uIHtcbiAgICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgICBsZWZ0OiBpbmhlcml0O1xuICAgICAgICAgICAgcmlnaHQ6IC0xMHB4O1xuICAgICAgICAgICAgdHJhbnNmb3JtOiBza2V3KDNkZWcpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5kZXRhaWxzIHtcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDI1cHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiBcbiAgI3NlYXJjaGJ1dHRvbjpob3ZlcntcbiAgICBjb2xvcjppbmhlcml0O1xufVxuXG4jbWlje1xuICAgIG1hcmdpbi10b3A6MHB4O1xuICAgIGhlaWdodDo0NXB4O1xuICAgIHdpZHRoOjQ1cHg7XG4gICAgbWFyZ2luLWxlZnQ6MnB4O1xufSBcblxuXG5cbi5mb3JtLWlubGluZXtcbiAgICBmbG9hdDogcmlnaHQ7XG59XG4ucmlne1xuICAgIGZsb2F0OiByaWdodDtcbn1cblxuI2FkZC1idXR0b257XG4gICAgdG9wOiBhdXRvO1xuICAgIHJpZ2h0OiAxMDBweDtcbiAgICBib3R0b206IDIwMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0MCwgMTg3LCA0MCk7XG4gICAgaGVpZ2h0OiA3NXB4O1xuICAgIHdpZHRoOiA3NXB4O1xuICAgIGxlZnQ6IGF1dG87XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgfVxuICBcbiAgLyogLmV4YW1wbGUtY2FyZCB7XG4gICAgbWF4LXdpZHRoOiA0MDBweDtcbiAgfSAqL1xuXG4gIC5uYW5cbiAge1xuICAgIHdpZHRoOjUwJTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICBcbiAgLmV4YW1wbGUtaGVhZGVyLWltYWdlIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vbWF0ZXJpYWwuYW5ndWxhci5pby9hc3NldHMvaW1nL2V4YW1wbGVzL3NoaWJhMS5qcGcnKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICB9XG4gICN0aXRsZXtcbiAgICBmb250LXNpemU6IDJyZW07XG4gICAgY29sb3I6IGJsdWU7XG4gIH1cblxuLyogXG4gICNzYnV0dG9ue1xuICAgXG4gICAgZGlzcGxheTogaW5saW5lO1xufSAqL1xuXG4ubWF0LXBhZ2luYXRvci1zdGlja3kge1xuICBsZWZ0OiA0NTBweDtcbiAgYm90dG9tOiAyMHB4O1xuICBwb3NpdGlvbjogZml4ZWQ7XG59XG5cbiNzZWFyY2hidXR0b246aG92ZXJ7XG4gICAgY29sb3I6aW5oZXJpdDtcbn1cblxuI21pY3tcbiAgICBtYXJnaW4tdG9wOjBweDtcbiAgICBoZWlnaHQ6MjVweDtcbiAgICB3aWR0aDoyNXB4O1xuICAgIG1hcmdpbi1sZWZ0OjJweDtcbn1cblxuLyogI3NlYXJjaEtleXtcbiAgICBcbiAgICAgbWFyZ2luLWxlZnQ6MTAwcHg7IFxuICAgICBoZWlnaHQ6MzVweDtcbiAgICAgd2lkdGg6IDQwMHB4O1xuICAgICBtaW4td2lkdGg6MTAwcHg7ICBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjEyLCAyMDksIDIwOSk7XG59ICovXG4vKiBib2R5e1xuICBtaW4td2lkdGg6IDMwMHB4Oztcbn0gKi9cblxuXG5cbi5pbnB1dC1ncm91cC5tZC1mb3JtLmZvcm0tc20uZm9ybS0xIGlucHV0e1xuICBib3JkZXI6IDFweCBzb2xpZCAjZDYxYjFiO1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMC4yNXJlbTtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDAuMjVyZW07XG59XG4uaW5wdXQtZ3JvdXAubWQtZm9ybS5mb3JtLXNtLmZvcm0tMiBpbnB1dCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNiZGJkYmQ7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDAuMjVyZW07XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDAuMjVyZW07XG59XG5cbi5pbnB1dC1ncm91cC5tZC1mb3JtLmZvcm0tc20uZm9ybS0yIGlucHV0LmFtYmVyLWJvcmRlciAge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmZjYTI4O1xufVxuXG5cblxuXG4uZm9ybS1jb250cm9sLWJvcmRlcmxlc3Mge1xuICBib3JkZXI6IG5vbmU7XG59XG5cbi5mb3JtLWNvbnRyb2wtYm9yZGVybGVzczpob3ZlciwgLmZvcm0tY29udHJvbC1ib3JkZXJsZXNzOmFjdGl2ZSwgLmZvcm0tY29udHJvbC1ib3JkZXJsZXNzOmZvY3VzIHtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBib3gtc2hhZG93OiBub25lO1xufVxuYm9keXtcbiAgbWFyZ2luLWJvdHRvbToxMHJlbTtcbiAgIFxufVxuLyogXG4uc2VhcmNoQXJlYXtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBoZWlnaHQ6IDcwcHg7XG59ICovXG5cbi5zZXJ7XG5cbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjZTI2YTtcbn1cbiBcbmg2e1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG59IFxuXG4uY2FyZFxue1xuICB3aWR0aDogODByZW07XG4gIG1hcmdpbjogMjBweDtcbn1cblxuLmNhcmQ+LmNhcmQtYm9keT5wXG57XG4gIGZvbnQtc2l6ZTogMTdweDtcbn1cblxuLmNhcmQ+LmNhcmQtYm9keVxue1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cbi5jYXJkPi5jYXJkLWJvZHk+YVxue1xuICAgZmxvYXQ6IHJpZ2h0O1xufVxuXG5ib2R5IHtcbiAgYmFja2dyb3VuZDogI2VlZTtcbiAgbWF4LXdpZHRoOiA5MDBweDtcbiAgbWFyZ2luOiAzMHB4IGF1dG87XG4gIHBhZGRpbmc6IDIwcHg7XG4vKiAgIG91dGxpbmU6IDFweCBzb2xpZCAjY2NjOyAqL1xufVxuXG4vKiBTdGlsbCB1c2UgZ2xvYmFsIGNzcyAobm90IHV0aWxpdHkgY3NzKSBmb3IgYmFzZSB0eXBvZ3JhcGh5IGV0Yz8gKi9cbnAge1xuICBtYXJnaW4tYm90dG9tOiAwLjhlbTtcbiAgZGlzcGxheTogYmxvY2s7IC8qIG9yIGlubGluZS1ibG9jayAqL1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtYXgtaGVpZ2h0OiA0LjZlbTtcbiAgbGluZS1oZWlnaHQ6IDAuOGVtO1xufVxuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cblxuXG5cbiIsIioge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XG5cbmJvZHkge1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogI2YxZjFmMTtcbiAgbWFyZ2luOiAycmVtOyB9XG5cbi5ibG9nLWNhcmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW46IDFyZW0gYXV0bztcbiAgYm94LXNoYWRvdzogMCAzcHggN3B4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBtYXJnaW4tYm90dG9tOiAxLjYlO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBsaW5lLWhlaWdodDogMS40O1xuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB6LWluZGV4OiAwOyB9XG4gIC5ibG9nLWNhcmQgYSB7XG4gICAgY29sb3I6IGluaGVyaXQ7IH1cbiAgICAuYmxvZy1jYXJkIGE6aG92ZXIge1xuICAgICAgY29sb3I6ICM1YWQ2N2Q7IH1cbiAgLmJsb2ctY2FyZDpob3ZlciAucGhvdG8ge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4zKSByb3RhdGUoM2RlZyk7IH1cbiAgLmJsb2ctY2FyZCAubWV0YSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDA7XG4gICAgaGVpZ2h0OiAyMDBweDsgfVxuICAuYmxvZy1jYXJkIC5waG90byB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjJzOyB9XG4gIC5ibG9nLWNhcmQgLmRldGFpbHMsXG4gIC5ibG9nLWNhcmQgLmRldGFpbHMgdWwge1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBwYWRkaW5nOiAwO1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7IH1cbiAgLmJsb2ctY2FyZCAuZGV0YWlscyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogLTEwMCU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHRyYW5zaXRpb246IGxlZnQgLjJzO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZvbnQtc2l6ZTogLjlyZW07IH1cbiAgICAuYmxvZy1jYXJkIC5kZXRhaWxzIGEge1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBkb3R0ZWQgdW5kZXJsaW5lOyB9XG4gICAgLmJsb2ctY2FyZCAuZGV0YWlscyB1bCBsaSB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IH1cbiAgICAuYmxvZy1jYXJkIC5kZXRhaWxzIC5hdXRob3I6YmVmb3JlIHtcbiAgICAgIGZvbnQtZmFtaWx5OiBGb250QXdlc29tZTtcbiAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgIGNvbnRlbnQ6IFwiXFxmMDA3XCI7IH1cbiAgICAuYmxvZy1jYXJkIC5kZXRhaWxzIC5kYXRlOmJlZm9yZSB7XG4gICAgICBmb250LWZhbWlseTogRm9udEF3ZXNvbWU7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICBjb250ZW50OiBcIlxcZjEzM1wiOyB9XG4gICAgLmJsb2ctY2FyZCAuZGV0YWlscyAudGFncyB1bDpiZWZvcmUge1xuICAgICAgZm9udC1mYW1pbHk6IEZvbnRBd2Vzb21lO1xuICAgICAgY29udGVudDogXCJcXGYwMmJcIjtcbiAgICAgIG1hcmdpbi1yaWdodDogMTBweDsgfVxuICAgIC5ibG9nLWNhcmQgLmRldGFpbHMgLnRhZ3MgbGkge1xuICAgICAgbWFyZ2luLXJpZ2h0OiAycHg7IH1cbiAgICAgIC5ibG9nLWNhcmQgLmRldGFpbHMgLnRhZ3MgbGk6Zmlyc3QtY2hpbGQge1xuICAgICAgICBtYXJnaW4tbGVmdDogLTRweDsgfVxuICAuYmxvZy1jYXJkIC5kZXNjcmlwdGlvbiB7XG4gICAgcGFkZGluZzogMXJlbTtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiAxOyB9XG4gICAgLmJsb2ctY2FyZCAuZGVzY3JpcHRpb24gaDEsXG4gICAgLmJsb2ctY2FyZCAuZGVzY3JpcHRpb24gaDIge1xuICAgICAgZm9udC1mYW1pbHk6IFBvcHBpbnMsIHNhbnMtc2VyaWY7IH1cbiAgICAuYmxvZy1jYXJkIC5kZXNjcmlwdGlvbiBoMSB7XG4gICAgICBsaW5lLWhlaWdodDogMTtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIGZvbnQtc2l6ZTogMS43cmVtOyB9XG4gICAgLmJsb2ctY2FyZCAuZGVzY3JpcHRpb24gaDIge1xuICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICBjb2xvcjogI2EyYTJhMjtcbiAgICAgIG1hcmdpbi10b3A6IDVweDsgfVxuICAgIC5ibG9nLWNhcmQgLmRlc2NyaXB0aW9uIC5yZWFkLW1vcmUge1xuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7IH1cbiAgICAgIC5ibG9nLWNhcmQgLmRlc2NyaXB0aW9uIC5yZWFkLW1vcmUgYSB7XG4gICAgICAgIGNvbG9yOiAjNWFkNjdkO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxuICAgICAgICAuYmxvZy1jYXJkIC5kZXNjcmlwdGlvbiAucmVhZC1tb3JlIGE6YWZ0ZXIge1xuICAgICAgICAgIGNvbnRlbnQ6IFwiXFxmMDYxXCI7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IEZvbnRBd2Vzb21lO1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtMTBweDtcbiAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgICAgdHJhbnNpdGlvbjogbWFyZ2luIC4zcywgb3BhY2l0eSAuM3M7IH1cbiAgICAgICAgLmJsb2ctY2FyZCAuZGVzY3JpcHRpb24gLnJlYWQtbW9yZSBhOmhvdmVyOmFmdGVyIHtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgICAgICAgIG9wYWNpdHk6IDE7IH1cbiAgLmJsb2ctY2FyZCBwIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luOiAxcmVtIDAgMDsgfVxuICAgIC5ibG9nLWNhcmQgcDpmaXJzdC1vZi10eXBlIHtcbiAgICAgIG1hcmdpbi10b3A6IDEuMjVyZW07IH1cbiAgICAgIC5ibG9nLWNhcmQgcDpmaXJzdC1vZi10eXBlOmJlZm9yZSB7XG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgaGVpZ2h0OiA1cHg7XG4gICAgICAgIGJhY2tncm91bmQ6ICM1YWQ2N2Q7XG4gICAgICAgIHdpZHRoOiAzNXB4O1xuICAgICAgICB0b3A6IC0wLjc1cmVtO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7IH1cbiAgLmJsb2ctY2FyZDpob3ZlciAuZGV0YWlscyB7XG4gICAgbGVmdDogMCU7IH1cbiAgQG1lZGlhIChtaW4td2lkdGg6IDY0MHB4KSB7XG4gICAgLmJsb2ctY2FyZCB7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgbWF4LXdpZHRoOiA3MDBweDsgfVxuICAgICAgLmJsb2ctY2FyZCAubWV0YSB7XG4gICAgICAgIGZsZXgtYmFzaXM6IDQwJTtcbiAgICAgICAgaGVpZ2h0OiBhdXRvOyB9XG4gICAgICAuYmxvZy1jYXJkIC5kZXNjcmlwdGlvbiB7XG4gICAgICAgIGZsZXgtYmFzaXM6IDYwJTsgfVxuICAgICAgICAuYmxvZy1jYXJkIC5kZXNjcmlwdGlvbjpiZWZvcmUge1xuICAgICAgICAgIHRyYW5zZm9ybTogc2tld1goLTNkZWcpO1xuICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgICB3aWR0aDogMzBweDtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgbGVmdDogLTEwcHg7XG4gICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICB6LWluZGV4OiAtMTsgfVxuICAgICAgLmJsb2ctY2FyZC5hbHQge1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7IH1cbiAgICAgICAgLmJsb2ctY2FyZC5hbHQgLmRlc2NyaXB0aW9uOmJlZm9yZSB7XG4gICAgICAgICAgbGVmdDogaW5oZXJpdDtcbiAgICAgICAgICByaWdodDogLTEwcHg7XG4gICAgICAgICAgdHJhbnNmb3JtOiBza2V3KDNkZWcpOyB9XG4gICAgICAgIC5ibG9nLWNhcmQuYWx0IC5kZXRhaWxzIHtcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDI1cHg7IH0gfVxuXG4jc2VhcmNoYnV0dG9uOmhvdmVyIHtcbiAgY29sb3I6IGluaGVyaXQ7IH1cblxuI21pYyB7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgaGVpZ2h0OiA0NXB4O1xuICB3aWR0aDogNDVweDtcbiAgbWFyZ2luLWxlZnQ6IDJweDsgfVxuXG4uZm9ybS1pbmxpbmUge1xuICBmbG9hdDogcmlnaHQ7IH1cblxuLnJpZyB7XG4gIGZsb2F0OiByaWdodDsgfVxuXG4jYWRkLWJ1dHRvbiB7XG4gIHRvcDogYXV0bztcbiAgcmlnaHQ6IDEwMHB4O1xuICBib3R0b206IDIwMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjhiYjI4O1xuICBoZWlnaHQ6IDc1cHg7XG4gIHdpZHRoOiA3NXB4O1xuICBsZWZ0OiBhdXRvO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGZvbnQtc2l6ZTogMThweDsgfVxuXG4vKiAuZXhhbXBsZS1jYXJkIHtcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xuICB9ICovXG4ubmFuIHtcbiAgd2lkdGg6IDUwJTtcbiAgZGlzcGxheTogYmxvY2s7IH1cblxuLmV4YW1wbGUtaGVhZGVyLWltYWdlIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cHM6Ly9tYXRlcmlhbC5hbmd1bGFyLmlvL2Fzc2V0cy9pbWcvZXhhbXBsZXMvc2hpYmExLmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgfVxuXG4jdGl0bGUge1xuICBmb250LXNpemU6IDJyZW07XG4gIGNvbG9yOiBibHVlOyB9XG5cbi8qIFxuICAjc2J1dHRvbntcbiAgIFxuICAgIGRpc3BsYXk6IGlubGluZTtcbn0gKi9cbi5tYXQtcGFnaW5hdG9yLXN0aWNreSB7XG4gIGxlZnQ6IDQ1MHB4O1xuICBib3R0b206IDIwcHg7XG4gIHBvc2l0aW9uOiBmaXhlZDsgfVxuXG4jc2VhcmNoYnV0dG9uOmhvdmVyIHtcbiAgY29sb3I6IGluaGVyaXQ7IH1cblxuI21pYyB7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgaGVpZ2h0OiAyNXB4O1xuICB3aWR0aDogMjVweDtcbiAgbWFyZ2luLWxlZnQ6IDJweDsgfVxuXG4vKiAjc2VhcmNoS2V5e1xuICAgIFxuICAgICBtYXJnaW4tbGVmdDoxMDBweDsgXG4gICAgIGhlaWdodDozNXB4O1xuICAgICB3aWR0aDogNDAwcHg7XG4gICAgIG1pbi13aWR0aDoxMDBweDsgIFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTIsIDIwOSwgMjA5KTtcbn0gKi9cbi8qIGJvZHl7XG4gIG1pbi13aWR0aDogMzAwcHg7O1xufSAqL1xuLmlucHV0LWdyb3VwLm1kLWZvcm0uZm9ybS1zbS5mb3JtLTEgaW5wdXQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZDYxYjFiO1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMC4yNXJlbTtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDAuMjVyZW07IH1cblxuLmlucHV0LWdyb3VwLm1kLWZvcm0uZm9ybS1zbS5mb3JtLTIgaW5wdXQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjYmRiZGJkO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwLjI1cmVtO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwLjI1cmVtOyB9XG5cbi5pbnB1dC1ncm91cC5tZC1mb3JtLmZvcm0tc20uZm9ybS0yIGlucHV0LmFtYmVyLWJvcmRlciB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmNhMjg7IH1cblxuLmZvcm0tY29udHJvbC1ib3JkZXJsZXNzIHtcbiAgYm9yZGVyOiBub25lOyB9XG5cbi5mb3JtLWNvbnRyb2wtYm9yZGVybGVzczpob3ZlciwgLmZvcm0tY29udHJvbC1ib3JkZXJsZXNzOmFjdGl2ZSwgLmZvcm0tY29udHJvbC1ib3JkZXJsZXNzOmZvY3VzIHtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBib3gtc2hhZG93OiBub25lOyB9XG5cbmJvZHkge1xuICBtYXJnaW4tYm90dG9tOiAxMHJlbTsgfVxuXG4vKiBcbi5zZWFyY2hBcmVhe1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGhlaWdodDogNzBweDtcbn0gKi9cbi5zZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NlMjZhOyB9XG5cbmg2IHtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwOyB9XG5cbi5jYXJkIHtcbiAgd2lkdGg6IDgwcmVtO1xuICBtYXJnaW46IDIwcHg7IH1cblxuLmNhcmQgPiAuY2FyZC1ib2R5ID4gcCB7XG4gIGZvbnQtc2l6ZTogMTdweDsgfVxuXG4uY2FyZCA+IC5jYXJkLWJvZHkge1xuICBtYXJnaW4tbGVmdDogMTBweDsgfVxuXG4uY2FyZCA+IC5jYXJkLWJvZHkgPiBhIHtcbiAgZmxvYXQ6IHJpZ2h0OyB9XG5cbmJvZHkge1xuICBiYWNrZ3JvdW5kOiAjZWVlO1xuICBtYXgtd2lkdGg6IDkwMHB4O1xuICBtYXJnaW46IDMwcHggYXV0bztcbiAgcGFkZGluZzogMjBweDtcbiAgLyogICBvdXRsaW5lOiAxcHggc29saWQgI2NjYzsgKi8gfVxuXG4vKiBTdGlsbCB1c2UgZ2xvYmFsIGNzcyAobm90IHV0aWxpdHkgY3NzKSBmb3IgYmFzZSB0eXBvZ3JhcGh5IGV0Yz8gKi9cbnAge1xuICBtYXJnaW4tYm90dG9tOiAwLjhlbTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIC8qIG9yIGlubGluZS1ibG9jayAqL1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtYXgtaGVpZ2h0OiA0LjZlbTtcbiAgbGluZS1oZWlnaHQ6IDAuOGVtOyB9XG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbiJdfQ== */"

/***/ }),

/***/ "./src/app/searchcard/searchcard.component.ts":
/*!****************************************************!*\
  !*** ./src/app/searchcard/searchcard.component.ts ***!
  \****************************************************/
/*! exports provided: SearchcardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchcardComponent", function() { return SearchcardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_searchinfo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/searchinfo.service */ "./src/app/service/searchinfo.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _domain_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../domain/data-service */ "./src/app/domain/data-service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _domain_sessionId__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../domain/sessionId */ "./src/app/domain/sessionId.ts");

// import { HttpClient } from '@angular/common/http';







// import { Info } from '../domain/info.model';
var configKey = Object(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["makeStateKey"])('CONFIG');
var SearchcardComponent = /** @class */ (function () {
    function SearchcardComponent(injector, state, search, router, dataService, result, searchService, SessionIdNew, platformid, route) {
        this.injector = injector;
        this.state = state;
        this.search = search;
        this.router = router;
        this.dataService = dataService;
        this.result = result;
        this.searchService = searchService;
        this.SessionIdNew = SessionIdNew;
        this.platformid = platformid;
        this.route = route;
        this.pageSizeOptions = [2, 4, 6, 8];
        this.title = 'Voice Search POC';
        //isPlatformServer -Returns whether a platform id represents a server platform.
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["isPlatformServer"])(this.platformid)) {
            //this.injector.get - Retrieves an instance from the injector based on the provided token.
            //injector get - abstract get<T>(token: Type<T> | InjectionToken<T>, notFoundValue?: T, flags?: InjectFlags): T
            var envJson = this.injector.get('CONFIG') ? this.injector.get('CONFIG') : {};
            //state of TransferState set method- set<T>(key: StateKey<T>, value: T): void
            this.state.set(configKey, envJson);
        }
    }
    SearchcardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.searchTerm = this.dataService.dataService;
        this.search.getAll().subscribe(function (data) {
            _this.info = data;
            _this.pageLength = _this.info.length;
            console.log(_this.pageLength);
            _this.loadData(0);
        });
        this.object = this.result.greetings;
    };
    SearchcardComponent.prototype.loadData = function (pageIndex) {
        this.splicedData = this.info.slice(pageIndex, pageIndex + 2);
    };
    SearchcardComponent.prototype.pageChangeEvent = function (event) {
        var offset = ((event.pageIndex + 1) - 1) * event.pageSize;
        this.splicedData = this.info.slice(offset).slice(0, event.pageSize);
    };
    //   getResult(searchString){
    //     this.search.getResults(searchString).subscribe((results)=>{ this.info = results;
    //       this.pageLength = this.info.length;
    //       console.log(this.pageLength);
    //       this.loadData(0)})
    // }
    SearchcardComponent.prototype.voiceSearch = function () {
        //we create the webkitSpeechRecognition object which provides the speech interface,
        // and set some of its attributes and event handlers.
        if ('webkitSpeechRecognition' in window) {
            var vSearch_1 = new webkitSpeechRecognition();
            vSearch_1.continuous = false;
            vSearch_1.interimresults = false;
            vSearch_1.lang = 'en-US';
            // activate the speech recognizer by .start()
            vSearch_1.start();
            var voiceSearchForm = this.formSearch.nativeElement;
            var voiceHandler_1 = this.hiddenSearchHandler.nativeElement;
            vSearch_1.onresult = function (event) {
                //storing the result in value
                //returns a string containing the transcript of the recognised word(s).
                voiceHandler_1.value = event.results[0][0].transcript;
                vSearch_1.stop();
                //submitting the form with the value
                // voiceSearchForm.submit();
            };
            //if error is encountered, show error in console and stop the speech recognition
            vSearch_1.onerror = function (event) {
                console.log(event);
                vSearch_1.stop();
            };
        }
        //if browser does not have webkitspeechrecognition
        else {
            console.log("Your browser does not support voice recognition feature.");
        }
    };
    // getdata() {  
    //   this.dataService.dataService = this.searchTerm; 
    //   this.router.navigate(['/cards']);
    // }
    SearchcardComponent.prototype.getdata = function (search) {
        var output = {
            sessionId: this.SessionIdNew.SessionId,
            searchString: search
        };
        this.searchService.postResults(output).subscribe();
        this.dataService.dataService = this.searchTerm;
        // console.log("home :"+this.result.greetings);
        // console.log("TO searchservice :"+output.sessionId+" "+output.searchString);
        this.object = this.result.greetings;
        this.router.navigate(['/cards']);
        // this.dataService.dataService = this.searchTerm; 
        // this.router.navigate(['/cards']);
        this.ngOnInit();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gSearch'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SearchcardComponent.prototype, "formSearch", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('searchKey'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SearchcardComponent.prototype, "hiddenSearchHandler", void 0);
    SearchcardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-searchcard',
            template: __webpack_require__(/*! ./searchcard.component.html */ "./src/app/searchcard/searchcard.component.html"),
            styles: [__webpack_require__(/*! ./searchcard.component.scss */ "./src/app/searchcard/searchcard.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](8, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["TransferState"],
            _service_searchinfo_service__WEBPACK_IMPORTED_MODULE_2__["SearchinfoService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _domain_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"],
            _domain_sessionId__WEBPACK_IMPORTED_MODULE_7__["SessionId"],
            _service_searchinfo_service__WEBPACK_IMPORTED_MODULE_2__["SearchinfoService"],
            _domain_sessionId__WEBPACK_IMPORTED_MODULE_7__["SessionId"],
            Object, _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], SearchcardComponent);
    return SearchcardComponent;
}());



/***/ }),

/***/ "./src/app/service/auth.service.ts":
/*!*****************************************!*\
  !*** ./src/app/service/auth.service.ts ***!
  \*****************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _token_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./token.service */ "./src/app/service/token.service.ts");




var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
//  const token = this.token.getToken();
//  const key={
//   headers: new HttpHeaders({'Authorization': 'Bearer '+token})
// };
var AuthService = /** @class */ (function () {
    function AuthService(http, token) {
        this.http = http;
        this.token = token;
        this.url = 'https://localhost:8092/login-service/api/auth/signin';
        this.url2 = 'https://13.234.94.132:8092/login-service/api/test/user';
    }
    //This method is to post login credentials to backend and get response.
    AuthService.prototype.auth = function (credentials) {
        return this.http.post(this.url, credentials, httpOptions);
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _token_service__WEBPACK_IMPORTED_MODULE_3__["TokenService"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/service/chat.service.ts":
/*!*****************************************!*\
  !*** ./src/app/service/chat.service.ts ***!
  \*****************************************/
/*! exports provided: Message, ChatService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Message", function() { return Message; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatService", function() { return ChatService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var api_ai_javascript_es6_ApiAiClient__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! api-ai-javascript/es6/ApiAiClient */ "./node_modules/api-ai-javascript/es6/ApiAiClient.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _domain_sessionId__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../domain/sessionId */ "./src/app/domain/sessionId.ts");
/* harmony import */ var _searchinfo_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./searchinfo.service */ "./src/app/service/searchinfo.service.ts");



// import { BehaviorSubject } from 'rxjs/BehaviorSubject';





var Message = /** @class */ (function () {
    function Message(content, sentBy) {
        this.content = content;
        this.sentBy = sentBy;
    }
    return Message;
}());

var ChatService = /** @class */ (function () {
    function ChatService(dialog, http, SessionIdNew, searchService, result) {
        this.dialog = dialog;
        this.http = http;
        this.SessionIdNew = SessionIdNew;
        this.searchService = searchService;
        this.result = result;
        // readonly token = environment.dialogflow.angularBot;
        this.token = '7598a589d5494f2ba0170e29fbb7392d';
        this.client = new api_ai_javascript_es6_ApiAiClient__WEBPACK_IMPORTED_MODULE_3__["ApiAiClient"]({ accessToken: this.token });
        this.conversation = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]([]);
    }
    // Sends and receives messages via DialogFlow
    ChatService.prototype.converse = function (msg) {
        var _this = this;
        var userMessage = new Message(msg, 'user');
        this.update(userMessage);
        return this.client.textRequest(msg)
            .then(function (res) {
            var speech = res.result.fulfillment.speech;
            if (speech == 'so you want to search about spring Close this bot and Hold on...') {
                console.log("inside if of speech");
                // this.navigate();
                _this.closeDialog(msg);
            }
            var botMessage = new Message(speech, 'bot');
            _this.update(botMessage);
        });
    };
    // Adds message to source
    ChatService.prototype.update = function (msg) {
        this.conversation.next([msg]);
    };
    ChatService.prototype.closeDialog = function (text) {
        var _this = this;
        var output = {
            sessionId: this.SessionIdNew.SessionId,
            searchString: text
        };
        setTimeout(function () {
            _this.dialog.closeAll();
        }, 3000);
        console.log(output);
        this.searchService.postResults(output).subscribe();
        this.result.show = true;
    };
    ChatService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _domain_sessionId__WEBPACK_IMPORTED_MODULE_6__["SessionId"], _searchinfo_service__WEBPACK_IMPORTED_MODULE_7__["SearchinfoService"], _domain_sessionId__WEBPACK_IMPORTED_MODULE_6__["SessionId"]])
    ], ChatService);
    return ChatService;
}());



/***/ }),

/***/ "./src/app/service/searchinfo.service.ts":
/*!***********************************************!*\
  !*** ./src/app/service/searchinfo.service.ts ***!
  \***********************************************/
/*! exports provided: SearchinfoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchinfoService", function() { return SearchinfoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");

// import { map } from 'rxjs/operators';


// import { Observable } from 'rxjs';
// import { Info } from '../domain/info.model';
var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ "Access-Control-Allow-Origin": "*", 'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
    })
};
var SearchinfoService = /** @class */ (function () {
    // url = http://localhost:3000/result;
    function SearchinfoService(http) {
        this.http = http;
    }
    SearchinfoService.prototype.getAll = function () {
        console.log("In get all");
        return this.http.get("http://localhost:3000/result");
        //  return this.http.get<Info[]>(this.url + '?_sort=ConfidenceScore&_order=desc');
    };
    SearchinfoService.prototype.postResults = function (search) {
        return this.http.post("https://localhost:8092/upstream-service/vsearch/", search, httpOptions);
    };
    SearchinfoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], SearchinfoService);
    return SearchinfoService;
}());



/***/ }),

/***/ "./src/app/service/token.service.ts":
/*!******************************************!*\
  !*** ./src/app/service/token.service.ts ***!
  \******************************************/
/*! exports provided: TokenService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenService", function() { return TokenService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TOKEN_KEY = "KEY";
var USER_NAME = "NAME";
var TokenService = /** @class */ (function () {
    function TokenService() {
    }
    //this method will remove all the tokens in session storage.
    TokenService.prototype.signout = function () {
        window.sessionStorage.clear();
    };
    //this method will save response token in session storage. 
    TokenService.prototype.saveToken = function (token) {
        window.sessionStorage.removeItem(TOKEN_KEY);
        window.sessionStorage.setItem((TOKEN_KEY), token);
    };
    //this method will save the username present in token in session storage.
    TokenService.prototype.saveUsername = function (username) {
        window.sessionStorage.removeItem(USER_NAME);
        window.sessionStorage.setItem((USER_NAME), username);
    };
    //this method is used to get token present in session storage.
    TokenService.prototype.getToken = function () {
        return window.sessionStorage.getItem("KEY");
    };
    //this method is used to get username present in session storage.
    TokenService.prototype.getUser = function () {
        return window.sessionStorage.getItem(USER_NAME);
    };
    TokenService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TokenService);
    return TokenService;
}());



/***/ }),

/***/ "./src/app/service/upload.service.ts":
/*!*******************************************!*\
  !*** ./src/app/service/upload.service.ts ***!
  \*******************************************/
/*! exports provided: UploadService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadService", function() { return UploadService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ "Access-Control-Allow-Origin": "*", responseType: 'blob', 'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
    })
};
var UploadService = /** @class */ (function () {
    function UploadService(http) {
        this.http = http;
    }
    UploadService.prototype.pushFileToStorage = function (file) {
        var formdata = new FormData();
        formdata.append('file', file);
        this._url = "https://localhost:8092/document-provider/files/";
        return this.http.post(this._url, formdata, httpOptions);
    };
    UploadService.prototype.getFiles = function () {
        this._url = "http://13.234.94.132:8080/getallfiles/";
        return this.http.get(this._url, {});
    };
    UploadService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UploadService);
    return UploadService;
}());



/***/ }),

/***/ "./src/app/upload/upload.component.css":
/*!*********************************************!*\
  !*** ./src/app/upload/upload.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dragDropNew{\n    \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXBsb2FkL3VwbG9hZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBIiwiZmlsZSI6InNyYy9hcHAvdXBsb2FkL3VwbG9hZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRyYWdEcm9wTmV3e1xuICAgIFxufSJdfQ== */"

/***/ }),

/***/ "./src/app/upload/upload.component.html":
/*!**********************************************!*\
  !*** ./src/app/upload/upload.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"dragDropNew\">\n  <file-drop headertext=\"Drop files here\"  showBrowseBtn=\"true\" (onFileDrop)=\"selectFile($event)\" \n  (onFileOver)=\"fileOver($event)\" (onFileLeave)=\"fileLeave($event)\">\n</file-drop>\n</div>\n  {{msg}}"

/***/ }),

/***/ "./src/app/upload/upload.component.ts":
/*!********************************************!*\
  !*** ./src/app/upload/upload.component.ts ***!
  \********************************************/
/*! exports provided: UploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadComponent", function() { return UploadComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_upload_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/upload.service */ "./src/app/service/upload.service.ts");



var UploadComponent = /** @class */ (function () {
    function UploadComponent(uploadService) {
        this.uploadService = uploadService;
        this.files = [];
        this.showFile = false;
        this.msg = null;
    }
    UploadComponent.prototype.ngOnInit = function () {
    };
    UploadComponent.prototype.selectFile = function (event) {
        var _this = this;
        this.files = event.files;
        console.log(event);
        for (var _i = 0, _a = event.files; _i < _a.length; _i++) {
            var droppedFile = _a[_i];
            // Is it a file?
            if (droppedFile.fileEntry.isFile) {
                var fileEntry = droppedFile.fileEntry;
                fileEntry.file(function (file) {
                    _this.uploadService.pushFileToStorage(file)
                        .subscribe(function (File) {
                        _this.msg = 'successfully uploaded';
                    }, function (error) {
                        _this.msg = 'failed to upload file';
                    });
                });
            }
        }
    };
    UploadComponent.prototype.fileOver = function (event) {
        console.log(event);
    };
    UploadComponent.prototype.fileLeave = function (event) {
        console.log(event);
    };
    UploadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-upload',
            template: __webpack_require__(/*! ./upload.component.html */ "./src/app/upload/upload.component.html"),
            styles: [__webpack_require__(/*! ./upload.component.css */ "./src/app/upload/upload.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_upload_service__WEBPACK_IMPORTED_MODULE_2__["UploadService"]])
    ], UploadComponent);
    return UploadComponent;
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
var environment = {
    production: false,
    dialogflow: {
        angularBot: '7598a589d5494f2ba0170e29fbb7392d'
    }
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/user/Knowledge hub/v1.0.3/boeing-wave4-knowledgehub/angular-frontend/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map