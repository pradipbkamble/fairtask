import { Component, OnInit } from '@angular/core';
import { FairserService } from '../../service/fairser.service';
import { Ifairdata } from '../../interface/fair';

@Component({
  selector: 'app-dashboard-fairs',
  templateUrl: './dashboard-fairs.component.html',
  styleUrls: ['./dashboard-fairs.component.scss']
})
export class DashboardFairsComponent implements OnInit {
  fairs:Array<Ifairdata>=[]
  
  constructor(private _fardataservice:FairserService) { }

  ngOnInit(): void {
    this.fairs=this._fardataservice.fetch()
    
  }
  


}
