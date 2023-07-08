import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  audio = new Audio();
  exibindo = false;
  animalSelecionado = false;
  nomeAnimal: any;
  imagemAnimal: any;  
  historiaAnimal = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's star. Lorem Ipsum is simply dummy text";
  audioLeao = "../../assets/audio-animais/leao.mp3";
  audioCachorro = "../../assets/audio-animais/cachorro.mp3";
  audioGato = "../../assets/audio-animais/gato.mp3";
  audioGirafa = "../../assets/audio-animais/girafa.mp3";
  audioMacaco = "../../assets/audio-animais/macaco.mp3";
  somExecutando = false;

  constructor() {}

  ngOnInit() {
    const ionModalElement = document.querySelector('ion-modal');
    ionModalElement?.addEventListener('ionBackdropTap', this.fecharModal.bind(this));
  }

  ngOnDestroy() {
    const ionModalElement = document.querySelector('ion-modal');
    ionModalElement?.removeEventListener('ionBackdropTap', this.fecharModal.bind(this));
  }

  exibirHistoria(valor: any): void {           
    this.exibindo = true;        
    this.animalSelecionado = true;

    if(this.somExecutando)
        this.pararExecucao();

    let animal = valor
    switch(animal){
      case "leao":
        this.nomeAnimal = "Leão";
        this.imagemAnimal = "../../assets//animais/leao.png";        
        this.audio.src = this.audioLeao;
      break
      case "cachorro":
        this.nomeAnimal = "Cachorro";
        this.imagemAnimal = "../../assets/animais/cachorro.png";
        this.audio.src = this.audioCachorro;
  
        break
      case "macaco":
        this.nomeAnimal = "Macaco";
        this.imagemAnimal = "../../assets/animais/macaco.png";
        this.audio.src = this.audioMacaco;
        break
      case "girafa":
        this.nomeAnimal = "Girafa";
        this.imagemAnimal = "../../assets/animais/girafa.png";
        this.audio.src = this.audioGirafa;
        break
      case "gato":
        this.nomeAnimal = "Gato";
        this.imagemAnimal = "../../assets/animais/gato.png";
        this.audio.src = this.audioGato;
        break        
    }     
  }

  fecharModal(): void {
    this.exibindo = false;
  }

  executarSom(): void {
    this.somExecutando = true;
    this.audio.load();
    this.audio.play();
    this.audio.addEventListener('ended', () => {
      this.pararExecucao();
    });       

  }

  pararExecucao(): void {
    this.somExecutando = false;
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