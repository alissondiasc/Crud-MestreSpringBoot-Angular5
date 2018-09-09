package br.com.alisson.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.alisson.entities.Estado;
import br.com.alisson.repositories.EstadoRespositories;

@Service
public class EstadoService {

	@Autowired
	private EstadoRespositories estadoRepository;

	public Estado salvar(Estado estado) {
		return this.estadoRepository.save(estado);
	}

	public void Deletar(Long id) {
		this.estadoRepository.deleteById(id);
	}

}
