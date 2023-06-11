package com.luiz.backend.repository;
import com.luiz.backend.model.Empresa;

import org.springframework.stereotype.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

@Repository
public interface EmpresaRepository extends JpaRepository<Empresa, String>{}