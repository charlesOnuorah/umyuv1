import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { map, finalize } from 'rxjs/operators';

import { HTTP } from '@ionic-native/http/ngx';
import { Platform, LoadingController } from '@ionic/angular';

import { ApiService } from '../shared/api.service';
  
@Injectable({
  providedIn: 'root'
})
export class CourseFacultyService {
  faculties: any;
 
  /**
   * Constructor of the Service with Dependency Injection
   * @param http The standard Angular HttpClient to make requests
   */
  constructor(
    private http: HttpClient, 
    private loadingCtrl: LoadingController, 
    private nativeHttp: HTTP,
    private apiService: ApiService) { }

  async getFaculties() {

    let loading = await this.loadingCtrl.create();
    await loading.present();
 
    // Returns a promise, need to convert with of() to Observable (if want)!
    from(this.apiService.get(`/faculty`)).pipe(
      finalize(() => loading.dismiss())
    ).subscribe(faculties => {
      // let parsed = JSON.parse(data.data);
      // this.faculties = parsed.Facultys;
      return faculties;
    }, err => {
      
    });
  }

}