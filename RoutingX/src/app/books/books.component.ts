import { Component, OnInit } from '@angular/core';
import { MarvellousService } from '../marvellous.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit
{
  public Tech : any = [];

  constructor(public obj : MarvellousService) {}

  ngOnInit()
  {
    return this.obj.GetTechDetails().subscribe(data=>this.Tech= data);    
  }
}
