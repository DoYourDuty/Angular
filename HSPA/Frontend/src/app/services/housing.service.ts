import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { IProperty } from '../property/IProperty.Interface';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class HousingService {
  constructor(private http: HttpClient) {}

  getAllProperties(sellRent: number): Observable<IProperty[]> {
    return this.http.get('data/properties.json').pipe(
      map((data) => {
        const propertiesArray: Array<IProperty> = [];
        for (const id in data) {
          if (data.hasOwnProperty(id) && data[id].SellRent == sellRent) {
            propertiesArray.push(data[id]);
          }
        }
        return propertiesArray;
      })
    );
    // .subscribe(
    //   data=> {
    //     this.Properties = data;
    //   }
    // );
  }

  getProperty(ID: number): Observable<IProperty> {
    console.log("getProperty1");
    return this.http
      .get('data/properties.json')
      .pipe(
        map((data) => {
    console.log("getProperty2");

          var property2: IProperty;
          for (const id in data) {
            if (data.hasOwnProperty(id) && id ===  ID.toString()) {
    console.log("getProperty3");

              property2 =  data[id];
            }
          }
    console.log("getProperty4");

          return property2;
        })
      )
  }
}
