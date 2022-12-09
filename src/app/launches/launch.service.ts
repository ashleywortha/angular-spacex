import { Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http';
import { BehaviorSubject, Observable } from "rxjs";
import { Launch } from "./launch.model";

@Injectable({
    providedIn: 'root'
})
export class LaunchService{
    constructor(private http: HttpClient){}

    //make interface for launch with on
    getAllLaunches(): Observable<Launch[]>{
        return this.http.get<Launch[]>(`https://api.spacexdata.com/v3/launches?limit=100`);
    }

    filterByLaunchSuccess(b: boolean):Observable<Launch[]>{
        return this.http.get<Launch[]>(`https://api.spacexdata.com/v3/launches?limit=100&launch_success=`+b);
    }

    filterByLandSuccess(b: boolean):Observable<Launch[]>{
        return this.http.get<Launch[]>(`https://api.spacexdata.com/v3/launches?limit=100&land_success=`+b);
    }

    getLaunchByYear(year: string):Observable<Launch[]>{
        return this.http.get<Launch[]>(`https://api.spacexdata.com/v3/launches?limit=100&launch_year=` + year);
    }

    filterByYearAndSuccess(year: string, type:string, b:boolean):Observable<Launch[]>{
        return this.http.get<Launch[]>(`https://api.spacexdata.com/v3/launches?limit=100&launch_year=` + year +`&` + type + `_success=` + b)
    }

}