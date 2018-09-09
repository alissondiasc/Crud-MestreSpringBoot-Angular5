package br.com.alisson.dtos.parsers;

import br.com.alisson.dtos.UsuarioDTO;
import br.com.alisson.entities.Usuario;

public class UsuarioParser {

	public static UsuarioDTO toDTO(Usuario usuario) {
		return new UsuarioDTO(usuario.getId(), usuario.getNome(), usuario.getSobrenome(), usuario.getDtNascimento(), usuario.getGenero(), usuario.getEstado(), usuario.getDocumentos());

	}
	public static Usuario toEntity(UsuarioDTO usuarioDTO) {
		return new Usuario(usuarioDTO.getId(), usuarioDTO.getNome(), usuarioDTO.getSobrenome(), usuarioDTO.getDtNascimento(),usuarioDTO.getGenero(), usuarioDTO.getEstado(),usuarioDTO.getDocumentos());
	}

}
