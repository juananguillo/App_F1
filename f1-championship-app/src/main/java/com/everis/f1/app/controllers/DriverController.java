package com.everis.f1.app.controllers;



import java.util.ArrayList;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.SessionAttributes;

import com.everis.f1.app.models.entity.Driver;
import com.everis.f1.app.models.service.IDriverService;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

@RestController
@SessionAttributes("driver")
public class DriverController {
	@Autowired
	private IDriverService driverService;

	@GetMapping("/ranking")
	public String listar() {
		Gson gson = new GsonBuilder().excludeFieldsWithoutExposeAnnotation()
		        .create();
		return gson.toJson(driverService.findAll());
		

	}

	@GetMapping("/driver")
	public Driver getid(HttpServletRequest request) {
		
		String id = request.getParameter("id");
		return driverService.getdriver(id);
	}

	@RequestMapping(value = "/ranking", params = "id")
	public String getraceid(@RequestParam String id) {
		Gson gson = new GsonBuilder().excludeFieldsWithoutExposeAnnotation()
		        .create();
		//driverService.findAll();
		return gson.toJson(driverService.getraces(id));
	}

}
