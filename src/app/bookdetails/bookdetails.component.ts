import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { GothttpService } from '../gothttp.service';

@Component({
  selector: 'app-bookdetails',
  templateUrl: './bookdetails.component.html',
  styleUrls: ['./bookdetails.component.css']
})
export class BookdetailsComponent implements OnInit {
  public currentBook;

  constructor(private _route: ActivatedRoute, private router: Router, private gotHttpService: GothttpService) {
    console.log('Book constructor called');
   }

  ngOnInit() {
    const bookId = this._route.snapshot.paramMap.get('bookId');
    this.gotHttpService.getCurrentBook(bookId);

    this.gotHttpService.getCurrentBook(bookId).subscribe(
      data => {
        console.log(data);
        this.currentBook = data;
        console.log(this.currentBook);
      },
      error => {
          console.log(error.errorMessage);
      }
    );
  }

}
