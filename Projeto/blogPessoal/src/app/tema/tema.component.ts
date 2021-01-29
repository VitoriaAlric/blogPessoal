import { TemaService } from './../service/tema.service';
import { Tema } from './../model/Tema';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-tema',
  templateUrl: './tema.component.html',
  styleUrls: ['./tema.component.css']
})
export class TemaComponent implements OnInit {

  tema: Tema = new Tema()
  listaTemas: Tema[]

  constructor(
    private router: Router,
    private TemaService: TemaService
  ) { }

  ngOnInit() {
    if(environment.token == ''){
      this.router.navigate(['/entrar'])
    }
  }
  cadastrar(){
    this.TemaService.postTema(this.tema).subscribe((resp: Tema)=> {
      this.tema=resp
      alert('Tema cadastrado com sucesso!')
      this.tema = new Tema()
    })
  }

}
