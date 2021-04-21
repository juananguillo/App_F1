package com.everis.f1.app.models.dao;

import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.io.Reader;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import org.springframework.stereotype.Repository;

import com.everis.f1.app.models.entity.Driver;
import com.everis.f1.app.models.entity.Race;
import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;

@Repository
public class RaceDaoImpl implements IRaceDao{

	private ArrayList<String> races;
	
	public RaceDaoImpl(ArrayList<String> races) {
		this.races = races;
	}

	@Override
	public ArrayList<String> findAll(ArrayList<Driver> drivers) {

		ArrayList<Race> racesdri = (ArrayList<Race>) drivers.get(0).getRaces();
			for (Race racedri : racesdri) {
				races.add(racedri.getName());
			}
			
			

			return races;
		}
	

}
