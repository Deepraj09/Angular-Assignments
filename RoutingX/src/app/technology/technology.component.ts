import { Component, OnInit } from '@angular/core';
import { MarvellousService } from '../marvellous.service';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css']
})
export class TechnologyComponent implements OnInit 
{
  public Tech : any = [];

  constructor(public obj : MarvellousService) {}

  ngOnInit() 
  {
    return this.obj.GetTechDetails().subscribe(data=>this.Tech= data); 
  }
}
