import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from '../../services/usuario/usuario.service';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})
export class DetalhesComponent implements OnInit {

  clienteDetail: Array<any>;

  constructor(
    private router: ActivatedRoute,
    private usuarioService: UsuarioService
  ) { 
    
    
  }

  ngOnInit() {
    this.getClienteDetail();
       
  }

  getClienteDetail(){
    const id = +this.router.snapshot.paramMap.get('id');
    this.usuarioService.findById(id).subscribe(data=>{
      const response = (data as any);
      this.clienteDetail = response;
      console.log(this.clienteDetail);
    });
  }
  

}
