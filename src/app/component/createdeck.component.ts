import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CardService } from '../card.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createdeck',
  templateUrl: './createdeck.component.html',
  styleUrls: ['./createdeck.component.css']
})
export class CreatedeckComponent implements OnInit{

  form!:FormGroup
  ngOnInit(): void {
    this.form=this.fb.group({
      deck:this.fb.control<string>('',[Validators.required])
    })
  }

  //deckno!:string
  deckid!:string

  private fb = inject(FormBuilder)
  private cSvc= inject(CardService)
  private router=inject(Router)


  //   getDeck(){
  //   const value:number = this.form.value
  //   console.log(">>>>",value)
  //   this.cSvc.getDeck(value)
  //   .subscribe(result=>{
  //    result.deck_id=this.deckid
  //    console.log(">>>",this.deckid)
  //   })
  // }
  getDeck() {
    const value: string= this.form.value['deck']; 
    console.log(">>>>", value);
  
    this.cSvc.getDeck(value)
      .subscribe(result => {
        this.deckid = result.deck_id; // Assigning result.deck_id to this.deckid
        console.log(">>>", this.deckid);
        this.router.navigate(['draw',this.deckid])
      });
  }
}
