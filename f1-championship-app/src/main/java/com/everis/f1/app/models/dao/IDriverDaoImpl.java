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
public class IDriverDaoImpl implements IDriverDao {

	private ArrayList<Driver> drivers;

	public IDriverDaoImpl(ArrayList<Driver> drivers) {
		this.drivers = drivers;
	}

	@Override
	public ArrayList<Driver> findAll() {

		drivers.clear();

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
		Collections.sort(drivers, new Driver());

		return drivers;
	}

	@Override
	public Driver getdriver(String id) {
		findAll();
		Driver d = null;
		for (Driver driver2 : drivers) {
			if (driver2.getId().equals(id)) {
				d = driver2;
				System.out.println(driver2.getName());
			}

		}

		return d;

	}

	@Override
	public ArrayList<Driver> getraces(String id) {

		drivers.clear();
		findAll();
		ArrayList<Driver> driverforrace = new ArrayList<Driver>();
		Driver dri;

		for (Driver driverid : drivers) {
			dri = driverid;
			ArrayList<Race> idrace = new ArrayList<Race>();

			ArrayList<Race> races = (ArrayList<Race>) driverid.getRaces();

			for (Race race : races) {
				if (race.getName().equals(id)) {
					idrace.add(race);
					dri.setRaces(idrace);
					driverforrace.add(dri);

				}
			}

		}

		Collections.sort(driverforrace, new Driver());

		return driverforrace;
	}

}