import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { LaunchService } from '../launches/launch.service';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss', '../app.component.scss']
})
export class FilterComponent implements OnInit{

  launches:any;
  years:any;
  filter:any;
  buttonsClicked:any;
  
  constructor(private launchService: LaunchService, private router: Router, private route: ActivatedRoute){
  }

  
  ngOnInit(): void {
    this.filter = this.route.snapshot.paramMap.get('filterName');
    //make dynamic
    this.years=['2006', '2007', '2008', '2009','2010','2011','2012','2013','2014','2015','2016','2017','2018','2019','2020'];
    this.getFilter();
  }

  getFilter(){
    if(this.years.includes(this.filter)){
      this.filterByYearRefresh(this.filter);
    } else{
      switch(this.filter){
        case "launchFailure": this.filterByLaunchSuccess(false);break;
        case"launchSuccess": this.filterByLaunchSuccess(true);break;
        case "landFailure":this.filterByLandSuccess(false);break;
        case "landSuccess":this.filterByLandSuccess(true);break;
        default: this.resetResults();break;
      }
    }
  }


  filterByLaunchSuccess(b: boolean){
    this.launchService.filterByLaunchSuccess(b).subscribe(launch => this.launches=launch);
  
  }
  
  filterByLandSuccess(b: boolean){
    this.launchService.filterByLandSuccess(b).subscribe(launch => this.launches=launch);
  }

  filterByYear(e:Event){
    const year = (e.target as HTMLButtonElement).value;
    this.launchService.getLaunchByYear(year).subscribe(launch => this.launches=launch);
  } 

  filterByYearRefresh(y:string){
    const year = y;
    this.launchService.getLaunchByYear(year).subscribe(launch => {this.launches=launch; console.log(launch)});

  } 

  resetResults(){
    this.router.navigateByUrl('/');
    this.launchService.getAllLaunches().subscribe(launch => this.launches=launch);

  }

}
