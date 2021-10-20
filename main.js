(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\FCI\GP\Dashboard\Pharmacy\src\main.ts */"zUnb");


/***/ }),

/***/ "2IJj":
/*!************************************************!*\
  !*** ./src/app/side-bar/side-bar.component.ts ***!
  \************************************************/
/*! exports provided: SideBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideBarComponent", function() { return SideBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



const _c0 = function () { return { exact: true }; };
class SideBarComponent {
    constructor() { }
    ngOnInit() {
        $(document).ready(function () {
            $('.side-bar .item-header').click(function () {
                if ($(this).siblings("ul").css('max-height') == '0px') {
                    $(this).siblings("ul").css('max-height', '500px');
                    $(this).children().eq(1).css('transform', 'rotate(90deg)');
                }
                else {
                    $(this).siblings("ul").css('max-height', '0px');
                    $(this).children().eq(1).css('transform', 'rotate(0deg)');
                }
            });
        });
    }
}
SideBarComponent.ɵfac = function SideBarComponent_Factory(t) { return new (t || SideBarComponent)(); };
SideBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SideBarComponent, selectors: [["app-side-bar"]], decls: 54, vars: 4, consts: [[1, "side-bar"], [1, "w-100"], ["routerLink", "/", "routerLinkActive", "active-item", 1, "side-item", 3, "routerLinkActiveOptions"], ["routerLink", "/", "routerLinkActive", "active-link", 1, "side-link", 3, "routerLinkActiveOptions"], [1, "fa", "fa-home"], ["routerLinkActive", "active-item", 1, "side-item"], [1, "item-header"], [1, "item"], [1, "fa", "fa-leaf"], [1, "fa", "fa-angle-right"], ["routerLink", "/products", "routerLinkActive", "active-link", 1, "side-link"], ["routerLink", "/add-product", "routerLinkActive", "active-link", 1, "side-link"], [1, "fa", "fa-shopping-bag"], ["routerLink", "/completed-orders", "routerLinkActive", "active-link", 1, "side-link"], ["routerLink", "/pending-orders", "routerLinkActive", "active-link", 1, "side-link"], ["routerLink", "/canceled-orders", "routerLinkActive", "active-link", 1, "side-link"], ["routerLink", "/order-details", "routerLinkActive", "active-link", 1, "side-link"], ["routerLink", "/news", "routerLinkActive", "active-link", 1, "side-link"], [1, "fa", "fa-newspaper-o"], ["routerLink", "/offers", "routerLinkActive", "active-link", 1, "side-link"], [1, "fa", "fa-tag"], ["routerLink", "/inbox", "routerLinkActive", "active-link", 1, "side-link"], [1, "fa", "fa-envelope"], ["routerLink", "/profile", "routerLinkActive", "active-link", 1, "side-link"], [1, "fa", "fa-user-circle"]], template: function SideBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "products");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "All");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Add");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "orders");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "completed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "pending");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "canceled");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "order details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "news");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "offers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "inbox");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: [".side-bar[_ngcontent-%COMP%] {\r\n    width: 235px;\r\n    background-color: #1e1e2f;\r\n    padding: 15px 10px;\r\n    overflow-y: auto;\r\n    position: relative;\r\n    left: 0;\r\n    z-index: 9;\r\n}\r\n\r\n.side-bar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n    list-style: none;\r\n}\r\n\r\n.side-bar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    text-decoration: none;\r\n}\r\n\r\n.side-bar[_ngcontent-%COMP%]   .side-item[_ngcontent-%COMP%] {\r\n    padding: 4px 7px;\r\n    margin: 3px 0;\r\n    border-radius: 7px;\r\n    color: #8c909a;\r\n    text-transform: capitalize;\r\n    transition: all .3s;\r\n}\r\n\r\n.side-bar[_ngcontent-%COMP%]   .side-item[_ngcontent-%COMP%]:hover {\r\n    color: #b8bcc7;\r\n    background-color: #3a3f51;\r\n}\r\n\r\n.side-bar[_ngcontent-%COMP%]   .side-item[_ngcontent-%COMP%]   .fa-angle-right[_ngcontent-%COMP%] {\r\n    transition: all .3s;\r\n}\r\n\r\n.side-bar[_ngcontent-%COMP%]   .side-item[_ngcontent-%COMP%]   .side-link[_ngcontent-%COMP%] {\r\n    font-size: 14px;\r\n    padding: 5px 0px;\r\n    margin: 0 7px;\r\n    display: block;\r\n    color: #8c909a;\r\n    border-radius: 7px;\r\n    position: relative;\r\n    transition: all .2s;\r\n}\r\n\r\n.side-bar[_ngcontent-%COMP%]   .side-item[_ngcontent-%COMP%]   .side-link[_ngcontent-%COMP%] {\r\n    cursor: pointer;\r\n}\r\n\r\n.side-bar[_ngcontent-%COMP%]   .side-item[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .side-link[_ngcontent-%COMP%]:before {\r\n    content: \"\u2022\";\r\n    font-size: 22px;\r\n    position: absolute;\r\n    left: -13px;\r\n    top: 0px;\r\n    color: #8c909a;\r\n    transition: all .2s;\r\n}\r\n\r\n.side-bar[_ngcontent-%COMP%]   .side-item[_ngcontent-%COMP%]   .side-link[_ngcontent-%COMP%]:hover {\r\n    color: #b8bcc7;\r\n}\r\n\r\n.side-bar[_ngcontent-%COMP%]   .side-item[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .side-link[_ngcontent-%COMP%]:hover:before {\r\n    color: #b8bcc7;\r\n}\r\n\r\n.side-bar[_ngcontent-%COMP%]   .side-item[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n    padding-left: 35px;\r\n    max-height: 0px;\r\n    overflow: hidden;\r\n    transition: all .8s;\r\n}\r\n\r\n.side-bar[_ngcontent-%COMP%]   .side-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    font-size: 16px;\r\n    margin-right: 10px;\r\n}\r\n\r\n.item-header[_ngcontent-%COMP%] {\r\n    padding: 5px 0px 5px 7px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    cursor: pointer;\r\n}\r\n\r\n.item[_ngcontent-%COMP%] {\r\n    font-size: 14px;\r\n}\r\n\r\n.side-bar[_ngcontent-%COMP%]   .active-item[_ngcontent-%COMP%] {\r\n    color: #b8bcc7;\r\n    background-color: #3a3f51;\r\n}\r\n\r\n.side-bar[_ngcontent-%COMP%]   .active-item[_ngcontent-%COMP%]   .fa-angle-right[_ngcontent-%COMP%] {\r\n    transform: rotate(90deg);\r\n}\r\n\r\n.side-bar[_ngcontent-%COMP%]   .active-item[_ngcontent-%COMP%]   .active-link[_ngcontent-%COMP%] {\r\n    color: #fff;\r\n    font-size: 14px;\r\n}\r\n\r\n.side-bar[_ngcontent-%COMP%]   .active-item[_ngcontent-%COMP%]   .active-link[_ngcontent-%COMP%]:hover {\r\n    color: #fff;\r\n}\r\n\r\n.side-bar[_ngcontent-%COMP%]   .active-item[_ngcontent-%COMP%]   .active-link[_ngcontent-%COMP%]::before {\r\n    color: #fff !important;\r\n}\r\n\r\n.side-bar[_ngcontent-%COMP%]   .active-item[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n    max-height: 500px;\r\n}\r\n\r\n@media (max-width:650px) {\r\n    .side-bar[_ngcontent-%COMP%] {\r\n        width: 175px;\r\n        padding: 10px 5px;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lkZS1iYXIvc2lkZS1iYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsT0FBTztJQUNQLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCwwQkFBMEI7SUFDMUIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksY0FBYztJQUNkLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLGNBQWM7SUFDZCxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFFBQVE7SUFDUixjQUFjO0lBQ2QsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsOEJBQThCO0lBQzlCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksY0FBYztJQUNkLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxlQUFlO0FBQ25COztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0k7UUFDSSxZQUFZO1FBQ1osaUJBQWlCO0lBQ3JCO0FBQ0o7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0F3Q0MiLCJmaWxlIjoic3JjL2FwcC9zaWRlLWJhci9zaWRlLWJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZGUtYmFyIHtcclxuICAgIHdpZHRoOiAyMzVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxZTFlMmY7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDEwcHg7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHotaW5kZXg6IDk7XHJcbn1cclxuXHJcbi5zaWRlLWJhciB1bCB7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG59XHJcblxyXG4uc2lkZS1iYXIgYSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi5zaWRlLWJhciAuc2lkZS1pdGVtIHtcclxuICAgIHBhZGRpbmc6IDRweCA3cHg7XHJcbiAgICBtYXJnaW46IDNweCAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG4gICAgY29sb3I6ICM4YzkwOWE7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAuM3M7XHJcbn1cclxuXHJcbi5zaWRlLWJhciAuc2lkZS1pdGVtOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjYjhiY2M3O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNhM2Y1MTtcclxufVxyXG5cclxuLnNpZGUtYmFyIC5zaWRlLWl0ZW0gLmZhLWFuZ2xlLXJpZ2h0IHtcclxuICAgIHRyYW5zaXRpb246IGFsbCAuM3M7XHJcbn1cclxuXHJcbi5zaWRlLWJhciAuc2lkZS1pdGVtIC5zaWRlLWxpbmsge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgcGFkZGluZzogNXB4IDBweDtcclxuICAgIG1hcmdpbjogMCA3cHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGNvbG9yOiAjOGM5MDlhO1xyXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIC4ycztcclxufVxyXG5cclxuLnNpZGUtYmFyIC5zaWRlLWl0ZW0gLnNpZGUtbGluayB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5zaWRlLWJhciAuc2lkZS1pdGVtIHVsIC5zaWRlLWxpbms6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IFwi4oCiXCI7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAtMTNweDtcclxuICAgIHRvcDogMHB4O1xyXG4gICAgY29sb3I6ICM4YzkwOWE7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjJzO1xyXG59XHJcblxyXG4uc2lkZS1iYXIgLnNpZGUtaXRlbSAuc2lkZS1saW5rOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjYjhiY2M3O1xyXG59XHJcblxyXG4uc2lkZS1iYXIgLnNpZGUtaXRlbSB1bCAuc2lkZS1saW5rOmhvdmVyOmJlZm9yZSB7XHJcbiAgICBjb2xvcjogI2I4YmNjNztcclxufVxyXG5cclxuLnNpZGUtYmFyIC5zaWRlLWl0ZW0gdWwge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzNXB4O1xyXG4gICAgbWF4LWhlaWdodDogMHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRyYW5zaXRpb246IGFsbCAuOHM7XHJcbn1cclxuXHJcbi5zaWRlLWJhciAuc2lkZS1pdGVtIGkge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4uaXRlbS1oZWFkZXIge1xyXG4gICAgcGFkZGluZzogNXB4IDBweCA1cHggN3B4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5pdGVtIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuLnNpZGUtYmFyIC5hY3RpdmUtaXRlbSB7XHJcbiAgICBjb2xvcjogI2I4YmNjNztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzYTNmNTE7XHJcbn1cclxuXHJcbi5zaWRlLWJhciAuYWN0aXZlLWl0ZW0gLmZhLWFuZ2xlLXJpZ2h0IHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcclxufVxyXG5cclxuLnNpZGUtYmFyIC5hY3RpdmUtaXRlbSAuYWN0aXZlLWxpbmsge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbi5zaWRlLWJhciAuYWN0aXZlLWl0ZW0gLmFjdGl2ZS1saW5rOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4uc2lkZS1iYXIgLmFjdGl2ZS1pdGVtIC5hY3RpdmUtbGluazo6YmVmb3JlIHtcclxuICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zaWRlLWJhciAuYWN0aXZlLWl0ZW0gdWwge1xyXG4gICAgbWF4LWhlaWdodDogNTAwcHg7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOjY1MHB4KSB7XHJcbiAgICAuc2lkZS1iYXIge1xyXG4gICAgICAgIHdpZHRoOiAxNzVweDtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4IDVweDtcclxuICAgIH1cclxufVxyXG5cclxuLypcclxuI2ZmYzEwN1xyXG5mb250LWZhbWlseTogJ0FsZWdyZXlhJywgc2VyaWY7XHJcbmZvbnQtZmFtaWx5OiAnQWxlZ3JleWEgU2FucyBTQycsIHNhbnMtc2VyaWY7XHJcbmZvbnQtZmFtaWx5OiAnQ2Fpcm8nLCBzYW5zLXNlcmlmO1xyXG5mb250LWZhbWlseTogJ01lcnJpd2VhdGhlcicsIHNlcmlmO1xyXG5mb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbmZvbnQtZmFtaWx5OiAnU3RhYXRsaWNoZXMnLCBjdXJzaXZlO1xyXG5mb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG5cclxubGFtb255XHJcbiNDN0U1OTZcclxuXHJcbiMwOWNcclxuXHJcbiNmOTBcclxuXHJcbndhcm5pbmdcclxuIzMxNGFlZlxyXG5cclxubGltZVxyXG4jMDllNWFiXHJcblxyXG50cmN1YXpcclxuIzAwOTY4OFxyXG5cclxubXV0ZWRcclxuI2RlZTJlNlxyXG4jZTllNmU2XHJcblxyXG5iYWNrIGxpZ2h0XHJcbiNmOGY4ZjhcclxuXHJcbnJlZFxyXG5mZjQ3NDdcclxuXHJcbmJsdWVcclxuMjczNjdmXHJcbmZmYzEwN1xyXG5cclxuKi8iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SideBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-side-bar',
                templateUrl: './side-bar.component.html',
                styleUrls: ['./side-bar.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "5RyS":
/*!**********************************************!*\
  !*** ./src/app/pending/pending.component.ts ***!
  \**********************************************/
/*! exports provided: PendingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PendingComponent", function() { return PendingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class PendingComponent {
    constructor() { }
    ngOnInit() {
    }
}
PendingComponent.ɵfac = function PendingComponent_Factory(t) { return new (t || PendingComponent)(); };
PendingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PendingComponent, selectors: [["app-pending"]], decls: 76, vars: 0, consts: [[1, "pending-orders"], [1, "top-header"], ["action", ""], ["type", "text", "placeholder", "search by ID"], [1, "w-100", "table", 2, "overflow-x", "scroll"], [1, "m-auto", 2, "width", "97%"], ["routerLink", "/order-details/8", 1, "btn", "btn-warning", "view"], ["routerLink", "/order-details", 1, "btn", "btn-warning", "view"], [1, "table-footer"], [2, "text-transform", "capitalize"], [1, "table-pages"], [1, "prev", "disable"], [1, "page"], [1, "next"]], template: function PendingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Pending Orders");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "table", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Order");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Date&Time");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Customer Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Customer Phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "231541");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "06/01/22 04:11");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Ahmed Abdallah");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "01123456789");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "make decision");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "222541");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "06/04/22 14:00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Aida Mohamed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "01198765432");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "make decision");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "230042");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "15/01/22 00:25");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Omar Ibrahim");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "01231556789");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "make decision");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "page 1 from 10 pages");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "prev");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: [".pending-orders[_ngcontent-%COMP%] {\r\n    padding: 20px 2.5%;\r\n    color: #b1b1b5;\r\n    background-color: #27293d;\r\n    font-family: 'Cairo', sans-serif;\r\n    overflow: hidden;\r\n}\r\n\r\n.pending-orders[_ngcontent-%COMP%]   .top-header[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    padding-bottom: 15px;\r\n}\r\n\r\n.pending-orders[_ngcontent-%COMP%]   .top-header[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n    border: 1px solid #424351;\r\n    font-weight: 400;\r\n    font-size: 0.875rem;\r\n    background-color: #2b2e4c;\r\n    padding: 5px 10px;\r\n    color: rgba(255, 255, 255, .75);\r\n    transition: all .2s;\r\n}\r\n\r\n.pending-orders[_ngcontent-%COMP%]   .top-header[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\r\n    color: rgba(255, 255, 255, .5);\r\n}\r\n\r\n.pending-orders[_ngcontent-%COMP%]   .top-header[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\r\n    outline: none;\r\n    border-color: #0d6efd;\r\n}\r\n\r\n.pending-orders[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n    height: 8px;\r\n    background-color: transparent;\r\n}\r\n\r\n.pending-orders[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n    background-color: #15191f;\r\n}\r\n\r\n.pending-orders[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\r\n    min-width: 650px;\r\n}\r\n\r\n.pending-orders[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .pending-orders[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n    padding: 15px 0;\r\n    text-transform: capitalize;\r\n}\r\n\r\n.pending-orders[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n    color: rgba(255, 255, 255, .85);\r\n    font-weight: 400;\r\n    border-bottom: 1px;\r\n}\r\n\r\n.pending-orders[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n    border-bottom: 1px solid #424351;\r\n    color: rgba(255, 255, 255, .75);\r\n}\r\n\r\n.pending-orders[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    font-size: 18px;\r\n    margin-left: .7rem;\r\n    cursor: pointer;\r\n    transition: transform .1s;\r\n}\r\n\r\n.pending-orders[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover {\r\n    transform: scale(1.2);\r\n}\r\n\r\n.pending-orders[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .view[_ngcontent-%COMP%] {\r\n    font-size: 14px;\r\n    text-transform: capitalize;\r\n}\r\n\r\n.pending-orders[_ngcontent-%COMP%]   .table-footer[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    padding: 1rem 0;\r\n    font-size: 14px;\r\n}\r\n\r\n.pending-orders[_ngcontent-%COMP%]   .table-footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n    list-style: none;\r\n    margin: 0;\r\n}\r\n\r\n.pending-orders[_ngcontent-%COMP%]   .table-footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    padding: 3px 7px;\r\n    margin: 0 1px;\r\n    border: 1px solid #424351;\r\n    font-weight: 400;\r\n    background-color: #2b2e4c;\r\n    cursor: pointer;\r\n    color: white;\r\n    text-transform: capitalize;\r\n}\r\n\r\n.pending-orders[_ngcontent-%COMP%]   .table-footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .page[_ngcontent-%COMP%] {\r\n    background-color: #0d6efd;\r\n    border: 1px solid #dee2e6;\r\n}\r\n\r\n.pending-orders[_ngcontent-%COMP%]   .table-footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .prev[_ngcontent-%COMP%] {\r\n    background-color: #1a1f26;\r\n    border: 1px solid #dee2e6;\r\n    border-radius: 3px 0 0 3px;\r\n}\r\n\r\n.pending-orders[_ngcontent-%COMP%]   .table-footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .next[_ngcontent-%COMP%] {\r\n    background-color: #1a1f26;\r\n    border: 1px solid #dee2e6;\r\n    border-radius: 0 3px 3px 0;\r\n}\r\n\r\n.pending-orders[_ngcontent-%COMP%]   .table-footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .disable[_ngcontent-%COMP%] {\r\n    cursor: default;\r\n    background-color: grey;\r\n}\r\n\r\n@media (max-width:650px) {\r\n    .pending-orders[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\r\n        font-size: 14px;\r\n    }\r\n    .pending-orders[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\r\n        min-width: 600px;\r\n    }\r\n    .pending-orders[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .pending-orders[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n        padding: 10px 0px;\r\n    }\r\n    .pending-orders[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .pending-orders[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n        font-size: 14px;\r\n        font-weight: 400;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGVuZGluZy9wZW5kaW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsY0FBYztJQUNkLHlCQUF5QjtJQUN6QixnQ0FBZ0M7SUFDaEMsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw4QkFBOEI7SUFDOUIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQiwrQkFBK0I7SUFDL0IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksK0JBQStCO0lBQy9CLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxnQ0FBZ0M7SUFDaEMsK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsOEJBQThCO0lBQzlCLGVBQWU7SUFDZixlQUFlO0FBQ25COztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZixZQUFZO0lBQ1osMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLHlCQUF5QjtJQUN6QiwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0k7UUFDSSxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLGlCQUFpQjtJQUNyQjtJQUNBO1FBQ0ksZUFBZTtRQUNmLGdCQUFnQjtJQUNwQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvcGVuZGluZy9wZW5kaW5nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGVuZGluZy1vcmRlcnMge1xyXG4gICAgcGFkZGluZzogMjBweCAyLjUlO1xyXG4gICAgY29sb3I6ICNiMWIxYjU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjcyOTNkO1xyXG4gICAgZm9udC1mYW1pbHk6ICdDYWlybycsIHNhbnMtc2VyaWY7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4ucGVuZGluZy1vcmRlcnMgLnRvcC1oZWFkZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcclxufVxyXG5cclxuLnBlbmRpbmctb3JkZXJzIC50b3AtaGVhZGVyIGlucHV0IHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM0MjQzNTE7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyYjJlNGM7XHJcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcclxuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC43NSk7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjJzO1xyXG59XHJcblxyXG4ucGVuZGluZy1vcmRlcnMgLnRvcC1oZWFkZXIgaW5wdXQ6OnBsYWNlaG9sZGVyIHtcclxuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC41KTtcclxufVxyXG5cclxuLnBlbmRpbmctb3JkZXJzIC50b3AtaGVhZGVyIGlucHV0OmZvY3VzIHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBib3JkZXItY29sb3I6ICMwZDZlZmQ7XHJcbn1cclxuXHJcbi5wZW5kaW5nLW9yZGVycyAudGFibGU6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgIGhlaWdodDogOHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5wZW5kaW5nLW9yZGVycyAudGFibGU6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxNTE5MWY7XHJcbn1cclxuXHJcbi5wZW5kaW5nLW9yZGVycyB0YWJsZSB7XHJcbiAgICBtaW4td2lkdGg6IDY1MHB4O1xyXG59XHJcblxyXG4ucGVuZGluZy1vcmRlcnMgdGFibGUgdGgsIC5wZW5kaW5nLW9yZGVycyB0YWJsZSB0ZCB7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDA7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxufVxyXG5cclxuLnBlbmRpbmctb3JkZXJzIHRhYmxlIHRoIHtcclxuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC44NSk7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4O1xyXG59XHJcblxyXG4ucGVuZGluZy1vcmRlcnMgdGFibGUgdGQge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM0MjQzNTE7XHJcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAuNzUpO1xyXG59XHJcblxyXG4ucGVuZGluZy1vcmRlcnMgdGFibGUgYSBpIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAuN3JlbTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuMXM7XHJcbn1cclxuXHJcbi5wZW5kaW5nLW9yZGVycyB0YWJsZSBhIGk6aG92ZXIge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xyXG59XHJcblxyXG4ucGVuZGluZy1vcmRlcnMgdGFibGUgLnZpZXcge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbn1cclxuXHJcbi5wZW5kaW5nLW9yZGVycyAudGFibGUtZm9vdGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgcGFkZGluZzogMXJlbSAwO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG4ucGVuZGluZy1vcmRlcnMgLnRhYmxlLWZvb3RlciB1bCB7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4ucGVuZGluZy1vcmRlcnMgLnRhYmxlLWZvb3RlciB1bCBsaSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwYWRkaW5nOiAzcHggN3B4O1xyXG4gICAgbWFyZ2luOiAwIDFweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM0MjQzNTE7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJiMmU0YztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG59XHJcblxyXG4ucGVuZGluZy1vcmRlcnMgLnRhYmxlLWZvb3RlciB1bCAucGFnZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGQ2ZWZkO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RlZTJlNjtcclxufVxyXG5cclxuLnBlbmRpbmctb3JkZXJzIC50YWJsZS1mb290ZXIgdWwgLnByZXYge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFhMWYyNjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZWUyZTY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHggMCAwIDNweDtcclxufVxyXG5cclxuLnBlbmRpbmctb3JkZXJzIC50YWJsZS1mb290ZXIgdWwgLm5leHQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFhMWYyNjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZWUyZTY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwIDNweCAzcHggMDtcclxufVxyXG5cclxuLnBlbmRpbmctb3JkZXJzIC50YWJsZS1mb290ZXIgdWwgLmRpc2FibGUge1xyXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6NjUwcHgpIHtcclxuICAgIC5wZW5kaW5nLW9yZGVycyBoNiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgfVxyXG4gICAgLnBlbmRpbmctb3JkZXJzIHRhYmxlIHtcclxuICAgICAgICBtaW4td2lkdGg6IDYwMHB4O1xyXG4gICAgfVxyXG4gICAgLnBlbmRpbmctb3JkZXJzIHRhYmxlIHRoLCAucGVuZGluZy1vcmRlcnMgdGFibGUgdGQge1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMHB4O1xyXG4gICAgfVxyXG4gICAgLnBlbmRpbmctb3JkZXJzIHRhYmxlIHRoLCAucGVuZGluZy1vcmRlcnMgdGFibGUgdGQge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgfVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PendingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-pending',
                templateUrl: './pending.component.html',
                styleUrls: ['./pending.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "6XR0":
/*!****************************************!*\
  !*** ./src/app/news/news.component.ts ***!
  \****************************************/
/*! exports provided: NewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsComponent", function() { return NewsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class NewsComponent {
    constructor() { }
    ngOnInit() {
    }
    delete() {
    }
}
NewsComponent.ɵfac = function NewsComponent_Factory(t) { return new (t || NewsComponent)(); };
NewsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NewsComponent, selectors: [["app-news"]], decls: 32, vars: 0, consts: [[1, "news", "container-fluid", 2, "width", "100%"], [1, "row"], [1, "col-12", "py-3"], [1, "py-2"], ["id", "new", "rows", "5", "placeholder", "Typing...", 1, "form-control", "my-2"], ["type", "button", 1, "btn", "btn-primary", "form-control"], [1, "item"], [1, "exit", 3, "click"], [1, "fa", "fa-times"]], template: function NewsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Add news");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "textarea", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Publish");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h4", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "All news");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewsComponent_Template_div_click_12_listener() { return ctx.delete(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "06/01/22 04:11");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Note that our number has changed from 01140243176 to 01000615064");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewsComponent_Template_div_click_19_listener() { return ctx.delete(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "06/01/22 04:11");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "A paragraph is a series of related sentences developing a central idea, called the topic. Try to think about paragraphs in terms of thematic unity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewsComponent_Template_div_click_26_listener() { return ctx.delete(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "06/01/22 04:11");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "A paragraph is a sentence or a group of sentences that supports one central, unified idea. Paragraphs add one idea at a time to your broader argument.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".news[_ngcontent-%COMP%] {\r\n    padding: 20px 2.5%;\r\n    background-color: #27293d;\r\n    font-family: 'Cairo', sans-serif;\r\n    overflow: hidden;\r\n}\r\n\r\n.news[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n    color: rgba(255, 255, 255, .75);\r\n    font-size: 22px;\r\n    text-transform: capitalize;\r\n}\r\n\r\n.news[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\r\n    border: 1px solid #424351;\r\n    background-color: #2b2e4c;\r\n    padding: 5px 10px;\r\n    color: rgba(255, 255, 255, .85);\r\n    transition: all .2s;\r\n}\r\n\r\n.news[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::placeholder {\r\n    color: rgba(255, 255, 255, .65);\r\n}\r\n\r\n.news[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\r\n    outline: none;\r\n    border-color: #0d6efd;\r\n}\r\n\r\n.news[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\r\n    margin: 20px 0;\r\n    padding: 15px 25px;\r\n    border: 1px solid white;\r\n    border-radius: 7px;\r\n    position: relative;\r\n}\r\n\r\n.news[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\r\n    color: rgba(255, 255, 255, .65);\r\n}\r\n\r\n.news[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    color: rgba(255, 255, 255, .9);\r\n    padding: 10px;\r\n    margin-bottom: 0;\r\n}\r\n\r\n.news[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .exit[_ngcontent-%COMP%] {\r\n    width: 2rem;\r\n    height: 2rem;\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n    background-color: white;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    font-size: 16px;\r\n    color: red;\r\n    border-radius: 0 5px 0 5px;\r\n    cursor: pointer;\r\n    transition: all .2s;\r\n}\r\n\r\n.news[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .exit[_ngcontent-%COMP%]:hover {\r\n    background-color: red;\r\n    color: white;\r\n}\r\n\r\n@media (max-width:600px) {\r\n    .news[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n        font-size: 16px;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3cy9uZXdzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLGdDQUFnQztJQUNoQyxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSwrQkFBK0I7SUFDL0IsZUFBZTtJQUNmLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIsaUJBQWlCO0lBQ2pCLCtCQUErQjtJQUMvQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSwrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLDhCQUE4QjtJQUM5QixhQUFhO0lBQ2IsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLFFBQVE7SUFDUix1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsZUFBZTtJQUNmLFVBQVU7SUFDViwwQkFBMEI7SUFDMUIsZUFBZTtJQUNmLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0k7UUFDSSxlQUFlO0lBQ25CO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9uZXdzL25ld3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uZXdzIHtcclxuICAgIHBhZGRpbmc6IDIwcHggMi41JTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNzI5M2Q7XHJcbiAgICBmb250LWZhbWlseTogJ0NhaXJvJywgc2Fucy1zZXJpZjtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5uZXdzIGg0IHtcclxuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC43NSk7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxufVxyXG5cclxuLm5ld3MgdGV4dGFyZWEge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzQyNDM1MTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyYjJlNGM7XHJcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcclxuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC44NSk7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjJzO1xyXG59XHJcblxyXG4ubmV3cyB0ZXh0YXJlYTo6cGxhY2Vob2xkZXIge1xyXG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjY1KTtcclxufVxyXG5cclxuLm5ld3MgdGV4dGFyZWE6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJvcmRlci1jb2xvcjogIzBkNmVmZDtcclxufVxyXG5cclxuLm5ld3MgLml0ZW0ge1xyXG4gICAgbWFyZ2luOiAyMHB4IDA7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDI1cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLm5ld3MgLml0ZW0gc21hbGwge1xyXG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjY1KTtcclxufVxyXG5cclxuLm5ld3MgLml0ZW0gcCB7XHJcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAuOSk7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG5cclxuLm5ld3MgLml0ZW0gLmV4aXQge1xyXG4gICAgd2lkdGg6IDJyZW07XHJcbiAgICBoZWlnaHQ6IDJyZW07XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwIDVweCAwIDVweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRyYW5zaXRpb246IGFsbCAuMnM7XHJcbn1cclxuXHJcbi5uZXdzIC5pdGVtIC5leGl0OmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6NjAwcHgpIHtcclxuICAgIC5uZXdzIGg0IHtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICB9XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-news',
                templateUrl: './news.component.html',
                styleUrls: ['./news.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class HomeComponent {
    constructor() {
        this.condation = true;
    }
    ngOnInit() {
    }
    online() {
        if (this.condation) {
            $('.pharmacy-home .check').removeClass('online');
            this.condation = false;
        }
        else {
            $('.pharmacy-home .check').addClass('online');
            this.condation = true;
        }
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 123, vars: 0, consts: [[1, "pharmacy-home"], [1, "container-fluid"], [1, "row"], [1, "col-12", "d-flex", "align-items-center", "justify-content-between"], [1, "check", "online", 3, "click"], [1, "online-dot"], [1, "col-xl-3", "col-lg-6", "col-12", "py-2"], [1, "counter-box", "shadow-sm", 2, "background-color", "#ffb007", "background-image", "url(assets/images/products.png)"], [2, "width", "90%", "height", "90%"], [1, "counter-box", "shadow-sm", 2, "background-color", "#fff", "background-image", "url(assets/images/orders.png)"], [1, "counter-box", "shadow-sm", 2, "background-color", "#ffb007", "background-image", "url(assets/images/revenue.png)"], [1, "counter-box", "shadow-sm", 2, "background-color", "#fff", "background-image", "url(assets/images/offers.png)"], [1, "col-12", "py-3", "px-2"], [1, "top-sold", "rounded", "shadow-sm"], [1, "top-header"], [1, "w-100", "mt-2"], [1, "border-top"], [1, "rounded"], [1, "py-1", "badge", "badge-success", 2, "width", "65px"], [1, "py-1", "badge", "badge-danger", 2, "width", "65px"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Hi, Welcomeback!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Pharma Dashboard,");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "online");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_div_click_12_listener() { return ctx.online(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Total Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "11500");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Total orders");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "230");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Total revenue");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "25,000$");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Total offers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "56");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "TOP SALLERS PRODUCTS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Top five products sold in your pharmacy.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "table", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "thead", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "tr", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Avalability");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Last Purchase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Total Orders");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Panadol Extra");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "yes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "16-01-2021");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "15$");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "125");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Novalgin 200");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "yes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "15-01-2021");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "34$");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "99");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Parastemol");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "yes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "12-01-2021");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "24$");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "71");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "Signals");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "no");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "10-01-2021");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "32$");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "40");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "Voltaren");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "yes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "14-01-2021");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "11$");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "39");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".pharmacy-home[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\r\n    color: #cbced1;\r\n    font-family: 'Cairo', sans-serif;\r\n}\r\n\r\n.pharmacy-home[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\r\n    font-size: 20px;\r\n    letter-spacing: 1px;\r\n}\r\n\r\n.pharmacy-home[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\r\n    font-size: 18px;\r\n    font-weight: 400;\r\n}\r\n\r\n.pharmacy-home[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n    color: white;\r\n    font-size: 22px;\r\n    font-family: 'Cairo', sans-serif;\r\n    padding-right: 1rem;\r\n}\r\n\r\n.pharmacy-home[_ngcontent-%COMP%]   .check[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    top: .2rem;\r\n    display: inline-block;\r\n    width: 40px;\r\n    height: 20px;\r\n    cursor: pointer;\r\n    border-radius: 20px;\r\n    overflow: hidden;\r\n    transition: .3s;\r\n    background-color: red;\r\n}\r\n\r\n.pharmacy-home[_ngcontent-%COMP%]   .online[_ngcontent-%COMP%] {\r\n    background-color: green;\r\n}\r\n\r\n.pharmacy-home[_ngcontent-%COMP%]   .check[_ngcontent-%COMP%]   .online-dot[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 2px;\r\n    right: 2px;\r\n    background-color: white;\r\n    width: 16px;\r\n    height: 16px;\r\n    border-radius: 50%;\r\n    transition: .3s;\r\n}\r\n\r\n.pharmacy-home[_ngcontent-%COMP%]   .online[_ngcontent-%COMP%]   .online-dot[_ngcontent-%COMP%] {\r\n    transform: translateX(-20px);\r\n}\r\n\r\n.pharmacy-home[_ngcontent-%COMP%]   .counter-box[_ngcontent-%COMP%] {\r\n    border-radius: 7px;\r\n    min-height: 125px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    background-position: 95% 50%;\r\n    background-size: 85px 85px;\r\n    background-repeat: no-repeat;\r\n}\r\n\r\n.pharmacy-home[_ngcontent-%COMP%]   .counter-box[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n    font-size: 16px;\r\n    font-weight: 600;\r\n    text-transform: uppercase;\r\n    font-family: 'Oswald', sans-serif;\r\n    letter-spacing: 1px;\r\n}\r\n\r\n.pharmacy-home[_ngcontent-%COMP%]   .counter-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    font-size: 24px;\r\n    font-family: 'Roboto', sans-serif;\r\n    font-weight: 400;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n.pharmacy-home[_ngcontent-%COMP%]   .top-sold[_ngcontent-%COMP%] {\r\n    color: whitesmoke;\r\n    background-color: #27293d;\r\n    padding: 1.25rem 1.437rem 0 1.437rem;\r\n    border: 1px solid #313452;\r\n    font-family: \"Roboto\", sans-serif;\r\n    overflow-x: scroll;\r\n}\r\n\r\n.pharmacy-home[_ngcontent-%COMP%]   .top-sold[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n    height: 8px;\r\n    background-color: transparent;\r\n}\r\n\r\n.pharmacy-home[_ngcontent-%COMP%]   .top-sold[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n    background-color: #15191f;\r\n}\r\n\r\n.pharmacy-home[_ngcontent-%COMP%]   .top-sold[_ngcontent-%COMP%]   .top-header[_ngcontent-%COMP%] {\r\n    padding-bottom: .5rem;\r\n}\r\n\r\n.pharmacy-home[_ngcontent-%COMP%]   .top-sold[_ngcontent-%COMP%]   .top-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n    font-size: 18px;\r\n    font-weight: 400;\r\n    text-transform: uppercase;\r\n    font-family: 'Oswald', sans-serif;\r\n    letter-spacing: 1px;\r\n}\r\n\r\n.pharmacy-home[_ngcontent-%COMP%]   .top-sold[_ngcontent-%COMP%]   .top-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    font-size: 14px;\r\n    font-family: 'Roboto', sans-serif;\r\n    font-weight: 400;\r\n    margin: 0;\r\n    color: #dee2e6;\r\n}\r\n\r\n.pharmacy-home[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\r\n    min-width: 550px;\r\n}\r\n\r\n.pharmacy-home[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .pharmacy-home[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n    font-weight: 200;\r\n    padding: 15px 0px;\r\n    text-transform: capitalize;\r\n}\r\n\r\n.pharmacy-home[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n    border-bottom: 1px solid #424351;\r\n}\r\n\r\n.pharmacy-home[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\r\n    border-color: transparent;\r\n}\r\n\r\n@media (max-width:650px) {\r\n    .pharmacy-home[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\r\n        font-size: 16px;\r\n    }\r\n    .pharmacy-home[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\r\n        font-size: 14px;\r\n    }\r\n    .pharmacy-home[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n        font-size: 16px;\r\n    }\r\n    .pharmacy-home[_ngcontent-%COMP%]   .counter-box[_ngcontent-%COMP%] {\r\n        min-height: 100px;\r\n        background-size: 55px 55px;\r\n    }\r\n    .pharmacy-home[_ngcontent-%COMP%]   .counter-box[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n        font-size: 14px;\r\n    }\r\n    .pharmacy-home[_ngcontent-%COMP%]   .counter-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n        font-size: 20px;\r\n    }\r\n    .pharmacy-home[_ngcontent-%COMP%]   .top-sold[_ngcontent-%COMP%]   .top-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n        font-size: 15px;\r\n    }\r\n    .pharmacy-home[_ngcontent-%COMP%]   .top-sold[_ngcontent-%COMP%]   .top-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n        font-size: 11px;\r\n    }\r\n    .pharmacy-home[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .pharmacy-home[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n        font-size: 13px;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2QsZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksZUFBZTtJQUNmLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZUFBZTtJQUNmLGdDQUFnQztJQUNoQyxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFVBQVU7SUFDVix1QkFBdUI7SUFDdkIsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsNEJBQTRCO0lBQzVCLDBCQUEwQjtJQUMxQiw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixpQ0FBaUM7SUFDakMsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGlDQUFpQztJQUNqQyxnQkFBZ0I7SUFDaEIsU0FBUztJQUNULFVBQVU7QUFDZDs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQix5QkFBeUI7SUFDekIsb0NBQW9DO0lBQ3BDLHlCQUF5QjtJQUN6QixpQ0FBaUM7SUFDakMsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksV0FBVztJQUNYLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLGlDQUFpQztJQUNqQyxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsaUNBQWlDO0lBQ2pDLGdCQUFnQjtJQUNoQixTQUFTO0lBQ1QsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0k7UUFDSSxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxpQkFBaUI7UUFDakIsMEJBQTBCO0lBQzlCO0lBQ0E7UUFDSSxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxlQUFlO0lBQ25CO0FBQ0o7O0FBRUE7Ozs7Ozs7Ozs7O0NBV0MiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5waGFybWFjeS1ob21lIGg1LCBoNiB7XHJcbiAgICBjb2xvcjogI2NiY2VkMTtcclxuICAgIGZvbnQtZmFtaWx5OiAnQ2Fpcm8nLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4ucGhhcm1hY3ktaG9tZSBoNSB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG59XHJcblxyXG4ucGhhcm1hY3ktaG9tZSBoNiB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcblxyXG4ucGhhcm1hY3ktaG9tZSBsYWJlbCB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICBmb250LWZhbWlseTogJ0NhaXJvJywgc2Fucy1zZXJpZjtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDFyZW07XHJcbn1cclxuXHJcbi5waGFybWFjeS1ob21lIC5jaGVjayB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IC4ycmVtO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRyYW5zaXRpb246IC4zcztcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxufVxyXG5cclxuLnBoYXJtYWN5LWhvbWUgLm9ubGluZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcclxufVxyXG5cclxuLnBoYXJtYWN5LWhvbWUgLmNoZWNrIC5vbmxpbmUtZG90IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMnB4O1xyXG4gICAgcmlnaHQ6IDJweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgd2lkdGg6IDE2cHg7XHJcbiAgICBoZWlnaHQ6IDE2cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB0cmFuc2l0aW9uOiAuM3M7XHJcbn1cclxuXHJcbi5waGFybWFjeS1ob21lIC5vbmxpbmUgLm9ubGluZS1kb3Qge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yMHB4KTtcclxufVxyXG5cclxuLnBoYXJtYWN5LWhvbWUgLmNvdW50ZXItYm94IHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcclxuICAgIG1pbi1oZWlnaHQ6IDEyNXB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDk1JSA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDg1cHggODVweDtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbn1cclxuXHJcbi5waGFybWFjeS1ob21lIC5jb3VudGVyLWJveCBoNCB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtZmFtaWx5OiAnT3N3YWxkJywgc2Fucy1zZXJpZjtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbn1cclxuXHJcbi5waGFybWFjeS1ob21lIC5jb3VudGVyLWJveCBwIHtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4ucGhhcm1hY3ktaG9tZSAudG9wLXNvbGQge1xyXG4gICAgY29sb3I6IHdoaXRlc21va2U7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjcyOTNkO1xyXG4gICAgcGFkZGluZzogMS4yNXJlbSAxLjQzN3JlbSAwIDEuNDM3cmVtO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzMxMzQ1MjtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xyXG4gICAgb3ZlcmZsb3cteDogc2Nyb2xsO1xyXG59XHJcblxyXG4ucGhhcm1hY3ktaG9tZSAudG9wLXNvbGQ6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgIGhlaWdodDogOHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5waGFybWFjeS1ob21lIC50b3Atc29sZDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE1MTkxZjtcclxufVxyXG5cclxuLnBoYXJtYWN5LWhvbWUgLnRvcC1zb2xkIC50b3AtaGVhZGVyIHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAuNXJlbTtcclxufVxyXG5cclxuLnBoYXJtYWN5LWhvbWUgLnRvcC1zb2xkIC50b3AtaGVhZGVyIGg0IHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC1mYW1pbHk6ICdPc3dhbGQnLCBzYW5zLXNlcmlmO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxufVxyXG5cclxuLnBoYXJtYWN5LWhvbWUgLnRvcC1zb2xkIC50b3AtaGVhZGVyIHAge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGNvbG9yOiAjZGVlMmU2O1xyXG59XHJcblxyXG4ucGhhcm1hY3ktaG9tZSB0YWJsZSB7XHJcbiAgICBtaW4td2lkdGg6IDU1MHB4O1xyXG59XHJcblxyXG4ucGhhcm1hY3ktaG9tZSB0YWJsZSB0aCwgLnBoYXJtYWN5LWhvbWUgdGFibGUgdGQge1xyXG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcclxuICAgIHBhZGRpbmc6IDE1cHggMHB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbn1cclxuXHJcbi5waGFybWFjeS1ob21lIHRhYmxlIHRkIHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNDI0MzUxO1xyXG59XHJcblxyXG4ucGhhcm1hY3ktaG9tZSB0YWJsZSB0cjpsYXN0LWNoaWxkIHRkIHtcclxuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOjY1MHB4KSB7XHJcbiAgICAucGhhcm1hY3ktaG9tZSBoNSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgfVxyXG4gICAgLnBoYXJtYWN5LWhvbWUgaDYge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIH1cclxuICAgIC5waGFybWFjeS1ob21lIGxhYmVsIHtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICB9XHJcbiAgICAucGhhcm1hY3ktaG9tZSAuY291bnRlci1ib3gge1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDEwMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogNTVweCA1NXB4O1xyXG4gICAgfVxyXG4gICAgLnBoYXJtYWN5LWhvbWUgLmNvdW50ZXItYm94IGg0IHtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB9XHJcbiAgICAucGhhcm1hY3ktaG9tZSAuY291bnRlci1ib3ggcCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgfVxyXG4gICAgLnBoYXJtYWN5LWhvbWUgLnRvcC1zb2xkIC50b3AtaGVhZGVyIGg0IHtcclxuICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICB9XHJcbiAgICAucGhhcm1hY3ktaG9tZSAudG9wLXNvbGQgLnRvcC1oZWFkZXIgcCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgfVxyXG4gICAgLnBoYXJtYWN5LWhvbWUgdGFibGUgdGgsIC5waGFybWFjeS1ob21lIHRhYmxlIHRkIHtcclxuICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qXHJcbiNkZWUyZTZcclxuI2ZmYzEwN1xyXG5mb250LWZhbWlseTogJ0FsZWdyZXlhJywgc2VyaWY7XHJcbmZvbnQtZmFtaWx5OiAnQWxlZ3JleWEgU2FucyBTQycsIHNhbnMtc2VyaWY7XHJcbmZvbnQtZmFtaWx5OiAnQ2Fpcm8nLCBzYW5zLXNlcmlmO1xyXG5mb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbmZvbnQtZmFtaWx5OiAnT3N3YWxkJywgc2Fucy1zZXJpZjtcclxuYmFja2dyb3VuZC1jb2xvcjogIzNhM2Y1MTtcclxuYmFja2dyb3VuZC1jb2xvcjogIzFlMWUyZjtcclxuIzI3MjkzZFxyXG4qLyJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "AytR":
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
const environment = {
    production: false
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

/***/ "DruN":
/*!************************************************!*\
  !*** ./src/app/messages/messages.component.ts ***!
  \************************************************/
/*! exports provided: MessagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesComponent", function() { return MessagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class MessagesComponent {
    constructor() { }
    ngOnInit() {
        this.updateScroll();
    }
    updateScroll() {
        var element = document.getElementById("chating");
        element.scrollTop = element.scrollHeight;
    }
}
MessagesComponent.ɵfac = function MessagesComponent_Factory(t) { return new (t || MessagesComponent)(); };
MessagesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MessagesComponent, selectors: [["app-messages"]], decls: 67, vars: 0, consts: [[1, "messages"], [1, "py-2"], [1, "d-flex", "shadow"], [1, "heads", "text-center", 2, "border-right", "black"], [1, "head", "p-2"], ["src", "assets/images/Users/1.jpg", "title", "Khaled El-sman", "alt", "", 1, "rounded-circle"], [1, "head", "p-2", "active"], ["src", "assets/images/Users/2.png", "title", "Eva Toti", "alt", "", 1, "rounded-circle"], ["src", "assets/images/clients/client-3.png", "title", "Khaled El-sman", "alt", "", 1, "rounded-circle"], ["src", "assets/images/clients/client-6.png", "title", "Eva Toti", "alt", "", 1, "rounded-circle"], ["src", "assets/images/clients/client-9.png", "title", "Khaled El-sman", "alt", "", 1, "rounded-circle"], ["src", "assets/images/clients/client-5.png", "title", "Eva Toti", "alt", "", 1, "rounded-circle"], ["src", "assets/images/clients/client-4.png", "title", "Khaled El-sman", "alt", "", 1, "rounded-circle"], ["src", "assets/images/clients/client-7.png", "title", "Eva Toti", "alt", "", 1, "rounded-circle"], [1, "chat"], [1, "top-header", "p-2", "py-1", "d-flex"], ["src", "assets/images/Users/2.png", "alt", "", 1, "mr-3"], ["id", "chating", 1, "chating", "p-2"], [1, "from"], [1, "to"], [1, "control-message", "p-2"], ["type", "text", "placeholder", "typing...", 1, "form-control"], [1, "fa", "fa-paper-plane"]], template: function MessagesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Inbox");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "chating with strangers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Khaled El-sman");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Eva Toti");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Ali Ahmed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Makka saad");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Leo Messi");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Nada Ashraf");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Ahmed Omer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Mai Ali");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Eva Toti");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Hello");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Is panadol Extra is avilable?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Yes you can check it on our store");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Ok, Thank you");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium dolore reprehenderit recusandae, velit ea magni dicta veniam soluta repellendus vero eius quod reiciendis eum voluptatem, temporibus, neque consequatur distinctio similique.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium dolore reprehenderit recusandae, velit ea magni dicta veniam soluta repellendus vero eius quod reiciendis eum voluptatem, temporibus, neque consequatur distinctio similique.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".messages[_ngcontent-%COMP%] {\r\n    padding: 20px 2.5%;\r\n    color: #b1b1b5;\r\n    background-color: #27293d;\r\n    font-family: 'Cairo', sans-serif;\r\n    overflow: hidden;\r\n}\r\n\r\n.messages[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n    color: rgba(255, 255, 255, .75);\r\n}\r\n\r\n.messages[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    color: rgba(255, 255, 255, .5);\r\n}\r\n\r\n\r\n\r\n.messages[_ngcontent-%COMP%]   .heads[_ngcontent-%COMP%] {\r\n    max-height: 650px;\r\n    overflow-y: auto;\r\n    width: 6rem;\r\n}\r\n\r\n.messages[_ngcontent-%COMP%]   .heads[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n    width: 7px;\r\n    background-color: transparent;\r\n}\r\n\r\n.messages[_ngcontent-%COMP%]   .heads[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n    background-color: #15191f;\r\n}\r\n\r\n.messages[_ngcontent-%COMP%]   .heads[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%] {\r\n    border-bottom: 1px solid black;\r\n    cursor: pointer;\r\n    transition: .3s;\r\n}\r\n\r\n.messages[_ngcontent-%COMP%]   .heads[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]:last-child {\r\n    border-color: transparent;\r\n}\r\n\r\n.messages[_ngcontent-%COMP%]   .heads[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 4rem;\r\n    display: block;\r\n    border: 1px dashed black;\r\n    margin: .5rem 0;\r\n    transition: .3s;\r\n}\r\n\r\n.messages[_ngcontent-%COMP%]   .heads[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n    font-size: 14px;\r\n}\r\n\r\n.messages[_ngcontent-%COMP%]   .heads[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]:hover {\r\n    background-color: #151520;\r\n    color: rgba(255, 255, 255, .85);\r\n}\r\n\r\n.messages[_ngcontent-%COMP%]   .heads[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\r\n    border-color: rgba(255, 255, 255, .75);\r\n}\r\n\r\n.messages[_ngcontent-%COMP%]   .heads[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\r\n    background-color: #151520;\r\n    color: rgba(255, 255, 255, .85);\r\n}\r\n\r\n.messages[_ngcontent-%COMP%]   .heads[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    border-color: rgba(255, 255, 255, .75);\r\n}\r\n\r\n\r\n\r\n.messages[_ngcontent-%COMP%]   .chat[_ngcontent-%COMP%] {\r\n    background-color: #1e1e2f;\r\n    width: 100%;\r\n    height: 650px;\r\n    overflow: auto;\r\n    position: relative;\r\n}\r\n\r\n.messages[_ngcontent-%COMP%]   .chat[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n    width: 7px;\r\n    background-color: transparent;\r\n}\r\n\r\n.messages[_ngcontent-%COMP%]   .chat[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n    background-color: #15191f;\r\n}\r\n\r\n\r\n\r\n.messages[_ngcontent-%COMP%]   .chat[_ngcontent-%COMP%]   .top-header[_ngcontent-%COMP%] {\r\n    background-color: #151520;\r\n    align-items: center;\r\n    height: 75px;\r\n}\r\n\r\n.messages[_ngcontent-%COMP%]   .chat[_ngcontent-%COMP%]   .top-header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 4rem;\r\n    border-radius: 50%;\r\n    border: 1px dashed black;\r\n}\r\n\r\n.messages[_ngcontent-%COMP%]   .chat[_ngcontent-%COMP%]   .top-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n    font-size: 22px;\r\n    color: rgba(255, 255, 255, .85);\r\n}\r\n\r\n\r\n\r\n.messages[_ngcontent-%COMP%]   .chat[_ngcontent-%COMP%]   .chating[_ngcontent-%COMP%] {\r\n    height: 525px;\r\n    overflow-y: auto;\r\n}\r\n\r\n.messages[_ngcontent-%COMP%]   .chat[_ngcontent-%COMP%]   .chating[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    margin: 1rem 0;\r\n}\r\n\r\n.messages[_ngcontent-%COMP%]   .chat[_ngcontent-%COMP%]   .chating[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    max-width: 75%;\r\n    margin-bottom: 0;\r\n    border-radius: 7px;\r\n    padding: 1rem;\r\n    display: inline-block;\r\n}\r\n\r\n.messages[_ngcontent-%COMP%]   .chat[_ngcontent-%COMP%]   .chating[_ngcontent-%COMP%]   .from[_ngcontent-%COMP%] {\r\n    text-align: left;\r\n}\r\n\r\n.messages[_ngcontent-%COMP%]   .chat[_ngcontent-%COMP%]   .chating[_ngcontent-%COMP%]   .from[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    background-color: #e9e6e6;\r\n    color: black;\r\n}\r\n\r\n.messages[_ngcontent-%COMP%]   .chat[_ngcontent-%COMP%]   .chating[_ngcontent-%COMP%]   .to[_ngcontent-%COMP%] {\r\n    text-align: right;\r\n}\r\n\r\n.messages[_ngcontent-%COMP%]   .chat[_ngcontent-%COMP%]   .chating[_ngcontent-%COMP%]   .to[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    background-color: #27367f;\r\n    color: rgba(255, 255, 255, .7);\r\n}\r\n\r\n.messages[_ngcontent-%COMP%]   .chat[_ngcontent-%COMP%]   .chating[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n    width: 9px;\r\n    background-color: transparent;\r\n}\r\n\r\n.messages[_ngcontent-%COMP%]   .chat[_ngcontent-%COMP%]   .chating[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n    background-color: #15191f;\r\n}\r\n\r\n\r\n\r\n.messages[_ngcontent-%COMP%]   .chat[_ngcontent-%COMP%]   .control-message[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    background-color: #151520;\r\n    width: 100%;\r\n    position: absolute;\r\n    left: 0;\r\n    bottom: 0;\r\n    height: 50px;\r\n}\r\n\r\n.messages[_ngcontent-%COMP%]   .chat[_ngcontent-%COMP%]   .control-message[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n    background-color: rgba(255, 255, 255, .85);\r\n}\r\n\r\n.messages[_ngcontent-%COMP%]   .chat[_ngcontent-%COMP%]   .control-message[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    font-size: 20px;\r\n    padding: 0 1rem;\r\n    cursor: pointer;\r\n    color: rgba(255, 255, 255, .9);\r\n    transition: .2s;\r\n}\r\n\r\n.messages[_ngcontent-%COMP%]   .chat[_ngcontent-%COMP%]   .control-message[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover {\r\n    color: #27367f;\r\n}\r\n\r\n@media (max-width: 875px) {\r\n    .messages[_ngcontent-%COMP%]   .heads[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n        width: 3rem;\r\n    }\r\n    .messages[_ngcontent-%COMP%]   .heads[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n        font-size: 12px;\r\n        position: relative;\r\n        left: -.15rem;\r\n    }\r\n    .messages[_ngcontent-%COMP%]   .chat[_ngcontent-%COMP%]   .top-header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n        width: 3rem;\r\n    }\r\n    .messages[_ngcontent-%COMP%]   .chat[_ngcontent-%COMP%]   .top-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n        font-size: 16px;\r\n    }\r\n    .messages[_ngcontent-%COMP%]   .chat[_ngcontent-%COMP%]   .chating[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n        font-size: 14px;\r\n        max-width: 85%;\r\n    }\r\n}\r\n\r\n@media (max-width: 575px) {\r\n    .messages[_ngcontent-%COMP%]   .chat[_ngcontent-%COMP%]   .chating[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n        font-size: 12px;\r\n        max-width: 95%;\r\n    }\r\n\r\n    .messages[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n        font-size: 22px;\r\n    }\r\n    \r\n    .messages[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n        font-size: 14px;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVzc2FnZXMvbWVzc2FnZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QseUJBQXlCO0lBQ3pCLGdDQUFnQztJQUNoQyxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSwrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSw4QkFBOEI7QUFDbEM7O0FBRUE7O2tCQUVrQjs7QUFFbEI7SUFDSSxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFVBQVU7SUFDViw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSw4QkFBOEI7SUFDOUIsZUFBZTtJQUNmLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsY0FBYztJQUNkLHdCQUF3QjtJQUN4QixlQUFlO0lBQ2YsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksc0NBQXNDO0FBQzFDOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLHNDQUFzQztBQUMxQzs7QUFFQTs7a0JBRWtCOztBQUVsQjtJQUNJLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gsYUFBYTtJQUNiLGNBQWM7SUFDZCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBOztrQkFFa0I7O0FBRWxCO0lBQ0kseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQix3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsK0JBQStCO0FBQ25DOztBQUVBOztrQkFFa0I7O0FBRWxCO0lBQ0ksYUFBYTtJQUNiLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksVUFBVTtJQUNWLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTs7a0JBRWtCOztBQUVsQjtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsT0FBTztJQUNQLFNBQVM7SUFDVCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksMENBQTBDO0FBQzlDOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGVBQWU7SUFDZixlQUFlO0lBQ2YsOEJBQThCO0lBQzlCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0k7UUFDSSxXQUFXO0lBQ2Y7SUFDQTtRQUNJLGVBQWU7UUFDZixrQkFBa0I7UUFDbEIsYUFBYTtJQUNqQjtJQUNBO1FBQ0ksV0FBVztJQUNmO0lBQ0E7UUFDSSxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxlQUFlO1FBQ2YsY0FBYztJQUNsQjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxlQUFlO1FBQ2YsY0FBYztJQUNsQjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxlQUFlO0lBQ25CO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9tZXNzYWdlcy9tZXNzYWdlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1lc3NhZ2VzIHtcclxuICAgIHBhZGRpbmc6IDIwcHggMi41JTtcclxuICAgIGNvbG9yOiAjYjFiMWI1O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI3MjkzZDtcclxuICAgIGZvbnQtZmFtaWx5OiAnQ2Fpcm8nLCBzYW5zLXNlcmlmO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLm1lc3NhZ2VzIGgzIHtcclxuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC43NSk7XHJcbn1cclxuXHJcbi5tZXNzYWdlcyBzcGFuIHtcclxuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC41KTtcclxufVxyXG5cclxuLyotLS0tLS0tLS0tLS0tLS0tLVxyXG5MZWZ0XHJcbi0tLS0tLS0tLS0tLS0tLS0tKi9cclxuXHJcbi5tZXNzYWdlcyAuaGVhZHMge1xyXG4gICAgbWF4LWhlaWdodDogNjUwcHg7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgd2lkdGg6IDZyZW07XHJcbn1cclxuXHJcbi5tZXNzYWdlcyAuaGVhZHM6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgIHdpZHRoOiA3cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLm1lc3NhZ2VzIC5oZWFkczo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE1MTkxZjtcclxufVxyXG5cclxuLm1lc3NhZ2VzIC5oZWFkcyAuaGVhZCB7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiAuM3M7XHJcbn1cclxuXHJcbi5tZXNzYWdlcyAuaGVhZHMgLmhlYWQ6bGFzdC1jaGlsZCB7XHJcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4ubWVzc2FnZXMgLmhlYWRzIC5oZWFkIGltZyB7XHJcbiAgICB3aWR0aDogNHJlbTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgYm9yZGVyOiAxcHggZGFzaGVkIGJsYWNrO1xyXG4gICAgbWFyZ2luOiAuNXJlbSAwO1xyXG4gICAgdHJhbnNpdGlvbjogLjNzO1xyXG59XHJcblxyXG4ubWVzc2FnZXMgLmhlYWRzIC5oZWFkIGg0IHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuLm1lc3NhZ2VzIC5oZWFkcyAuaGVhZDpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTUxNTIwO1xyXG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjg1KTtcclxufVxyXG5cclxuLm1lc3NhZ2VzIC5oZWFkcyAuaGVhZDpob3ZlciBpbWcge1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC43NSk7XHJcbn1cclxuXHJcbi5tZXNzYWdlcyAuaGVhZHMgLmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTUxNTIwO1xyXG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjg1KTtcclxufVxyXG5cclxuLm1lc3NhZ2VzIC5oZWFkcyAuYWN0aXZlIGltZyB7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjc1KTtcclxufVxyXG5cclxuLyotLS0tLS0tLS0tLS0tLS0tLVxyXG5SaWdodFxyXG4tLS0tLS0tLS0tLS0tLS0tLSovXHJcblxyXG4ubWVzc2FnZXMgLmNoYXQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFlMWUyZjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA2NTBweDtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4ubWVzc2FnZXMgLmNoYXQ6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgIHdpZHRoOiA3cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLm1lc3NhZ2VzIC5jaGF0Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTUxOTFmO1xyXG59XHJcblxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tXHJcblJpZ2h0LVRvcFxyXG4tLS0tLS0tLS0tLS0tLS0tLSovXHJcblxyXG4ubWVzc2FnZXMgLmNoYXQgLnRvcC1oZWFkZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE1MTUyMDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDc1cHg7XHJcbn1cclxuXHJcbi5tZXNzYWdlcyAuY2hhdCAudG9wLWhlYWRlciBpbWcge1xyXG4gICAgd2lkdGg6IDRyZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBib3JkZXI6IDFweCBkYXNoZWQgYmxhY2s7XHJcbn1cclxuXHJcbi5tZXNzYWdlcyAuY2hhdCAudG9wLWhlYWRlciBoMyB7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAuODUpO1xyXG59XHJcblxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tXHJcblJpZ2h0LU1pZGRsZVxyXG4tLS0tLS0tLS0tLS0tLS0tLSovXHJcblxyXG4ubWVzc2FnZXMgLmNoYXQgLmNoYXRpbmcge1xyXG4gICAgaGVpZ2h0OiA1MjVweDtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbn1cclxuXHJcbi5tZXNzYWdlcyAuY2hhdCAuY2hhdGluZyBkaXYge1xyXG4gICAgbWFyZ2luOiAxcmVtIDA7XHJcbn1cclxuXHJcbi5tZXNzYWdlcyAuY2hhdCAuY2hhdGluZyBkaXYgcCB7XHJcbiAgICBtYXgtd2lkdGg6IDc1JTtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4ubWVzc2FnZXMgLmNoYXQgLmNoYXRpbmcgLmZyb20ge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuLm1lc3NhZ2VzIC5jaGF0IC5jaGF0aW5nIC5mcm9tIHAge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U5ZTZlNjtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLm1lc3NhZ2VzIC5jaGF0IC5jaGF0aW5nIC50byB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuLm1lc3NhZ2VzIC5jaGF0IC5jaGF0aW5nIC50byBwIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNzM2N2Y7XHJcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAuNyk7XHJcbn1cclxuXHJcbi5tZXNzYWdlcyAuY2hhdCAuY2hhdGluZzo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgd2lkdGg6IDlweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4ubWVzc2FnZXMgLmNoYXQgLmNoYXRpbmc6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxNTE5MWY7XHJcbn1cclxuXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS1cclxuUmlnaHQtQm90dG9tXHJcbi0tLS0tLS0tLS0tLS0tLS0tKi9cclxuXHJcbi5tZXNzYWdlcyAuY2hhdCAuY29udHJvbC1tZXNzYWdlIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE1MTUyMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGhlaWdodDogNTBweDtcclxufVxyXG5cclxuLm1lc3NhZ2VzIC5jaGF0IC5jb250cm9sLW1lc3NhZ2UgaW5wdXQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAuODUpO1xyXG59XHJcblxyXG4ubWVzc2FnZXMgLmNoYXQgLmNvbnRyb2wtbWVzc2FnZSBpIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIHBhZGRpbmc6IDAgMXJlbTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC45KTtcclxuICAgIHRyYW5zaXRpb246IC4ycztcclxufVxyXG5cclxuLm1lc3NhZ2VzIC5jaGF0IC5jb250cm9sLW1lc3NhZ2UgaTpob3ZlciB7XHJcbiAgICBjb2xvcjogIzI3MzY3ZjtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDg3NXB4KSB7XHJcbiAgICAubWVzc2FnZXMgLmhlYWRzIC5oZWFkIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDNyZW07XHJcbiAgICB9XHJcbiAgICAubWVzc2FnZXMgLmhlYWRzIC5oZWFkIGg0IHtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGxlZnQ6IC0uMTVyZW07XHJcbiAgICB9XHJcbiAgICAubWVzc2FnZXMgLmNoYXQgLnRvcC1oZWFkZXIgaW1nIHtcclxuICAgICAgICB3aWR0aDogM3JlbTtcclxuICAgIH1cclxuICAgIC5tZXNzYWdlcyAuY2hhdCAudG9wLWhlYWRlciBoMyB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgfVxyXG4gICAgLm1lc3NhZ2VzIC5jaGF0IC5jaGF0aW5nIGRpdiBwIHtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgbWF4LXdpZHRoOiA4NSU7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1NzVweCkge1xyXG4gICAgLm1lc3NhZ2VzIC5jaGF0IC5jaGF0aW5nIGRpdiBwIHtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgbWF4LXdpZHRoOiA5NSU7XHJcbiAgICB9XHJcblxyXG4gICAgLm1lc3NhZ2VzIGgzIHtcclxuICAgICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5tZXNzYWdlcyBzcGFuIHtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB9XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MessagesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-messages',
                templateUrl: './messages.component.html',
                styleUrls: ['./messages.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "KPFu":
/*!**************************************************!*\
  !*** ./src/app/completed/completed.component.ts ***!
  \**************************************************/
/*! exports provided: CompletedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompletedComponent", function() { return CompletedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class CompletedComponent {
    constructor() { }
    ngOnInit() {
    }
}
CompletedComponent.ɵfac = function CompletedComponent_Factory(t) { return new (t || CompletedComponent)(); };
CompletedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CompletedComponent, selectors: [["app-completed"]], decls: 84, vars: 0, consts: [[1, "completed-orders"], [1, "top-header"], ["action", ""], ["type", "text", "placeholder", "search by ID"], [1, "w-100", "table", 2, "overflow-x", "scroll"], [1, "m-auto", 2, "width", "97%"], ["routerLink", "/order-details/4", 1, "btn", "btn-primary", "view"], ["routerLink", "/order-details", 1, "btn", "btn-primary", "view"], [1, "table-footer"], [2, "text-transform", "capitalize"], [1, "table-pages"], [1, "prev", "disable"], [1, "page"], [1, "next"]], template: function CompletedComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Completed Orders");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "table", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Order");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Date&Time");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Customer Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Total Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Payment Method");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "231541");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "06/01/22 04:11");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Ahmed Abdallah");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "230$");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Cash");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "more details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "222541");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "06/04/22 14:00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Aida Mohamed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "520$");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Credit Card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "more details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "230042");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "15/01/22 00:25");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Omar Ibrahim");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "20$");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Cash");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "more details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "page 1 from 10 pages");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "prev");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: [".completed-orders[_ngcontent-%COMP%] {\r\n    padding: 20px 2.5%;\r\n    color: #b1b1b5;\r\n    background-color: #27293d;\r\n    font-family: 'Cairo', sans-serif;\r\n}\r\n\r\n.completed-orders[_ngcontent-%COMP%]   .top-header[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    padding-bottom: 15px;\r\n}\r\n\r\n.completed-orders[_ngcontent-%COMP%]   .top-header[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n    border: 1px solid #424351;\r\n    font-weight: 400;\r\n    font-size: 0.875rem;\r\n    background-color: #2b2e4c;\r\n    padding: 5px 10px;\r\n    color: rgba(255, 255, 255, .75);\r\n    transition: all .2s;\r\n}\r\n\r\n.completed-orders[_ngcontent-%COMP%]   .top-header[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\r\n    color: rgba(255, 255, 255, .5);\r\n}\r\n\r\n.completed-orders[_ngcontent-%COMP%]   .top-header[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\r\n    outline: none;\r\n    border-color: #0d6efd;\r\n}\r\n\r\n.completed-orders[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n    height: 8px;\r\n    background-color: transparent;\r\n}\r\n\r\n.completed-orders[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n    background-color: #15191f;\r\n}\r\n\r\n.completed-orders[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\r\n    min-width: 650px;\r\n}\r\n\r\n.completed-orders[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .completed-orders[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n    padding: 15px 0;\r\n    text-transform: capitalize;\r\n}\r\n\r\n.completed-orders[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n    color: rgba(255, 255, 255, .85);\r\n    font-weight: 400;\r\n    border-bottom: 1px;\r\n}\r\n\r\n.completed-orders[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n    border-bottom: 1px solid #424351;\r\n    color: rgba(255, 255, 255, .75);\r\n}\r\n\r\n.completed-orders[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    font-size: 18px;\r\n    margin-left: .7rem;\r\n    cursor: pointer;\r\n    transition: transform .1s;\r\n}\r\n\r\n.completed-orders[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover {\r\n    transform: scale(1.2);\r\n}\r\n\r\n.completed-orders[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .view[_ngcontent-%COMP%] {\r\n    font-size: 14px;\r\n    text-transform: capitalize;\r\n}\r\n\r\n.completed-orders[_ngcontent-%COMP%]   .table-footer[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    padding: 1rem 0;\r\n    font-size: 14px;\r\n}\r\n\r\n.completed-orders[_ngcontent-%COMP%]   .table-footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n    list-style: none;\r\n    margin: 0;\r\n}\r\n\r\n.completed-orders[_ngcontent-%COMP%]   .table-footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    padding: 3px 7px;\r\n    margin: 0 1px;\r\n    border: 1px solid #424351;\r\n    font-weight: 400;\r\n    background-color: #2b2e4c;\r\n    cursor: pointer;\r\n    color: white;\r\n    text-transform: capitalize;\r\n}\r\n\r\n.completed-orders[_ngcontent-%COMP%]   .table-footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .page[_ngcontent-%COMP%] {\r\n    background-color: #0d6efd;\r\n    border: 1px solid #dee2e6;\r\n}\r\n\r\n.completed-orders[_ngcontent-%COMP%]   .table-footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .prev[_ngcontent-%COMP%] {\r\n    background-color: #1a1f26;\r\n    border: 1px solid #dee2e6;\r\n    border-radius: 3px 0 0 3px;\r\n}\r\n\r\n.completed-orders[_ngcontent-%COMP%]   .table-footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .next[_ngcontent-%COMP%] {\r\n    background-color: #1a1f26;\r\n    border: 1px solid #dee2e6;\r\n    border-radius: 0 3px 3px 0;\r\n}\r\n\r\n.completed-orders[_ngcontent-%COMP%]   .table-footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .disable[_ngcontent-%COMP%] {\r\n    cursor: default;\r\n    background-color: grey;\r\n}\r\n\r\n@media (max-width:650px) {\r\n    .completed-orders[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\r\n        font-size: 14px;\r\n    }\r\n    .completed-orders[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\r\n        min-width: 625px;\r\n    }\r\n    .completed-orders[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .completed-orders[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n        padding: 10px 0px;\r\n    }\r\n    .completed-orders[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .completed-orders[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n        font-size: 14px;\r\n        font-weight: 400;\r\n    }\r\n    .completed-orders[_ngcontent-%COMP%]   .top-header[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n        font-size: 14px;\r\n        padding: 5px 5px;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcGxldGVkL2NvbXBsZXRlZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCx5QkFBeUI7SUFDekIsZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw4QkFBOEI7SUFDOUIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQiwrQkFBK0I7SUFDL0IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksK0JBQStCO0lBQy9CLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxnQ0FBZ0M7SUFDaEMsK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsOEJBQThCO0lBQzlCLGVBQWU7SUFDZixlQUFlO0FBQ25COztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZixZQUFZO0lBQ1osMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLHlCQUF5QjtJQUN6QiwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0k7UUFDSSxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLGlCQUFpQjtJQUNyQjtJQUNBO1FBQ0ksZUFBZTtRQUNmLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksZUFBZTtRQUNmLGdCQUFnQjtJQUNwQjtBQUNKOztBQUVBOzs7Ozs7Ozs7OztDQVdDIiwiZmlsZSI6InNyYy9hcHAvY29tcGxldGVkL2NvbXBsZXRlZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbXBsZXRlZC1vcmRlcnMge1xyXG4gICAgcGFkZGluZzogMjBweCAyLjUlO1xyXG4gICAgY29sb3I6ICNiMWIxYjU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjcyOTNkO1xyXG4gICAgZm9udC1mYW1pbHk6ICdDYWlybycsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5jb21wbGV0ZWQtb3JkZXJzIC50b3AtaGVhZGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDE1cHg7XHJcbn1cclxuXHJcbi5jb21wbGV0ZWQtb3JkZXJzIC50b3AtaGVhZGVyIGlucHV0IHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM0MjQzNTE7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyYjJlNGM7XHJcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcclxuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC43NSk7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjJzO1xyXG59XHJcblxyXG4uY29tcGxldGVkLW9yZGVycyAudG9wLWhlYWRlciBpbnB1dDo6cGxhY2Vob2xkZXIge1xyXG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjUpO1xyXG59XHJcblxyXG4uY29tcGxldGVkLW9yZGVycyAudG9wLWhlYWRlciBpbnB1dDpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjMGQ2ZWZkO1xyXG59XHJcblxyXG4uY29tcGxldGVkLW9yZGVycyAudGFibGU6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgIGhlaWdodDogOHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5jb21wbGV0ZWQtb3JkZXJzIC50YWJsZTo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE1MTkxZjtcclxufVxyXG5cclxuLmNvbXBsZXRlZC1vcmRlcnMgdGFibGUge1xyXG4gICAgbWluLXdpZHRoOiA2NTBweDtcclxufVxyXG5cclxuLmNvbXBsZXRlZC1vcmRlcnMgdGFibGUgdGgsIC5jb21wbGV0ZWQtb3JkZXJzIHRhYmxlIHRkIHtcclxuICAgIHBhZGRpbmc6IDE1cHggMDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG59XHJcblxyXG4uY29tcGxldGVkLW9yZGVycyB0YWJsZSB0aCB7XHJcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAuODUpO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweDtcclxufVxyXG5cclxuLmNvbXBsZXRlZC1vcmRlcnMgdGFibGUgdGQge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM0MjQzNTE7XHJcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAuNzUpO1xyXG59XHJcblxyXG4uY29tcGxldGVkLW9yZGVycyB0YWJsZSBhIGkge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IC43cmVtO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4xcztcclxufVxyXG5cclxuLmNvbXBsZXRlZC1vcmRlcnMgdGFibGUgYSBpOmhvdmVyIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcclxufVxyXG5cclxuLmNvbXBsZXRlZC1vcmRlcnMgdGFibGUgLnZpZXcge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbn1cclxuXHJcbi5jb21wbGV0ZWQtb3JkZXJzIC50YWJsZS1mb290ZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBwYWRkaW5nOiAxcmVtIDA7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbi5jb21wbGV0ZWQtb3JkZXJzIC50YWJsZS1mb290ZXIgdWwge1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxuLmNvbXBsZXRlZC1vcmRlcnMgLnRhYmxlLWZvb3RlciB1bCBsaSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwYWRkaW5nOiAzcHggN3B4O1xyXG4gICAgbWFyZ2luOiAwIDFweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM0MjQzNTE7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJiMmU0YztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG59XHJcblxyXG4uY29tcGxldGVkLW9yZGVycyAudGFibGUtZm9vdGVyIHVsIC5wYWdlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwZDZlZmQ7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGVlMmU2O1xyXG59XHJcblxyXG4uY29tcGxldGVkLW9yZGVycyAudGFibGUtZm9vdGVyIHVsIC5wcmV2IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxYTFmMjY7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGVlMmU2O1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4IDAgMCAzcHg7XHJcbn1cclxuXHJcbi5jb21wbGV0ZWQtb3JkZXJzIC50YWJsZS1mb290ZXIgdWwgLm5leHQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFhMWYyNjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZWUyZTY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwIDNweCAzcHggMDtcclxufVxyXG5cclxuLmNvbXBsZXRlZC1vcmRlcnMgLnRhYmxlLWZvb3RlciB1bCAuZGlzYWJsZSB7XHJcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDo2NTBweCkge1xyXG4gICAgLmNvbXBsZXRlZC1vcmRlcnMgaDYge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIH1cclxuICAgIC5jb21wbGV0ZWQtb3JkZXJzIHRhYmxlIHtcclxuICAgICAgICBtaW4td2lkdGg6IDYyNXB4O1xyXG4gICAgfVxyXG4gICAgLmNvbXBsZXRlZC1vcmRlcnMgdGFibGUgdGgsIC5jb21wbGV0ZWQtb3JkZXJzIHRhYmxlIHRkIHtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4IDBweDtcclxuICAgIH1cclxuICAgIC5jb21wbGV0ZWQtb3JkZXJzIHRhYmxlIHRoLCAuY29tcGxldGVkLW9yZGVycyB0YWJsZSB0ZCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICB9XHJcbiAgICAuY29tcGxldGVkLW9yZGVycyAudG9wLWhlYWRlciBpbnB1dCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDVweCA1cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qXHJcbiNkZWUyZTZcclxuI2ZmYzEwN1xyXG5mb250LWZhbWlseTogJ0FsZWdyZXlhJywgc2VyaWY7XHJcbmZvbnQtZmFtaWx5OiAnQWxlZ3JleWEgU2FucyBTQycsIHNhbnMtc2VyaWY7XHJcbmZvbnQtZmFtaWx5OiAnQ2Fpcm8nLCBzYW5zLXNlcmlmO1xyXG5mb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbmJhY2tncm91bmQtY29sb3I6ICMzYTNmNTE7XHJcbmJhY2tncm91bmQtY29sb3I6ICMxZTFlMmY7XHJcbiMyNzI5M2RcclxudGV4dCAjYjFiMWI1XHJcbiovIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CompletedComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-completed',
                templateUrl: './completed.component.html',
                styleUrls: ['./completed.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "N5J3":
/*!********************************************!*\
  !*** ./src/app/offers/offers.component.ts ***!
  \********************************************/
/*! exports provided: OffersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OffersComponent", function() { return OffersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class OffersComponent {
    constructor() { }
    ngOnInit() {
    }
    deleteOffer() {
    }
}
OffersComponent.ɵfac = function OffersComponent_Factory(t) { return new (t || OffersComponent)(); };
OffersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OffersComponent, selectors: [["app-offers"]], decls: 66, vars: 0, consts: [[1, "offers", "container-fluid", 2, "width", "100%"], [1, "row"], [1, "col-12", "py-3"], [1, "col-lg-8", "py-2", "col-md-12"], ["id", "offers", 1, "form-control"], ["disabled", "", "selected", ""], [1, "col-lg-4", "py-2", "col-md-8", "d-flex"], ["type", "number", "placeholder", "Percentage", 1, "form-control"], [1, "col-lg-12", "py-2", "col-md-4"], ["type", "button", 1, "btn", "btn-primary", "form-control"], [1, "top-header"], ["action", ""], ["type", "text", "placeholder", "Search"], [1, "w-100", "table", 2, "overflow-x", "scroll"], [1, "m-auto", 2, "width", "97%"], ["type", "hidden", "value", ""], [1, "fa", "fa-trash", "text-danger", 3, "click"]], template: function OffersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Add offer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "select", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Product Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Novalgin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Panadol");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Tegitall");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Complete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Products Table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "form", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "table", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Order");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "id");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "actual Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Percentage");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "new price");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "data&time");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "21531");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Panadol");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "50");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "15%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "42,50");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "06/01/22 04:11");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "form", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OffersComponent_Template_i_click_65_listener() { return ctx.deleteOffer(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".offers[_ngcontent-%COMP%] {\r\n    padding: 20px 2.5%;\r\n    background-color: #27293d;\r\n    font-family: 'Cairo', sans-serif;\r\n    overflow: hidden;\r\n}\r\n\r\n.offers[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n    text-transform: capitalize;\r\n    color: rgba(255, 255, 255, .75);\r\n    font-size: 22px;\r\n}\r\n\r\n.offers[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .offers[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\r\n    border: 1px solid #424351;\r\n    background-color: #2b2e4c;\r\n    padding: 5px 10px;\r\n    color: rgba(255, 255, 255, .85);\r\n    transition: all .2s;\r\n}\r\n\r\n.offers[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\r\n    color: rgba(255, 255, 255, .75);\r\n}\r\n\r\n.offers[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .offers[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\r\n    outline: none;\r\n    box-shadow: none;\r\n}\r\n\r\n.offers[_ngcontent-%COMP%]   .top-header[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    padding-bottom: 15px;\r\n}\r\n\r\n.offers[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\r\n    color: rgba(255, 255, 255, .75);\r\n}\r\n\r\n.offers[_ngcontent-%COMP%]   .top-header[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n    border: 1px solid #424351;\r\n    font-weight: 400;\r\n    font-size: 0.875rem;\r\n    background-color: #2b2e4c;\r\n    padding: 5px 10px;\r\n    color: rgba(255, 255, 255, .75);\r\n    transition: all .2s;\r\n}\r\n\r\n.offers[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n    height: 8px;\r\n    background-color: transparent;\r\n}\r\n\r\n.offers[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n    background-color: #15191f;\r\n}\r\n\r\n.offers[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\r\n    min-width: 625px;\r\n}\r\n\r\n.offers[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .offers[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n    padding: 15px 0px;\r\n    text-transform: capitalize;\r\n}\r\n\r\n.offers[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n    color: rgba(255, 255, 255, .85);\r\n    font-weight: 400;\r\n    border-bottom: 1px;\r\n}\r\n\r\n.offers[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n    border-bottom: 1px solid #424351;\r\n    color: rgba(255, 255, 255, .75);\r\n}\r\n\r\n.offers[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    font-size: 18px;\r\n    margin-left: .7rem;\r\n    cursor: pointer;\r\n    transition: transform .1s;\r\n}\r\n\r\n.offers[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover {\r\n    transform: scale(1.2);\r\n}\r\n\r\n@media (max-width:650px) {\r\n    .offers[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .offers[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], .offers[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n        font-size: 14px;\r\n    }\r\n    .offers[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n        font-size: 16px;\r\n    }\r\n    .offers[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\r\n        font-size: 14px;\r\n    }\r\n    .offers[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\r\n        min-width: 500px;\r\n    }\r\n    .offers[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .offers[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n        padding: 10px 0px;\r\n    }\r\n    .offers[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .offers[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n        font-size: 14px;\r\n        font-weight: 400;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb2ZmZXJzL29mZmVycy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixnQ0FBZ0M7SUFDaEMsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksMEJBQTBCO0lBQzFCLCtCQUErQjtJQUMvQixlQUFlO0FBQ25COztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLHlCQUF5QjtJQUN6QixpQkFBaUI7SUFDakIsK0JBQStCO0lBQy9CLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDhCQUE4QjtJQUM5QixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSwrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsaUJBQWlCO0lBQ2pCLCtCQUErQjtJQUMvQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLCtCQUErQjtJQUMvQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZ0NBQWdDO0lBQ2hDLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJO1FBQ0ksZUFBZTtJQUNuQjtJQUNBO1FBQ0ksZUFBZTtJQUNuQjtJQUNBO1FBQ0ksZUFBZTtJQUNuQjtJQUNBO1FBQ0ksZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSxpQkFBaUI7SUFDckI7SUFDQTtRQUNJLGVBQWU7UUFDZixnQkFBZ0I7SUFDcEI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL29mZmVycy9vZmZlcnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5vZmZlcnMge1xyXG4gICAgcGFkZGluZzogMjBweCAyLjUlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI3MjkzZDtcclxuICAgIGZvbnQtZmFtaWx5OiAnQ2Fpcm8nLCBzYW5zLXNlcmlmO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLm9mZmVycyBoNCB7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC43NSk7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbn1cclxuXHJcbi5vZmZlcnMgaW5wdXQsIC5vZmZlcnMgc2VsZWN0IHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM0MjQzNTE7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmIyZTRjO1xyXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAuODUpO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIC4ycztcclxufVxyXG5cclxuLm9mZmVycyBpbnB1dDo6cGxhY2Vob2xkZXIge1xyXG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjc1KTtcclxufVxyXG5cclxuLm9mZmVycyBpbnB1dDpmb2N1cywgLm9mZmVycyBzZWxlY3Q6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuXHJcbi5vZmZlcnMgLnRvcC1oZWFkZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcclxufVxyXG5cclxuLm9mZmVycyBoNiB7XHJcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAuNzUpO1xyXG59XHJcblxyXG4ub2ZmZXJzIC50b3AtaGVhZGVyIGlucHV0IHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM0MjQzNTE7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyYjJlNGM7XHJcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcclxuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC43NSk7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjJzO1xyXG59XHJcblxyXG4ub2ZmZXJzIC50YWJsZTo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgaGVpZ2h0OiA4cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLm9mZmVycyAudGFibGU6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxNTE5MWY7XHJcbn1cclxuXHJcbi5vZmZlcnMgdGFibGUge1xyXG4gICAgbWluLXdpZHRoOiA2MjVweDtcclxufVxyXG5cclxuLm9mZmVycyB0YWJsZSB0aCwgLm9mZmVycyB0YWJsZSB0ZCB7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDBweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG59XHJcblxyXG4ub2ZmZXJzIHRhYmxlIHRoIHtcclxuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC44NSk7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4O1xyXG59XHJcblxyXG4ub2ZmZXJzIHRhYmxlIHRkIHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNDI0MzUxO1xyXG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjc1KTtcclxufVxyXG5cclxuLm9mZmVycyB0YWJsZSBpIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAuN3JlbTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuMXM7XHJcbn1cclxuXHJcbi5vZmZlcnMgdGFibGUgaTpob3ZlciB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOjY1MHB4KSB7XHJcbiAgICAub2ZmZXJzIGlucHV0LCAub2ZmZXJzIHNlbGVjdCwgLm9mZmVycyBidXR0b24ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIH1cclxuICAgIC5vZmZlcnMgaDQge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIH1cclxuICAgIC5vZmZlcnMgaDYge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIH1cclxuICAgIC5vZmZlcnMgdGFibGUge1xyXG4gICAgICAgIG1pbi13aWR0aDogNTAwcHg7XHJcbiAgICB9XHJcbiAgICAub2ZmZXJzIHRhYmxlIHRoLCAub2ZmZXJzIHRhYmxlIHRkIHtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4IDBweDtcclxuICAgIH1cclxuICAgIC5vZmZlcnMgdGFibGUgdGgsIC5vZmZlcnMgdGFibGUgdGQge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgfVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OffersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-offers',
                templateUrl: './offers.component.html',
                styleUrls: ['./offers.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "OGzB":
/*!**********************************************************!*\
  !*** ./src/app/order-details/order-details.component.ts ***!
  \**********************************************************/
/*! exports provided: OrderDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderDetailsComponent", function() { return OrderDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class OrderDetailsComponent {
    constructor() { }
    ngOnInit() {
    }
}
OrderDetailsComponent.ɵfac = function OrderDetailsComponent_Factory(t) { return new (t || OrderDetailsComponent)(); };
OrderDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OrderDetailsComponent, selectors: [["app-order-details"]], decls: 98, vars: 0, consts: [[1, "order-details"], ["action", "", 1, "w-100", "mb-3"], [1, "row"], [1, "col-md-9", "my-2"], ["type", "text", "placeholder", "search by ID", 1, "form-control"], [1, "col-md-3", "my-2"], ["type", "submit", 1, "btn", "btn-primary", "form-control"], [1, "border-top", "w-100", 2, "border-color", "white"], [1, "results", "py-3"], [1, "details"], [1, "col-12", "py-2"], [1, "col-12"], [1, "w-100", "table", 2, "overflow-x", "scroll"], [1, "m-auto", 2, "width", "97%"], [1, "col-md-6", 2, "display", "flex", "align-items", "center"], [1, "info"], [1, "col-md-6", "text-center", "py-2"], ["frameborder", "0", "scrolling", "no", "marginheight", "0", "marginwidth", "0", "src", "https://maps.google.com/maps?q=29.883779,31.306377&hl=eg&z=15&output=embed", 1, "w-100", 2, "height", "200px"], ["action", "", 1, "w-100", "d-flex", "py-2"], ["type", "button", 1, "btn", "btn-danger", "w-50", "mr-1"], ["type", "button", 1, "btn", "btn-success", "w-50", "ml-1"]], template: function OrderDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "search on orders");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "order details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "table", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Order");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "product name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Quantity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Ava. In stock");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "total price");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Revo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "74");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Parastmol");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "50");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "15");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Novalgin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "20");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "customer details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, " Khaled Ahmed ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Phone Number:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, " 01140243176 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Adress:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, " 17 Rd No. 4, Wadi Hof, Helwan, Cairo, Egypt ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Date&Time:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, " 06/01/22 04:11 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Payment method:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, " Cash ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "iframe", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "form", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Reject");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Approve");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".order-details[_ngcontent-%COMP%] {\r\n    padding: 20px 2.5%;\r\n    color: #b1b1b5;\r\n    background-color: #27293d;\r\n    font-family: 'Cairo', sans-serif;\r\n    overflow: hidden;\r\n}\r\n\r\n.order-details[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\r\n    font-size: 16px;\r\n    color: rgba(255, 255, 255, .75);\r\n    text-transform: capitalize;\r\n}\r\n\r\n.order-details[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n    background-color: #2b2e4c;\r\n    border: 1px solid #424351;\r\n    font-weight: 400;\r\n    padding: 5px 10px;\r\n    color: rgba(255, 255, 255, .65);\r\n    transition: all .2s;\r\n}\r\n\r\n.order-details[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\r\n    color: rgba(255, 255, 255, .5);\r\n}\r\n\r\n.order-details[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\r\n    outline: none;\r\n    border-color: #424351;\r\n    box-shadow: none;\r\n}\r\n\r\n.order-details[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    text-transform: capitalize;\r\n}\r\n\r\n.order-details[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n    height: 8px;\r\n    background-color: transparent;\r\n}\r\n\r\n.order-details[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n    background-color: #15191f;\r\n}\r\n\r\n.order-details[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\r\n    min-width: 650px;\r\n}\r\n\r\n.order-details[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .order-details[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n    padding: 15px 0;\r\n    text-transform: capitalize;\r\n}\r\n\r\n.order-details[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n    color: rgba(255, 255, 255, .85);\r\n    font-weight: 400;\r\n    border-bottom: 1px;\r\n}\r\n\r\n.order-details[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n    border-bottom: 1px solid #424351;\r\n    color: rgba(255, 255, 255, .75);\r\n}\r\n\r\n.order-details[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\r\n    text-transform: capitalize;\r\n    font-size: 16px;\r\n    color: rgba(255, 255, 255, .75);\r\n}\r\n\r\n.order-details[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\r\n    font-size: 16px;\r\n    color: white;\r\n}\r\n\r\n.order-details[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n    color: rgba(255, 255, 255, .75);\r\n}\r\n\r\n@media (max-width:700px) {\r\n    .order-details[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\r\n        font-size: 18px;\r\n        color: white;\r\n        text-transform: capitalize;\r\n    }\r\n    .order-details[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\r\n        text-transform: capitalize;\r\n        font-size: 16px;\r\n        color: white;\r\n    }\r\n    \r\n    .order-details[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\r\n        font-size: 14px;\r\n        color: white;\r\n    }\r\n    \r\n    .order-details[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n        font-size: 14px;\r\n        color: rgba(255, 255, 255, .75);\r\n    }\r\n    .order-details[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\r\n        font-size: 14px;\r\n        min-width: 500px;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3JkZXItZGV0YWlscy9vcmRlci1kZXRhaWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsY0FBYztJQUNkLHlCQUF5QjtJQUN6QixnQ0FBZ0M7SUFDaEMsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLCtCQUErQjtJQUMvQiwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsK0JBQStCO0lBQy9CLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksV0FBVztJQUNYLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGVBQWU7SUFDZiwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSwrQkFBK0I7SUFDL0IsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGdDQUFnQztJQUNoQywrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSwwQkFBMEI7SUFDMUIsZUFBZTtJQUNmLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLGVBQWU7SUFDZixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksK0JBQStCO0FBQ25DOztBQUVBO0lBQ0k7UUFDSSxlQUFlO1FBQ2YsWUFBWTtRQUNaLDBCQUEwQjtJQUM5QjtJQUNBO1FBQ0ksMEJBQTBCO1FBQzFCLGVBQWU7UUFDZixZQUFZO0lBQ2hCOztJQUVBO1FBQ0ksZUFBZTtRQUNmLFlBQVk7SUFDaEI7O0lBRUE7UUFDSSxlQUFlO1FBQ2YsK0JBQStCO0lBQ25DO0lBQ0E7UUFDSSxlQUFlO1FBQ2YsZ0JBQWdCO0lBQ3BCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9vcmRlci1kZXRhaWxzL29yZGVyLWRldGFpbHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5vcmRlci1kZXRhaWxzIHtcclxuICAgIHBhZGRpbmc6IDIwcHggMi41JTtcclxuICAgIGNvbG9yOiAjYjFiMWI1O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI3MjkzZDtcclxuICAgIGZvbnQtZmFtaWx5OiAnQ2Fpcm8nLCBzYW5zLXNlcmlmO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLm9yZGVyLWRldGFpbHMgaDUge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjc1KTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG59XHJcblxyXG4ub3JkZXItZGV0YWlscyBmb3JtIGlucHV0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyYjJlNGM7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNDI0MzUxO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjY1KTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAuMnM7XHJcbn1cclxuXHJcbi5vcmRlci1kZXRhaWxzIGZvcm0gaW5wdXQ6OnBsYWNlaG9sZGVyIHtcclxuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC41KTtcclxufVxyXG5cclxuLm9yZGVyLWRldGFpbHMgZm9ybSBpbnB1dDpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjNDI0MzUxO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG5cclxuLm9yZGVyLWRldGFpbHMgZm9ybSBidXR0b24ge1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbn1cclxuXHJcbi5vcmRlci1kZXRhaWxzIC50YWJsZTo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgaGVpZ2h0OiA4cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLm9yZGVyLWRldGFpbHMgLnRhYmxlOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTUxOTFmO1xyXG59XHJcblxyXG4ub3JkZXItZGV0YWlscyB0YWJsZSB7XHJcbiAgICBtaW4td2lkdGg6IDY1MHB4O1xyXG59XHJcblxyXG4ub3JkZXItZGV0YWlscyB0YWJsZSB0aCwgLm9yZGVyLWRldGFpbHMgdGFibGUgdGQge1xyXG4gICAgcGFkZGluZzogMTVweCAwO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbn1cclxuXHJcbi5vcmRlci1kZXRhaWxzIHRhYmxlIHRoIHtcclxuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC44NSk7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4O1xyXG59XHJcblxyXG4ub3JkZXItZGV0YWlscyB0YWJsZSB0ZCB7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzQyNDM1MTtcclxuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC43NSk7XHJcbn1cclxuXHJcbi5vcmRlci1kZXRhaWxzIC5kZXRhaWxzIGg2IHtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjc1KTtcclxufVxyXG5cclxuLm9yZGVyLWRldGFpbHMgLmRldGFpbHMgLmluZm8ge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4ub3JkZXItZGV0YWlscyAuZGV0YWlscyAuaW5mbyBsYWJlbCB7XHJcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAuNzUpO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDo3MDBweCkge1xyXG4gICAgLm9yZGVyLWRldGFpbHMgaDUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICB9XHJcbiAgICAub3JkZXItZGV0YWlscyAuZGV0YWlscyBoNiB7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLm9yZGVyLWRldGFpbHMgLmRldGFpbHMgLmluZm8ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5vcmRlci1kZXRhaWxzIC5kZXRhaWxzIC5pbmZvIGxhYmVsIHtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjc1KTtcclxuICAgIH1cclxuICAgIC5vcmRlci1kZXRhaWxzIHRhYmxlIHtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgbWluLXdpZHRoOiA1MDBweDtcclxuICAgIH1cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrderDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-order-details',
                templateUrl: './order-details.component.html',
                styleUrls: ['./order-details.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navbar/navbar.component */ "kWWo");
/* harmony import */ var _side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./side-bar/side-bar.component */ "2IJj");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./footer/footer.component */ "fp1T");







function AppComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-navbar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-side-bar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "router-outlet");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-footer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AppComponent {
    constructor(activeRoute) {
        this.activeRoute = activeRoute;
        this.title = 'Pharmacy';
        this.status = false;
    }
    ngOnInit() {
        //this.activeRoute.events.subscribe(this.onUrlChange.bind(this));
    }
    ngAfterContentChecked() {
        if ((this.activeRoute.url === '/') || (this.activeRoute.url === '/products') || (this.activeRoute.url === '/add-product') || (this.activeRoute.url === '/completed-orders') || (this.activeRoute.url === '/pending-orders') || (this.activeRoute.url === '/canceled-orders') || (this.activeRoute.url === '/order-details') || (this.activeRoute.url === '/news') || (this.activeRoute.url === '/offers') || (this.activeRoute.url === '/inbox') || (this.activeRoute.url === '/profile')) {
            this.status = true;
        }
        else {
            this.status = false;
        }
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 2, consts: [[4, "ngIf"], [1, "d-flex", 2, "padding-top", "65px"], [2, "position", "fixed", "top", "65px", "left", "0"], [1, "p-3", "right", 2, "overflow-x", "auto"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AppComponent_div_0_Template, 8, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_div_1_Template, 2, 0, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.status);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.status);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"], _side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_4__["SideBarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"]], styles: [".right[_ngcontent-%COMP%] {\r\n    width: calc(100% - 235px);\r\n    position: relative;\r\n    left: 235px;\r\n    top: 0px;\r\n}\r\n\r\n@media (max-width:650px) {\r\n    .right[_ngcontent-%COMP%] {\r\n        width: calc(100% - 175px);\r\n        left: 175px;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxRQUFRO0FBQ1o7O0FBRUE7SUFDSTtRQUNJLHlCQUF5QjtRQUN6QixXQUFXO0lBQ2Y7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJpZ2h0IHtcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAyMzVweCk7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBsZWZ0OiAyMzVweDtcclxuICAgIHRvcDogMHB4O1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDo2NTBweCkge1xyXG4gICAgLnJpZ2h0IHtcclxuICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gMTc1cHgpO1xyXG4gICAgICAgIGxlZnQ6IDE3NXB4O1xyXG4gICAgfVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "W6KJ":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ProfileComponent {
    constructor() { }
    ngOnInit() {
    }
    showPass() {
        let value = document.getElementById('phPassword').getAttribute('type');
        if (value == "text") {
            document.getElementById('phPassword').setAttribute('type', "password");
        }
        else {
            document.getElementById('phPassword').setAttribute('type', "text");
        }
    }
}
ProfileComponent.ɵfac = function ProfileComponent_Factory(t) { return new (t || ProfileComponent)(); };
ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileComponent, selectors: [["app-profile"]], decls: 60, vars: 0, consts: [[1, "profile", "container-fluid", 2, "width", "100%"], [1, "row"], [1, "col-12", "py-3"], [1, "curtain", "text-center"], [1, "pic"], [1, "cover"], ["action", ""], [1, "form-group"], [1, "d-block", 2, "color", "rgba(255, 255, 255, .5)"], [1, "form-group", "d-flex", "align-items-center"], [2, "width", "15%"], [1, "form-control", "bg-light", "border", 2, "width", "85%"], [1, "form-group", "d-flex", "align-items-center", 2, "position", "relative"], ["type", "password", "name", "", "id", "phPassword", "placeholder", "Password", "value", "Abdo123", 1, "form-control", 2, "width", "85%", "padding-right", "15px"], [1, "showPass", "fa", "fa-eye", 3, "click"], ["type", "number", "name", "", "placeholder", "Phone", "value", "01000615064", 1, "form-control", 2, "width", "85%"], ["type", "number", "name", "", "placeholder", "Phone", "value", "01140243176", 1, "form-control", 2, "width", "85%"], ["type", "number", "name", "", "placeholder", "Phone", "value", "23608616", 1, "form-control", 2, "width", "85%"], [1, "d-flex"], [1, "w-50", "mr-1"], [2, "width", "20%"], ["type", "text", "name", "", "placeholder", "Street", "value", "4", 1, "form-control", 2, "width", "80%"], [1, "w-50", "ml-1"], ["type", "number", "name", "", "placeholder", "House", "value", "17", 1, "form-control", 2, "width", "80%"], ["frameborder", "0", "scrolling", "no", "marginheight", "0", "marginwidth", "0", "src", "https://maps.google.com/maps?q=29.883779,31.306377&hl=eg&z=18&output=embed", 1, "w-100", 2, "height", "300px"], [1, "d-flex", "pt-3"], [1, "btn", "btn-lg", "btn-warning", "form-control", 2, "font-weight", "400"], ["type", "submit", "value", "Confirm Changes", 1, "btn", "btn-lg", "btn-primary", "form-control", 2, "font-weight", "400"]], template: function ProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "El ezaby");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Profile Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "small", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Edit to change your previous data.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "El ezaby");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "E-mail");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "elazaby@examble.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileComponent_Template_i_click_29_listener() { return ctx.showPass(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Phone Number 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Phone Number 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Landline");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Street");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "House");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "iframe", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Get Current Location");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".profile[_ngcontent-%COMP%]   .curtain[_ngcontent-%COMP%] {\r\n    position: relative;\r\n}\r\n\r\n.profile[_ngcontent-%COMP%]   .curtain[_ngcontent-%COMP%]   .pic[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 280px;\r\n    background-image: url('user.jpg');\r\n    background-size: cover;\r\n    background-position: center;\r\n    border-radius: 15px;\r\n}\r\n\r\n.profile[_ngcontent-%COMP%]   .curtain[_ngcontent-%COMP%]   .cover[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    left: 0;\r\n    top: 0;\r\n    background: rgba(0, 0, 0, .6);\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    border-radius: 7px;\r\n}\r\n\r\n.profile[_ngcontent-%COMP%]   .curtain[_ngcontent-%COMP%]   .cover[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n    font-size: 36px;\r\n    font-weight: 600;\r\n    color: #fff;\r\n}\r\n\r\n.profile[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\r\n    background-color: #27293d;\r\n    font-family: 'Cairo', sans-serif;\r\n    overflow: hidden;\r\n    padding: 15px 30px;\r\n    color: rgba(255, 255, 255, .75);\r\n}\r\n\r\n.profile[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    font-size: 24px;\r\n    color: rgba(255, 255, 255, .85);\r\n}\r\n\r\n.profile[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    font-family: 'Cairo', sans-serif;\r\n    font-size: 16px;\r\n    margin-bottom: 0;\r\n    background-color: #22243b !important;\r\n    color: rgba(255, 255, 255, .6);\r\n    border: 1px solid #424351 !important;\r\n}\r\n\r\n.profile[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:not([type=submit]) {\r\n    border: 1px solid #424351;\r\n    background-color: #2b2e4c;\r\n    padding: 5px 10px;\r\n    color: rgba(255, 255, 255, .85);\r\n    transition: all .2s;\r\n}\r\n\r\n.profile[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\r\n    color: rgba(255, 255, 255, .75);\r\n}\r\n\r\n.profile[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .profile[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\r\n    outline: none;\r\n    box-shadow: none;\r\n}\r\n\r\n.profile[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-outer-spin-button, .profile[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-inner-spin-button {\r\n    -webkit-appearance: none;\r\n    margin: 0;\r\n}\r\n\r\n.profile[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[type=number][_ngcontent-%COMP%] {\r\n    -moz-appearance: textfield;\r\n}\r\n\r\n.profile[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .showPass[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 8.5px;\r\n    right: 12px;\r\n    transition: .2s;\r\n    cursor: pointer;\r\n}\r\n\r\n.profile[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .showPass[_ngcontent-%COMP%]:hover {\r\n    color: #09c;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLGlDQUFtRDtJQUNuRCxzQkFBc0I7SUFDdEIsMkJBQTJCO0lBQzNCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLE9BQU87SUFDUCxNQUFNO0lBQ04sNkJBQTZCO0lBQzdCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsV0FBVztBQUNmOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGdDQUFnQztJQUNoQyxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLGVBQWU7SUFDZiwrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSxnQ0FBZ0M7SUFDaEMsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixvQ0FBb0M7SUFDcEMsOEJBQThCO0lBQzlCLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIsaUJBQWlCO0lBQ2pCLCtCQUErQjtJQUMvQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSwrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsV0FBVztJQUNYLGVBQWU7SUFDZixlQUFlO0FBQ25COztBQUVBO0lBQ0ksV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZmlsZSAuY3VydGFpbiB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5wcm9maWxlIC5jdXJ0YWluIC5waWMge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDI4MHB4O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL2Fzc2V0cy9pbWFnZXMvdXNlci5qcGcpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbn1cclxuXHJcbi5wcm9maWxlIC5jdXJ0YWluIC5jb3ZlciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIC42KTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XHJcbn1cclxuXHJcbi5wcm9maWxlIC5jdXJ0YWluIC5jb3ZlciBoMiB7XHJcbiAgICBmb250LXNpemU6IDM2cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5wcm9maWxlIGZvcm0ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI3MjkzZDtcclxuICAgIGZvbnQtZmFtaWx5OiAnQ2Fpcm8nLCBzYW5zLXNlcmlmO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHBhZGRpbmc6IDE1cHggMzBweDtcclxuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC43NSk7XHJcbn1cclxuXHJcbi5wcm9maWxlIGZvcm0gc3BhbiB7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAuODUpO1xyXG59XHJcblxyXG4ucHJvZmlsZSBmb3JtIHAge1xyXG4gICAgZm9udC1mYW1pbHk6ICdDYWlybycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjQzYiAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjYpO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzQyNDM1MSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucHJvZmlsZSBpbnB1dDpub3QoW3R5cGU9c3VibWl0XSkge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzQyNDM1MTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyYjJlNGM7XHJcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcclxuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC44NSk7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjJzO1xyXG59XHJcblxyXG4ucHJvZmlsZSBpbnB1dDo6cGxhY2Vob2xkZXIge1xyXG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjc1KTtcclxufVxyXG5cclxuLnByb2ZpbGUgaW5wdXQ6Zm9jdXMsIC5wcm9maWxlIGlucHV0OmZvY3VzIHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcblxyXG4ucHJvZmlsZSBmb3JtIGlucHV0Ojotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uLCAucHJvZmlsZSBmb3JtIGlucHV0Ojotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uIHtcclxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxuLnByb2ZpbGUgZm9ybSBpbnB1dFt0eXBlPW51bWJlcl0ge1xyXG4gICAgLW1vei1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XHJcbn1cclxuXHJcbi5wcm9maWxlIGZvcm0gLnNob3dQYXNzIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogOC41cHg7XHJcbiAgICByaWdodDogMTJweDtcclxuICAgIHRyYW5zaXRpb246IC4ycztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnByb2ZpbGUgZm9ybSAuc2hvd1Bhc3M6aG92ZXIge1xyXG4gICAgY29sb3I6ICMwOWM7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-profile',
                templateUrl: './profile.component.html',
                styleUrls: ['./profile.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "WGIg":
/*!******************************************************!*\
  !*** ./src/app/add-product/add-product.component.ts ***!
  \******************************************************/
/*! exports provided: AddProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddProductComponent", function() { return AddProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class AddProductComponent {
    constructor() { }
    ngOnInit() {
    }
    addManually() {
        if ($(".add-product .option1").is(':visible')) {
            $(".add-product .option1").slideUp(($(".add-product .option1").height() * 2.5), function () {
                $(".add-product .option2").slideDown($(".add-product .option2").height() * 2.5);
                $(".add-product .manual i").css('transform', 'rotate(180deg)');
            });
        }
        else {
            $(".add-product .option2").slideUp(($(".add-product .option2").height() * 2.5), function () {
                $(".add-product .option1").slideDown($(".add-product .option1").height() * 2.5);
                $(".add-product .manual i").css('transform', 'rotate(0deg)');
            });
        }
    }
}
AddProductComponent.ɵfac = function AddProductComponent_Factory(t) { return new (t || AddProductComponent)(); };
AddProductComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddProductComponent, selectors: [["app-add-product"]], decls: 76, vars: 0, consts: [[1, "add-product"], [1, "container-fluid"], [1, "row"], [1, "col-12"], [1, "col-12", "option1"], [1, "col-lg-6", "col-md-12", "col-12", "py-2"], ["name", "", 1, "w-100"], ["selected", "", "disabled", ""], [1, "col-xl-4", "col-lg-3", "col-md-8", "col-sm-6", "col-12", "py-2"], ["type", "text", "placeholder", "Quantity", 1, "w-100"], [1, "col-xl-2", "col-lg-3", "col-md-4", "col-sm-6", "col-12", "py-2"], ["type", "button", 1, "btn", "btn-primary", "form-control"], [1, "col-12", "option2"], [1, "col-md-6", "col-12", "py-2"], ["type", "text", "placeholder", "Product Name", 1, "w-100"], [1, "col-lg-4", "col-sm-6", "col-12", "py-2"], ["type", "text", "placeholder", "Size", 1, "w-100"], ["type", "text", "placeholder", "Company", 1, "w-100"], [1, "col-lg-4", "col-sm-6", "col-12", "py-2", "d-flex", "marked"], ["type", "text", "placeholder", "Price", 1, "w-100", 2, "padding", "5px 20px 5px 10px"], ["type", "text", "placeholder", "Discount", 1, "w-100", 2, "padding", "5px 20px 5px 10px"], [1, "col-12", "py-2"], ["name", "", "placeholder", "Description", 1, "form-control"], [1, "col-md-8", "col-12", "py-2", "d-flex", "align-items-center"], ["for", "product-image", 1, "pr-2", 2, "color", "rgba(255, 255, 255, .5)", "font-size", "14px"], ["type", "file", "id", "product-image", "name", "", "placeholder", "Choose product image"], [1, "col-md-4", "col-12", "py-2", "text-right"], ["type", "button", 1, "btn", "btn-primary"], [1, "manual", 3, "click"], [1, "fa", "fa-caret-down"]], template: function AddProductComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Add new product to your pharmacy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "If your product not found in products list, You should add it manually.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "select", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Product Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Parastemol");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Novalgin 200");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Tramadol 360");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Add Product");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "select", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Medicine");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Baby Care");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Cosmetics");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "select", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Tablets");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Powder");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Sachets");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "$");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "textarea", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Choose product image");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Add Product");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddProductComponent_Template_span_click_73_listener() { return ctx.addManually(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Add product manually");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".add-product[_ngcontent-%COMP%] {\r\n    font-family: 'Cairo', sans-serif;\r\n    background-color: #27293d;\r\n    padding: 1.25rem 1.437rem;\r\n    border: 1px solid #313452;\r\n    overflow: hidden;\r\n}\r\n\r\n.add-product[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n    font-size: 20px;\r\n    color: rgba(255, 255, 255, .85);\r\n}\r\n\r\n.add-product[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    font-size: 16px;\r\n    color: rgba(255, 255, 255, .5);\r\n}\r\n\r\n.add-product[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .add-product[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\r\n    border: 1px solid #424351;\r\n    font-weight: 400;\r\n    font-size: 0.875rem;\r\n    background-color: #2b2e4c;\r\n    padding: 5px 10px;\r\n    color: rgba(255, 255, 255, .5);\r\n    transition: all .2s;\r\n    height: 38px;\r\n}\r\n\r\n.add-product[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\r\n    border: 1px solid #424351;\r\n    font-weight: 400;\r\n    font-size: 0.875rem;\r\n    background-color: #2b2e4c;\r\n    padding: 5px 10px;\r\n    color: rgba(255, 255, 255, .5);\r\n    transition: all .2s;\r\n}\r\n\r\n.add-product[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder, .add-product[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::placeholder {\r\n    color: rgba(255, 255, 255, .5);\r\n}\r\n\r\n.add-product[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .add-product[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus, .add-product[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\r\n    outline: none;\r\n    border-color: #0d6efd;\r\n}\r\n\r\n.add-product[_ngcontent-%COMP%]   #product-image[_ngcontent-%COMP%] {\r\n    font-size: 16px;\r\n    background-color: #2b2e4c;\r\n    outline: none;\r\n}\r\n\r\n[_ngcontent-%COMP%]::-webkit-file-upload-button {\r\n    color: rgba(255, 255, 255, .5);\r\n    background-color: #424351;\r\n    border: 1px solid #313452;\r\n    box-shadow: 1px 0 1px #313452;\r\n    outline: none;\r\n    -webkit-transition: .2s;\r\n    transition: .2s;\r\n}\r\n\r\n[_ngcontent-%COMP%]::-webkit-file-upload-button:hover {\r\n    background-color: #0d6efd;\r\n    border: 1px solid #0d6efd;\r\n    box-shadow: 1px 0 1px #0d6efd;\r\n}\r\n\r\n.add-product[_ngcontent-%COMP%]   .marked[_ngcontent-%COMP%] {\r\n    position: relative;\r\n}\r\n\r\n.add-product[_ngcontent-%COMP%]   .marked[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    right: 1.5rem;\r\n    top: 50%;\r\n    transform: translateY(-50%);\r\n    background-color: transparent;\r\n    color: rgba(255, 255, 255, .6);\r\n    font-size: 16px;\r\n}\r\n\r\n.add-product[_ngcontent-%COMP%]   .manual[_ngcontent-%COMP%] {\r\n    color: rgba(255, 255, 255, .5);\r\n    font-size: 14px;\r\n    cursor: pointer;\r\n}\r\n\r\n.add-product[_ngcontent-%COMP%]   .manual[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    padding: 0 .5rem;\r\n    transition: .3s;\r\n    transform: rotate(0deg);\r\n}\r\n\r\n.add-product[_ngcontent-%COMP%]   .manual[_ngcontent-%COMP%]:hover {\r\n    text-decoration: underline;\r\n    color: #0d6efd;\r\n}\r\n\r\n.add-product[_ngcontent-%COMP%]   .option1[_ngcontent-%COMP%] {\r\n    overflow: hidden;\r\n}\r\n\r\n.add-product[_ngcontent-%COMP%]   .option2[_ngcontent-%COMP%] {\r\n    overflow: hidden;\r\n    display: none;\r\n}\r\n\r\n@media (max-width:1040px) {\r\n    .add-product[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n        display: none;\r\n    }\r\n}\r\n\r\n@media (max-width:800px) {\r\n    .add-product[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n        font-size: 16px;\r\n    }\r\n    .add-product[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n        font-size: 14px;\r\n    }\r\n    .add-product[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .add-product[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], .add-product[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n        font-size: 14px;\r\n    }\r\n    .add-product[_ngcontent-%COMP%] {\r\n        padding: 1.25rem .75rem;\r\n    }\r\n}\r\n\r\n@media (max-width:767px) {\r\n    .add-product[_ngcontent-%COMP%]   #product-image[_ngcontent-%COMP%] {\r\n        width: 100%;\r\n    }\r\n    .text-right[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n        width: 100%;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkLXByb2R1Y3QvYWRkLXByb2R1Y3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdDQUFnQztJQUNoQyx5QkFBeUI7SUFDekIseUJBQXlCO0lBQ3pCLHlCQUF5QjtJQUN6QixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksZUFBZTtJQUNmLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixpQkFBaUI7SUFDakIsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQiw4QkFBOEI7SUFDOUIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZix5QkFBeUI7SUFDekIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLDhCQUE4QjtJQUM5Qix5QkFBeUI7SUFDekIseUJBQXlCO0lBQ3pCLDZCQUE2QjtJQUM3QixhQUFhO0lBQ2IsdUJBQWU7SUFBZixlQUFlO0FBQ25COztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLHlCQUF5QjtJQUN6Qiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFFBQVE7SUFDUiwyQkFBMkI7SUFDM0IsNkJBQTZCO0lBQzdCLDhCQUE4QjtJQUM5QixlQUFlO0FBQ25COztBQUVBO0lBQ0ksOEJBQThCO0lBQzlCLGVBQWU7SUFDZixlQUFlO0FBQ25COztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSwwQkFBMEI7SUFDMUIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0k7UUFDSSxhQUFhO0lBQ2pCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLGVBQWU7SUFDbkI7SUFDQTtRQUNJLGVBQWU7SUFDbkI7SUFDQTtRQUNJLGVBQWU7SUFDbkI7SUFDQTtRQUNJLHVCQUF1QjtJQUMzQjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxXQUFXO0lBQ2Y7SUFDQTtRQUNJLFdBQVc7SUFDZjtBQUNKOztBQUVBOzs7Ozs7Ozs7OztDQVdDIiwiZmlsZSI6InNyYy9hcHAvYWRkLXByb2R1Y3QvYWRkLXByb2R1Y3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hZGQtcHJvZHVjdCB7XHJcbiAgICBmb250LWZhbWlseTogJ0NhaXJvJywgc2Fucy1zZXJpZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNzI5M2Q7XHJcbiAgICBwYWRkaW5nOiAxLjI1cmVtIDEuNDM3cmVtO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzMxMzQ1MjtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5hZGQtcHJvZHVjdCBoNCB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAuODUpO1xyXG59XHJcblxyXG4uYWRkLXByb2R1Y3QgcCB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAuNSk7XHJcbn1cclxuXHJcbi5hZGQtcHJvZHVjdCBpbnB1dCwgLmFkZC1wcm9kdWN0IHNlbGVjdCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNDI0MzUxO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmIyZTRjO1xyXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAuNSk7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjJzO1xyXG4gICAgaGVpZ2h0OiAzOHB4O1xyXG59XHJcblxyXG4uYWRkLXByb2R1Y3QgdGV4dGFyZWEge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzQyNDM1MTtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBmb250LXNpemU6IDAuODc1cmVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJiMmU0YztcclxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjUpO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIC4ycztcclxufVxyXG5cclxuLmFkZC1wcm9kdWN0IGlucHV0OjpwbGFjZWhvbGRlciwgLmFkZC1wcm9kdWN0IHRleHRhcmVhOjpwbGFjZWhvbGRlciB7XHJcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAuNSk7XHJcbn1cclxuXHJcbi5hZGQtcHJvZHVjdCBpbnB1dDpmb2N1cywgLmFkZC1wcm9kdWN0IHNlbGVjdDpmb2N1cywgLmFkZC1wcm9kdWN0IHRleHRhcmVhOmZvY3VzIHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBib3JkZXItY29sb3I6ICMwZDZlZmQ7XHJcbn1cclxuXHJcbi5hZGQtcHJvZHVjdCAjcHJvZHVjdC1pbWFnZSB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmIyZTRjO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XHJcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAuNSk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDI0MzUxO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzMxMzQ1MjtcclxuICAgIGJveC1zaGFkb3c6IDFweCAwIDFweCAjMzEzNDUyO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIHRyYW5zaXRpb246IC4ycztcclxufVxyXG5cclxuOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGQ2ZWZkO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzBkNmVmZDtcclxuICAgIGJveC1zaGFkb3c6IDFweCAwIDFweCAjMGQ2ZWZkO1xyXG59XHJcblxyXG4uYWRkLXByb2R1Y3QgLm1hcmtlZCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5hZGQtcHJvZHVjdCAubWFya2VkIHNwYW4ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDEuNXJlbTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAuNik7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuXHJcbi5hZGQtcHJvZHVjdCAubWFudWFsIHtcclxuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC41KTtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmFkZC1wcm9kdWN0IC5tYW51YWwgaSB7XHJcbiAgICBwYWRkaW5nOiAwIC41cmVtO1xyXG4gICAgdHJhbnNpdGlvbjogLjNzO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbn1cclxuXHJcbi5hZGQtcHJvZHVjdCAubWFudWFsOmhvdmVyIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgY29sb3I6ICMwZDZlZmQ7XHJcbn1cclxuXHJcbi5hZGQtcHJvZHVjdCAub3B0aW9uMSB7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4uYWRkLXByb2R1Y3QgLm9wdGlvbjIge1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOjEwNDBweCkge1xyXG4gICAgLmFkZC1wcm9kdWN0IGxhYmVsIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDo4MDBweCkge1xyXG4gICAgLmFkZC1wcm9kdWN0IGg0IHtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICB9XHJcbiAgICAuYWRkLXByb2R1Y3QgcCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgfVxyXG4gICAgLmFkZC1wcm9kdWN0IGlucHV0LCAuYWRkLXByb2R1Y3Qgc2VsZWN0LCAuYWRkLXByb2R1Y3QgYnV0dG9uIHtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB9XHJcbiAgICAuYWRkLXByb2R1Y3Qge1xyXG4gICAgICAgIHBhZGRpbmc6IDEuMjVyZW0gLjc1cmVtO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDo3NjdweCkge1xyXG4gICAgLmFkZC1wcm9kdWN0ICNwcm9kdWN0LWltYWdlIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIC50ZXh0LXJpZ2h0IGJ1dHRvbiB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qXHJcbiNkZWUyZTZcclxuI2ZmYzEwN1xyXG5mb250LWZhbWlseTogJ0FsZWdyZXlhJywgc2VyaWY7XHJcbmZvbnQtZmFtaWx5OiAnQWxlZ3JleWEgU2FucyBTQycsIHNhbnMtc2VyaWY7XHJcbmZvbnQtZmFtaWx5OiAnQ2Fpcm8nLCBzYW5zLXNlcmlmO1xyXG5mb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbmJhY2tncm91bmQtY29sb3I6ICMzYTNmNTE7XHJcbmJhY2tncm91bmQtY29sb3I6ICMxZTFlMmY7XHJcbiMyNzI5M2RcclxudGV4dCAjYjFiMWI1XHJcbiovIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddProductComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-add-product',
                templateUrl: './add-product.component.html',
                styleUrls: ['./add-product.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./not-found/not-found.component */ "nod/");
/* harmony import */ var _side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./side-bar/side-bar.component */ "2IJj");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./navbar/navbar.component */ "kWWo");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./signup/signup.component */ "rd1V");
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./products/products.component */ "ziXE");
/* harmony import */ var _add_product_add_product_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./add-product/add-product.component */ "WGIg");
/* harmony import */ var _completed_completed_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./completed/completed.component */ "KPFu");
/* harmony import */ var _pending_pending_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pending/pending.component */ "5RyS");
/* harmony import */ var _canceled_canceled_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./canceled/canceled.component */ "q7kc");
/* harmony import */ var _order_details_order_details_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./order-details/order-details.component */ "OGzB");
/* harmony import */ var _news_news_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./news/news.component */ "6XR0");
/* harmony import */ var _offers_offers_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./offers/offers.component */ "N5J3");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./profile/profile.component */ "W6KJ");
/* harmony import */ var _messages_messages_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./messages/messages.component */ "DruN");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./footer/footer.component */ "fp1T");






















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
        _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_5__["NotFoundComponent"],
        _side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_6__["SideBarComponent"],
        _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"],
        _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
        _signup_signup_component__WEBPACK_IMPORTED_MODULE_9__["SignupComponent"],
        _products_products_component__WEBPACK_IMPORTED_MODULE_10__["ProductsComponent"],
        _add_product_add_product_component__WEBPACK_IMPORTED_MODULE_11__["AddProductComponent"],
        _completed_completed_component__WEBPACK_IMPORTED_MODULE_12__["CompletedComponent"],
        _pending_pending_component__WEBPACK_IMPORTED_MODULE_13__["PendingComponent"],
        _canceled_canceled_component__WEBPACK_IMPORTED_MODULE_14__["CanceledComponent"],
        _order_details_order_details_component__WEBPACK_IMPORTED_MODULE_15__["OrderDetailsComponent"],
        _news_news_component__WEBPACK_IMPORTED_MODULE_16__["NewsComponent"],
        _offers_offers_component__WEBPACK_IMPORTED_MODULE_17__["OffersComponent"],
        _profile_profile_component__WEBPACK_IMPORTED_MODULE_18__["ProfileComponent"],
        _messages_messages_component__WEBPACK_IMPORTED_MODULE_19__["MessagesComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_20__["FooterComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
                    _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_5__["NotFoundComponent"],
                    _side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_6__["SideBarComponent"],
                    _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"],
                    _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
                    _signup_signup_component__WEBPACK_IMPORTED_MODULE_9__["SignupComponent"],
                    _products_products_component__WEBPACK_IMPORTED_MODULE_10__["ProductsComponent"],
                    _add_product_add_product_component__WEBPACK_IMPORTED_MODULE_11__["AddProductComponent"],
                    _completed_completed_component__WEBPACK_IMPORTED_MODULE_12__["CompletedComponent"],
                    _pending_pending_component__WEBPACK_IMPORTED_MODULE_13__["PendingComponent"],
                    _canceled_canceled_component__WEBPACK_IMPORTED_MODULE_14__["CanceledComponent"],
                    _order_details_order_details_component__WEBPACK_IMPORTED_MODULE_15__["OrderDetailsComponent"],
                    _news_news_component__WEBPACK_IMPORTED_MODULE_16__["NewsComponent"],
                    _offers_offers_component__WEBPACK_IMPORTED_MODULE_17__["OffersComponent"],
                    _profile_profile_component__WEBPACK_IMPORTED_MODULE_18__["ProfileComponent"],
                    _messages_messages_component__WEBPACK_IMPORTED_MODULE_19__["MessagesComponent"],
                    _footer_footer_component__WEBPACK_IMPORTED_MODULE_20__["FooterComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "fp1T":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 13, vars: 0, consts: [[1, "py-3"], [1, "links"], ["href", "", 1, "facebook"], [1, "fa", "fa-facebook"], ["href", "", 1, "instagram"], [1, "fa", "fa-instagram"], ["href", "", 1, "twitter"], [1, "fa", "fa-twitter"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Copyright \u00A9 2021 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Pharma");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, ". All rights reserved.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["footer[_ngcontent-%COMP%] {\r\n    background-color: transparent;\r\n    margin: 20px 0;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    border-top: 1px solid #424351;\r\n}\r\n\r\nfooter[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    color: rgba(255, 255, 255, .6);\r\n    font-family: 'Roboto', sans-serif;\r\n    font-size: 14px;\r\n    margin-bottom: 0;\r\n}\r\n\r\nfooter[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\r\n    cursor: pointer;\r\n    color: #ffc107;\r\n}\r\n\r\nfooter[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    text-decoration: none;\r\n}\r\n\r\nfooter[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    font-size: 20px;\r\n    transition: .3s;\r\n    padding: 0 10px;\r\n    color: rgba(255, 255, 255, .6);\r\n    transition: all .3s;\r\n}\r\n\r\nfooter[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   .facebook[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover {\r\n    color: #3b5998;\r\n}\r\n\r\nfooter[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   .instagram[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover {\r\n    color: #771718;\r\n}\r\n\r\nfooter[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   .twitter[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover {\r\n    color: #00acee;\r\n}\r\n\r\n@media (max-width: 575px) {\r\n    footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n        font-size: 12px;\r\n    }\r\n    footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\r\n        font-size: 12px;\r\n    }\r\n    footer[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n        font-size: 16px;\r\n        padding: 0 5px;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksNkJBQTZCO0lBQzdCLGNBQWM7SUFDZCxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDhCQUE4QjtJQUM5Qiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSw4QkFBOEI7SUFDOUIsaUNBQWlDO0lBQ2pDLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsY0FBYztBQUNsQjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixlQUFlO0lBQ2YsZUFBZTtJQUNmLDhCQUE4QjtJQUM5QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSTtRQUNJLGVBQWU7SUFDbkI7SUFDQTtRQUNJLGVBQWU7SUFDbkI7SUFDQTtRQUNJLGVBQWU7UUFDZixjQUFjO0lBQ2xCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJmb290ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBtYXJnaW46IDIwcHggMDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICM0MjQzNTE7XHJcbn1cclxuXHJcbmZvb3RlciBwIHtcclxuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC42KTtcclxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuXHJcbmZvb3RlciBwIHN0cm9uZyB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBjb2xvcjogI2ZmYzEwNztcclxufVxyXG5cclxuZm9vdGVyIC5saW5rcyBhIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuZm9vdGVyIC5saW5rcyBhIGkge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgdHJhbnNpdGlvbjogLjNzO1xyXG4gICAgcGFkZGluZzogMCAxMHB4O1xyXG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjYpO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIC4zcztcclxufVxyXG5cclxuZm9vdGVyIC5saW5rcyAuZmFjZWJvb2sgaTpob3ZlciB7XHJcbiAgICBjb2xvcjogIzNiNTk5ODtcclxufVxyXG5cclxuZm9vdGVyIC5saW5rcyAuaW5zdGFncmFtIGk6aG92ZXIge1xyXG4gICAgY29sb3I6ICM3NzE3MTg7XHJcbn1cclxuXHJcbmZvb3RlciAubGlua3MgLnR3aXR0ZXIgaTpob3ZlciB7XHJcbiAgICBjb2xvcjogIzAwYWNlZTtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NXB4KSB7XHJcbiAgICBmb290ZXIgcCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgfVxyXG4gICAgZm9vdGVyIHAgc3Ryb25nIHtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICB9XHJcbiAgICBmb290ZXIgLmxpbmtzIGEgaSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDAgNXB4O1xyXG4gICAgfVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "kWWo":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class NavbarComponent {
    constructor() { }
    ngOnInit() {
        $(document).ready(function () {
            $('.navbar .profile img').click(function () {
                if ($(this).siblings(".user-profile").hasClass('show')) {
                    $(this).siblings(".user-profile").removeClass('show');
                }
                else {
                    $(this).siblings(".user-profile").addClass('show');
                }
                $(".user-reminder").removeClass('show');
                $(".user-messages").removeClass('show');
            });
            $('.navbar .reminder i').click(function () {
                if ($(this).siblings(".user-reminder").hasClass('show')) {
                    $(this).siblings(".user-reminder").removeClass('show');
                }
                else {
                    $(this).siblings(".user-reminder").addClass('show');
                }
                $(".user-profile").removeClass('show');
                $(".user-messages").removeClass('show');
            });
            $('.navbar .messages i').click(function () {
                if ($(this).siblings(".user-messages").hasClass('show')) {
                    $(this).siblings(".user-messages").removeClass('show');
                }
                else {
                    $(this).siblings(".user-messages").addClass('show');
                }
                $(".user-reminder").removeClass('show');
                $(".user-profile").removeClass('show');
            });
            $('.navbar .reminder i').click(function () {
                $(this).siblings(".dot").addClass('d-none');
            });
            $('.navbar .messages i').click(function () {
                $(this).siblings(".dot").addClass('d-none');
            });
        });
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 67, vars: 0, consts: [[1, "navbar", "navbar-expand", "navbar-light", "fixed-top", "border-bottom"], ["routerLink", "", 1, "navbar-brand"], ["src", "assets/images/Logo.png", "alt", ""], [1, "collapse", "navbar-collapse"], [1, "navbar-nav", "ml-auto", "mt-2", "mt-lg-0"], [1, "messages"], [1, "fa", "fa-envelope-o"], [1, "dot"], [1, "user-messages"], [1, "message"], ["href", ""], ["src", "assets/images/Users/1.jpg", "alt", ""], [1, "p-0", "m-0", 2, "background-color", "#8c909a"], ["routerLink", "/inbox"], ["src", "assets/images/Users/2.png", "alt", ""], [1, "reminder"], [1, "fa", "fa-bell-o"], [1, "user-reminder"], [1, "alert"], ["routerLink", "/products"], [1, "fa", "fa-shopping-bag"], ["routerLink", "/canceled-orders"], ["aria-hidden", "true", 1, "fa", "fa-eyedropper"], [1, "profile"], ["src", "assets/images/user.jpg", "alt", ""], [1, "user-profile"], ["routerLink", "/profile"], [1, "fa", "fa-user-o"], ["routerLink", "/login"], [1, "fa", "fa-power-off"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Pharma");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Khaled El-sman");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "please i want ...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "hr", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Ava Michael");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "can u till m...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "8:00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "new order");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "hr", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "8:20");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "canceled order");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "hr", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "8:30");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "panadol has finshed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "hr", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: [".navbar[_ngcontent-%COMP%] {\r\n    background: #1e1e2f;\r\n    height: 65px;\r\n}\r\n\r\n.navbar[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%] {\r\n    text-decoration: none;\r\n    color: #ffc107;\r\n    font-family: 'Alegreya Sans SC', sans-serif;\r\n    font-size: 22px;\r\n    letter-spacing: .75px;\r\n    text-transform: uppercase;\r\n    font-weight: 600;\r\n    z-index: 10;\r\n}\r\n\r\n.navbar[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 2rem;\r\n    border-radius: 50%;\r\n    margin-right: .5rem;\r\n    position: relative;\r\n    top: -4px;\r\n}\r\n\r\n.navbar[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    z-index: 2;\r\n}\r\n\r\n.navbar[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: -2.5rem;\r\n    transform: translateY(-50%);\r\n    width: 2rem;\r\n    height: 2rem;\r\n    border-radius: 50%;\r\n    cursor: pointer;\r\n    border: 1px solid #3a3f51;\r\n}\r\n\r\n.navbar[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%]   .user-profile[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 1.25rem;\r\n    right: 0rem;\r\n    z-index: 3;\r\n    border-radius: 3px;\r\n    background: #27293d;\r\n    overflow: hidden;\r\n    opacity: 0;\r\n    transition: all .3s;\r\n    visibility: hidden;\r\n}\r\n\r\n.navbar[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%]   .show[_ngcontent-%COMP%] {\r\n    top: 2rem;\r\n    opacity: 1;\r\n    visibility: visible;\r\n}\r\n\r\n.navbar[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%]   .user-profile[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    text-decoration: none;\r\n    text-align: center;\r\n    display: block;\r\n    padding: 7px 20px;\r\n    color: #b8bcc7;\r\n    font-size: 14px;\r\n    transition: all .2s;\r\n    width: 90px;\r\n    text-transform: capitalize;\r\n}\r\n\r\n.navbar[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%]   .user-profile[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    font-size: 16px;\r\n    margin-right: 5px;\r\n}\r\n\r\n.navbar[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%]   .user-profile[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    color: white;\r\n    letter-spacing: .75px;\r\n    background-color: #3a3f51;\r\n}\r\n\r\n.navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%] {\r\n    position: relative;\r\n}\r\n\r\n.navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .reminder[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: -4.75rem;\r\n    transform: translateY(-50%);\r\n    z-index: 2;\r\n}\r\n\r\n.navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .reminder[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    font-size: 20px;\r\n    color: white;\r\n    cursor: pointer;\r\n}\r\n\r\n.navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .reminder[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%] {\r\n    font-size: 32px;\r\n    position: absolute;\r\n    width: 7px;\r\n    height: 7px;\r\n    border-radius: 50%;\r\n    background-color: #ffc107;\r\n    right: .05rem;\r\n    top: 0;\r\n}\r\n\r\n.navbar[_ngcontent-%COMP%]   .reminder[_ngcontent-%COMP%]   .user-reminder[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 1.5rem;\r\n    right: -.5rem;\r\n    width: 10rem;\r\n    z-index: 3;\r\n    border-radius: 3px;\r\n    background: #27293d;\r\n    overflow: auto;\r\n    opacity: 0;\r\n    transition: all .3s;\r\n    visibility: hidden;\r\n}\r\n\r\n.navbar[_ngcontent-%COMP%]   .reminder[_ngcontent-%COMP%]   .show[_ngcontent-%COMP%] {\r\n    top: 2.75rem;\r\n    opacity: 1;\r\n    visibility: visible;\r\n}\r\n\r\n.navbar[_ngcontent-%COMP%]   .reminder[_ngcontent-%COMP%]   .user-reminder[_ngcontent-%COMP%]   .alert[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    margin-bottom: 0;\r\n    padding: .5rem 1.5rem;\r\n}\r\n\r\n.navbar[_ngcontent-%COMP%]   .reminder[_ngcontent-%COMP%]   .user-reminder[_ngcontent-%COMP%]   .alert[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    padding-right: 1rem;\r\n    font-size: 26px;\r\n    color: #6d7285;\r\n}\r\n\r\n.navbar[_ngcontent-%COMP%]   .reminder[_ngcontent-%COMP%]   .user-reminder[_ngcontent-%COMP%]   .alert[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    font-size: 10px;\r\n    color: #b8bcc7;\r\n}\r\n\r\n.navbar[_ngcontent-%COMP%]   .reminder[_ngcontent-%COMP%]   .user-reminder[_ngcontent-%COMP%]   .alert[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n    color: white;\r\n    font-size: 12px;\r\n    text-transform: capitalize;\r\n}\r\n\r\n.navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .messages[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: -7.25rem;\r\n    transform: translateY(-50%);\r\n    z-index: 2;\r\n}\r\n\r\n.navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .messages[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    font-size: 20px;\r\n    color: white;\r\n    cursor: pointer;\r\n}\r\n\r\n.navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .messages[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%] {\r\n    font-size: 32px;\r\n    position: absolute;\r\n    width: 7px;\r\n    height: 7px;\r\n    border-radius: 50%;\r\n    background-color: #ffc107;\r\n    right: -.2rem;\r\n    top: 0;\r\n}\r\n\r\n.navbar[_ngcontent-%COMP%]   .messages[_ngcontent-%COMP%]   .user-messages[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 1.5rem;\r\n    right: -.5rem;\r\n    width: 12.5rem;\r\n    z-index: 3;\r\n    border-radius: 3px;\r\n    background: #27293d;\r\n    overflow: auto;\r\n    opacity: 0;\r\n    transition: all .3s;\r\n    visibility: hidden;\r\n}\r\n\r\n.navbar[_ngcontent-%COMP%]   .messages[_ngcontent-%COMP%]   .show[_ngcontent-%COMP%] {\r\n    top: 2.75rem;\r\n    opacity: 1;\r\n    visibility: visible;\r\n}\r\n\r\n.navbar[_ngcontent-%COMP%]   .messages[_ngcontent-%COMP%]   .user-messages[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    margin-bottom: 0;\r\n    padding: .5rem 1.5rem;\r\n}\r\n\r\n.navbar[_ngcontent-%COMP%]   .messages[_ngcontent-%COMP%]   .user-messages[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 2.5rem;\r\n    border-radius: 50%;\r\n    margin-right: 1rem;\r\n    border: 1px dashed black;\r\n}\r\n\r\n.navbar[_ngcontent-%COMP%]   .messages[_ngcontent-%COMP%]   .user-messages[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    font-size: 12px;\r\n    color: #b8bcc7;\r\n}\r\n\r\n.navbar[_ngcontent-%COMP%]   .messages[_ngcontent-%COMP%]   .user-messages[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\r\n    color: white;\r\n    font-size: 12px;\r\n    text-transform: capitalize;\r\n    margin-bottom: 0;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0lBQ25CLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsY0FBYztJQUNkLDJDQUEyQztJQUMzQyxlQUFlO0lBQ2YscUJBQXFCO0lBQ3JCLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsV0FBVztBQUNmOztBQUVBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLGFBQWE7SUFDYiwyQkFBMkI7SUFDM0IsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osV0FBVztJQUNYLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixVQUFVO0lBQ1YsbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1YsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLHFCQUFxQjtJQUNyQix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLGNBQWM7SUFDZCwyQkFBMkI7SUFDM0IsVUFBVTtBQUNkOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7SUFDWixlQUFlO0FBQ25COztBQUVBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsV0FBVztJQUNYLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsYUFBYTtJQUNiLE1BQU07QUFDVjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsYUFBYTtJQUNiLFlBQVk7SUFDWixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QsVUFBVTtJQUNWLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osVUFBVTtJQUNWLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtJQUNoQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsY0FBYztBQUNsQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixlQUFlO0lBQ2YsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixjQUFjO0lBQ2QsMkJBQTJCO0lBQzNCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGVBQWU7SUFDZixZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYixNQUFNO0FBQ1Y7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGFBQWE7SUFDYixjQUFjO0lBQ2QsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsY0FBYztJQUNkLFVBQVU7SUFDVixtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFVBQVU7SUFDVixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQix3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsY0FBYztBQUNsQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixlQUFlO0lBQ2YsMEJBQTBCO0lBQzFCLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZiYXIge1xyXG4gICAgYmFja2dyb3VuZDogIzFlMWUyZjtcclxuICAgIGhlaWdodDogNjVweDtcclxufVxyXG5cclxuLm5hdmJhciAubmF2YmFyLWJyYW5kIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiAjZmZjMTA3O1xyXG4gICAgZm9udC1mYW1pbHk6ICdBbGVncmV5YSBTYW5zIFNDJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAuNzVweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgei1pbmRleDogMTA7XHJcbn1cclxuXHJcbi5uYXZiYXIgLm5hdmJhci1icmFuZCBpbWcge1xyXG4gICAgd2lkdGg6IDJyZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IC41cmVtO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAtNHB4O1xyXG59XHJcblxyXG4ubmF2YmFyIC5wcm9maWxlIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDI7XHJcbn1cclxuXHJcbi5uYXZiYXIgLnByb2ZpbGUgaW1nIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogLTIuNXJlbTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgIHdpZHRoOiAycmVtO1xyXG4gICAgaGVpZ2h0OiAycmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzNhM2Y1MTtcclxufVxyXG5cclxuLm5hdmJhciAucHJvZmlsZSAudXNlci1wcm9maWxlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMS4yNXJlbTtcclxuICAgIHJpZ2h0OiAwcmVtO1xyXG4gICAgei1pbmRleDogMztcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIGJhY2tncm91bmQ6ICMyNzI5M2Q7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAuM3M7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbn1cclxuXHJcbi5uYXZiYXIgLnByb2ZpbGUgLnNob3cge1xyXG4gICAgdG9wOiAycmVtO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbn1cclxuXHJcbi5uYXZiYXIgLnByb2ZpbGUgLnVzZXItcHJvZmlsZSBhIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcGFkZGluZzogN3B4IDIwcHg7XHJcbiAgICBjb2xvcjogI2I4YmNjNztcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAuMnM7XHJcbiAgICB3aWR0aDogOTBweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG59XHJcblxyXG4ubmF2YmFyIC5wcm9maWxlIC51c2VyLXByb2ZpbGUgYSBpIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG59XHJcblxyXG4ubmF2YmFyIC5wcm9maWxlIC51c2VyLXByb2ZpbGUgYTpob3ZlciB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLjc1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2EzZjUxO1xyXG59XHJcblxyXG4ubmF2YmFyIC5uYXZiYXItbmF2IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLm5hdmJhciAubmF2YmFyLW5hdiAucmVtaW5kZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiAtNC43NXJlbTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgIHotaW5kZXg6IDI7XHJcbn1cclxuXHJcbi5uYXZiYXIgLm5hdmJhci1uYXYgLnJlbWluZGVyIGkge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ubmF2YmFyIC5uYXZiYXItbmF2IC5yZW1pbmRlciAuZG90IHtcclxuICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiA3cHg7XHJcbiAgICBoZWlnaHQ6IDdweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmMxMDc7XHJcbiAgICByaWdodDogLjA1cmVtO1xyXG4gICAgdG9wOiAwO1xyXG59XHJcblxyXG4ubmF2YmFyIC5yZW1pbmRlciAudXNlci1yZW1pbmRlciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDEuNXJlbTtcclxuICAgIHJpZ2h0OiAtLjVyZW07XHJcbiAgICB3aWR0aDogMTByZW07XHJcbiAgICB6LWluZGV4OiAzO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgYmFja2dyb3VuZDogIzI3MjkzZDtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAuM3M7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbn1cclxuXHJcbi5uYXZiYXIgLnJlbWluZGVyIC5zaG93IHtcclxuICAgIHRvcDogMi43NXJlbTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG59XHJcblxyXG4ubmF2YmFyIC5yZW1pbmRlciAudXNlci1yZW1pbmRlciAuYWxlcnQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICBwYWRkaW5nOiAuNXJlbSAxLjVyZW07XHJcbn1cclxuXHJcbi5uYXZiYXIgLnJlbWluZGVyIC51c2VyLXJlbWluZGVyIC5hbGVydCBpIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDFyZW07XHJcbiAgICBmb250LXNpemU6IDI2cHg7XHJcbiAgICBjb2xvcjogIzZkNzI4NTtcclxufVxyXG5cclxuLm5hdmJhciAucmVtaW5kZXIgLnVzZXItcmVtaW5kZXIgLmFsZXJ0IHNwYW4ge1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgY29sb3I6ICNiOGJjYzc7XHJcbn1cclxuXHJcbi5uYXZiYXIgLnJlbWluZGVyIC51c2VyLXJlbWluZGVyIC5hbGVydCBoNCB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxufVxyXG5cclxuLm5hdmJhciAubmF2YmFyLW5hdiAubWVzc2FnZXMge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiAtNy4yNXJlbTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgIHotaW5kZXg6IDI7XHJcbn1cclxuXHJcbi5uYXZiYXIgLm5hdmJhci1uYXYgLm1lc3NhZ2VzIGkge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ubmF2YmFyIC5uYXZiYXItbmF2IC5tZXNzYWdlcyAuZG90IHtcclxuICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiA3cHg7XHJcbiAgICBoZWlnaHQ6IDdweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmMxMDc7XHJcbiAgICByaWdodDogLS4ycmVtO1xyXG4gICAgdG9wOiAwO1xyXG59XHJcblxyXG4ubmF2YmFyIC5tZXNzYWdlcyAudXNlci1tZXNzYWdlcyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDEuNXJlbTtcclxuICAgIHJpZ2h0OiAtLjVyZW07XHJcbiAgICB3aWR0aDogMTIuNXJlbTtcclxuICAgIHotaW5kZXg6IDM7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMjcyOTNkO1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIC4zcztcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxufVxyXG5cclxuLm5hdmJhciAubWVzc2FnZXMgLnNob3cge1xyXG4gICAgdG9wOiAyLjc1cmVtO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbn1cclxuXHJcbi5uYXZiYXIgLm1lc3NhZ2VzIC51c2VyLW1lc3NhZ2VzIC5tZXNzYWdlIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIHBhZGRpbmc6IC41cmVtIDEuNXJlbTtcclxufVxyXG5cclxuLm5hdmJhciAubWVzc2FnZXMgLnVzZXItbWVzc2FnZXMgLm1lc3NhZ2UgaW1nIHtcclxuICAgIHdpZHRoOiAyLjVyZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XHJcbiAgICBib3JkZXI6IDFweCBkYXNoZWQgYmxhY2s7XHJcbn1cclxuXHJcbi5uYXZiYXIgLm1lc3NhZ2VzIC51c2VyLW1lc3NhZ2VzIC5tZXNzYWdlIHNwYW4ge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgY29sb3I6ICNiOGJjYzc7XHJcbn1cclxuXHJcbi5uYXZiYXIgLm1lc3NhZ2VzIC51c2VyLW1lc3NhZ2VzIC5tZXNzYWdlIGg1IHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navbar',
                templateUrl: './navbar.component.html',
                styleUrls: ['./navbar.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "nod/":
/*!**************************************************!*\
  !*** ./src/app/not-found/not-found.component.ts ***!
  \**************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class NotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
}
NotFoundComponent.ɵfac = function NotFoundComponent_Factory(t) { return new (t || NotFoundComponent)(); };
NotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotFoundComponent, selectors: [["app-not-found"]], decls: 13, vars: 0, consts: [[1, "not-found"], [1, "text-center", "px-3"], ["type", "button", "routerLink", "", 1, "btn", "btn-lg", "btn-warning"]], template: function NotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Page not Found");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Oops! The page you are looking for does not exist. It might have been moved or deleted.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Back To Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: [".not-found[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 100vh;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.not-found[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n    font-size: 120px;\r\n    font-weight: 600;\r\n    color: white;\r\n}\r\n\r\n.not-found[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n    color: #ffc107;\r\n    font-size: 120px;\r\n    font-weight: 600;\r\n}\r\n\r\n.not-found[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n    font-size: 26px;\r\n    color: white;\r\n    font-family: 'Roboto', sans-serif;\r\n    padding: 0 0 15px 0;\r\n}\r\n\r\n.not-found[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    font-size: 16px;\r\n    color: white;\r\n    font-family: 'Roboto', sans-serif;\r\n}\r\n\r\n.not-found[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    font-size: 16px;\r\n    letter-spacing: 1px;\r\n    text-transform: uppercase;\r\n    font-family: 'Roboto', sans-serif;\r\n}\r\n\r\n@media (max-width:760px) {\r\n    .not-found[_ngcontent-%COMP%] {\r\n        width: 100%;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbm90LWZvdW5kL25vdC1mb3VuZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7SUFDWixpQ0FBaUM7SUFDakMsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7SUFDWixpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSTtRQUNJLFdBQVc7SUFDZjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvbm90LWZvdW5kL25vdC1mb3VuZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5vdC1mb3VuZCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4ubm90LWZvdW5kIGgzIHtcclxuICAgIGZvbnQtc2l6ZTogMTIwcHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4ubm90LWZvdW5kIGgzIHNwYW57XHJcbiAgICBjb2xvcjogI2ZmYzEwNztcclxuICAgIGZvbnQtc2l6ZTogMTIwcHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4ubm90LWZvdW5kIGgyIHtcclxuICAgIGZvbnQtc2l6ZTogMjZweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuICAgIHBhZGRpbmc6IDAgMCAxNXB4IDA7XHJcbn1cclxuXHJcbi5ub3QtZm91bmQgcCB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5ub3QtZm91bmQgYnV0dG9uIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDo3NjBweCkge1xyXG4gICAgLm5vdC1mb3VuZCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotFoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-not-found',
                templateUrl: './not-found.component.html',
                styleUrls: ['./not-found.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "q7kc":
/*!************************************************!*\
  !*** ./src/app/canceled/canceled.component.ts ***!
  \************************************************/
/*! exports provided: CanceledComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanceledComponent", function() { return CanceledComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class CanceledComponent {
    constructor() { }
    ngOnInit() {
    }
}
CanceledComponent.ɵfac = function CanceledComponent_Factory(t) { return new (t || CanceledComponent)(); };
CanceledComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CanceledComponent, selectors: [["app-canceled"]], decls: 76, vars: 0, consts: [[1, "canceled-orders"], [1, "top-header"], ["action", ""], ["type", "text", "placeholder", "search by ID"], [1, "w-100", "table", 2, "overflow-x", "scroll"], [1, "m-auto", 2, "width", "97%"], ["routerLink", "/order-details", 1, "btn", "btn-primary", "view"], [1, "table-footer"], [2, "text-transform", "capitalize"], [1, "table-pages"], [1, "prev", "disable"], [1, "page"], [1, "next"]], template: function CanceledComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Canceled Orders");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "table", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Order");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Date&Time");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Customer Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Customer Phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "231541");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "06/01/22 04:11");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Ahmed Abdallah");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "01123456789");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "more details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "222541");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "06/04/22 14:00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Aida Mohamed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "01198765432");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "more details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "230042");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "15/01/22 00:25");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Omar Ibrahim");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "01231556789");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "more details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "page 1 from 10 pages");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "prev");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: [".canceled-orders[_ngcontent-%COMP%] {\r\n    padding: 20px 2.5%;\r\n    color: #b1b1b5;\r\n    background-color: #27293d;\r\n    font-family: 'Cairo', sans-serif;\r\n    overflow: hidden;\r\n}\r\n\r\n.canceled-orders[_ngcontent-%COMP%]   .top-header[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    padding-bottom: 15px;\r\n}\r\n\r\n.canceled-orders[_ngcontent-%COMP%]   .top-header[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n    border: 1px solid #424351;\r\n    font-weight: 400;\r\n    font-size: 0.875rem;\r\n    background-color: #2b2e4c;\r\n    padding: 5px 10px;\r\n    color: rgba(255, 255, 255, .75);\r\n    transition: all .2s;\r\n}\r\n\r\n.canceled-orders[_ngcontent-%COMP%]   .top-header[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\r\n    color: rgba(255, 255, 255, .5);\r\n}\r\n\r\n.canceled-orders[_ngcontent-%COMP%]   .top-header[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\r\n    outline: none;\r\n    border-color: #0d6efd;\r\n}\r\n\r\n.canceled-orders[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n    height: 8px;\r\n    background-color: transparent;\r\n}\r\n\r\n.canceled-orders[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n    background-color: #15191f;\r\n}\r\n\r\n.canceled-orders[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\r\n    min-width: 650px;\r\n}\r\n\r\n.canceled-orders[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .canceled-orders[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n    padding: 15px 0;\r\n    text-transform: capitalize;\r\n}\r\n\r\n.canceled-orders[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n    color: rgba(255, 255, 255, .85);\r\n    font-weight: 400;\r\n    border-bottom: 1px;\r\n}\r\n\r\n.canceled-orders[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n    border-bottom: 1px solid #424351;\r\n    color: rgba(255, 255, 255, .75);\r\n}\r\n\r\n.canceled-orders[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    font-size: 18px;\r\n    margin-left: .7rem;\r\n    cursor: pointer;\r\n    transition: transform .1s;\r\n}\r\n\r\n.canceled-orders[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover {\r\n    transform: scale(1.2);\r\n}\r\n\r\n.canceled-orders[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .view[_ngcontent-%COMP%] {\r\n    font-size: 14px;\r\n    text-transform: capitalize;\r\n}\r\n\r\n.canceled-orders[_ngcontent-%COMP%]   .table-footer[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    padding: 1rem 0;\r\n    font-size: 14px;\r\n}\r\n\r\n.canceled-orders[_ngcontent-%COMP%]   .table-footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n    list-style: none;\r\n    margin: 0;\r\n}\r\n\r\n.canceled-orders[_ngcontent-%COMP%]   .table-footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    padding: 3px 7px;\r\n    margin: 0 1px;\r\n    border: 1px solid #424351;\r\n    font-weight: 400;\r\n    background-color: #2b2e4c;\r\n    cursor: pointer;\r\n    color: white;\r\n    text-transform: capitalize;\r\n}\r\n\r\n.canceled-orders[_ngcontent-%COMP%]   .table-footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .page[_ngcontent-%COMP%] {\r\n    background-color: #0d6efd;\r\n    border: 1px solid #dee2e6;\r\n}\r\n\r\n.canceled-orders[_ngcontent-%COMP%]   .table-footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .prev[_ngcontent-%COMP%] {\r\n    background-color: #1a1f26;\r\n    border: 1px solid #dee2e6;\r\n    border-radius: 3px 0 0 3px;\r\n}\r\n\r\n.canceled-orders[_ngcontent-%COMP%]   .table-footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .next[_ngcontent-%COMP%] {\r\n    background-color: #1a1f26;\r\n    border: 1px solid #dee2e6;\r\n    border-radius: 0 3px 3px 0;\r\n}\r\n\r\n.canceled-orders[_ngcontent-%COMP%]   .table-footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .disable[_ngcontent-%COMP%] {\r\n    cursor: default;\r\n    background-color: grey;\r\n}\r\n\r\n@media (max-width:650px) {\r\n    .canceled-orders[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\r\n        font-size: 14px;\r\n    }\r\n    .canceled-orders[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\r\n        min-width: 600px;\r\n    }\r\n    .canceled-orders[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .canceled-orders[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n        padding: 10px 0px;\r\n    }\r\n    .canceled-orders[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .canceled-orders[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n        font-size: 14px;\r\n        font-weight: 400;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FuY2VsZWQvY2FuY2VsZWQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QseUJBQXlCO0lBQ3pCLGdDQUFnQztJQUNoQyxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDhCQUE4QjtJQUM5QixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsaUJBQWlCO0lBQ2pCLCtCQUErQjtJQUMvQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksV0FBVztJQUNYLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGVBQWU7SUFDZiwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSwrQkFBK0I7SUFDL0IsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGdDQUFnQztJQUNoQywrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw4QkFBOEI7SUFDOUIsZUFBZTtJQUNmLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsU0FBUztBQUNiOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsZUFBZTtJQUNmLFlBQVk7SUFDWiwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLHlCQUF5QjtJQUN6QiwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIseUJBQXlCO0lBQ3pCLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSTtRQUNJLGVBQWU7SUFDbkI7SUFDQTtRQUNJLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksaUJBQWlCO0lBQ3JCO0lBQ0E7UUFDSSxlQUFlO1FBQ2YsZ0JBQWdCO0lBQ3BCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9jYW5jZWxlZC9jYW5jZWxlZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhbmNlbGVkLW9yZGVycyB7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDIuNSU7XHJcbiAgICBjb2xvcjogI2IxYjFiNTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNzI5M2Q7XHJcbiAgICBmb250LWZhbWlseTogJ0NhaXJvJywgc2Fucy1zZXJpZjtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5jYW5jZWxlZC1vcmRlcnMgLnRvcC1oZWFkZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcclxufVxyXG5cclxuLmNhbmNlbGVkLW9yZGVycyAudG9wLWhlYWRlciBpbnB1dCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNDI0MzUxO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmIyZTRjO1xyXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAuNzUpO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIC4ycztcclxufVxyXG5cclxuLmNhbmNlbGVkLW9yZGVycyAudG9wLWhlYWRlciBpbnB1dDo6cGxhY2Vob2xkZXIge1xyXG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjUpO1xyXG59XHJcblxyXG4uY2FuY2VsZWQtb3JkZXJzIC50b3AtaGVhZGVyIGlucHV0OmZvY3VzIHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBib3JkZXItY29sb3I6ICMwZDZlZmQ7XHJcbn1cclxuXHJcbi5jYW5jZWxlZC1vcmRlcnMgLnRhYmxlOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICBoZWlnaHQ6IDhweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4uY2FuY2VsZWQtb3JkZXJzIC50YWJsZTo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE1MTkxZjtcclxufVxyXG5cclxuLmNhbmNlbGVkLW9yZGVycyB0YWJsZSB7XHJcbiAgICBtaW4td2lkdGg6IDY1MHB4O1xyXG59XHJcblxyXG4uY2FuY2VsZWQtb3JkZXJzIHRhYmxlIHRoLCAuY2FuY2VsZWQtb3JkZXJzIHRhYmxlIHRkIHtcclxuICAgIHBhZGRpbmc6IDE1cHggMDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG59XHJcblxyXG4uY2FuY2VsZWQtb3JkZXJzIHRhYmxlIHRoIHtcclxuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC44NSk7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4O1xyXG59XHJcblxyXG4uY2FuY2VsZWQtb3JkZXJzIHRhYmxlIHRkIHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNDI0MzUxO1xyXG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjc1KTtcclxufVxyXG5cclxuLmNhbmNlbGVkLW9yZGVycyB0YWJsZSBhIGkge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IC43cmVtO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4xcztcclxufVxyXG5cclxuLmNhbmNlbGVkLW9yZGVycyB0YWJsZSBhIGk6aG92ZXIge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xyXG59XHJcblxyXG4uY2FuY2VsZWQtb3JkZXJzIHRhYmxlIC52aWV3IHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG59XHJcblxyXG4uY2FuY2VsZWQtb3JkZXJzIC50YWJsZS1mb290ZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBwYWRkaW5nOiAxcmVtIDA7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbi5jYW5jZWxlZC1vcmRlcnMgLnRhYmxlLWZvb3RlciB1bCB7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4uY2FuY2VsZWQtb3JkZXJzIC50YWJsZS1mb290ZXIgdWwgbGkge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcGFkZGluZzogM3B4IDdweDtcclxuICAgIG1hcmdpbjogMCAxcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNDI0MzUxO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyYjJlNGM7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxufVxyXG5cclxuLmNhbmNlbGVkLW9yZGVycyAudGFibGUtZm9vdGVyIHVsIC5wYWdlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwZDZlZmQ7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGVlMmU2O1xyXG59XHJcblxyXG4uY2FuY2VsZWQtb3JkZXJzIC50YWJsZS1mb290ZXIgdWwgLnByZXYge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFhMWYyNjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZWUyZTY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHggMCAwIDNweDtcclxufVxyXG5cclxuLmNhbmNlbGVkLW9yZGVycyAudGFibGUtZm9vdGVyIHVsIC5uZXh0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxYTFmMjY7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGVlMmU2O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMCAzcHggM3B4IDA7XHJcbn1cclxuXHJcbi5jYW5jZWxlZC1vcmRlcnMgLnRhYmxlLWZvb3RlciB1bCAuZGlzYWJsZSB7XHJcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDo2NTBweCkge1xyXG4gICAgLmNhbmNlbGVkLW9yZGVycyBoNiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgfVxyXG4gICAgLmNhbmNlbGVkLW9yZGVycyB0YWJsZSB7XHJcbiAgICAgICAgbWluLXdpZHRoOiA2MDBweDtcclxuICAgIH1cclxuICAgIC5jYW5jZWxlZC1vcmRlcnMgdGFibGUgdGgsIC5jYW5jZWxlZC1vcmRlcnMgdGFibGUgdGQge1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMHB4O1xyXG4gICAgfVxyXG4gICAgLmNhbmNlbGVkLW9yZGVycyB0YWJsZSB0aCwgLmNhbmNlbGVkLW9yZGVycyB0YWJsZSB0ZCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICB9XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CanceledComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-canceled',
                templateUrl: './canceled.component.html',
                styleUrls: ['./canceled.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "rd1V":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class SignupComponent {
    constructor() { }
    ngOnInit() {
    }
}
SignupComponent.ɵfac = function SignupComponent_Factory(t) { return new (t || SignupComponent)(); };
SignupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SignupComponent, selectors: [["app-signup"]], decls: 53, vars: 0, consts: [[1, "register"], [1, "left"], [1, "curtain"], [1, "right", "py-3"], ["action", ""], [1, "form-group", "mt-4"], ["type", "text", "name", "", "placeholder", "Name", 1, "form-control"], [1, "form-group"], ["type", "text", "name", "", "placeholder", "Email", 1, "form-control"], [1, "form-group", "d-flex"], [1, "w-50", "mr-1"], ["type", "number", "name", "", "placeholder", "Phone", 1, "form-control"], [1, "w-50", "ml-1"], ["type", "number", "name", "", "placeholder", "Landline", 1, "form-control"], ["name", "", 1, "form-control"], ["selected", "", "disabled", ""], [1, "d-flex", "form-group"], ["type", "text", "name", "", "placeholder", "Street", 1, "form-control"], ["type", "number", "name", "", "placeholder", "House", 1, "form-control"], [1, "mr-2"], ["type", "file", "name", ""], ["type", "submit", "value", "Create Account", 1, "form-control", "text-center", "btn", "btn-warning"], ["routerLink", "/login"]], template: function SignupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Create Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Please enter pharmacy information to continue");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "select", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "City");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "cairo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "alex");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "giza");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "select", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Area");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "dokki");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "maadi");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Pharmacy Image: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Already have an account? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: [".register[_ngcontent-%COMP%] {\r\n    overflow: auto;\r\n    height: 100vh;\r\n}\r\n\r\n.register[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%] {\r\n    width: 35%;\r\n    height: 100%;\r\n    background-image: url(assets/images/Register.jpg);\r\n    background-size: cover;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-position: 50%;\r\n    float: left;\r\n    position: relative;\r\n}\r\n\r\n.register[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .curtain[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    left: 0;\r\n    top: 0;\r\n    background-color: rgba(0, 0, 0, .2);\r\n}\r\n\r\n.register[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\r\n    width: 65%;\r\n    height: 100%;\r\n    float: left;\r\n    padding: 1rem;\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.register[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\r\n    width: 50%;\r\n    margin: auto;\r\n}\r\n\r\n.register[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n    font-family: 'Oswald', sans-serif;\r\n    font-size: 32px;\r\n    font-weight: 600;\r\n    color: white;\r\n}\r\n\r\n.register[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .register[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n    color: rgba(255, 255, 255, .75);\r\n    font-size: 14px;\r\n    font-family: 'Roboto', sans-serif;\r\n}\r\n\r\n.register[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .register[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\r\n    font-size: 14px;\r\n    font-family: 'Roboto', sans-serif;\r\n}\r\n\r\n.register[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .register[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\r\n    border-color: #ffc107;\r\n    box-shadow: 0px 0px 5px #ffc107;\r\n}\r\n\r\n.register[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-outer-spin-button, .register[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-inner-spin-button {\r\n    -webkit-appearance: none;\r\n    margin: 0;\r\n}\r\n\r\n.register[_ngcontent-%COMP%]   input[type=number][_ngcontent-%COMP%] {\r\n    -moz-appearance: textfield;\r\n}\r\n\r\n.register[_ngcontent-%COMP%]   input[type=submit][_ngcontent-%COMP%] {\r\n    height: 40px;\r\n}\r\n\r\n.register[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    color: rgba(255, 255, 255, .65);\r\n    font-size: 14px;\r\n    margin-bottom: 0;\r\n}\r\n\r\n.register[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\r\n    cursor: pointer;\r\n    width: 15px;\r\n    height: 15px;\r\n    position: relative;\r\n    top: 2px;\r\n}\r\n\r\n@media (max-width: 950px) {\r\n    .register[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\r\n        width: 70%;\r\n        margin: auto;\r\n    }\r\n}\r\n\r\n@media (max-width: 750px) {\r\n    .register[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%] {\r\n        display: none;\r\n    }\r\n    .register[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\r\n        width: 100%;\r\n    }\r\n    .register[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\r\n        width: 60%;\r\n        margin: auto;\r\n    }\r\n}\r\n\r\n@media (max-width: 650px) {\r\n    .register[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\r\n        width: 75%;\r\n        margin: auto;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztJQUNkLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsWUFBWTtJQUNaLGtEQUFrRDtJQUNsRCxzQkFBc0I7SUFDdEIsMkJBQTJCO0lBQzNCLDRCQUE0QjtJQUM1Qix3QkFBd0I7SUFDeEIsV0FBVztJQUNYLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLE9BQU87SUFDUCxNQUFNO0lBQ04sbUNBQW1DO0FBQ3ZDOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7SUFDWixXQUFXO0lBQ1gsYUFBYTtJQUNiLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGlDQUFpQztJQUNqQyxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSwrQkFBK0I7SUFDL0IsZUFBZTtJQUNmLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLGVBQWU7SUFDZixpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSwrQkFBK0I7SUFDL0IsZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixRQUFRO0FBQ1o7O0FBRUE7SUFDSTtRQUNJLFVBQVU7UUFDVixZQUFZO0lBQ2hCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLGFBQWE7SUFDakI7SUFDQTtRQUNJLFdBQVc7SUFDZjtJQUNBO1FBQ0ksVUFBVTtRQUNWLFlBQVk7SUFDaEI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksVUFBVTtRQUNWLFlBQVk7SUFDaEI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3NpZ251cC9zaWdudXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZWdpc3RlciB7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbn1cclxuXHJcbi5yZWdpc3RlciAubGVmdCB7XHJcbiAgICB3aWR0aDogMzUlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1hZ2VzL1JlZ2lzdGVyLmpwZyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDUwJTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4ucmVnaXN0ZXIgLmxlZnQgLmN1cnRhaW4ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAuMik7XHJcbn1cclxuXHJcbi5yZWdpc3RlciAucmlnaHQge1xyXG4gICAgd2lkdGg6IDY1JTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4ucmVnaXN0ZXIgLnJpZ2h0IGZvcm0ge1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuLnJlZ2lzdGVyIC5yaWdodCBmb3JtIGgzIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnT3N3YWxkJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5yZWdpc3RlciAucmlnaHQgZm9ybSBzcGFuLCAucmVnaXN0ZXIgLnJpZ2h0IGZvcm0gbGFiZWwge1xyXG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjc1KTtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLnJlZ2lzdGVyIGZvcm0gaW5wdXQsIC5yZWdpc3RlciBmb3JtIHNlbGVjdCB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5yZWdpc3RlciBmb3JtIGlucHV0OmZvY3VzLCAucmVnaXN0ZXIgZm9ybSBzZWxlY3Q6Zm9jdXMge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZmZjMTA3O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggI2ZmYzEwNztcclxufVxyXG5cclxuLnJlZ2lzdGVyIGlucHV0Ojotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uLCAucmVnaXN0ZXIgaW5wdXQ6Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24ge1xyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4ucmVnaXN0ZXIgaW5wdXRbdHlwZT1udW1iZXJdIHtcclxuICAgIC1tb3otYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xyXG59XHJcblxyXG4ucmVnaXN0ZXIgaW5wdXRbdHlwZT1zdWJtaXRdIHtcclxuICAgIGhlaWdodDogNDBweDtcclxufVxyXG5cclxuLnJlZ2lzdGVyIC5yaWdodCBmb3JtIHAge1xyXG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjY1KTtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuXHJcbi5yZWdpc3RlciAucmlnaHQgZm9ybSBpbnB1dFt0eXBlPWNoZWNrYm94XSB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB3aWR0aDogMTVweDtcclxuICAgIGhlaWdodDogMTVweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogMnB4O1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogOTUwcHgpIHtcclxuICAgIC5yZWdpc3RlciAucmlnaHQgZm9ybSB7XHJcbiAgICAgICAgd2lkdGg6IDcwJTtcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NTBweCkge1xyXG4gICAgLnJlZ2lzdGVyIC5sZWZ0IHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gICAgLnJlZ2lzdGVyIC5yaWdodCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICAucmVnaXN0ZXIgLnJpZ2h0IGZvcm0ge1xyXG4gICAgICAgIHdpZHRoOiA2MCU7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNjUwcHgpIHtcclxuICAgIC5yZWdpc3RlciAucmlnaHQgZm9ybSB7XHJcbiAgICAgICAgd2lkdGg6IDc1JTtcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICB9XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-signup',
                templateUrl: './signup.component.html',
                styleUrls: ['./signup.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _messages_messages_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./messages/messages.component */ "DruN");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile/profile.component */ "W6KJ");
/* harmony import */ var _offers_offers_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./offers/offers.component */ "N5J3");
/* harmony import */ var _news_news_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./news/news.component */ "6XR0");
/* harmony import */ var _order_details_order_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./order-details/order-details.component */ "OGzB");
/* harmony import */ var _canceled_canceled_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./canceled/canceled.component */ "q7kc");
/* harmony import */ var _pending_pending_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pending/pending.component */ "5RyS");
/* harmony import */ var _completed_completed_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./completed/completed.component */ "KPFu");
/* harmony import */ var _add_product_add_product_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./add-product/add-product.component */ "WGIg");
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./products/products.component */ "ziXE");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./signup/signup.component */ "rd1V");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./not-found/not-found.component */ "nod/");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ "tyNb");


















const routes = [
    //{ path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"] },
    { path: 'register', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_10__["SignupComponent"] },
    { path: 'products', component: _products_products_component__WEBPACK_IMPORTED_MODULE_9__["ProductsComponent"] },
    { path: 'add-product', component: _add_product_add_product_component__WEBPACK_IMPORTED_MODULE_8__["AddProductComponent"] },
    { path: 'completed-orders', component: _completed_completed_component__WEBPACK_IMPORTED_MODULE_7__["CompletedComponent"] },
    { path: 'pending-orders', component: _pending_pending_component__WEBPACK_IMPORTED_MODULE_6__["PendingComponent"] },
    { path: 'canceled-orders', component: _canceled_canceled_component__WEBPACK_IMPORTED_MODULE_5__["CanceledComponent"] },
    { path: 'order-details', component: _order_details_order_details_component__WEBPACK_IMPORTED_MODULE_4__["OrderDetailsComponent"] },
    { path: 'news', component: _news_news_component__WEBPACK_IMPORTED_MODULE_3__["NewsComponent"] },
    { path: 'offers', component: _offers_offers_component__WEBPACK_IMPORTED_MODULE_2__["OffersComponent"] },
    { path: 'profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_1__["ProfileComponent"] },
    { path: 'inbox', component: _messages_messages_component__WEBPACK_IMPORTED_MODULE_0__["MessagesComponent"] },
    { path: '**', component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_12__["NotFoundComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_15__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_15__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_15__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_15__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_14__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_15__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_15__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "vtpD":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class LoginComponent {
    constructor() { }
    ngOnInit() {
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 28, vars: 0, consts: [[1, "register"], [1, "left"], [1, "curtain"], [1, "right", "py-3"], ["action", ""], [1, "form-group", "mt-4"], ["type", "text", "name", "", "placeholder", "Email", 1, "form-control"], [1, "form-group"], ["type", "password", "name", "", "placeholder", "Password", 1, "form-control"], [1, "form-check", "mb-2"], [1, "form-check-label", 2, "padding-left", "1px", "padding-bottom", "5px"], ["type", "checkbox", "name", "", 1, "form-check-input"], [1, "ml-1"], ["type", "submit", "routerLink", "/", "value", "Login", 1, "form-control", "text-center", "btn", "btn-warning"], ["routerLink", "/register"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Login to Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Please enter pharmacy email and password to continue");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Remember Me ?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Don't have an account? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Create Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: [".register[_ngcontent-%COMP%] {\r\n    overflow: auto;\r\n    height: 100vh;\r\n}\r\n\r\n.register[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%] {\r\n    width: 35%;\r\n    height: 100%;\r\n    background-image: url(assets/images/Login.jpg);\r\n    background-size: cover;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-position: 50%;\r\n    float: left;\r\n    position: relative;\r\n}\r\n\r\n.register[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .curtain[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    left: 0;\r\n    top: 0;\r\n    background-color: rgba(0, 0, 0, .2);\r\n}\r\n\r\n.register[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\r\n    width: 65%;\r\n    height: 100%;\r\n    float: left;\r\n    padding: 1rem;\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.register[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\r\n    width: 50%;\r\n    margin: auto;\r\n}\r\n\r\n.register[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n    font-family: 'Oswald', sans-serif;\r\n    font-size: 32px;\r\n    font-weight: 600;\r\n    color: #fff;\r\n}\r\n\r\n.register[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .register[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n    color: rgba(255, 255, 255, .75);\r\n    font-size: 14px;\r\n    font-family: 'Roboto', sans-serif;\r\n}\r\n\r\n.register[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .register[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\r\n    font-size: 14px;\r\n    font-family: 'Roboto', sans-serif;\r\n}\r\n\r\n.register[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .register[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\r\n    border-color: #ffc107;\r\n    box-shadow: 0px 0px 5px #ffc107;\r\n}\r\n\r\n.register[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-outer-spin-button, .register[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-inner-spin-button {\r\n    -webkit-appearance: none;\r\n    margin: 0;\r\n}\r\n\r\n.register[_ngcontent-%COMP%]   input[type=number][_ngcontent-%COMP%] {\r\n    -moz-appearance: textfield;\r\n}\r\n\r\n.register[_ngcontent-%COMP%]   input[type=submit][_ngcontent-%COMP%] {\r\n    height: 40px;\r\n}\r\n\r\n.register[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    color: rgba(255, 255, 255, .65);\r\n    font-size: 14px;\r\n}\r\n\r\n.register[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\r\n    cursor: pointer;\r\n    width: 15px;\r\n    height: 15px;\r\n    position: relative;\r\n    top: 2px;\r\n}\r\n\r\n@media (max-width: 950px) {\r\n    .register[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\r\n        width: 70%;\r\n        margin: auto;\r\n    }\r\n}\r\n\r\n@media (max-width: 750px) {\r\n    .register[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%] {\r\n        display: none;\r\n    }\r\n    .register[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\r\n        width: 100%;\r\n    }\r\n    .register[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\r\n        width: 60%;\r\n        margin: auto;\r\n    }\r\n}\r\n\r\n@media (max-width: 650px) {\r\n    .register[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\r\n        width: 75%;\r\n        margin: auto;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7SUFDZCxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7SUFDWiwrQ0FBK0M7SUFDL0Msc0JBQXNCO0lBQ3RCLDJCQUEyQjtJQUMzQiw0QkFBNEI7SUFDNUIsd0JBQXdCO0lBQ3hCLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWixPQUFPO0lBQ1AsTUFBTTtJQUNOLG1DQUFtQztBQUN2Qzs7QUFFQTtJQUNJLFVBQVU7SUFDVixZQUFZO0lBQ1osV0FBVztJQUNYLGFBQWE7SUFDYixhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxpQ0FBaUM7SUFDakMsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSwrQkFBK0I7SUFDL0IsZUFBZTtJQUNmLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLGVBQWU7SUFDZixpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSwrQkFBK0I7SUFDL0IsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixRQUFRO0FBQ1o7O0FBRUE7SUFDSTtRQUNJLFVBQVU7UUFDVixZQUFZO0lBQ2hCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLGFBQWE7SUFDakI7SUFDQTtRQUNJLFdBQVc7SUFDZjtJQUNBO1FBQ0ksVUFBVTtRQUNWLFlBQVk7SUFDaEI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksVUFBVTtRQUNWLFlBQVk7SUFDaEI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVnaXN0ZXIge1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG59XHJcblxyXG4ucmVnaXN0ZXIgLmxlZnQge1xyXG4gICAgd2lkdGg6IDM1JTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltYWdlcy9Mb2dpbi5qcGcpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCU7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLnJlZ2lzdGVyIC5sZWZ0IC5jdXJ0YWluIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRvcDogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgLjIpO1xyXG59XHJcblxyXG4ucmVnaXN0ZXIgLnJpZ2h0IHtcclxuICAgIHdpZHRoOiA2NSU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnJlZ2lzdGVyIC5yaWdodCBmb3JtIHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbi5yZWdpc3RlciAucmlnaHQgZm9ybSBoMyB7XHJcbiAgICBmb250LWZhbWlseTogJ09zd2FsZCcsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDMycHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5yZWdpc3RlciAucmlnaHQgZm9ybSBzcGFuLCAucmVnaXN0ZXIgLnJpZ2h0IGZvcm0gbGFiZWwge1xyXG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjc1KTtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLnJlZ2lzdGVyIGZvcm0gaW5wdXQsIC5yZWdpc3RlciBmb3JtIHNlbGVjdCB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5yZWdpc3RlciBmb3JtIGlucHV0OmZvY3VzLCAucmVnaXN0ZXIgZm9ybSBzZWxlY3Q6Zm9jdXMge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZmZjMTA3O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggI2ZmYzEwNztcclxufVxyXG5cclxuLnJlZ2lzdGVyIGlucHV0Ojotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uLCAucmVnaXN0ZXIgaW5wdXQ6Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24ge1xyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4ucmVnaXN0ZXIgaW5wdXRbdHlwZT1udW1iZXJdIHtcclxuICAgIC1tb3otYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xyXG59XHJcblxyXG4ucmVnaXN0ZXIgaW5wdXRbdHlwZT1zdWJtaXRdIHtcclxuICAgIGhlaWdodDogNDBweDtcclxufVxyXG5cclxuLnJlZ2lzdGVyIC5yaWdodCBmb3JtIHAge1xyXG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjY1KTtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuLnJlZ2lzdGVyIC5yaWdodCBmb3JtIGlucHV0W3R5cGU9Y2hlY2tib3hdIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHdpZHRoOiAxNXB4O1xyXG4gICAgaGVpZ2h0OiAxNXB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAycHg7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA5NTBweCkge1xyXG4gICAgLnJlZ2lzdGVyIC5yaWdodCBmb3JtIHtcclxuICAgICAgICB3aWR0aDogNzAlO1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc1MHB4KSB7XHJcbiAgICAucmVnaXN0ZXIgLmxlZnQge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAucmVnaXN0ZXIgLnJpZ2h0IHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIC5yZWdpc3RlciAucmlnaHQgZm9ybSB7XHJcbiAgICAgICAgd2lkdGg6IDYwJTtcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA2NTBweCkge1xyXG4gICAgLnJlZ2lzdGVyIC5yaWdodCBmb3JtIHtcclxuICAgICAgICB3aWR0aDogNzUlO1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgIH1cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "ziXE":
/*!************************************************!*\
  !*** ./src/app/products/products.component.ts ***!
  \************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ProductsComponent {
    constructor() {
        this.condation = true;
    }
    ngOnInit() {
        $(document).ready(function () {
        });
        $(document).on('click', function (event) {
            if ($(event.target).has('.delete-product').length) {
                $('html, body').css('overflow', 'auto');
                $('.action-view .delete-product').css('display', 'none');
                $('.action-view').css('display', 'none');
            }
            if ($(event.target).has('.edit-product').length) {
                $('html, body').css('overflow', 'auto');
                $('.action-view .edit-product').css('display', 'none');
                $('.action-view').css('display', 'none');
            }
        });
    }
    deleteProduct() {
        $('html, body').css('overflow', 'hidden');
        $('.action-view .delete-product').css('display', 'block');
        $('.action-view').css('display', 'flex');
    }
    editProduct() {
        $('html, body').css('overflow', 'hidden');
        $('.action-view .edit-product').css('display', 'block');
        $('.action-view').css('display', 'flex');
    }
    cancelProduct() {
        $('html, body').css('overflow', 'auto');
        $('.action-view .delete-product').css('display', 'none');
        $('.action-view').css('display', 'none');
    }
    status() {
        if (this.condation) {
            $('.action-view .edit-product .status').removeClass('active');
            this.condation = false;
        }
        else {
            $('.action-view .edit-product .status').addClass('active');
            this.condation = true;
        }
    }
}
ProductsComponent.ɵfac = function ProductsComponent_Factory(t) { return new (t || ProductsComponent)(); };
ProductsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductsComponent, selectors: [["app-products"]], decls: 248, vars: 0, consts: [[1, "products"], [1, "top-header"], ["action", ""], ["type", "text", "placeholder", "Search"], [1, "w-100", "table", 2, "overflow-x", "scroll"], [1, "m-auto", 2, "width", "97%"], ["type", "hidden", "value", ""], [1, "fa", "fa-edit", "text-warning", 3, "click"], [1, "fa", "fa-trash", "text-danger", 3, "click"], [1, "table-footer"], [2, "text-transform", "capitalize"], [1, "table-pages"], [1, "prev", "disable"], [1, "page"], [1, "next"], [1, "action-view"], [1, "delete-product", "my-3", "rounded"], [1, "m-auto"], ["type", "button", 1, "btn", "btn-danger", "mr-1"], ["type", "button", 1, "btn", "btn-success", "ml-1", 3, "click"], [1, "edit-product", "rounded", 2, "position", "relative"], [1, "container-fluid"], [1, "row"], [1, "col-12", "pt-2"], [1, "col-md-6", "py-2"], ["src", "assets/images/Products/1.jpg", "alt", "", 1, "img-fluid", "rounded", 2, "max-width", "12.75rem"], ["type", "file", 1, "w-100"], [1, "form-group", "mb-0"], ["type", "text", "value", "53", 1, "form-control"], ["type", "text", "value", "5", 1, "form-control"], [1, "form-group", "mb-0", "marked"], ["type", "text", "value", "20", 1, "w-100", 2, "padding", "5px 20px 5px 10px"], [1, "form-group", "mt-1", "mb-0"], [1, "status", "active", "float-right", 3, "click"], [1, "active-dot"], [1, "clearfix"], ["type", "submit", "value", "Save Changes", 1, "btn", "btn-primary", "form-control", 2, "color", "rgba(255, 255, 255, .85)"]], template: function ProductsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Products Table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "table", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Order");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Qty");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Discount");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "novaldol 1000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "23$");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "50");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " Pending ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " - ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductsComponent_Template_i_click_43_listener() { return ctx.editProduct(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductsComponent_Template_i_click_47_listener() { return ctx.deleteProduct(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Panadol Extra");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "45$");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "157");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " Active ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " 20% ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductsComponent_Template_i_click_62_listener() { return ctx.editProduct(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductsComponent_Template_i_click_66_listener() { return ctx.deleteProduct(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Panadol Extra");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "45$");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "157");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, " Active ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, " - ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductsComponent_Template_i_click_83_listener() { return ctx.editProduct(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductsComponent_Template_i_click_87_listener() { return ctx.deleteProduct(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Panadol Extra");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "45$");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "157");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, " Active ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, " - ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductsComponent_Template_i_click_104_listener() { return ctx.editProduct(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductsComponent_Template_i_click_108_listener() { return ctx.deleteProduct(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "Panadol Extra");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "45$");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "157");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, " Active ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, " 25% ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](124, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductsComponent_Template_i_click_125_listener() { return ctx.editProduct(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](128, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductsComponent_Template_i_click_129_listener() { return ctx.deleteProduct(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "Panadol Extra");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "45$");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "157");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, " Active ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, " - ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](145, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductsComponent_Template_i_click_146_listener() { return ctx.editProduct(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](149, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductsComponent_Template_i_click_150_listener() { return ctx.deleteProduct(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "Panadol Extra");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "45$");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, "157");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, " Active ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, " 5% ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](166, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductsComponent_Template_i_click_167_listener() { return ctx.editProduct(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](170, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductsComponent_Template_i_click_171_listener() { return ctx.deleteProduct(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174, "8");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, "Panadol Extra");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, "45$");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180, "157");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, " Active ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](184, " - ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](187, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductsComponent_Template_i_click_188_listener() { return ctx.editProduct(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](191, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductsComponent_Template_i_click_192_listener() { return ctx.deleteProduct(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](195, "page 1 from 10 pages");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](199, "prev");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](201, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](203, "next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](207, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](209, "Are you sure want to delete?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](212, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductsComponent_Template_button_click_213_listener() { return ctx.cancelProduct(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](214, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](220, "Black Mask");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](222, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](223, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](228, "Qty");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](229, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](232, "Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](233, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](236, "Discount");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](237, "input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](239, "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](242, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductsComponent_Template_div_click_243_listener() { return ctx.status(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](244, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](245, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](247, "input", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".products[_ngcontent-%COMP%] {\r\n    padding: 20px 2.5%;\r\n    color: #b1b1b5;\r\n    background-color: #27293d;\r\n    font-family: 'Cairo', sans-serif;\r\n    overflow: hidden;\r\n}\r\n\r\n.products[_ngcontent-%COMP%]   .top-header[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    padding-bottom: 15px;\r\n}\r\n\r\n.products[_ngcontent-%COMP%]   .top-header[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n    border: 1px solid #424351;\r\n    font-weight: 400;\r\n    font-size: 0.875rem;\r\n    background-color: #2b2e4c;\r\n    padding: 5px 10px;\r\n    color: rgba(255, 255, 255, .75);\r\n    transition: all .2s;\r\n}\r\n\r\n.products[_ngcontent-%COMP%]   .top-header[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\r\n    color: rgba(255, 255, 255, .5);\r\n}\r\n\r\n.products[_ngcontent-%COMP%]   .top-header[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\r\n    outline: none;\r\n    border-color: #0d6efd;\r\n}\r\n\r\n.products[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n    height: 8px;\r\n    background-color: transparent;\r\n}\r\n\r\n.products[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n    background-color: #15191f;\r\n}\r\n\r\n.products[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\r\n    min-width: 625px;\r\n}\r\n\r\n.products[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .products[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n    padding: 15px 0px;\r\n    text-transform: capitalize;\r\n}\r\n\r\n.products[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n    color: rgba(255, 255, 255, .85);\r\n    font-weight: 400;\r\n    border-bottom: 1px;\r\n}\r\n\r\n.products[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n    border-bottom: 1px solid #424351;\r\n    color: rgba(255, 255, 255, .75);\r\n}\r\n\r\n.products[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    font-size: 18px;\r\n    margin-left: .7rem;\r\n    cursor: pointer;\r\n    transition: transform .1s;\r\n}\r\n\r\n.products[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover {\r\n    transform: scale(1.2);\r\n}\r\n\r\n.products[_ngcontent-%COMP%]   .table-footer[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    padding: 1rem 0;\r\n    font-size: 14px;\r\n}\r\n\r\n.products[_ngcontent-%COMP%]   .table-footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n    list-style: none;\r\n    margin: 0;\r\n}\r\n\r\n.products[_ngcontent-%COMP%]   .table-footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    padding: 3px 7px;\r\n    margin: 0 1px;\r\n    border: 1px solid #424351;\r\n    font-weight: 400;\r\n    background-color: #2b2e4c;\r\n    cursor: pointer;\r\n    color: white;\r\n    text-transform: capitalize;\r\n}\r\n\r\n.products[_ngcontent-%COMP%]   .table-footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .page[_ngcontent-%COMP%] {\r\n    background-color: #0d6efd;\r\n    border: 1px solid #dee2e6;\r\n}\r\n\r\n.products[_ngcontent-%COMP%]   .table-footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .prev[_ngcontent-%COMP%] {\r\n    background-color: #1a1f26;\r\n    border: 1px solid #dee2e6;\r\n    border-radius: 3px 0 0 3px;\r\n}\r\n\r\n.products[_ngcontent-%COMP%]   .table-footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .next[_ngcontent-%COMP%] {\r\n    background-color: #1a1f26;\r\n    border: 1px solid #dee2e6;\r\n    border-radius: 0 3px 3px 0;\r\n}\r\n\r\n.products[_ngcontent-%COMP%]   .table-footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .disable[_ngcontent-%COMP%] {\r\n    cursor: default;\r\n    background-color: grey;\r\n}\r\n\r\n.action-view[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    width: 100%;\r\n    height: 100%;\r\n    left: 0;\r\n    top: 0;\r\n    background-color: rgba(0, 0, 0, .4);\r\n    z-index: 9999;\r\n    display: none;\r\n    justify-content: center;\r\n    align-items: center;\r\n    padding: 2.5%;\r\n    overflow-y: scroll;\r\n    overflow-x: hidden;\r\n}\r\n\r\n.action-view[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n    width: 7px;\r\n    background-color: transparent;\r\n}\r\n\r\n.action-view[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n    background-color: #15191f;\r\n}\r\n\r\n.action-view[_ngcontent-%COMP%]   .delete-product[_ngcontent-%COMP%] {\r\n    background-color: #080a13;\r\n    text-align: center;\r\n    padding: 30px 0px;\r\n    width: 400px;\r\n    display: none;\r\n}\r\n\r\n.action-view[_ngcontent-%COMP%]   .delete-product[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n    color: rgba(255, 255, 255, .85);\r\n}\r\n\r\n.action-view[_ngcontent-%COMP%]   .edit-product[_ngcontent-%COMP%] {\r\n    display: none;\r\n    background-color: #080a13;\r\n    width: 500px;\r\n}\r\n\r\n.action-view[_ngcontent-%COMP%]   .edit-product[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n    font-size: 20px;\r\n    letter-spacing: 1px;\r\n}\r\n\r\n.action-view[_ngcontent-%COMP%]   .edit-product[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n    font-size: 16px;\r\n    color: rgba(255, 255, 255, .6);\r\n}\r\n\r\n.action-view[_ngcontent-%COMP%]   .edit-product[_ngcontent-%COMP%]   input[type=\"text\"][_ngcontent-%COMP%] {\r\n    background-color: #2b2e4c;\r\n    color: rgba(255, 255, 255, .6);\r\n    font-family: 'Cairo', sans-serif;\r\n    border: none;\r\n}\r\n\r\n.action-view[_ngcontent-%COMP%]   .edit-product[_ngcontent-%COMP%]   .marked[_ngcontent-%COMP%] {\r\n    position: relative;\r\n}\r\n\r\n.action-view[_ngcontent-%COMP%]   .edit-product[_ngcontent-%COMP%]   .marked[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    right: .8rem;\r\n    top: 2.3rem;\r\n    background-color: transparent;\r\n    color: rgba(255, 255, 255, .6);\r\n    font-size: 16px;\r\n}\r\n\r\n.action-view[_ngcontent-%COMP%]   .edit-product[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%] {\r\n    margin-left: .5rem;\r\n    position: relative;\r\n    top: .3rem;\r\n    display: inline-block;\r\n    width: 40px;\r\n    height: 20px;\r\n    cursor: pointer;\r\n    border-radius: 20px;\r\n    overflow: hidden;\r\n    transition: .3s;\r\n    background-color: red;\r\n}\r\n\r\n.action-view[_ngcontent-%COMP%]   .edit-product[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%]   .active-dot[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 2px;\r\n    right: 2px;\r\n    background-color: white;\r\n    width: 16px;\r\n    height: 16px;\r\n    border-radius: 50%;\r\n    transition: .3s;\r\n}\r\n\r\n.action-view[_ngcontent-%COMP%]   .edit-product[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]   .active-dot[_ngcontent-%COMP%] {\r\n    transform: translateX(-20px);\r\n}\r\n\r\n.action-view[_ngcontent-%COMP%]   .edit-product[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\r\n    background-color: green;\r\n}\r\n\r\n@media (max-width:650px) {\r\n    .products[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\r\n        font-size: 14px;\r\n    }\r\n    .products[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\r\n        min-width: 500px;\r\n    }\r\n    .products[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .products[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n        padding: 10px 0px;\r\n    }\r\n    .products[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .products[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n        font-size: 14px;\r\n        font-weight: 400;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdHMvcHJvZHVjdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QseUJBQXlCO0lBQ3pCLGdDQUFnQztJQUNoQyxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDhCQUE4QjtJQUM5QixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsaUJBQWlCO0lBQ2pCLCtCQUErQjtJQUMvQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksV0FBVztJQUNYLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQiwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSwrQkFBK0I7SUFDL0IsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGdDQUFnQztJQUNoQywrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDhCQUE4QjtJQUM5QixlQUFlO0lBQ2YsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYix5QkFBeUI7SUFDekIsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2YsWUFBWTtJQUNaLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6Qix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIseUJBQXlCO0lBQ3pCLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixXQUFXO0lBQ1gsWUFBWTtJQUNaLE9BQU87SUFDUCxNQUFNO0lBQ04sbUNBQW1DO0lBQ25DLGFBQWE7SUFDYixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFVBQVU7SUFDViw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osYUFBYTtBQUNqQjs7QUFFQTtJQUNJLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLGFBQWE7SUFDYix5QkFBeUI7SUFDekIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLDhCQUE4QjtJQUM5QixnQ0FBZ0M7SUFDaEMsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osV0FBVztJQUNYLDZCQUE2QjtJQUM3Qiw4QkFBOEI7SUFDOUIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFVBQVU7SUFDVix1QkFBdUI7SUFDdkIsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJO1FBQ0ksZUFBZTtJQUNuQjtJQUNBO1FBQ0ksZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSxpQkFBaUI7SUFDckI7SUFDQTtRQUNJLGVBQWU7UUFDZixnQkFBZ0I7SUFDcEI7QUFDSjs7QUFFQTs7Ozs7Ozs7OztDQVVDIiwiZmlsZSI6InNyYy9hcHAvcHJvZHVjdHMvcHJvZHVjdHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9kdWN0cyB7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDIuNSU7XHJcbiAgICBjb2xvcjogI2IxYjFiNTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNzI5M2Q7XHJcbiAgICBmb250LWZhbWlseTogJ0NhaXJvJywgc2Fucy1zZXJpZjtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5wcm9kdWN0cyAudG9wLWhlYWRlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG59XHJcblxyXG4ucHJvZHVjdHMgLnRvcC1oZWFkZXIgaW5wdXQge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzQyNDM1MTtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBmb250LXNpemU6IDAuODc1cmVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJiMmU0YztcclxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjc1KTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAuMnM7XHJcbn1cclxuXHJcbi5wcm9kdWN0cyAudG9wLWhlYWRlciBpbnB1dDo6cGxhY2Vob2xkZXIge1xyXG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjUpO1xyXG59XHJcblxyXG4ucHJvZHVjdHMgLnRvcC1oZWFkZXIgaW5wdXQ6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJvcmRlci1jb2xvcjogIzBkNmVmZDtcclxufVxyXG5cclxuLnByb2R1Y3RzIC50YWJsZTo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgaGVpZ2h0OiA4cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLnByb2R1Y3RzIC50YWJsZTo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE1MTkxZjtcclxufVxyXG5cclxuLnByb2R1Y3RzIHRhYmxlIHtcclxuICAgIG1pbi13aWR0aDogNjI1cHg7XHJcbn1cclxuXHJcbi5wcm9kdWN0cyB0YWJsZSB0aCwgLnByb2R1Y3RzIHRhYmxlIHRkIHtcclxuICAgIHBhZGRpbmc6IDE1cHggMHB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbn1cclxuXHJcbi5wcm9kdWN0cyB0YWJsZSB0aCB7XHJcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAuODUpO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweDtcclxufVxyXG5cclxuLnByb2R1Y3RzIHRhYmxlIHRkIHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNDI0MzUxO1xyXG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjc1KTtcclxufVxyXG5cclxuLnByb2R1Y3RzIHRhYmxlIGkge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IC43cmVtO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4xcztcclxufVxyXG5cclxuLnByb2R1Y3RzIHRhYmxlIGk6aG92ZXIge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xyXG59XHJcblxyXG4ucHJvZHVjdHMgLnRhYmxlLWZvb3RlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHBhZGRpbmc6IDFyZW0gMDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuLnByb2R1Y3RzIC50YWJsZS1mb290ZXIgdWwge1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxuLnByb2R1Y3RzIC50YWJsZS1mb290ZXIgdWwgbGkge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcGFkZGluZzogM3B4IDdweDtcclxuICAgIG1hcmdpbjogMCAxcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNDI0MzUxO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyYjJlNGM7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxufVxyXG5cclxuLnByb2R1Y3RzIC50YWJsZS1mb290ZXIgdWwgLnBhZ2Uge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBkNmVmZDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZWUyZTY7XHJcbn1cclxuXHJcbi5wcm9kdWN0cyAudGFibGUtZm9vdGVyIHVsIC5wcmV2IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxYTFmMjY7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGVlMmU2O1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4IDAgMCAzcHg7XHJcbn1cclxuXHJcbi5wcm9kdWN0cyAudGFibGUtZm9vdGVyIHVsIC5uZXh0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxYTFmMjY7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGVlMmU2O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMCAzcHggM3B4IDA7XHJcbn1cclxuXHJcbi5wcm9kdWN0cyAudGFibGUtZm9vdGVyIHVsIC5kaXNhYmxlIHtcclxuICAgIGN1cnNvcjogZGVmYXVsdDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XHJcbn1cclxuXHJcbi5hY3Rpb24tdmlldyB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC40KTtcclxuICAgIHotaW5kZXg6IDk5OTk7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMi41JTtcclxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxufVxyXG5cclxuLmFjdGlvbi12aWV3Ojotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICB3aWR0aDogN3B4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5hY3Rpb24tdmlldzo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE1MTkxZjtcclxufVxyXG5cclxuLmFjdGlvbi12aWV3IC5kZWxldGUtcHJvZHVjdCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDgwYTEzO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMzBweCAwcHg7XHJcbiAgICB3aWR0aDogNDAwcHg7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uYWN0aW9uLXZpZXcgLmRlbGV0ZS1wcm9kdWN0IGg0IHtcclxuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC44NSk7XHJcbn1cclxuXHJcbi5hY3Rpb24tdmlldyAuZWRpdC1wcm9kdWN0IHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDgwYTEzO1xyXG4gICAgd2lkdGg6IDUwMHB4O1xyXG59XHJcblxyXG4uYWN0aW9uLXZpZXcgLmVkaXQtcHJvZHVjdCBoMiB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG59XHJcblxyXG4uYWN0aW9uLXZpZXcgLmVkaXQtcHJvZHVjdCBsYWJlbCB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAuNik7XHJcbn1cclxuXHJcbi5hY3Rpb24tdmlldyAuZWRpdC1wcm9kdWN0IGlucHV0W3R5cGU9XCJ0ZXh0XCJdIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyYjJlNGM7XHJcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAuNik7XHJcbiAgICBmb250LWZhbWlseTogJ0NhaXJvJywgc2Fucy1zZXJpZjtcclxuICAgIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuLmFjdGlvbi12aWV3IC5lZGl0LXByb2R1Y3QgLm1hcmtlZCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5hY3Rpb24tdmlldyAuZWRpdC1wcm9kdWN0IC5tYXJrZWQgc3BhbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogLjhyZW07XHJcbiAgICB0b3A6IDIuM3JlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjYpO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcblxyXG4uYWN0aW9uLXZpZXcgLmVkaXQtcHJvZHVjdCAuc3RhdHVzIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAuNXJlbTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogLjNyZW07XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdHJhbnNpdGlvbjogLjNzO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG59XHJcblxyXG4uYWN0aW9uLXZpZXcgLmVkaXQtcHJvZHVjdCAuc3RhdHVzIC5hY3RpdmUtZG90IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMnB4O1xyXG4gICAgcmlnaHQ6IDJweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgd2lkdGg6IDE2cHg7XHJcbiAgICBoZWlnaHQ6IDE2cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB0cmFuc2l0aW9uOiAuM3M7XHJcbn1cclxuXHJcbi5hY3Rpb24tdmlldyAuZWRpdC1wcm9kdWN0IC5hY3RpdmUgLmFjdGl2ZS1kb3Qge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yMHB4KTtcclxufVxyXG5cclxuLmFjdGlvbi12aWV3IC5lZGl0LXByb2R1Y3QgLmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6NjUwcHgpIHtcclxuICAgIC5wcm9kdWN0cyBoNiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgfVxyXG4gICAgLnByb2R1Y3RzIHRhYmxlIHtcclxuICAgICAgICBtaW4td2lkdGg6IDUwMHB4O1xyXG4gICAgfVxyXG4gICAgLnByb2R1Y3RzIHRhYmxlIHRoLCAucHJvZHVjdHMgdGFibGUgdGQge1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMHB4O1xyXG4gICAgfVxyXG4gICAgLnByb2R1Y3RzIHRhYmxlIHRoLCAucHJvZHVjdHMgdGFibGUgdGQge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKlxyXG4jZGVlMmU2XHJcbiNmZmMxMDdcclxuZm9udC1mYW1pbHk6ICdBbGVncmV5YScsIHNlcmlmO1xyXG5mb250LWZhbWlseTogJ0FsZWdyZXlhIFNhbnMgU0MnLCBzYW5zLXNlcmlmO1xyXG5mb250LWZhbWlseTogJ0NhaXJvJywgc2Fucy1zZXJpZjtcclxuZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiAjM2EzZjUxO1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiAjMWUxZTJmO1xyXG4jMjcyOTNkXHJcbiovIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-products',
                templateUrl: './products.component.html',
                styleUrls: ['./products.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
