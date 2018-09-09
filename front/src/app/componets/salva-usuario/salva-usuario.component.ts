import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { UsuarioService } from '../../services/usuario/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-salva-usuario',
  templateUrl: './salva-usuario.component.html',
  styleUrls: ['./salva-usuario.component.css']
})
export class SalvaUsuarioComponent implements OnInit {
  id: any;
  documentos = { cpf: '', rg: '', tituloEleitor: '', reservista: '' };

  cadastroData = {
    id: '',
    nome: '',
    sobrenome: '',
    dtNascimento: '',
    genero: '',
    estado: {
      sigla: '',
      nome: ''
    },
    documentos: [
      {
        nome: "",
        descricao: ""
      }
    ]
  };



  public userForm: FormGroup;


  validation_messages = {
    'nome': [
      { type: 'required', message: 'Por favor preencha seu nome' }
    ],
    'sobrenome': [
      { type: 'required', message: 'Por favor preencha seu sobrenome' }
    ],
    'dtNascimento': [
      { type: 'required', message: 'Por favor preencha sua data de nascimento' }
    ],
    'genero': [
      { type: 'required', message: 'Insira um genero' },
    ],
    'CPF': [
      { type: 'required', message: 'Por favor preencha seu CPF' },
      { type: 'minlength', message: 'O mananho minimo esse campo são 11 digitos' },
      { type: 'maxlength', message: 'O mananho maximo para esse campo são 11 digitos' }
    ],
    'RG': [
      { type: 'required', message: 'Por favor preencha seu RG' },
      { type: 'minlength', message: 'O mananho minimo esse campo são 7 digitos' },
      { type: 'maxlength', message: 'O mananho maximo para esse campo são 7 digitos' }
    ],
    'tituloEleitor': [
      { type: 'required', message: 'Por favor preencha esse campo.' },
    ],
    'Reservista': [
      { type: 'required', message: 'Por favor preencha esse campo.' },
    ]
  };

  generos = [
    "Masculino",
    "Feminino",
    "Outros"
  ];
  estados = [
    "Brasilia",
    "Bahia",
    "São Paulo"
  ];

  sigla = [
    "DF",
    "BA",
    "SP"
  ];


  constructor(
    private usuarioService: UsuarioService,
    private router: Router,
    private acRouter: ActivatedRoute,
    public formBuilder: FormBuilder
  ) {


  }

  ngOnInit() {
    this.createForms();
    this.findId();
  }

  createForms() {
    this.userForm = this.formBuilder.group({
      nome: new FormControl('', [Validators.required]),
      sobrenome: new FormControl("", [Validators.required]),
      dtNascimento: new FormControl("", Validators.required),
      genero: new FormControl(this.generos[0], Validators.required),
      estadoSigla: new FormControl('', Validators.required),
      estadoNome: new FormControl('', Validators.required),
      CPF: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(11),
        Validators.maxLength(11)
      ])),
      RG: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(7),
        Validators.maxLength(7)
      ])),
      tituloEleitor: new FormControl('', Validators.required),
      Reservista: new FormControl('', Validators.required)
    });

  }

  onSubmit(cadastroData) {
    if (this.cadastroData == null || this.cadastroData.id == '') {
      this.doCreate();
    } else {
      this.doEdit();
    };
  }

  findId() {
    this.id = +this.acRouter.snapshot.paramMap.get('id');
    this.cadastroData.id = this.id;
    if (this.id != 0 && this.id != null) {
      this.usuarioService.findById(this.id).subscribe(data => {
        const response = (data as any);
        this.cadastroData = response;
        this.documentos.cpf = this.cadastroData.documentos[0].descricao;
        this.documentos.rg = this.cadastroData.documentos[1].descricao;
        this.documentos.tituloEleitor = this.cadastroData.documentos[2].descricao;
        this.documentos.reservista = this.cadastroData.documentos[3].descricao;
      });
    };
  }

  doCreate() {
    this.cadastroData.nome = this.userForm.controls.nome.value;
    this.cadastroData.sobrenome = this.userForm.controls.sobrenome.value;
    this.cadastroData.dtNascimento = this.userForm.controls.dtNascimento.value;
    this.cadastroData.genero = this.userForm.controls.genero.value;
    this.cadastroData.estado.nome = this.userForm.controls.estadoNome.value;
    this.cadastroData.estado.sigla = this.userForm.controls.estadoSigla.value;
    let removed = this.cadastroData.documentos.splice(0, 1);
    this.cadastroData.documentos.push(
      { nome: "CPF", descricao: this.userForm.controls.CPF.value },
      { nome: "RG", descricao: this.userForm.controls.RG.value },
      { nome: "TituloEleitor", descricao: this.userForm.controls.tituloEleitor.value },
      { nome: "Reservista", descricao: this.userForm.controls.Reservista.value }
    );
    this.usuarioService.cadastrar(this.cadastroData).subscribe(data => {
      this.router.navigate(['']);
    });
  }

  doEdit() {
    this.cadastroData.id = this.id;
    this.cadastroData.nome = this.userForm.controls.nome.value;
    this.cadastroData.sobrenome = this.userForm.controls.sobrenome.value;
    this.cadastroData.dtNascimento = this.userForm.controls.dtNascimento.value;
    this.cadastroData.genero = this.userForm.controls.genero.value;
    this.cadastroData.estado.nome = this.userForm.controls.estadoNome.value;
    this.cadastroData.estado.sigla = this.userForm.controls.estadoSigla.value;
    let removed = this.cadastroData.documentos.splice(0, 1);
    let removedEdit = this.cadastroData.documentos.splice(0, 4);
    this.cadastroData.documentos.push(
      { nome: "CPF", descricao: this.userForm.controls.CPF.value },
      { nome: "RG", descricao: this.userForm.controls.RG.value },
      { nome: "TituloEleitor", descricao: this.userForm.controls.tituloEleitor.value },
      { nome: "Reservista", descricao: this.userForm.controls.Reservista.value }
    );
    this.usuarioService.update(this.cadastroData).subscribe(data => {
      this.router.navigate(['']);
    });
  }

}
