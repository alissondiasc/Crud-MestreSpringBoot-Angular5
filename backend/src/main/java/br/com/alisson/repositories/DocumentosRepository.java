package br.com.alisson.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.alisson.entities.Documentos;

@Repository
public interface DocumentosRepository extends JpaRepository<Documentos, Long> {

}
