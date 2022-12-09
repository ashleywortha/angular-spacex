import { Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http';
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class LaunchService{
    constructor(private http: HttpClient){}

    getAllLaunches(): Observable<any>{
        return this.http.get(`https://api.spacexdata.com/v3/launches?limit=100`);
    }

    filterByLaunchSuccess(b: boolean):Observable<any>{
        return this.http.get(`https://api.spacexdata.com/v3/launches?limit=100&launch_success=`+b);
    }

    filterByLandSuccess(b: boolean):Observable<any>{
        return this.http.get(`https://api.spacexdata.com/v3/launches?limit=100&land_success=`+b);
    }

    getLaunchByYear(year: string):Observable<any>{
        return this.http.get(`https://api.spacexdata.com/v3/launches?limit=100&launch_year=` + year);
    }

}