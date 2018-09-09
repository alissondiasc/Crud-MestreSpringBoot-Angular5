package br.com.alisson.controllers;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.alisson.dtos.UsuarioDTO;
import br.com.alisson.entities.Usuario;
import br.com.alisson.repositories.UsuarioRespository;
import br.com.alisson.services.UsuarioService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping(value = "usuarios")
public class UsuarioController {

	@Autowired
	private UsuarioService usuarioService;
	@Autowired
	private UsuarioRespository usuarioRespository;

	@PostMapping
	public ResponseEntity<UsuarioDTO> cadastrar(@Valid @RequestBody UsuarioDTO usuarioDTO) {

		UsuarioDTO novoUsuario = usuarioService.salvar(usuarioDTO);

		return ResponseEntity.ok(novoUsuario);
	}

	@DeleteMapping(value = "{id}")
	public void deletar(@PathVariable Long id) {

		this.usuarioService.deletar(id);

	}

	@GetMapping
	public ResponseEntity<List<UsuarioDTO>> buscarTodos() {
		List<UsuarioDTO> usuarios = usuarioService.buscarTodos();

		return ResponseEntity.ok(usuarios);
	}
	@GetMapping(value = "/paginado")
    public ResponseEntity<?> list(Pageable page) {
        
  
        return ResponseEntity.ok(usuarioRespository.findAll(page));
    }
	
	@GetMapping(value = "{id}")
    public ResponseEntity<UsuarioDTO> buscarPorId(@PathVariable Long id) {
        UsuarioDTO usuarioDTO = usuarioService.buscarById(id);

        return ResponseEntity.ok(usuarioDTO);
    }
	

	@PutMapping
	public ResponseEntity<UsuarioDTO> editar(@Valid @RequestBody UsuarioDTO usuarioDTO) {

		UsuarioDTO novoUsuario = usuarioService.salvar(usuarioDTO);

		return ResponseEntity.ok(novoUsuario);
	}

}
