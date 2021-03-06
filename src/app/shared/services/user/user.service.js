System.register(['@angular/core', '@angular/http', 'rxjs/Observable'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, Observable_1;
    var UserService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            }],
        execute: function() {
            UserService = (function () {
                function UserService(http) {
                    this.http = http;
                    this._apiBase = '/api/users';
                    this._loginApi = '/authorize/local';
                    this._registerApi = this._apiBase + '/register';
                    this._userExistsApi = this._apiBase + '/exists';
                }
                UserService.prototype.login = function (user) {
                    var body = JSON.stringify(user);
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json');
                    return this.http.post(this._loginApi, body, { headers: headers })
                        .map(function (res) { return res; })
                        .catch(this.handleError);
                };
                UserService.prototype.register = function (user) {
                    var body = JSON.stringify(user);
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json');
                    return this.http.post(this._registerApi, body, { headers: headers })
                        .map(function (res) { return res; })
                        .catch(this.handleError);
                };
                UserService.prototype.getUsers = function () {
                    return this.http.get(this._apiBase + "?limit=5&desc=true")
                        .toPromise()
                        .then(function (res) { return res.json(); }, this.handleError)
                        .then(function (data) { console.log(data); return data; }); // eyeball results in the console
                };
                UserService.prototype.getMe = function () {
                    return this.http.get(this._apiBase + '/me/')
                        .toPromise()
                        .then(function (res) { return res.json().me; }, this.handleError)
                        .then(function (data) { console.log(data); return data; }); // eyeball results in the console
                };
                UserService.prototype.handleError = function (error) {
                    // in a real world app, we may send the server to some remote logging infrastructure
                    // instead of just logging it to the console
                    return Observable_1.Observable.throw(error || "Server Error");
                };
                UserService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], UserService);
                return UserService;
            }());
            exports_1("UserService", UserService);
        }
    }
});
//# sourceMappingURL=user.service.js.map