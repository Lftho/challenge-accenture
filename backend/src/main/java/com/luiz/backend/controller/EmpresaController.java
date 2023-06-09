package com.luiz.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.luiz.backend.model.Empresa;
import com.luiz.backend.repository.EmpresaRepository;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/api/company")
@AllArgsConstructor
public class EmpresaController {

  private EmpresaRepository empresaRepository;
  
  @GetMapping
  public List<Empresa> listAll() {
    return null;
  }
}
