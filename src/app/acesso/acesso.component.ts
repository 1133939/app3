import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-acesso',
  templateUrl: './acesso.component.html',
  styleUrls: ['./acesso.component.css'],
  animations:[trigger('animation-banner',[
    state('created', style({
      opacity:1
    })),
    transition('void -> created', [
      style({opacity:0, transform:'translate(-100px, 0)'}), animate('500ms 0s ease-in-out')
    ])
  ]), trigger('animation-painel', [
    state('created', style({
      opacity:1
    })),
    transition('void -> created', [
      style({opacity:0, transform:'translate(100px, 0)'}), animate('500ms 0s ease-in-out')
    ])
  ])]
})
export class AcessoComponent implements OnInit {
public estadoBanner : string ='created'
public estadoPainel : string = 'created'

public cadastro : boolean = false;
  constructor() { }

  ngOnInit() {
  }
  public exibirPainel(event : string) : void{
    if(event == 'cadastro'){
      this.cadastro=true;
    }else{
      this.cadastro=false;
    }
  }

}
