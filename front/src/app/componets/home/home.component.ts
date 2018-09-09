import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario/usuario.service';
import { Router} from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public dadosUsuario = new Array<any>();
  public pageable = new Array<any>();
  public totalPages:any;
  public offset:number;
  idU:number
  public page=0;
  public size;
  

  constructor(
    private router: Router,
    private usuarioService:UsuarioService
  ) { 
    this.buscaUsuarios(); 
  }

  ngOnInit() {
    
  }

  
  onDelete(id){
    this.idU = id
    this.usuarioService.deletar(this.idU).subscribe(data=>{
      this.buscaUsuarios();
    })
    
    
  }
  buscaUsuarios(){
    this.usuarioService.findPaginado(this.page, this.size).subscribe(data=>{
      const response = (data as any);
      this.dadosUsuario = response.content;
      this.pageable = response.pageable
      this.totalPages= response.totalPages
      this.offset = response.offset
      console.log(this.dadosUsuario)
    })
  }
  proximaPagina(){
    if(this.dadosUsuario.length >0){
      this.page++
      this.usuarioService.findPaginado(this.page, this.size).subscribe(data=>{
        const response = (data as any);
        this.dadosUsuario = response.content;
        this.pageable = response.pageable
        this.totalPages= response.totalPages
        console.log(this.dadosUsuario)
      })
    }
   

  }
  paginaAnterior(){
      this.page--
      this.usuarioService.findPaginado(this.page, this.size).subscribe(data=>{
        const response = (data as any);
        this.dadosUsuario = response.content;
        this.pageable = response.pageable
        this.totalPages= response.totalPages
        console.log(this.dadosUsuario)
      })
    
    

  }

  

}
