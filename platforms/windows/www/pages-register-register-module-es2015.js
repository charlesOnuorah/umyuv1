(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-register-register-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/register/register.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/register/register.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"Register\" defaultHref=\"/tabs/(events:event-list)\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{($eventItem | async)?.name}}</ion-title>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit(registerForm.value)\">\n    <ion-card class=\"welcome-card\">\n      <ion-card-header>\n        <ion-card-title>Register here</ion-card-title>\n      </ion-card-header>\n      <ion-card-content>\n        <ion-item>\n          <ion-label position=\"floating\">Username</ion-label>\n          <ion-input type=\"text\" name=\"username\" formControlName=\"username\"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"floating\">Password</ion-label>\n          <ion-input type=\"password\" name=\"password\" formControlName=\"password\"></ion-input>\n        </ion-item>\n        <ion-item lines=\"none\" class=\"ion-padding-top\">\n          <ion-button expand=\"block\" size=\"large\" shape=\"round\" color=\"primary\" type=\"submit\" [disabled]=\"!registerForm.valid\">Register</ion-button>\n        </ion-item>\n      </ion-card-content>\n    </ion-card>\n  </form>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/register/register.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/register/register.module.ts ***!
  \***************************************************/
/*! exports provided: RegisterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register.page */ "./src/app/pages/register/register.page.ts");







const routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]
    }
];
let RegisterPageModule = class RegisterPageModule {
};
RegisterPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
        ],
        declarations: [_register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]]
    })
], RegisterPageModule);



/***/ }),

/***/ "./src/app/pages/register/register.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/register/register.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card img {\n  max-height: 35vh;\n  overflow: hidden;\n}\n\n.sc-ion-card-md-h,\n.sc-ion-card-ios-h {\n  display: unset;\n}\n\n.sc-ion-card-md-s img,\n.sc-ion-card-ios-s img {\n  margin-top: -18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVnaXN0ZXIvQzpcXFVNWVVBcHAvc3JjXFxhcHBcXHBhZ2VzXFxyZWdpc3RlclxccmVnaXN0ZXIucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9yZWdpc3Rlci9yZWdpc3Rlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FERUE7O0VBRUUsY0FBQTtBQ0NGOztBREVBOztFQUVFLGlCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9yZWdpc3Rlci9yZWdpc3Rlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2VsY29tZS1jYXJkIGltZyB7XHJcbiAgbWF4LWhlaWdodDogMzV2aDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbiAgICAgIFxyXG4uc2MtaW9uLWNhcmQtbWQtaCxcclxuLnNjLWlvbi1jYXJkLWlvcy1oIHtcclxuICBkaXNwbGF5OiB1bnNldDtcclxufVxyXG4gICAgXHJcbi5zYy1pb24tY2FyZC1tZC1zIGltZyxcclxuLnNjLWlvbi1jYXJkLWlvcy1zIGltZyB7XHJcbiAgbWFyZ2luLXRvcDogLTE4cHg7XHJcbn0iLCIud2VsY29tZS1jYXJkIGltZyB7XG4gIG1heC1oZWlnaHQ6IDM1dmg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5zYy1pb24tY2FyZC1tZC1oLFxuLnNjLWlvbi1jYXJkLWlvcy1oIHtcbiAgZGlzcGxheTogdW5zZXQ7XG59XG5cbi5zYy1pb24tY2FyZC1tZC1zIGltZyxcbi5zYy1pb24tY2FyZC1pb3MtcyBpbWcge1xuICBtYXJnaW4tdG9wOiAtMThweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/register/register.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/register/register.page.ts ***!
  \*************************************************/
/*! exports provided: RegisterPage, snapshotToArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPage", function() { return RegisterPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "snapshotToArray", function() { return snapshotToArray; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/native-storage/ngx */ "./node_modules/@ionic-native/native-storage/ngx/index.js");
/* harmony import */ var Firebase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! Firebase */ "./node_modules/Firebase/index.js");
/* harmony import */ var Firebase__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(Firebase__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");











let RegisterPage = class RegisterPage {
    constructor(http, formBuilder, loadingCtrl, router, nativeStorage, toastController, alertController, nativeHttp, platform) {
        this.http = http;
        this.formBuilder = formBuilder;
        this.loadingCtrl = loadingCtrl;
        this.router = router;
        this.nativeStorage = nativeStorage;
        this.toastController = toastController;
        this.alertController = alertController;
        this.nativeHttp = nativeHttp;
        this.platform = platform;
        this.user = { username: '', password: '' };
        this.users = [];
        this.isFound = false;
    }
    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            'username': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(11)]],
            'password': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]]
        });
    }
    onSubmit(registerForm) {
        if (this.platform.is('android')) {
            this.submitNativeHttp(registerForm);
        }
        else if (this.platform.is('ios')) {
            this.submitNativeHttp(registerForm);
        }
        else if (this.platform.is('desktop')) {
            this.submitStandardHttp(registerForm);
        }
        else if (this.platform.is('tablet')) {
            this.submitStandardHttp(registerForm);
        }
        else {
            this.submitStandardHttp(registerForm);
        }
    }
    submitStandardHttp(registerForm) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let loading = yield this.loadingCtrl.create({
                message: 'Login in progress, please wait...'
            });
            yield loading.present();
            this.user.username = registerForm.username;
            this.user.password = registerForm.password;
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
            this.http.post('http://umyu.easystudy.com.ng/api/v1/api/v1/user/activate', userCredentials, httpHeaders).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["finalize"])(() => loading.dismiss()))
                .subscribe(data => {
                loading.dismiss();
                if (data['status'] === 200) {
                    this.nativeStorage.setItem('usercredentials', { User: userCredentials }).then(() => {
                    }, error => {
                        this.presentAlert("Error!", "Error storing user credentials" + JSON.stringify(error));
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
    submitNativeHttp(registerForm) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let loading = yield this.loadingCtrl.create({
                message: 'Login in progress, please wait...'
            });
            yield loading.present();
            this.user.username = registerForm.username;
            this.user.password = registerForm.password;
            let userCredentials = {
                "username": this.user.username,
                "pin": this.user.password
            };
            // Returns a promise, need to convert with of() to Observable (if want)!
            Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["from"])(this.nativeHttp.post('http://umyu.easystudy.com.ng/api/v1/api/v1/user/activate', userCredentials, { 'Content-Type': 'application/json' })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["finalize"])(() => loading.dismiss())).subscribe(data => {
                let parsed = JSON.parse(data.data);
                loading.dismiss();
                if (parsed.status === 200) {
                    this.nativeStorage.setItem('usercredentials', { User: userCredentials }).then(() => {
                    }, error => {
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
    // async onSubmit(registerForm) {    
    //   let loading = await this.loadingCtrl.create({
    //     message: 'Registration in progress, please wait...'
    //   });
    //   await loading.present();
    //   this.user.username = registerForm.username;
    //   this.user.password = registerForm.password;
    //   firebase.database().ref('users').on('value', resp => {
    //     this.users = [];
    //     this.users = snapshotToArray(resp);
    //     if (this.users === undefined || this.users.length == 0) {        
    //       this.saveUserToFirebase();
    //     }
    //     else
    //     {
    //       for (let user of this.users) {
    //         if (user.username === this.user.username) {
    //           this.presentAlert("Warning!", "Username (" + this.user.username + ") already exisit! Please choose another name!");
    //           this.isFound = true;
    //           break;
    //         }
    //       }
    //       if (this.isFound === false) {
    //         this.saveUserToFirebase();
    //         loading.dismiss();
    //       }
    //       // this.users.forEach(user => {
    //       //   if (user.username == this.user.username) {
    //       //     this.presentAlert("Warning!", "Username (" + this.user.username + ") already exisit! Please choose another name!");
    //       //   }
    //       //   else
    //       //   {
    //       //     this.saveUserToFirebase();
    //       //   }
    //       // });
    //     }
    //   });    
    // }
    saveUserToFirebase() {
        let newData = Firebase__WEBPACK_IMPORTED_MODULE_6__["database"]().ref('users').push();
        newData.set({
            username: this.user.username,
            password: this.user.password,
            created: Date()
        });
        this.nativeStorage.setItem('credentials', { User: this.user }).then(() => { }, (error) => { });
        this.router.navigate(['home']);
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
                        handler: () => {
                        }
                    }]
            });
            yield alert.present();
        });
    }
};
RegisterPage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_5__["NativeStorage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_10__["HTTP"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] }
];
RegisterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: __webpack_require__(/*! raw-loader!./register.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/register/register.page.html"),
        styles: [__webpack_require__(/*! ./register.page.scss */ "./src/app/pages/register/register.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_5__["NativeStorage"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
        _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_10__["HTTP"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]])
], RegisterPage);

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
//# sourceMappingURL=pages-register-register-module-es2015.js.map