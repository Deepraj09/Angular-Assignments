import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ITech } from './Tech';

@Injectable({
  providedIn: 'root'
})
export class MarvellousService 
{
  public URL : string = "/assets/Data/Tech.json";
  constructor(public hobj : HttpClient) { }

  public GetTechDetails() : Observable<ITech[]>
  {
    return this.hobj.get<ITech[]>(this.URL);
  }
}
