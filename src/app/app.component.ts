import { Component, OnInit } from '@angular/core';
import { FairserService } from './components/service/fairser.service';
import { Ifairdata } from './components/interface/fair';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'fairtask';
  fairs:Array<Ifairdata>=[]
  constructor(private _fair:FairserService) { }

  ngOnInit(): void {
this.fairs=this._fair.fetch()
  }

}
