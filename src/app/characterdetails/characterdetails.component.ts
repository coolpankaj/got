import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { GothttpService } from '../gothttp.service';


@Component({
  selector: 'app-characterdetails',
  templateUrl: './characterdetails.component.html',
  styleUrls: ['./characterdetails.component.css']
})
export class CharacterdetailsComponent implements OnInit {
public currentCharacter;
  constructor(private _route: ActivatedRoute, private router: Router, private gothttpService: GothttpService) {
    console.log('character constructor called');
  }

  ngOnInit() {
    const characterId = this._route.snapshot.paramMap.get('characterId');
    this.gothttpService.getCurrentCharacter(characterId).subscribe(
      data => {
        console.log(data);
        this.currentCharacter = data;
      },
      error => {
        console.log(error.errorMessage);
      }
    );

  }

}
