package br.com.alisson.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import br.com.alisson.dtos.UsuarioDTO;
import br.com.alisson.dtos.parsers.UsuarioParser;
import br.com.alisson.entities.Usuario;
import br.com.alisson.repositories.UsuarioRespository;

@Service
public class UsuarioService {

	@Autowired
	private UsuarioRespository usuarioRespository;

	public UsuarioDTO salvar(UsuarioDTO usuarioDTO) {
		
		Usuario usuario = UsuarioParser.toEntity(usuarioDTO);
		return UsuarioParser.toDTO(usuarioRespository.save(usuario));
		
	}
	
	public void deletar(Long id) {
		this.usuarioRespository.deleteById(id);
	}
	
	public List<UsuarioDTO> buscarTodos() {
        List<Usuario> usuarios = usuarioRespository.findAll();
        return usuarios.stream().map(UsuarioParser::toDTO).collect(Collectors.toList());
    }
	
	public UsuarioDTO buscarById(Long id) {
		Usuario usuario = usuarioRespository.findById(id).orElse(null);
		return UsuarioParser.toDTO(usuario);
    }
	public List<UsuarioDTO> buscaPaginada(Pageable pageable) {
		Page<Usuario> usuarios = usuarioRespository.findAll(pageable);
		return usuarios.stream().map(UsuarioParser::toDTO).collect(Collectors.toList());
    }

}
