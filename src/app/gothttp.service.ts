import { Injectable } from '@angular/core';
// import  http service
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
@Injectable({
  providedIn: 'root'
})
export class GothttpService {
  public baseUrl = 'https://anapioficeandfire.com/api';
  constructor(private _http: HttpClient) {
    console.log('Got Http Service constructor called');
  }
  public getBooks(): any {
    const booksResponse = this._http.get(`${this.baseUrl}/books`);
    console.log(booksResponse);
    return booksResponse;
  }
  public getCurrentBook(bookId): any {
    const currentBook = this._http.get(`${this.baseUrl}/books/${bookId}`);
    return currentBook;
  }
  public getCharacters(): any {
    const charactersResponse = this._http.get(`${this.baseUrl}/characters`);
    console.log(charactersResponse);
    return charactersResponse;
  }
  public getCurrentCharacter(characterId): any {
    const currentCharacter = this._http.get(`${this.baseUrl}/characters/${characterId}`);
    return currentCharacter;
  }
  public getHouses(): any {
    const housesResponse = this._http.get(`${this.baseUrl}/houses`);
    console.log(housesResponse);
    return housesResponse;
  }
  public getCurrentHouse(houseId): any {
    const currentHouse = this._http.get(`${this.baseUrl}/houses/${houseId}`);
    return currentHouse;
  }
}
