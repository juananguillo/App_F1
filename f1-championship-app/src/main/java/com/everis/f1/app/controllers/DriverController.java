package com.everis.f1.app.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.everis.f1.app.models.dao.IDriverDao;

@Controller
public class DriverController {
	@Autowired
	@Qualifier("driverDaoJPA")
	private IDriverDao driverDao;
	@RequestMapping(value="listar", method=RequestMethod.GET)
 public String listar(Model model) {
	 model.addAttribute("titulo", "Listado de Drivers");
	 model.addAttribute("drivers", driverDao.listardrivers());
	 return "listar";
 }
}
