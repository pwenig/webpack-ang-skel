import {Component, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Subject } from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class MountainService {

  results: any = [];
  private subject = new Subject<any>();

  constructor(private http: HttpClient){}

  getMountains(): Observable<any> {
    let subject: Subject<any> = new Subject;

    this.http.get('/mountains').subscribe(

      ( success ) => {

        this.results = success;
        subject.next(this.results)

      },

      ( error) => {

        console.log(error)
        subject.error(error)
      }

    );
      return subject.asObservable();

  }
}