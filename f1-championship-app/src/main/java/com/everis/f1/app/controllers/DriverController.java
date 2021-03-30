package com.everis.f1.app.controllers;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.everis.f1.app.models.entity.Driver;
import com.everis.f1.app.models.service.IDriverService;

@RestController
public class DriverController {
	@Autowired
	private IDriverService driverservice;

	@GetMapping("/ranking")
	public List<Driver> listar() {
		System.out.println(3);
		return driverservice.findAll();

	}

	@GetMapping("/driver")
	public Driver getid(HttpServletRequest request) {
		String id = request.getParameter("id");
		return driverservice.getdriver(id);
	}

	@RequestMapping(value = "/ranking", params = "id")
	public List<Driver> getraceid(@RequestParam String id) {
		return driverservice.getraces(id);
	}

}
