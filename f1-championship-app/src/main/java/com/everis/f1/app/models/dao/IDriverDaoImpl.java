package com.everis.f1.app.models.dao;

import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.io.Reader;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.stereotype.Repository;

import com.everis.f1.app.models.entity.Driver;
import com.everis.f1.app.models.entity.Race;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.reflect.TypeToken;

/*
 * Esta clase implementa la interfaz IDriverDao y sobrescibe sus metodos, encargandose
 * de seleccionar los datos que se piden en el restcontroller
 * 
 */

/*
 * La anotacion repository es usada para la persistencia, aunque no se guarden los datos
 * la utilizo para poder inyectar la clase en el servicio
 * 
 */
@Repository
public class IDriverDaoImpl implements IDriverDao {

	private ArrayList<Driver> drivers;

	public IDriverDaoImpl(ArrayList<Driver> drivers) {
		this.drivers = drivers;
	}

	/*
	 * Este metodo lee el json usando GSON, los asocia a una clase pojo e introduce
	 * los datos en el arraylist de Drivers los ordena y establece su posicion
	 * global
	 * 
	 */

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

		int posicion = 1;

		for (Driver driver : drivers) {
			driver.setPosglobal(posicion);
			posicion++;
		}

		return drivers;
	}

	/*
	 * Este metodo devuelve un driver especifico, pero para que en cada carrera
	 * salga su posicion llamo a getRaces la cual devuelve todos los drivers con una
	 * sola carrera y en cada una su posicion
	 */

	@Override
	public Driver getdriver(String id) {
		Driver d = null;

		for (Driver driver2 : drivers) {
			if (driver2.getId().equals(id)) {
				d = driver2;
			}

		}
		/*
		 * Saco las carreras solo para hacer un bucle y poder parsarle a un arraylist
		 * vacio todos los drivers con solo una carrera
		 * 
		 */
		ArrayList<Race> races = (ArrayList<Race>) d.getRaces();
		String iddriv = d.getId();
		for (Race race : races) {

			String racename = race.getName();
			ArrayList<Driver> driverforrace = getraces(race.getName());
			/*
			 * Cuando tengo todos los drivers con una carrera busco al driver que se pide y
			 * le paso su posicion establecida en getraces
			 * 
			 */
			for (Driver driverfor : driverforrace) {
				if (driverfor.getId().equals(iddriv)) {
					ArrayList<Race> racesdriv = (ArrayList<Race>) driverfor.getRaces();
					race.setPos(racesdriv.get(0).getPos());
					break;

				}
			}

		}

		return d;

	}

	/*
	 * Este metodo devuelve todos los drivers pero solo con una carrera y ordenados
	 * segun su posicion en esta
	 * 
	 * 
	 */
	@Override
	public ArrayList<Driver> getraces(String id) {

		ArrayList<Driver> driverforrace = new ArrayList<Driver>();

		for (Driver driverid : drivers) {
			ArrayList<Race> idrace = new ArrayList<Race>();

			ArrayList<Race> races = (ArrayList<Race>) driverid.getRaces();

			for (Race race : races) {

				if (race.getName().equals(id)) {
					Driver dri = new Driver(driverid);
					idrace.add(race);
					dri.setRaces(idrace);
					driverforrace.add(dri);
					break;
				}
			}

		}

		Collections.sort(driverforrace, new Driver());

		int pos = 1;
		for (Driver driverfor : driverforrace) {
			driverfor.getRaces().get(0).setPos(pos);
			pos++;
		}

		return driverforrace;
	}

}
