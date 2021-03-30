package com.everis.f1.app.models.service;

import java.util.ArrayList;
import java.util.List;

import com.everis.f1.app.models.entity.Driver;

public interface IDriverService {
	public ArrayList<Driver> findAll();
	public Driver getdriver(String id);
}
