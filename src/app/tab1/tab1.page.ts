import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  audio = new Audio();
  audioLeao = "../../assets/audio-animais/leao.mp3";
  audioCachorro = "../../assets/audio-animais/cachorro.mp3";
  audioGato = "../../assets/audio-animais/gato.mp3";
  audioGirafa = "../../assets/audio-animais/girafa.mp3";
  audioMacaco = "../../assets/audio-animais/macaco.mp3";

  audioEmExecucao: any;
  
  somExecutando = {
    cachorro : false,
    leao: false,
    gato: false,
    macaco: false,
    girafa: false,
  }

  constructor() {}

  executarSom(valor: any): void {

    if(this.audioEmExecucao)
      this.pararExecucao()

    let animal = valor

    switch(animal){
      case "leao":
        this.somExecutando.leao = true;
        this.audio.src = this.audioLeao;
        break
      case "cachorro":
        this.somExecutando.cachorro = true;
        this.audio.src = this.audioCachorro;
        break
      case "macaco":
        this.somExecutando.macaco = true;
        this.audio.src = this.audioMacaco;
        break
      case "girafa":
        this.somExecutando.girafa = true;
        this.audio.src = this.audioGirafa;
        break
      case "gato":
        this.somExecutando.gato = true;
        this.audio.src = this.audioGato;
        break        
    }          

    this.audioEmExecucao = animal;
    this.playAudio();
  }
  
  playAudio() {    
    this.audio.load();
    this.audio.play(); 
    this.audio.addEventListener('ended', () => {
      this.pararExecucao();
    });       
  }

  pararExecucao(): void {
    this.somExecutando.cachorro = false;
    this.somExecutando.gato = false;
    this.somExecutando.girafa = false;
    this.somExecutando.leao = false;
    this.somExecutando.macaco = false;    
    this.audio.pause();
  }

  aumentarVelocidade(): void {            
    let velocidadeAtual = this.audio.playbackRate;    
    if (velocidadeAtual == 2) {
      this.audio.playbackRate = 4.0
    } else if (velocidadeAtual == 4) {
      this.audio.playbackRate = 6.0
    } else {
      this.audio.playbackRate = 2.0
    }
  }

  diminuirVelocidade(): void {            
    let velocidadeAtual = this.audio.playbackRate;    
    if (velocidadeAtual == 0.75) {
      this.audio.playbackRate = 0.50
    } else if (velocidadeAtual == 0.50) {
      this.audio.playbackRate = 0.25
    } else {
      this.audio.playbackRate = 0.75
    }
  }

}
