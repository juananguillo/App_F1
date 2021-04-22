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
	public ArrayList<String> findAll() {
		
		races.clear();

		try (Reader reader = new FileReader(
				"C:\\Users\\jguillol\\Desktop\\Cursos\\Spring\\App_F1\\f1-championship-app\\src\\main\\resources\\json\\data.json")) {

			List<Driver> drivers = new Gson().fromJson(reader, new TypeToken<List<Driver>>() {
			}.getType());
			ArrayList<Race> rac= (ArrayList<Race>) drivers.get(0).getRaces();
			for (Race race: rac) {
				races.add(race.getName());

			}

		} catch (FileNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

			

			return races;
		}
	

}
