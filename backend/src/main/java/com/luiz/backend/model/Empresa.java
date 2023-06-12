package com.luiz.backend.model;

import com.fasterxml.jackson.annotation.JsonProperty;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;

import lombok.Data;


@Data
@Entity
public class Empresa {
  
  @Id
  @Column (length = 14, nullable = false)
  @JsonProperty("cnpjOfCpf")
  private String cnpj;

  @Column (length = 30, nullable = false)
  @JsonProperty("name")
  private String nomeFantasia;

  @Column (length = 8, nullable = false)
  private String cep;
}
