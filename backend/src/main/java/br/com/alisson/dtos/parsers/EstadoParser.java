package br.com.alisson.dtos.parsers;

import br.com.alisson.dtos.EstadoDTO;
import br.com.alisson.entities.Estado;

public class EstadoParser {

	public static EstadoDTO toDTO(Estado estado) {
		return new EstadoDTO(estado.getNome(), estado.getSigla());
	}

}
