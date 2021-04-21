package com.everis.f1.app.models.service;

import java.util.ArrayList;

import com.everis.f1.app.models.entity.Driver;

public interface IRaceService {
	public ArrayList<String> findAll(ArrayList<Driver> drivers);
}
