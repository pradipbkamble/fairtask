import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Route, RouterStateSnapshot } from '@angular/router';
import { Ifairdata } from '../interface/fair';
import { Observable } from 'rxjs';
import { FairserService } from './fairser.service';

@Injectable({
  providedIn: 'root'
})
export class SinglefairService implements Resolve<Ifairdata> {

  constructor(private _fair:FairserService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Ifairdata | Observable<Ifairdata> | Promise<Ifairdata> {
    
    let fairid=route.params['fairid'];
    return this._fair.fetchforid(fairid)
  }
}
