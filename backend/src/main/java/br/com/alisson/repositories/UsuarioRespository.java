package br.com.alisson.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.alisson.entities.Usuario;


@Repository
public interface UsuarioRespository extends JpaRepository<Usuario, Long >{
	
  

	

}
