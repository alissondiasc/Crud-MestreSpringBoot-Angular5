package br.com.alisson.dtos.parsers;

import br.com.alisson.dtos.DocumenosDTO;
import br.com.alisson.entities.Documentos;

public class DocumentosParser {

	public static DocumenosDTO toDTO(Documentos documentos) {
		return new DocumenosDTO(documentos.getId(), documentos.getNome(), documentos.getDescricao());
	}

}
