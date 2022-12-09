import { Component, Input, OnInit } from '@angular/core';
import { LaunchService } from './launch.service';

@Component({
  selector: 'app-launches',
  templateUrl: './launches.component.html',
  styleUrls: ['./launches.component.scss', '../app.component.scss']
})
export class LaunchesComponent implements OnInit{
  @Input() viewLaunches: any;

  constructor(private launchService: LaunchService){}
  ngOnInit(): void {
  }

}
