package com.everis.f1.app.models.dao;

import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.io.Reader;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import com.everis.f1.app.models.entity.Driver;
import com.everis.f1.app.models.entity.Race;
import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;

public class RaceDaoImpl implements IRaceDao{

	private ArrayList<String> races;
	
	@Override
	public ArrayList<String> findAll() {
		ArrayList<Driver> drivers = new ArrayList<Driver>();

			try (Reader reader = new FileReader(
					"C:\\Users\\jguillol\\Desktop\\Cursos\\Spring\\App_F1\\f1-championship-app\\src\\main\\resources\\json\\data.json")) {

				List<Driver> driver = new Gson().fromJson(reader, new TypeToken<List<Driver>>() {
				}.getType());
				for (Driver driver2 : driver) {
					drivers.add(driver2);

				}

			} catch (FileNotFoundException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}


			for (Driver driver : drivers) {
				driver.setPosglobal(posicion);
				posicion++;
			}
			
			

			return drivers;
		}
	

}
