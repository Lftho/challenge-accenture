package com.luiz.backend.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;


@Data
@Entity
public class Empresa {
  
  @Id
  @Column (length = 14, nullable = false)
  private String cnpj;

  @Column (length = 30, nullable = false)
  private String nomeFantasia;

  @Column (length = 8, nullable = false)
  private String cep;
}
