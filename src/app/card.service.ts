import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { DeckResponse, DrawResponse } from './deck-response';

const url='https://www.deckofcardsapi.com/api/deck/new/shuffle/';


@Injectable({
  providedIn: 'root'
})
export class CardService {
  
  http=inject(HttpClient)

  getDeck(deck_count:string):Observable<DeckResponse>{
    const params= new HttpParams().set('deck_count',deck_count)
    return this.http.get<DeckResponse>(url,{params})
  }

  getCards(deckid:string,draw:number):Observable<DrawResponse>{
    const getcards=`https://www.deckofcardsapi.com/api/deck/${deckid}/draw/`
    const params= new HttpParams().set('count',draw)
    return this.http.get<DrawResponse>(getcards,{params})
  }



}
