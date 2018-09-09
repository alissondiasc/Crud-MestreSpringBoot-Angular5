package br.com.alisson.dtos;

import java.time.LocalDate;
import java.util.List;

import javax.validation.constraints.NotEmpty;

import com.fasterxml.jackson.annotation.JsonFormat;

import br.com.alisson.entities.Documentos;
import br.com.alisson.entities.Estado;

public class UsuarioDTO {

	private Long id;
	@NotEmpty(message = "Preenchimento obrigatório")
	private String nome;
	@NotEmpty(message = "Preenchimento obrigatório")
	private String sobrenome;
	@JsonFormat(pattern = "dd/MM/yyyy")
	private LocalDate dtNascimento;
	
	private String genero;
	
	private Estado estado;
	private List<Documentos> documentos;

	public UsuarioDTO(Long id, String nome, String sobrenome, LocalDate dtNascimento,String genero, Estado estado,
			List<Documentos> documentos) {
		super();
		this.id = id;
		this.nome = nome;
		this.sobrenome = sobrenome;
		this.dtNascimento = dtNascimento;
		this.genero = genero;
		this.estado = estado;
		this.documentos = documentos;
	}

	public UsuarioDTO() {

	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getSobrenome() {
		return sobrenome;
	}

	public void setSobrenome(String sobrenome) {
		this.sobrenome = sobrenome;
	}

	public LocalDate getDtNascimento() {
		return dtNascimento;
	}

	public void setDtNascimento(LocalDate dtNascimento) {
		this.dtNascimento = dtNascimento;
	}
	

	public String getGenero() {
		return genero;
	}

	public void setGenero(String genero) {
		this.genero = genero;
	}

	public Estado getEstado() {
		return estado;
	}

	public void setEstado(Estado estado) {
		this.estado = estado;
	}

	public List<Documentos> getDocumentos() {
		return documentos;
	}

	public void setDocumentos(List<Documentos> documentos) {
		this.documentos = documentos;
	}

}
