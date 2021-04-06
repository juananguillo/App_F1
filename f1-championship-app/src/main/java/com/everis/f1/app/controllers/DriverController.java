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

import com.everis.f1.app.models.dao.IDriverDao;
import com.everis.f1.app.models.entity.Driver;
import com.everis.f1.app.models.service.IDriverService;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

@RestController
public class DriverController {
	@Autowired
	private IDriverService driverService;

	@GetMapping("/ranking")
	public String listar() {
		Gson gson = new GsonBuilder().excludeFieldsWithoutExposeAnnotation()
		        .create();
		System.out.println(gson.toJson(driverService.findAll()));
		return gson.toJson(driverService.findAll());
		

	}

	@GetMapping("/driver")
	public Driver getid(HttpServletRequest request) {
		String id = request.getParameter("id");
		driverService.findAll();
		return driverService.getdriver(id);
	}

	@RequestMapping(value = "/ranking", params = "id")
	public String getraceid(@RequestParam String id) {
		Gson gson = new Gson();
		driverService.findAll();
		return gson.toJson(driverService.getraces(id));
	}

}
