import { Component, OnInit} from '@angular/core';
import { trigger,state,style, transition, animate } from '@angular/animations';
import { Imagem } from './imagem.model';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
  animations: [
    trigger('banner', [
    state('hidden', style({
      opacity:0
    })),
    state('visible', style({
      opacity:1
    })),
    transition('hidden <=> visible', animate('1s ease-in'))
  ])
]
})
export class BannerComponent implements OnInit {
  public estado :string = 'hidden'
  public imagens : Array<Imagem> = [
    {estado: 'hidden',url:'/assets/banner-acesso/img_1.png' },
    {estado: 'hidden',url:'/assets/banner-acesso/img_2.png' },
    {estado: 'hidden',url:'/assets/banner-acesso/img_3.png' },
    {estado: 'hidden',url:'/assets/banner-acesso/img_4.png' },
    {estado: 'hidden',url:'/assets/banner-acesso/img_5.png' },
  ]
  constructor() { }

  ngOnInit() {
setTimeout(() => this.logicaRotacao(0),200)
  }
  public logicaRotacao(i : number) :void{
    if(i==this.imagens.length){
       i=0;
    }
      if(i==0){
        this.imagens[this.imagens.length-1].estado='hidden'
      }else{
        this.imagens[i-1].estado='hidden'
      }
        this.imagens[i].estado='visible'     
      i++;
      setTimeout(() => {
        this.logicaRotacao(i)
      },3500)
    }
    
    }



