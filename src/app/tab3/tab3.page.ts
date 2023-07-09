import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  alerta = ""  
  mensagem = "Você será redirecionado para outra página";
  exibirAviso = false;
  linkVideo = ""
  redirecionado = false;

  constructor() {}

  abrirVideo(animal: any): void {    
    this.exibirAviso = true;    
    this.definirAnimal(animal)   
  }

  definirAnimal(animal:any){
    switch(animal){
      case "leao":    
        this.alerta = "Vídeo - Leão";     
        this.linkVideo = "https://youtu.be/0w33s4jZUoY"   
        break
      case "cachorro":        
        this.alerta = "Vídeo - Cachorro"; 
        this.linkVideo = "https://youtu.be/N7TX7mp871M" 
        break
      case "macaco":        
        this.alerta = "Vídeo - Macaco";
        this.linkVideo = "https://youtu.be/4Y-dm0QmbYU"
        break
      case "girafa":        
        this.alerta = "Vídeo - Girafa";
        this.linkVideo = "https://youtu.be/MuanfpL1o18"
        break
      case "gato":        
        this.alerta = "Vídeo - Gato";
        this.linkVideo = "https://youtu.be/4R6woWfjC3I"
        break        
    }      
  }

  resultadoAlerta(event: any) {
    this.exibirAviso = false;
      
    if(event.detail.role == 'confirmou')        
    {
      window.open(this.linkVideo + '&mute=1', '_blank', );
      this.redirecionado = true;
    }
      
  }
  
  public botoes = [    
    {
      text: 'Cancelar',   
      role: 'cancelou'         
    },
    {
      text: 'OK',      
      role: 'confirmou'         
    },
  ];
}
