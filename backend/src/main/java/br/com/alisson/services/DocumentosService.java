package br.com.alisson.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.alisson.entities.Documentos;
import br.com.alisson.repositories.DocumentosRepository;

@Service
public class DocumentosService {

	@Autowired
	private DocumentosRepository documentosRepository;

	public Documentos salvar(Documentos documentos) {
		return this.documentosRepository.save(documentos);
	}

	public void deletar(Long id) {
		this.documentosRepository.deleteById(id);
	}

}
