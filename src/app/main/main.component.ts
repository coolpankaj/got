import { Component, OnInit } from '@angular/core';
import { GothttpService } from '../gothttp.service';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  public alldata;
  public bookId: number;
  public characterId: number;
  public houseId: number;
  public bookArray: any = [];
  public characterArray: any = [];
  public houseArray: any = [];
  public allData: any = [];
  public books: any = [];
  public characters: any = [];
  public houses: any = [];
  constructor(public gothttpService: GothttpService) {
    console.log('main constructor is called');
  }
  ngOnInit() {
    console.log('ng oninit is called');
    this.gothttpService.getBooks().subscribe(
      data => {
        this.books = data;
        for (let i = 0; i < data.length; i++) {
          this.books[i].bookId = i + 1;
        }
        console.log(this.books);
        this.gothttpService.getHouses().subscribe(
          // tslint:disable-next-line:no-shadowed-variable
          data => {
            this.houses = data;
            for (let j = 0; j < data.length; j++) {
              this.houses[j].houseId = j + 1;
            }
            console.log(this.houses);
            // Get Houses Data
            this.gothttpService.getCharacters().subscribe(
              // tslint:disable-next-line:no-shadowed-variable
              data => {
                this.characters = data;
                for (let k = 0; k < data.length; k++) {
                  this.characters[k].characterId = k + 1;
                }
                console.log(this.characters);
                // Adding all the books, characters and houses into allData.
                this.allData = [
                  ...this.books,
                  ...this.characters,
                  ...this.houses
                ];
                console.log(this.allData);

                // Sorting the data alpahbetically.
                this.books.sort(function (name1, name2) {
                  if (name1.name < name2.name) {
                    return -1;
                  } else if (name1.name > name2.name) {
                    return 1;
                  } else {
                    return 0;
                  }
                }),
                this.houses.sort(function (name1, name2) {
                  if (name1.name < name2.name) {
                    return -1;
                  } else if (name1.name > name2.name) {
                    return 1;
                  } else {
                    return 0;
                  }
                }, this.characters.sort(function (name1, name2) {
                  if (name1.name < name2.name) {
                    return -1;
                  } else if (name1.name > name2.name) {
                    return 1;
                  } else {
                    return 0;
                  }
                }));
              },
              error => {
                console.log(error.errorMessage);
              }
            );
          },
          error => {
            console.log(error.errorMessage);
          }
        );
      },
      error => {
        console.log(error.errorMessage);
      }
    );
  }
}
