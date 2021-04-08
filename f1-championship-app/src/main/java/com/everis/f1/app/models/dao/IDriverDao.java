package com.everis.f1.app.models.dao;

import java.util.ArrayList;
import java.util.HashMap;

import com.everis.f1.app.models.entity.Driver;

/*
 * Esta interfaz define los metodos necesarios para la api rest
 * 
 */

public interface IDriverDao {
	public ArrayList<Driver> findAll();

	public Driver getdriver(String id);

	public ArrayList<Driver> getraces(String id);

}
