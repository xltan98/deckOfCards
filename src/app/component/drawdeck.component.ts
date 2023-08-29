import { Component, OnInit, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { CardService } from '../card.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Cards } from '../deck-response';

@Component({
  selector: 'app-drawdeck',
  templateUrl: './drawdeck.component.html',
  styleUrls: ['./drawdeck.component.css']
})
export class DrawdeckComponent implements OnInit{

  deckid:string=''
  form!:FormGroup
  cards:Cards[]=[]
  remaining:number=0

private activatedRoute=inject(ActivatedRoute)
private title= inject(Title)
private cSvc=inject(CardService)
private fb= inject(FormBuilder)
 

ngOnInit(): void {
  this.deckid=this.activatedRoute.snapshot.params['deckid']
  this.form=this.fb.group
  ({draw:this.fb.control<string>('',[Validators.required])})
  
}


process(){
  const value: number= this.form.value['draw']; 
    console.log(">>>>", value);

  this.cSvc.getCards(this.deckid,value).subscribe(result => {
    this.cards=result.cards; 
    console.log(">>>", this.cards);
    this.remaining=result.remaining
    console.log(">>>remaining",this.remaining)


    if (this.remaining <= 0) {
      alert("No more cards left");
    }
  });
  
  
}


}
