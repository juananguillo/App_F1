package com.everis.f1.app.models.service;

import java.io.FileReader;
import java.io.IOException;
import java.io.Reader;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.everis.f1.app.models.entity.Driver;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;

@Service
public class DriverServiceImpl implements IDriverService {
	
	 private final ArrayList<Driver> drivers;
	 
	 

	public DriverServiceImpl(ArrayList<Driver> drivers) {
		this.drivers = drivers;
	}

	

	@Override
	public ArrayList<Driver> findAll() {

		Gson gson = new Gson();

        try (Reader reader = new FileReader("C:\\Users\\jguillol\\Desktop\\Cursos\\Spring\\App_F1\\f1-championship-app\\src\\main\\resources\\json\\data.json")) {

            // Convert JSON File to Java Object
            //Driver driver = gson.fromJson(reader, Driver.class);
        	 List<Driver> driver = new Gson().fromJson(reader, new TypeToken<List<Driver>>() {}.getType());
            
        	 driver.forEach(System.out::println);
        	 for (Driver driver2 : driver) {
				drivers.add(driver2);
			}
            
            

        } catch (IOException e) {
            e.printStackTrace();
        }
		return drivers;
	}



	@Override
	public Driver getdriver(String id) {
		Gson gson = new Gson();
		 Driver d = null;
        try (Reader reader = new FileReader("C:\\Users\\jguillol\\Desktop\\Cursos\\Spring\\App_F1\\f1-championship-app\\src\\main\\resources\\json\\data.json")) {

            // Convert JSON File to Java Object
            //Driver driver = gson.fromJson(reader, Driver.class);
        	 List<Driver> driver = new Gson().fromJson(reader, new TypeToken<List<Driver>>() {}.getType());
            System.out.println(id);
        
        	 for (Driver driver2 : driver) {
				if(driver2.getId().equals(id)) {
					d=driver2;
				}
            
        	 }

        } catch (IOException e) {
            e.printStackTrace();
        }
		return d;
		
	}
	
	
	
	


}
