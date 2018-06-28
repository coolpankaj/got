import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { GothttpService } from '../gothttp.service';
@Component({
  selector: 'app-housedetails',
  templateUrl: './housedetails.component.html',
  styleUrls: ['./housedetails.component.css']
})
export class HousedetailsComponent implements OnInit {
public currentHouse;
  constructor(private _route: ActivatedRoute, private router: Router, private gohttpservice: GothttpService) {
    console.log('house details constructor called ');
   }
  ngOnInit() {
    const houseId = this._route.snapshot.paramMap.get('houseId');
    this.gohttpservice.getCurrentHouse(houseId);
    this.gohttpservice.getCurrentHouse(houseId).subscribe(
        data  => {
          console.log(data);
          this.currentHouse = data;
          console.log(this.currentHouse);
        },
        error => {
          console.log(error.errorMessage);
        }
    );
  }
}
