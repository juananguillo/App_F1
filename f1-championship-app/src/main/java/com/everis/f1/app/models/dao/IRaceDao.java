package com.everis.f1.app.models.dao;

import java.util.ArrayList;

import com.everis.f1.app.models.entity.Race;
import com.everis.f1.app.models.entity.Driver;

public interface IRaceDao {
	public ArrayList<String> findAll();
}
