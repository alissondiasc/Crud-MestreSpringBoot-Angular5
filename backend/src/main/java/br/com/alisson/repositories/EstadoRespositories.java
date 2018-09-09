package br.com.alisson.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.alisson.entities.Estado;


@Repository
public interface EstadoRespositories extends JpaRepository<Estado, Long> {

}
