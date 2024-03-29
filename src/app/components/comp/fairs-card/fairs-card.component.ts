import { Component, Input, OnInit } from '@angular/core';
import { FairserService } from '../../service/fairser.service';
import { Ifairdata } from '../../interface/fair';

@Component({
  selector: 'app-fairs-card',
  templateUrl: './fairs-card.component.html',
  styleUrls: ['./fairs-card.component.scss']
})
export class FairsCardComponent implements OnInit {
  @Input()fairdata!:Ifairdata
  isactiveid!:string
  constructor() { }

  ngOnInit(): void {
    
  }
  isid(id:string){
    this.isactiveid=id
  }

}
