(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/login/login.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/login/login.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"Register\" defaultHref=\"/tabs/(events:event-list)\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{($eventItem | async)?.name}}</ion-title>\n    \n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit(loginForm.value)\">\n    <ion-card class=\"welcome-card\">\n      <ion-card-header>\n        <ion-card-title>Please, Sign In</ion-card-title>\n      </ion-card-header>\n      <ion-card-content>\n        <ion-item>\n          <ion-label position=\"floating\">Username</ion-label>\n          <ion-input type=\"text\" name=\"username\" formControlName=\"username\"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"floating\">Password</ion-label>\n          <ion-input type=\"password\" name=\"password\" formControlName=\"password\"></ion-input>\n        </ion-item>\n        <ion-item lines=\"none\" lines=\"full\" class=\"ion-padding-top\">\n          <ion-button expand=\"block\" size=\"large\" shape=\"round\" color=\"primary\" type=\"submit\" [disabled]=\"!loginForm.valid\">Login</ion-button>\n        </ion-item>\n        <!-- <ion-item lines=\"none\">\n          <ion-button expand=\"block\" size=\"default\" shape=\"round\" color=\"secondary\" type=\"button\" (click)=\"register()\">Register</ion-button>\n        </ion-item> -->\n      </ion-card-content>\n    </ion-card>\n  </form>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/login/login.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/pages/login/login.page.ts");







const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }
];
let LoginPageModule = class LoginPageModule {
};
LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })
], LoginPageModule);



/***/ }),

/***/ "./src/app/pages/login/login.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card img {\n  max-height: 35vh;\n  overflow: hidden;\n}\n\n.sc-ion-card-md-h,\n.sc-ion-card-ios-h {\n  display: unset;\n}\n\n.sc-ion-card-md-s img,\n.sc-ion-card-ios-s img {\n  margin-top: -18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jYmNnZWR1L0Rlc2t0b3AvdW15dS9zcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREVBOztFQUVFLGNBQUE7QUNDRjs7QURFQTs7RUFFRSxpQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndlbGNvbWUtY2FyZCBpbWcge1xyXG4gIG1heC1oZWlnaHQ6IDM1dmg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG4gICAgXHJcbi5zYy1pb24tY2FyZC1tZC1oLFxyXG4uc2MtaW9uLWNhcmQtaW9zLWgge1xyXG4gIGRpc3BsYXk6IHVuc2V0O1xyXG59XHJcbiAgXHJcbi5zYy1pb24tY2FyZC1tZC1zIGltZyxcclxuLnNjLWlvbi1jYXJkLWlvcy1zIGltZyB7XHJcbiAgbWFyZ2luLXRvcDogLTE4cHg7XHJcbn0iLCIud2VsY29tZS1jYXJkIGltZyB7XG4gIG1heC1oZWlnaHQ6IDM1dmg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5zYy1pb24tY2FyZC1tZC1oLFxuLnNjLWlvbi1jYXJkLWlvcy1oIHtcbiAgZGlzcGxheTogdW5zZXQ7XG59XG5cbi5zYy1pb24tY2FyZC1tZC1zIGltZyxcbi5zYy1pb24tY2FyZC1pb3MtcyBpbWcge1xuICBtYXJnaW4tdG9wOiAtMThweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/login/login.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/*! exports provided: LoginPage, snapshotToArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "snapshotToArray", function() { return snapshotToArray; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/native-storage/ngx */ "./node_modules/@ionic-native/native-storage/ngx/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");










let LoginPage = class LoginPage {
    constructor(http, platform, formBuilder, loadingCtrl, nativeStorage, router, nativeHttp, toastController, alertController) {
        this.http = http;
        this.platform = platform;
        this.formBuilder = formBuilder;
        this.loadingCtrl = loadingCtrl;
        this.nativeStorage = nativeStorage;
        this.router = router;
        this.nativeHttp = nativeHttp;
        this.toastController = toastController;
        this.alertController = alertController;
        this.user = { username: '', password: '' };
        this.users = [];
        this.isFound = false;
    }
    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            'username': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(11)]],
            'password': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]]
        });
    }
    onSubmit(loginForm) {
        // if (this.platform.is('cordova')) {
        //   this.submitNativeHttp(loginForm);
        // } else {
        //   this.submitStandardHttp(loginForm);
        // }
        if (this.platform.is('android')) {
            this.submitNativeHttp(loginForm);
        }
        else if (this.platform.is('ios')) {
            this.submitNativeHttp(loginForm);
        }
        else if (this.platform.is('desktop')) {
            this.submitStandardHttp(loginForm);
        }
        else if (this.platform.is('tablet')) {
            this.submitStandardHttp(loginForm);
        }
        else {
            this.submitStandardHttp(loginForm);
        }
    }
    submitStandardHttp(loginForm) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let loading = yield this.loadingCtrl.create({
                message: 'Login in progress, please wait...'
            });
            yield loading.present();
            this.user.username = loginForm.username;
            this.user.password = loginForm.password;
            let userCredentials = {
                "username": this.user.username,
                "pin": this.user.password
            };
            let _httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpHeaders"]()
                .set('Content-Type', 'application/json')
                .set('Cache-Control', 'no-cache');
            let httpHeaders = {
                headers: _httpHeaders
            };
            this.http.post('http://umyu.easystudy.com.ng/api/v1/api/v1/user/activate', userCredentials, httpHeaders).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => loading.dismiss()))
                .subscribe(data => {
                loading.dismiss();
                if (data['status'] === 200) {
                    this.nativeStorage.setItem('usercredentials', { User: userCredentials }).then(() => { }, () => { });
                    this.router.navigate(['home']);
                }
                else {
                    this.presentAlert("Warning!", "Invalid Username or Password! Please try again...");
                }
            }, error => {
                this.presentAlert("Error!", "Error calling API: " + JSON.stringify(error));
            });
        });
    }
    submitNativeHttp(loginForm) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let loading = yield this.loadingCtrl.create({
                message: 'Login in progress, please wait...'
            });
            yield loading.present();
            this.user.username = loginForm.username;
            this.user.password = loginForm.password;
            let userCredentials = {
                "username": this.user.username,
                "pin": this.user.password
            };
            // Returns a promise, need to convert with of() to Observable (if want)!
            Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["from"])(this.nativeHttp.post('http://umyu.easystudy.com.ng/api/v1/api/v1/user/activate', userCredentials, { 'Content-Type': 'application/json' })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => loading.dismiss())).subscribe(data => {
                let parsed = JSON.parse(data.data);
                loading.dismiss();
                if (parsed.status === 200) {
                    this.nativeStorage.setItem('usercredentials', { User: userCredentials }).then(() => { }, error => {
                        this.presentAlert("Error!", "Error storing user credentials: " + JSON.stringify(error));
                    });
                    this.router.navigate(['home']);
                }
                else {
                    this.presentAlert("Warning!", "Invalid Username or Password! Please try again...");
                }
            }, error => {
                this.presentAlert("Error!", "Error calling API: " + JSON.stringify(error));
            });
        });
    }
    register() {
        this.router.navigate(['register']);
    }
    presentToast(msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: msg,
                duration: 2000,
                position: 'top'
            });
            toast.present();
        });
    }
    presentAlert(header, message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: header,
                message: message,
                buttons: [{
                        text: 'OK',
                        handler: () => { }
                    }]
            });
            yield alert.present();
        });
    }
};
LoginPage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_5__["NativeStorage"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_8__["HTTP"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] }
];
LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/login/login.page.html"),
        styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/pages/login/login.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
        _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_5__["NativeStorage"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_8__["HTTP"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]])
], LoginPage);

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
//# sourceMappingURL=pages-login-login-module-es2015.js.map