package com.everis.f1.app.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.everis.f1.app.models.entity.Driver;
import com.everis.f1.app.models.service.IDriverService;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

@RestController
public class DriverRestController {

	/*
	 * Inyecto la interfaz IdriverService, la cual se usa en el servicio
	 * DriverSercieImpl, esta a su vez se inyecta IDriverDao para separar los datos
	 * de la api rest y asi que sea un servicio el que se encarga de conseguir los
	 * datos
	 * 
	 */
	@Autowired
	private IDriverService driverService;

	/*
	 * Este metodo devuelve los drivers, en formato json además mediante el
	 * gsonBuilder devuelve solo los datos que tengan la anotacion expose
	 */
	@GetMapping("/ranking")
	public String listar() {
		Gson gson = new GsonBuilder().excludeFieldsWithoutExposeAnnotation().create();
		return gson.toJson(driverService.findAll());

	}

	/*
	 * Este metodo devuelve un driver especifico, para que cuando se refresce los
	 * datos no se pierda la información este primero llama a driverService.findAll
	 */

	@RequestMapping(value = "/driver", params = "id")
	public Driver getid(@RequestParam String id) {
		driverService.findAll();
		return driverService.getdriver(id);
	}

	/*
	 * Este metodo devuelve a todos los drivers pero solo con una carrera, tambien
	 * llamo primero a findAll igual que en el metodo anterior y utilizo gsonbuilder
	 * para que muestre solo ciertos datos
	 * 
	 */
	@RequestMapping(value = "/ranking", params = "id")
	public String getraceid(@RequestParam String id) {
		Gson gson = new GsonBuilder().excludeFieldsWithoutExposeAnnotation().create();
		driverService.findAll();
		return gson.toJson(driverService.getraces(id));
	}

}
