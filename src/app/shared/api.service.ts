import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Observable ,  throwError } from 'rxjs';

import { catchError, map, finalize } from 'rxjs/operators';
import { from } from 'rxjs';
import { HTTP } from '@ionic-native/http/ngx';

import { UtilityService } from './utility.service';
import { Logger } from './logger.service';

// import { Logger, UtilityService } from './index';

const log = new Logger('ApiService');

@Injectable()
export class ApiService {  
  faculties: any;
  public restaurants_details: any;

  constructor(
    private http: HttpClient,
    private utilityService: UtilityService,
    private nativeHttp: HTTP,
  ) {}

  private formatErrors(error: any) {
    return  throwError(error.error);
  }

  get2(path: string, params: HttpParams = new HttpParams()): Observable<any> {
    return this.http.get(
      `${environment.api_url}${path}`, { params })
      .pipe(catchError(this.formatErrors));
  }
  

  get(path: string) {
    // don't have the data yet
    return new Promise(resolve => {
        // We're using Angular HTTP provider to request the data,
        // then on the response, it'll map the JSON data to a parsed JS object.
        // Next, we process the data and resolve the promise with the new data. 

        from(this.nativeHttp.get(`${environment.api_url}${path}`, {}, {'Content-Type': 'application/json'})).pipe(
          finalize(() => {})
        ).subscribe(data => {
            // we've got back the raw data, now generate the core schedule data
            // and save the data for later reference
            this.faculties = data;
            resolve(this.faculties);
        });
    });
  } 

  get1(path: string, params: HttpParams = new HttpParams()): Observable<any> { 
    // Returns a promise, need to convert with of() to Observable (if want)!
    from(this.nativeHttp.get(`${environment.api_url}${path}`, {}, {'Content-Type': 'application/json'})).pipe(
      // catchError(this.formatErrors),
      finalize(() => {
        
      })
    ).subscribe(data => {
      let parsed = JSON.parse(data.data);
      this.faculties = parsed.Facultys;
    }, error => {
      
    });

    return this.faculties;
  }

  put(path: string, body: Object = {}): Observable<any> {
    return this.http.put(
      `${environment.api_url}${path}`,
      JSON.stringify(this.utilityService.removeRootElement(body))
    ).pipe(catchError(this.formatErrors));
  }

  post(path: string, body: Object = {}): Observable<any> {
    return this.http.post(
      `${environment.api_url}${path}`,
      JSON.stringify(this.utilityService.removeRootElement(body))
    ).pipe(catchError(this.formatErrors));
  }

  delete(path, params: HttpParams = new HttpParams()): Observable<any> {
    return this.http.delete(
      `${environment.api_url}${path}`, { params}
    ).pipe(catchError(this.formatErrors));
  }
}
