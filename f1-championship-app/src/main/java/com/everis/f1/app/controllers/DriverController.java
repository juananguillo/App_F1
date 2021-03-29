package com.everis.f1.app.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.everis.f1.app.models.dao.IDriverDao;
import com.everis.f1.app.models.entity.Driver;
import com.everis.f1.app.models.service.IDriverService;

@RestController
public class DriverController {
	@Autowired
	private IDriverService driverservice;
	@RequestMapping(value="listar", method=RequestMethod.GET)
 public List<Driver> listar() {
	 return driverservice.listardrivers();
 }
}
