(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-mediaplayer-mediaplayer-module"],{

/***/ "./node_modules/@ionic-native/themeable-browser/ngx/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@ionic-native/themeable-browser/ngx/index.js ***!
  \*******************************************************************/
/*! exports provided: ThemeableBrowserObject, ThemeableBrowser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeableBrowserObject", function() { return ThemeableBrowserObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeableBrowser", function() { return ThemeableBrowser; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/core */ "./node_modules/@ionic-native/core/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ThemeableBrowserObject = /** @class */ (function () {
    function ThemeableBrowserObject(url, target, styleOptions) {
        try {
            this._objectInstance = cordova.ThemeableBrowser.open(url, target, styleOptions);
        }
        catch (e) {
            if (typeof window !== 'undefined') {
                window.open(url);
            }
            console.warn('Native: ThemeableBrowser is not installed or you are running on a browser. Falling back to window.open.');
        }
    }
    ThemeableBrowserObject.prototype.show = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaInstance"])(this, "show", { "sync": true }, arguments); };
    ThemeableBrowserObject.prototype.close = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaInstance"])(this, "close", { "sync": true }, arguments); };
    ThemeableBrowserObject.prototype.reload = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaInstance"])(this, "reload", { "sync": true }, arguments); };
    ThemeableBrowserObject.prototype.executeScript = function (script) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaInstance"])(this, "executeScript", {}, arguments); };
    ThemeableBrowserObject.prototype.insertCss = function (css) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaInstance"])(this, "insertCss", {}, arguments); };
    ThemeableBrowserObject.prototype.on = function (event) {
        var _this = this;
        return (function () {
            if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["instanceAvailability"])(_this) === true) {
                return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
                    _this._objectInstance.addEventListener(event, observer.next.bind(observer));
                    return function () {
                        return _this._objectInstance.removeEventListener(event, observer.next.bind(observer));
                    };
                });
            }
        })();
    };
    return ThemeableBrowserObject;
}());

var ThemeableBrowser = /** @class */ (function (_super) {
    __extends(ThemeableBrowser, _super);
    function ThemeableBrowser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Creates a browser instance
     * @param url {string} URL to open
     * @param target {string} Target
     * @param styleOptions {ThemeableBrowserOptions} Themeable browser options
     * @returns {ThemeableBrowserObject}
     */
    ThemeableBrowser.prototype.create = function (url, target, styleOptions) {
        return new ThemeableBrowserObject(url, target, styleOptions);
    };
    ThemeableBrowser.pluginName = "ThemeableBrowser";
    ThemeableBrowser.plugin = "cordova-plugin-themeablebrowser";
    ThemeableBrowser.pluginRef = "cordova.ThemeableBrowser";
    ThemeableBrowser.repo = "https://github.com/initialxy/cordova-plugin-themeablebrowser";
    ThemeableBrowser.platforms = ["Amazon Fire OS", "Android", "Blackberry 10", "Browser", "FirefoxOS", "iOS", "Ubuntu", "Windows", "Windows Phone"];
    ThemeableBrowser = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], ThemeableBrowser);
    return ThemeableBrowser;
}(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["IonicNativePlugin"]));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3RoZW1lYWJsZS1icm93c2VyL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLDREQUE2RCxNQUFNLG9CQUFvQixDQUFDO0FBQy9GLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7O0lBeUVoQyxnQ0FDRSxHQUFXLEVBQ1gsTUFBYyxFQUNkLFlBQXFDO1FBRXJDLElBQUk7WUFDRixJQUFJLENBQUMsZUFBZSxHQUFHLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQ2xELEdBQUcsRUFDSCxNQUFNLEVBQ04sWUFBWSxDQUNiLENBQUM7U0FDSDtRQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ1YsSUFBSSxPQUFPLE1BQU0sS0FBSyxXQUFXLEVBQUU7Z0JBQ2pDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDbEI7WUFDRCxPQUFPLENBQUMsSUFBSSxDQUNWLHlHQUF5RyxDQUMxRyxDQUFDO1NBQ0g7SUFDSCxDQUFDO0lBT0QscUNBQUk7SUFNSixzQ0FBSztJQU1MLHVDQUFNO0lBUU4sOENBQWEsYUFBQyxNQUF3QztJQVV0RCwwQ0FBUyxhQUFDLEdBQXFDO0lBVy9DLG1DQUFFLGFBQUMsS0FBYTs7O3NEQUFtQjtnQkFDakMsT0FBTyxJQUFJLFVBQVUsQ0FBTSxVQUFBLFFBQVE7b0JBQ2pDLEtBQUksQ0FBQyxlQUFlLENBQUMsZ0JBQWdCLENBQ25DLEtBQUssRUFDTCxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FDN0IsQ0FBQztvQkFDRixPQUFPO3dCQUNMLE9BQUEsS0FBSSxDQUFDLGVBQWUsQ0FBQyxtQkFBbUIsQ0FDdEMsS0FBSyxFQUNMLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUM3QjtvQkFIRCxDQUdDLENBQUM7Z0JBQ04sQ0FBQyxDQUFDLENBQUM7YUFDSjs7O2lDQTFKSDs7OztJQW9Rc0Msb0NBQWlCOzs7O0lBQ3JEOzs7Ozs7T0FNRztJQUNILGlDQUFNLEdBQU4sVUFDRSxHQUFXLEVBQ1gsTUFBYyxFQUNkLFlBQXFDO1FBRXJDLE9BQU8sSUFBSSxzQkFBc0IsQ0FBQyxHQUFHLEVBQUUsTUFBTSxFQUFFLFlBQVksQ0FBQyxDQUFDO0lBQy9ELENBQUM7Ozs7OztJQWRVLGdCQUFnQjtRQUQ1QixVQUFVLEVBQUU7T0FDQSxnQkFBZ0I7MkJBcFE3QjtFQW9Rc0MsaUJBQWlCO1NBQTFDLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmFJbnN0YW5jZSwgSW5zdGFuY2VDaGVjaywgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmRlY2xhcmUgY29uc3QgY29yZG92YTogYW55O1xuXG5leHBvcnQgaW50ZXJmYWNlIFRoZW1lYWJsZUJyb3dzZXJCdXR0b24ge1xuICB3d3dJbWFnZT86IHN0cmluZztcbiAgaW1hZ2U/OiBzdHJpbmc7XG4gIHd3d0ltYWdlUHJlc3NlZD86IHN0cmluZztcbiAgaW1hZ2VQcmVzc2VkPzogc3RyaW5nO1xuICB3d3dJbWFnZURlbnNpdHk/OiBudW1iZXI7XG4gIGFsaWduPzogc3RyaW5nO1xuICBldmVudD86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUaGVtZWFibGVCcm93c2VyT3B0aW9ucyB7XG4gIHN0YXR1c2Jhcj86IHtcbiAgICBjb2xvcjogc3RyaW5nO1xuICB9O1xuICB0b29sYmFyPzoge1xuICAgIGhlaWdodD86IG51bWJlcjtcbiAgICBjb2xvcj86IHN0cmluZztcbiAgICBpbWFnZT86IHN0cmluZztcbiAgfTtcbiAgdGl0bGU/OiB7XG4gICAgY29sb3I/OiBzdHJpbmc7XG4gICAgc3RhdGljVGV4dD86IHN0cmluZztcbiAgICBzaG93UGFnZVRpdGxlPzogYm9vbGVhbjtcbiAgfTtcbiAgYmFja0J1dHRvbj86IFRoZW1lYWJsZUJyb3dzZXJCdXR0b247XG4gIGZvcndhcmRCdXR0b24/OiBUaGVtZWFibGVCcm93c2VyQnV0dG9uO1xuICBjbG9zZUJ1dHRvbj86IFRoZW1lYWJsZUJyb3dzZXJCdXR0b247XG4gIGN1c3RvbUJ1dHRvbnM/OiBUaGVtZWFibGVCcm93c2VyQnV0dG9uW107XG4gIG1lbnU/OiB7XG4gICAgaW1hZ2U/OiBzdHJpbmc7XG4gICAgaW1hZ2VQcmVzc2VkPzogc3RyaW5nO1xuICAgIHRpdGxlPzogc3RyaW5nO1xuICAgIGNhbmNlbD86IHN0cmluZztcbiAgICBhbGlnbj86IHN0cmluZztcbiAgICBpdGVtcz86IHtcbiAgICAgIGV2ZW50OiBzdHJpbmc7XG4gICAgICBsYWJlbDogc3RyaW5nO1xuICAgIH1bXTtcbiAgfTtcbiAgYmFja0J1dHRvbkNhbkNsb3NlPzogYm9vbGVhbjtcbiAgZGlzYWJsZUFuaW1hdGlvbj86IGJvb2xlYW47XG5cbiAgLy8gaW5BcHBCcm93c2VyIG9wdGlvbnNcbiAgbG9jYXRpb24/OiBzdHJpbmc7XG4gIGhpZGRlbj86IGJvb2xlYW47XG4gIGNsZWFyY2FjaGU/OiBib29sZWFuO1xuICBjbGVhcnNlc3Npb25jYWNoZT86IGJvb2xlYW47XG4gIHpvb20/OiBzdHJpbmc7XG4gIGhhcmR3YXJlYmFjaz86IHN0cmluZztcbiAgbWVkaWFQbGF5YmFja1JlcXVpcmVzVXNlckFjdGlvbj86IHN0cmluZztcbiAgc2hvdWxkUGF1c2VPblN1c3BzZW5kPzogc3RyaW5nO1xuICBjbG9zZWJ1dHRvbmNhcHRpb24/OiBzdHJpbmc7XG4gIGRpc2FsbG93b3ZlcnNjcm9sbD86IHN0cmluZztcbiAgZW5hYmxlVmlld3BvcnRTY2FsZT86IHN0cmluZztcbiAgYWxsb3dJbmxpbmVNZWRpYVBsYXliYWNrPzogc3RyaW5nO1xuICBrZXlib2FyZERpc3BsYXlSZXF1aXJlc1VzZXJBY3Rpb24/OiBzdHJpbmc7XG4gIHN1cHByZXNzZXNJbmNyZW1lbnRhbFJlbmRlcmluZz86IHN0cmluZztcbiAgcHJlc2VudGF0aW9uc3R5bGU/OiBzdHJpbmc7XG4gIHRyYW5zaXRpb25zdHlsZT86IHN0cmluZztcbiAgdG9vbGJhcnBvc2l0aW9uPzogc3RyaW5nO1xuICBmdWxsc2NyZWVuPzogc3RyaW5nO1xufVxuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuZXhwb3J0IGNsYXNzIFRoZW1lYWJsZUJyb3dzZXJPYmplY3Qge1xuICBwcml2YXRlIF9vYmplY3RJbnN0YW5jZTogYW55O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHVybDogc3RyaW5nLFxuICAgIHRhcmdldDogc3RyaW5nLFxuICAgIHN0eWxlT3B0aW9uczogVGhlbWVhYmxlQnJvd3Nlck9wdGlvbnNcbiAgKSB7XG4gICAgdHJ5IHtcbiAgICAgIHRoaXMuX29iamVjdEluc3RhbmNlID0gY29yZG92YS5UaGVtZWFibGVCcm93c2VyLm9wZW4oXG4gICAgICAgIHVybCxcbiAgICAgICAgdGFyZ2V0LFxuICAgICAgICBzdHlsZU9wdGlvbnNcbiAgICAgICk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHdpbmRvdy5vcGVuKHVybCk7XG4gICAgICB9XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICdOYXRpdmU6IFRoZW1lYWJsZUJyb3dzZXIgaXMgbm90IGluc3RhbGxlZCBvciB5b3UgYXJlIHJ1bm5pbmcgb24gYSBicm93c2VyLiBGYWxsaW5nIGJhY2sgdG8gd2luZG93Lm9wZW4uJ1xuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRGlzcGxheXMgYW4gYnJvd3NlciB3aW5kb3cgdGhhdCB3YXMgb3BlbmVkIGhpZGRlbi4gQ2FsbGluZyB0aGlzIGhhcyBubyBlZmZlY3RcbiAgICogaWYgdGhlIGJyb3dzZXIgd2FzIGFscmVhZHkgdmlzaWJsZS5cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHNob3coKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBDbG9zZXMgdGhlIGJyb3dzZXIgd2luZG93LlxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgY2xvc2UoKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBSZWxvYWRzIHRoZSBjdXJyZW50IHBhZ2VcbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHJlbG9hZCgpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIEluamVjdHMgSmF2YVNjcmlwdCBjb2RlIGludG8gdGhlIGJyb3dzZXIgd2luZG93LlxuICAgKiBAcGFyYW0gc2NyaXB0ICAgIERldGFpbHMgb2YgdGhlIHNjcmlwdCB0byBydW4sIHNwZWNpZnlpbmcgZWl0aGVyIGEgZmlsZSBvciBjb2RlIGtleS5cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoKVxuICBleGVjdXRlU2NyaXB0KHNjcmlwdDogeyBmaWxlPzogc3RyaW5nOyBjb2RlPzogc3RyaW5nIH0pOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbmplY3RzIENTUyBpbnRvIHRoZSBicm93c2VyIHdpbmRvdy5cbiAgICogQHBhcmFtIGNzcyAgICAgICBEZXRhaWxzIG9mIHRoZSBzY3JpcHQgdG8gcnVuLCBzcGVjaWZ5aW5nIGVpdGhlciBhIGZpbGUgb3IgY29kZSBrZXkuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKClcbiAgaW5zZXJ0Q3NzKGNzczogeyBmaWxlPzogc3RyaW5nOyBjb2RlPzogc3RyaW5nIH0pOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBBIG1ldGhvZCB0aGF0IGFsbG93cyB5b3UgdG8gbGlzdGVuIHRvIGV2ZW50cyBoYXBwZW5pbmcgaW4gdGhlIGJyb3dzZXIuXG4gICAqIEF2YWlsYWJsZSBldmVudHMgYXJlOiBgVGhlbWVhYmxlQnJvd3NlckVycm9yYCwgYFRoZW1lYWJsZUJyb3dzZXJXYXJuaW5nYCwgYGNyaXRpY2FsYCwgYGxvYWRmYWlsYCwgYHVuZXhwZWN0ZWRgLCBgdW5kZWZpbmVkYFxuICAgKiBAcGFyYW0gZXZlbnQgRXZlbnQgbmFtZVxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxhbnk+fSBSZXR1cm5zIGJhY2sgYW4gb2JzZXJ2YWJsZSB0aGF0IHdpbGwgbGlzdGVuIHRvIHRoZSBldmVudCBvbiBzdWJzY3JpYmUsIGFuZCB3aWxsIHN0b3AgbGlzdGVuaW5nIHRvIHRoZSBldmVudCBvbiB1bnN1YnNjcmliZS5cbiAgICovXG4gIEBJbnN0YW5jZUNoZWNrKHsgb2JzZXJ2YWJsZTogdHJ1ZSB9KVxuICBvbihldmVudDogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGU8YW55PihvYnNlcnZlciA9PiB7XG4gICAgICB0aGlzLl9vYmplY3RJbnN0YW5jZS5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICBldmVudCxcbiAgICAgICAgb2JzZXJ2ZXIubmV4dC5iaW5kKG9ic2VydmVyKVxuICAgICAgKTtcbiAgICAgIHJldHVybiAoKSA9PlxuICAgICAgICB0aGlzLl9vYmplY3RJbnN0YW5jZS5yZW1vdmVFdmVudExpc3RlbmVyKFxuICAgICAgICAgIGV2ZW50LFxuICAgICAgICAgIG9ic2VydmVyLm5leHQuYmluZChvYnNlcnZlcilcbiAgICAgICAgKTtcbiAgICB9KTtcbiAgfVxufVxuXG4vKipcbiAqIEBuYW1lIFRoZW1lYWJsZSBCcm93c2VyXG4gKiBAZGVzY3JpcHRpb25cbiAqIEluLWFwcCBicm93c2VyIHRoYXQgYWxsb3dzIHN0eWxpbmcuXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBUaGVtZWFibGVCcm93c2VyLCBUaGVtZWFibGVCcm93c2VyT3B0aW9ucywgVGhlbWVhYmxlQnJvd3Nlck9iamVjdCB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvdGhlbWVhYmxlLWJyb3dzZXIvbmd4JztcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIHRoZW1lYWJsZUJyb3dzZXI6IFRoZW1lYWJsZUJyb3dzZXIpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqIC8vIGNhbiBhZGQgb3B0aW9ucyBmcm9tIHRoZSBvcmlnaW5hbCBJbkFwcEJyb3dzZXIgaW4gYSBKYXZhU2NyaXB0IG9iamVjdCBmb3JtIChub3Qgc3RyaW5nKVxuICogLy8gVGhpcyBvcHRpb25zIG9iamVjdCBhbHNvIHRha2VzIGFkZGl0aW9uYWwgcGFyYW1ldGVycyBpbnRyb2R1Y2VkIGJ5IHRoZSBUaGVtZWFibGVCcm93c2VyIHBsdWdpblxuICogLy8gVGhpcyBleGFtcGxlIG9ubHkgc2hvd3MgdGhlIGFkZGl0aW9uYWwgcGFyYW1ldGVycyBmb3IgVGhlbWVhYmxlQnJvd3NlclxuICogLy8gTm90ZSB0aGF0IHRoYXQgYGltYWdlYCBhbmQgYGltYWdlUHJlc3NlZGAgdmFsdWVzIHJlZmVyIHRvIHJlc291cmNlcyB0aGF0IGFyZSBzdG9yZWQgaW4geW91ciBhcHBcbiAqIGNvbnN0IG9wdGlvbnM6IFRoZW1lYWJsZUJyb3dzZXJPcHRpb25zID0ge1xuICogICAgICBzdGF0dXNiYXI6IHtcbiAqICAgICAgICAgIGNvbG9yOiAnI2ZmZmZmZmZmJ1xuICogICAgICB9LFxuICogICAgICB0b29sYmFyOiB7XG4gKiAgICAgICAgICBoZWlnaHQ6IDQ0LFxuICogICAgICAgICAgY29sb3I6ICcjZjBmMGYwZmYnXG4gKiAgICAgIH0sXG4gKiAgICAgIHRpdGxlOiB7XG4gKiAgICAgICAgICBjb2xvcjogJyMwMDMyNjRmZicsXG4gKiAgICAgICAgICBzaG93UGFnZVRpdGxlOiB0cnVlXG4gKiAgICAgIH0sXG4gKiAgICAgIGJhY2tCdXR0b246IHtcbiAqICAgICAgICAgIGltYWdlOiAnYmFjaycsXG4gKiAgICAgICAgICBpbWFnZVByZXNzZWQ6ICdiYWNrX3ByZXNzZWQnLFxuICogICAgICAgICAgYWxpZ246ICdsZWZ0JyxcbiAqICAgICAgICAgIGV2ZW50OiAnYmFja1ByZXNzZWQnXG4gKiAgICAgIH0sXG4gKiAgICAgIGZvcndhcmRCdXR0b246IHtcbiAqICAgICAgICAgIGltYWdlOiAnZm9yd2FyZCcsXG4gKiAgICAgICAgICBpbWFnZVByZXNzZWQ6ICdmb3J3YXJkX3ByZXNzZWQnLFxuICogICAgICAgICAgYWxpZ246ICdsZWZ0JyxcbiAqICAgICAgICAgIGV2ZW50OiAnZm9yd2FyZFByZXNzZWQnXG4gKiAgICAgIH0sXG4gKiAgICAgIGNsb3NlQnV0dG9uOiB7XG4gKiAgICAgICAgICBpbWFnZTogJ2Nsb3NlJyxcbiAqICAgICAgICAgIGltYWdlUHJlc3NlZDogJ2Nsb3NlX3ByZXNzZWQnLFxuICogICAgICAgICAgYWxpZ246ICdsZWZ0JyxcbiAqICAgICAgICAgIGV2ZW50OiAnY2xvc2VQcmVzc2VkJ1xuICogICAgICB9LFxuICogICAgICBjdXN0b21CdXR0b25zOiBbXG4gKiAgICAgICAgICB7XG4gKiAgICAgICAgICAgICAgaW1hZ2U6ICdzaGFyZScsXG4gKiAgICAgICAgICAgICAgaW1hZ2VQcmVzc2VkOiAnc2hhcmVfcHJlc3NlZCcsXG4gKiAgICAgICAgICAgICAgYWxpZ246ICdyaWdodCcsXG4gKiAgICAgICAgICAgICAgZXZlbnQ6ICdzaGFyZVByZXNzZWQnXG4gKiAgICAgICAgICB9XG4gKiAgICAgIF0sXG4gKiAgICAgIG1lbnU6IHtcbiAqICAgICAgICAgIGltYWdlOiAnbWVudScsXG4gKiAgICAgICAgICBpbWFnZVByZXNzZWQ6ICdtZW51X3ByZXNzZWQnLFxuICogICAgICAgICAgdGl0bGU6ICdUZXN0JyxcbiAqICAgICAgICAgIGNhbmNlbDogJ0NhbmNlbCcsXG4gKiAgICAgICAgICBhbGlnbjogJ3JpZ2h0JyxcbiAqICAgICAgICAgIGl0ZW1zOiBbXG4gKiAgICAgICAgICAgICAge1xuICogICAgICAgICAgICAgICAgICBldmVudDogJ2hlbGxvUHJlc3NlZCcsXG4gKiAgICAgICAgICAgICAgICAgIGxhYmVsOiAnSGVsbG8gV29ybGQhJ1xuICogICAgICAgICAgICAgIH0sXG4gKiAgICAgICAgICAgICAge1xuICogICAgICAgICAgICAgICAgICBldmVudDogJ3Rlc3RQcmVzc2VkJyxcbiAqICAgICAgICAgICAgICAgICAgbGFiZWw6ICdUZXN0ISdcbiAqICAgICAgICAgICAgICB9XG4gKiAgICAgICAgICBdXG4gKiAgICAgIH0sXG4gKiAgICAgIGJhY2tCdXR0b25DYW5DbG9zZTogdHJ1ZVxuICogfVxuICpcbiAqIGNvbnN0IGJyb3dzZXI6IFRoZW1lYWJsZUJyb3dzZXJPYmplY3QgPSB0aGlzLnRoZW1lYWJsZUJyb3dzZXIuY3JlYXRlKCdodHRwczovL2lvbmljLmlvJywgJ19ibGFuaycsIG9wdGlvbnMpO1xuICpcbiAqIGBgYFxuICogV2Ugc3VnZ2VzdCB0aGF0IHlvdSByZWZlciB0byB0aGUgcGx1Z2luJ3MgcmVwb3NpdG9yeSBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvbiBvbiB1c2FnZSB0aGF0IG1heSBub3QgYmUgY292ZXJlZCBoZXJlLlxuICogQGNsYXNzZXNcbiAqIFRoZW1lYWJsZUJyb3dzZXJPYmplY3RcbiAqIEBpbnRlcmZhY2VzXG4gKiBUaGVtZWFibGVCcm93c2VyQnV0dG9uXG4gKiBUaGVtZWFibGVCcm93c2VyT3B0aW9uc1xuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ1RoZW1lYWJsZUJyb3dzZXInLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi10aGVtZWFibGVicm93c2VyJyxcbiAgcGx1Z2luUmVmOiAnY29yZG92YS5UaGVtZWFibGVCcm93c2VyJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9pbml0aWFseHkvY29yZG92YS1wbHVnaW4tdGhlbWVhYmxlYnJvd3NlcicsXG4gIHBsYXRmb3JtczogW1xuICAgICdBbWF6b24gRmlyZSBPUycsXG4gICAgJ0FuZHJvaWQnLFxuICAgICdCbGFja2JlcnJ5IDEwJyxcbiAgICAnQnJvd3NlcicsXG4gICAgJ0ZpcmVmb3hPUycsXG4gICAgJ2lPUycsXG4gICAgJ1VidW50dScsXG4gICAgJ1dpbmRvd3MnLFxuICAgICdXaW5kb3dzIFBob25lJ1xuICBdXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFRoZW1lYWJsZUJyb3dzZXIgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgYnJvd3NlciBpbnN0YW5jZVxuICAgKiBAcGFyYW0gdXJsIHtzdHJpbmd9IFVSTCB0byBvcGVuXG4gICAqIEBwYXJhbSB0YXJnZXQge3N0cmluZ30gVGFyZ2V0XG4gICAqIEBwYXJhbSBzdHlsZU9wdGlvbnMge1RoZW1lYWJsZUJyb3dzZXJPcHRpb25zfSBUaGVtZWFibGUgYnJvd3NlciBvcHRpb25zXG4gICAqIEByZXR1cm5zIHtUaGVtZWFibGVCcm93c2VyT2JqZWN0fVxuICAgKi9cbiAgY3JlYXRlKFxuICAgIHVybDogc3RyaW5nLFxuICAgIHRhcmdldDogc3RyaW5nLFxuICAgIHN0eWxlT3B0aW9uczogVGhlbWVhYmxlQnJvd3Nlck9wdGlvbnNcbiAgKTogVGhlbWVhYmxlQnJvd3Nlck9iamVjdCB7XG4gICAgcmV0dXJuIG5ldyBUaGVtZWFibGVCcm93c2VyT2JqZWN0KHVybCwgdGFyZ2V0LCBzdHlsZU9wdGlvbnMpO1xuICB9XG59XG4iXX0=

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/mediaplayer/mediaplayer.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/mediaplayer/mediaplayer.page.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button *ngIf=\"mediaType == 1\" text=\"PDF Media\" defaultHref=\"/tabs/(events:event-list)\"></ion-back-button>\n      <ion-back-button *ngIf=\"mediaType == 2\" text=\"Audio Media\" defaultHref=\"/tabs/(events:event-list)\"></ion-back-button>\n      <ion-back-button *ngIf=\"mediaType == 3\" text=\"Video Media\" defaultHref=\"/tabs/(events:event-list)\"></ion-back-button>\n      <ion-back-button *ngIf=\"mediaType == 4\" text=\"Powerpoint Media\" defaultHref=\"/tabs/(events:event-list)\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{($eventItem | async)?.name}}</ion-title>\n    \n    <ion-buttons slot=\"end\">\n      <ion-button *ngIf=\"mediaType == 1 || mediaType == 4\" style=\"font-size: 12px;\" (click)=\"verifyMedia()\" icon-end>\n        <span style=\"padding-right: 5px;\">View</span>\n        <ion-icon name=\"eye\"></ion-icon>\n      </ion-button>\n\n      <ion-button style=\"font-size: 12px;\" (click)=\"downloadMedia()\" icon-end>\n        <span style=\"padding-right: 5px;\">Update</span>\n        <ion-icon name=\"cloud-download\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n  \n<ion-content>\n  <ion-card class=\"welcome-card\">    \n    <ion-card-content (click)=\"verifyMedia()\" *ngIf=\"mediaType == 1\" class=\"ion-align-items-center rowSection\" style=\"display:block; width: 100%; border:none; margin:0 auto;\">   \n        <img src=\"assets/imgs/pdf.jpg\" style=\"display:block; width: 100%; border:none; margin:0 auto;\" alt=\"\" />\n    </ion-card-content>\n\n    <!-- <ion-card-content *ngIf=\"mediaType == 2\" class=\"ion-align-items-center rowSection\" style=\"background-color: #ffffff; position: relative; padding-top: 56.25%;\"> \n      <img src=\"assets/imgs/mp3.jpg\" style=\"display:block; width: 100%; border:none; margin:0 auto;\" alt=\"\" />\n      <audio type=\"audio/mpeg\" style=\"position:absolute;top:0;left:0;width:100%;height:100%;\" controls controlsList=\"nodownload\" loop>\n        <source src=\"\" type=\"audio/mp3\">\n      </audio>\n    </ion-card-content>   \n    \n    <ion-card-content *ngIf=\"mediaType == 3\" class=\"ion-align-items-center rowSection\" style=\"background-color: black; position: relative; padding-top: 56.25%;\">     \n      <video controls=\"controls\" preload=\"metadata\" \n        webkit-playsinline=\"webkit-playsinline\" \n        class=\"videoPlayer\" style=\"position:absolute;top:0;left:0;width:100%;height:100%;\" \n        poster=\"https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217\">\n        <source src=\"\" type=\"video/mp4\"/>\n      </video>\n    </ion-card-content> -->\n\n    <ion-card-content (click)=\"verifyMedia()\" *ngIf=\"mediaType == 4\" class=\"ion-align-items-center rowSection\" style=\"display:block; width: 100%; border:none; margin:0 auto;\">   \n        <img src=\"assets/imgs/ppt.jpg\" style=\"display:block; width: 100%; border:none; margin:0 auto;\" alt=\"\" />\n    </ion-card-content>\n\n    <ion-card-header>\n      <ion-card-title>{{ courseCode }}</ion-card-title>\n      <ion-card-subtitle>{{ courseTitle }}</ion-card-subtitle>\n    </ion-card-header>\n\n    <ion-card-content>\n      <p *ngIf=\"mediaType == 1 || mediaType == 4\">Tap the media icon to download file and start learning <strong>{{ courseTitle }}</strong>. Click the <strong>UPDATE</strong> or <strong>VIEW</strong> button at the top right corner to update or launch this course.</p>\n      <!-- <p *ngIf=\"mediaType == 2 || mediaType == 3\">Tap the play button to download file and start learning <strong>{{ courseTitle }}</strong>. Click the <strong>UPDATE</strong> button at the top right corner to download updated version of this course.</p> -->\n    </ion-card-content>\n    \n    <!-- <ion-card-content *ngIf=\"mediaType == 1 || mediaType == 4\">      \n      <ion-item lines=\"none\" class=\"ion-padding-top\">\n        <ion-button expand=\"block\" size=\"default\" shape=\"round\" color=\"primary\" type=\"submit\" (click)=\"verifyMedia()\">Get Started</ion-button>\n      </ion-item>\n    </ion-card-content> -->\n  </ion-card>   \n</ion-content>\n\n<ion-footer>\n  <ion-toolbar color=\"primary\">\n    <ion-button color=\"light\" fill=\"clear\" expand=\"full\" (click)=\"enterChatRoom()\">Enter Chat Room</ion-button>\n  </ion-toolbar>\n</ion-footer>"

/***/ }),

/***/ "./src/app/pages/mediaplayer/mediaplayer.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/mediaplayer/mediaplayer.module.ts ***!
  \*********************************************************/
/*! exports provided: MediaPlayerPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaPlayerPageModule", function() { return MediaPlayerPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _mediaplayer_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mediaplayer.page */ "./src/app/pages/mediaplayer/mediaplayer.page.ts");







const routes = [
    {
        path: '',
        component: _mediaplayer_page__WEBPACK_IMPORTED_MODULE_6__["MediaPlayerPage"]
    }
];
let MediaPlayerPageModule = class MediaPlayerPageModule {
};
MediaPlayerPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_mediaplayer_page__WEBPACK_IMPORTED_MODULE_6__["MediaPlayerPage"]]
    })
], MediaPlayerPageModule);



/***/ }),

/***/ "./src/app/pages/mediaplayer/mediaplayer.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/mediaplayer/mediaplayer.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card img {\n  max-height: 35vh;\n  overflow: hidden;\n}\n\n.sc-ion-card-pwa-h,\n.sc-ion-card-md-h,\n.sc-ion-card-ios-h {\n  display: unset;\n}\n\n.sc-ion-card-pwa-s img,\n.sc-ion-card-md-s img,\n.sc-ion-card-ios-s img {\n  margin-top: -18px;\n}\n\n.list-pwa,\n.list-md,\n.list-ios {\n  margin-top: -20px;\n  padding-top: 0;\n}\n\n.sc-ion-card-md-h {\n  --background: var(--ion-item-background,transparent);\n  --color: var(--ion-color-step-550,#737373);\n  margin-left: 0px;\n  margin-right: 0px;\n  margin-top: 0px;\n  margin-bottom: 20px;\n  border-radius: 0px;\n  font-size: 14px;\n  box-shadow: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbWVkaWFwbGF5ZXIvQzpcXFVzZXJzXFxDaGFybGVzIE9udW9yYWhcXERvY3VtZW50c1xcQ0JDXFxQcm9qZWN0c1xcVU1ZVUFwcFNvdXJjZS9zcmNcXGFwcFxccGFnZXNcXG1lZGlhcGxheWVyXFxtZWRpYXBsYXllci5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL21lZGlhcGxheWVyL21lZGlhcGxheWVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURFQTs7O0VBR0UsY0FBQTtBQ0NGOztBREVBOzs7RUFHRSxpQkFBQTtBQ0NGOztBREVBOzs7RUFHRSxpQkFBQTtFQUNBLGNBQUE7QUNDRjs7QURFQTtFQUNFLG9EQUFBO0VBQ0EsMENBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBRUEsZ0JBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21lZGlhcGxheWVyL21lZGlhcGxheWVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53ZWxjb21lLWNhcmQgaW1nIHtcclxuICBtYXgtaGVpZ2h0OiAzNXZoO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuICBcclxuLnNjLWlvbi1jYXJkLXB3YS1oLFxyXG4uc2MtaW9uLWNhcmQtbWQtaCxcclxuLnNjLWlvbi1jYXJkLWlvcy1oIHtcclxuICBkaXNwbGF5OiB1bnNldDtcclxufVxyXG5cclxuLnNjLWlvbi1jYXJkLXB3YS1zIGltZyxcclxuLnNjLWlvbi1jYXJkLW1kLXMgaW1nLFxyXG4uc2MtaW9uLWNhcmQtaW9zLXMgaW1nIHtcclxuICBtYXJnaW4tdG9wOiAtMThweDtcclxufVxyXG5cclxuLmxpc3QtcHdhLFxyXG4ubGlzdC1tZCxcclxuLmxpc3QtaW9zIHtcclxuICBtYXJnaW4tdG9wOiAtMjBweDtcclxuICBwYWRkaW5nLXRvcDogMDtcclxufVxyXG5cclxuLnNjLWlvbi1jYXJkLW1kLWgge1xyXG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWl0ZW0tYmFja2dyb3VuZCx0cmFuc3BhcmVudCk7XHJcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXN0ZXAtNTUwLCM3MzczNzMpO1xyXG4gIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbiAgbWFyZ2luLXRvcDogMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG5cclxuIiwiLndlbGNvbWUtY2FyZCBpbWcge1xuICBtYXgtaGVpZ2h0OiAzNXZoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uc2MtaW9uLWNhcmQtcHdhLWgsXG4uc2MtaW9uLWNhcmQtbWQtaCxcbi5zYy1pb24tY2FyZC1pb3MtaCB7XG4gIGRpc3BsYXk6IHVuc2V0O1xufVxuXG4uc2MtaW9uLWNhcmQtcHdhLXMgaW1nLFxuLnNjLWlvbi1jYXJkLW1kLXMgaW1nLFxuLnNjLWlvbi1jYXJkLWlvcy1zIGltZyB7XG4gIG1hcmdpbi10b3A6IC0xOHB4O1xufVxuXG4ubGlzdC1wd2EsXG4ubGlzdC1tZCxcbi5saXN0LWlvcyB7XG4gIG1hcmdpbi10b3A6IC0yMHB4O1xuICBwYWRkaW5nLXRvcDogMDtcbn1cblxuLnNjLWlvbi1jYXJkLW1kLWgge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1pdGVtLWJhY2tncm91bmQsdHJhbnNwYXJlbnQpO1xuICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3RlcC01NTAsIzczNzM3Myk7XG4gIG1hcmdpbi1sZWZ0OiAwcHg7XG4gIG1hcmdpbi1yaWdodDogMHB4O1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/mediaplayer/mediaplayer.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/mediaplayer/mediaplayer.page.ts ***!
  \*******************************************************/
/*! exports provided: MediaPlayerPage, snapshotToArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaPlayerPage", function() { return MediaPlayerPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "snapshotToArray", function() { return snapshotToArray; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "./node_modules/@ionic-native/file-transfer/ngx/index.js");
/* harmony import */ var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/native-storage/ngx */ "./node_modules/@ionic-native/native-storage/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_spinner_dialog_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/spinner-dialog/ngx */ "./node_modules/@ionic-native/spinner-dialog/ngx/index.js");
/* harmony import */ var _ionic_native_themeable_browser_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/themeable-browser/ngx */ "./node_modules/@ionic-native/themeable-browser/ngx/index.js");
/* harmony import */ var _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/file-opener/ngx */ "./node_modules/@ionic-native/file-opener/ngx/index.js");
/* harmony import */ var Firebase__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! Firebase */ "./node_modules/Firebase/index.js");
/* harmony import */ var Firebase__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(Firebase__WEBPACK_IMPORTED_MODULE_10__);












let MediaPlayerPage = class MediaPlayerPage {
    /**
     * Constructor of our course viewer page
     * @param activatedRoute Information about the route we are on
     * @param courseCodeService The course code Service to get data
     */
    constructor(loadingCtrl, platform, router, fileTransfer, nativeStorage, activatedRoute, toastCtrl, fileOpener, file, spinnerDialog, themeableBrowser, alertController) {
        this.loadingCtrl = loadingCtrl;
        this.platform = platform;
        this.router = router;
        this.fileTransfer = fileTransfer;
        this.nativeStorage = nativeStorage;
        this.activatedRoute = activatedRoute;
        this.toastCtrl = toastCtrl;
        this.fileOpener = fileOpener;
        this.file = file;
        this.spinnerDialog = spinnerDialog;
        this.themeableBrowser = themeableBrowser;
        this.alertController = alertController;
        this.dirBase = "/.UMYU/.data/.materials/";
        this.downloadURL = "http://umyu.easystudy.com.ng/materials/";
        this.isDownloaded = false;
        this.rooms = [];
        this.ref = Firebase__WEBPACK_IMPORTED_MODULE_10__["database"]().ref('chatrooms/');
        // Can add options from the original InAppBrowser in a JavaScript object form (not string)
        // This options object also takes additional parameters introduced by the ThemeableBrowser plugin
        // This example only shows the additional parameters for ThemeableBrowser
        // Note that that `image` and `imagePressed` values refer to resources that are stored in your app
        this.options = {
            statusbar: {
                color: '#011a01'
            },
            toolbar: {
                height: 50,
                color: '#011a01'
            },
            title: {
                color: '#ffffff',
                showPageTitle: true
            },
            backButton: {
                image: 'back',
                imagePressed: 'back_pressed',
                align: 'left',
                event: 'backPressed'
            },
            forwardButton: {
                image: 'forward',
                imagePressed: 'forward_pressed',
                align: 'left',
                event: 'forwardPressed'
            },
            closeButton: {
                image: 'close',
                imagePressed: 'close_pressed',
                align: 'left',
                event: 'closePressed'
            },
            customButtons: [
                {
                    image: 'share',
                    imagePressed: 'share_pressed',
                    align: 'right',
                    event: 'sharePressed'
                }
            ],
            menu: {
                image: 'menu',
                imagePressed: 'menu_pressed',
                title: 'Test',
                cancel: 'Cancel',
                align: 'right',
                items: [
                    {
                        event: 'helloPressed',
                        label: 'Hello World!'
                    },
                    {
                        event: 'testPressed',
                        label: 'Test!'
                    }
                ]
            },
            backButtonCanClose: true
        };
        this.verifyMedia();
        this.nativeStorage.getItem('selectedcourse').then(selectedCourse => {
            this.courseCode = selectedCourse.Code;
            this.courseTitle = selectedCourse.Title;
            this.ref.on('value', resp => {
                this.rooms = [];
                this.rooms = snapshotToArray(resp);
                if (this.rooms === undefined || this.rooms.length == 0) {
                    this.createRoomCaption = "Create Chat Room";
                    this.actionType = 1;
                }
                else {
                    this.rooms.forEach(room => {
                        if (room.roomname == this.courseCode) {
                            this.createRoomCaption = "Enter Chat Room";
                            this.actionType = 2;
                        }
                        else {
                            this.createRoomCaption = "Create Chat Room";
                            this.actionType = 1;
                        }
                    });
                }
            });
        }, () => {
        });
    }
    ngOnInit() {
        // Get the ID that was passed with the URL    
        this.activatedRoute.params.subscribe(params => {
            this.courseID = +params['courseid'];
            this.mediaType = +params['mediatype'];
        });
        // Get the course resources from the API    
        // this.downloadURL = "https://www.youtube.com/embed/nckseQJ1Nlg";
        // this.downloadURL = "http://teacherguide.easystudy.com.ng/materials/video/M1V2_Eng.mp4";
        if (this.platform.is('android')) {
            this.systemBase = this.file.externalRootDirectory + "/Documents";
        }
        else if (this.platform.is('ios')) {
            this.systemBase = this.file.documentsDirectory + "/Documents";
        }
        else if (this.platform.is('desktop')) {
            // this.systemBase =  this.file.dataDirectory + "/local";
            this.systemBase = this.file.dataDirectory;
            // this.presentAlert("Information!", "Running on windows platform " + this.systemBase);
        }
        else if (this.platform.is('tablet')) {
            this.systemBase = this.file.dataDirectory;
        }
        else {
            this.systemBase = this.file.dataDirectory;
        }
        if (this.mediaType == 1) {
            this.mimeType = "application/pdf";
            this.fileName = "pdffile" + this.courseID + ".pdf";
            this.dirName = this.systemBase + this.dirBase + ".pdfs/";
            this.downloadURL = this.downloadURL + "pdf/" + this.fileName;
        }
        else if (this.mediaType == 2) {
            this.mimeType = "audio/mpeg";
            this.fileName = "audiofile" + this.courseID + ".mp3";
            this.dirName = this.systemBase + this.dirBase + ".audios/";
            this.downloadURL = this.downloadURL + "audio/" + this.fileName;
        }
        else if (this.mediaType == 3) {
            this.mimeType = "video/mp4";
            this.fileName = "videofile" + this.courseID + ".mp4";
            this.dirName = this.systemBase + this.dirBase + ".videos/";
            this.downloadURL = this.downloadURL + "video/" + this.fileName;
        }
        else if (this.mediaType == 4) {
            this.mimeType = "application/vnd.ms-powerpoint";
            this.fileName = "powerpointfile" + this.courseID + ".ppt";
            this.dirName = this.systemBase + this.dirBase + ".powerpoints/";
            this.downloadURL = this.downloadURL + "powerpoint/" + this.fileName;
        }
    }
    verifyMedia() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let loading = yield this.loadingCtrl.create({
                message: 'Checking file on local storage, please wait...'
            });
            yield loading.present();
            //This is where the media file will be stored, you can change it as you like
            this.file.checkFile(this.dirName, this.fileName).then((success) => {
                loading.dismiss();
                this.isDownloaded = true;
                // Get media URL and convert to an accessible path        
                this.mediaURLTemp = this.dirName + this.fileName;
                if (this.mediaType === 2 || this.mediaType === 3) {
                    let win = window; // hack compilator
                    this.mediaURL = win.Ionic.WebView.convertFileSrc(this.mediaURLTemp);
                    this.playMediaFile();
                }
                if (this.mediaType === 1 || this.mediaType === 4) {
                    this.fileOpener.open(this.mediaURLTemp, this.mimeType)
                        .then(() => { })
                        .catch(error => {
                        this.presentAlert("Error!", "Error opening file: " + JSON.stringify(error));
                    });
                }
            })
                .catch(() => {
                loading.dismiss();
                this.downloadMedia();
            });
        });
    }
    downloadMedia() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let loading = yield this.loadingCtrl.create({
                message: 'Downloading file, please wait...'
            });
            yield loading.present();
            // Downloading File to Device
            const transfer = this.fileTransfer.create();
            transfer.download(this.downloadURL, this.dirName + this.fileName)
                .then(() => {
                loading.dismiss();
                // Send success notification to user
                this.presentToast("Download completed!");
                this.isDownloaded = true;
                // Get media URL and convert to an accessible path        
                this.mediaURLTemp = this.dirName + this.fileName;
                if (this.mediaType === 2 || this.mediaType === 3) {
                    let win = window; // hack compilator
                    this.mediaURL = win.Ionic.WebView.convertFileSrc(this.mediaURLTemp);
                    this.playMediaFile();
                }
                if (this.mediaType === 1 || this.mediaType === 4) {
                    this.fileOpener.open(this.mediaURLTemp, this.mimeType)
                        .then(() => { })
                        .catch(error => {
                        this.presentAlert("Error!", "Error opening file: " + error);
                    });
                }
            })
                .catch((error) => {
                loading.dismiss();
                this.presentAlert("Error!", "Error downloading file: " + error);
            });
        });
    }
    playMediaFile() {
        if (this.mediaType == 2) {
            var audio = document.getElementsByTagName('audio')[0];
            var sources = audio.getElementsByTagName('source');
            sources[0].src = this.mediaURL;
            audio.load();
        }
        else if (this.mediaType == 3) {
            var video = document.getElementsByTagName('video')[0];
            var sources = video.getElementsByTagName('source');
            sources[0].src = this.mediaURL;
            video.load();
        }
    }
    addToFavorite() {
    }
    presentToast(msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: msg,
                duration: 2000
            });
            toast.present();
        });
    }
    presentToastOptions(msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                // header: 'Download Status',
                message: msg,
                position: 'bottom',
                buttons: [
                    {
                        side: 'end',
                        icon: 'star',
                        text: 'Favorite',
                        handler: () => {
                            this.addToFavorite();
                        }
                    }, {
                        side: 'end',
                        text: 'Done',
                        role: 'cancel',
                        handler: () => {
                        }
                    }
                ]
            });
            toast.present();
        });
    }
    openPDFFile() {
        let that = this;
        // this.iabRef = cordova.InAppBrowser.open("http://someurl.com", "_blank", "beforeload=yes,location=no");
        // const iabRef: ThemeableBrowserObject = this.themeableBrowser.create(this.googledoclink + this.link + this.fileName, '_blank', this.options);
        const iabRef = this.themeableBrowser.create("https://devdactic.com/html/5-simple-hacks-LBT.pdf", '_blank', this.options);
        //this.iabRef = cordova.InAppBrowser.open("https://devdactic.com/html/5-simple-hacks-LBT.pdf", "_blank", "beforeload=yes,location=no");
        // this.iabRef.addEventListener('beforeload', function(params, callback){
        //   // If the URL being loaded is a PDF
        //   if(params.url.match(".pdf")){
        //     that.openPDF(params.url);
        //   } else {
        //     callback(params.url);
        //   }
        // }, false);
        // this.iabRef.addEventListener('loadstart', function(params, callback){
        //   that.spinnerDialog.show(null, null, true);
        // });
        // this.iabRef.addEventListener('loadstop', function(params, callback){
        //   that.spinnerDialog.hide();
        // });
        // this.iabRef.addEventListener('exit', function(params, callback){
        //   //that.platform.exitApp();
        // });
    }
    openPDF(url) {
        let title = url.substring(url.lastIndexOf("/") + 1, url.lastIndexOf(".pdf"));
        let path = this.file.externalDataDirectory;
        const transfer = this.fileTransfer.create();
        transfer.download(url, path + title + '.pdf').then(entry => {
            let url = entry.toURL();
            this.fileOpener.open(url, 'application/pdf');
        });
    }
    enterChatRoom() {
        if (this.actionType == 1) {
            // Navigate to create chatroom if room does not exist
            this.router.navigate(['createroom']);
        }
        else {
            // Navigate to chatrooms if room does exist
            this.router.navigate(['chatrooms']);
        }
    }
    presentAlert(header, message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: header,
                message: message,
                buttons: [{
                        text: 'OK',
                        handler: () => {
                            // this.router.navigate(['login']);
                        }
                    }]
            });
            yield alert.present();
        });
    }
};
MediaPlayerPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_4__["FileTransfer"] },
    { type: _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_5__["NativeStorage"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"] },
    { type: _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_9__["FileOpener"] },
    { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_3__["File"] },
    { type: _ionic_native_spinner_dialog_ngx__WEBPACK_IMPORTED_MODULE_7__["SpinnerDialog"] },
    { type: _ionic_native_themeable_browser_ngx__WEBPACK_IMPORTED_MODULE_8__["ThemeableBrowser"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] }
];
MediaPlayerPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-mediaplayer',
        template: __webpack_require__(/*! raw-loader!./mediaplayer.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/mediaplayer/mediaplayer.page.html"),
        styles: [__webpack_require__(/*! ./mediaplayer.page.scss */ "./src/app/pages/mediaplayer/mediaplayer.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_4__["FileTransfer"],
        _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_5__["NativeStorage"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"],
        _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_9__["FileOpener"],
        _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_3__["File"],
        _ionic_native_spinner_dialog_ngx__WEBPACK_IMPORTED_MODULE_7__["SpinnerDialog"],
        _ionic_native_themeable_browser_ngx__WEBPACK_IMPORTED_MODULE_8__["ThemeableBrowser"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"]])
], MediaPlayerPage);

const snapshotToArray = snapshot => {
    let returnArr = [];
    snapshot.forEach(childSnapshot => {
        let item = childSnapshot.val();
        item.key = childSnapshot.key;
        returnArr.push(item);
    });
    return returnArr;
};


/***/ })

}]);
//# sourceMappingURL=pages-mediaplayer-mediaplayer-module-es2015.js.map