package com.everis.f1.app.models.dao;

import java.util.ArrayList;

import com.everis.f1.app.models.entity.Driver;

public interface IDriverDao {
	public ArrayList<Driver> findAll();

	public Driver getdriver(String id);

	public ArrayList<Driver> getraces(String id);
}
