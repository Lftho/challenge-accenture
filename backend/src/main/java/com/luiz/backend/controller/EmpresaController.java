package com.luiz.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
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
    return empresaRepository.findAll();
  }


  @PostMapping
  @ResponseStatus(code = HttpStatus.CREATED)
  public Empresa create(@RequestBody Empresa empresa) {
    return empresaRepository.save(empresa);
  }
}
