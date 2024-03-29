import { Component, Input, OnInit } from '@angular/core';
import { Ifairdata } from '../../interface/fair';
import { ActivatedRoute, Params } from '@angular/router';
import { FairserService } from '../../service/fairser.service';

@Component({
  selector: 'app-singlefair',
  templateUrl: './singlefair.component.html',
  styleUrls: ['./singlefair.component.scss']
})
export class SinglefairComponent implements OnInit {
  
fairscarchid!:string;
fairobjs!:Ifairdata
  constructor(private _rout:ActivatedRoute,private _fairtext:FairserService) { 
    this._rout.data
    .subscribe(res=>{
      this.fairobjs=res['fairpro']
    })
  }

  ngOnInit(): void {
  //   this._rout.params.subscribe((params:Params)=>{
  //     console.log(params);
      
  //     this.fairscarchid=params['fairid'];
  //    this.fairobjs = this._fairtext.fetchforid(this.fairscarchid)
  //   })
  }

}
