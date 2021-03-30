package com.everis.f1.app.models.service;

import java.io.FileReader;
import java.io.IOException;
import java.io.Reader;


import java.util.ArrayList;

import java.util.List;


import org.springframework.stereotype.Service;


import com.everis.f1.app.models.entity.Driver;
import com.everis.f1.app.models.entity.Race;
import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;

@Service
public class DriverServiceImpl implements IDriverService {
	
	
	 private ArrayList<Driver> drivers;
	
	 
	 

	public DriverServiceImpl(ArrayList<Driver> drivers) {
		this.drivers = drivers;
	}

	

	@Override
	public ArrayList<Driver> findAll() {
		drivers.clear();
		Gson gson = new Gson();

        try (Reader reader = new FileReader("C:\\Users\\jguillol\\Desktop\\Cursos\\Spring\\App_F1\\f1-championship-app\\src\\main\\resources\\json\\data.json")) {

            // Convert JSON File to Java Object
            //Driver driver = gson.fromJson(reader, Driver.class);
        	 List<Driver> driver = new Gson().fromJson(reader, new TypeToken<List<Driver>>() {}.getType());
            
        	
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
		drivers.clear();
	findAll();
        Driver d=null;
        	 for (Driver driver2 : drivers) {
				if(driver2.getId().equals(id)) {
					d=driver2;
					System.out.println(driver2.getName());
				}
            
        	 }
  
        
		return d;
		
	}



	@Override
	public ArrayList<Driver> getraces(String id) {
		//System.out.println(id);
		drivers.clear();
		findAll();
		ArrayList<Driver> driverforrace=new ArrayList<Driver>();
		Driver dri;
		
		
		 for (Driver driverid : drivers) {
			 dri=driverid;
			 ArrayList<Race> idrace = new ArrayList<Race>();
					
					ArrayList <Race> races = (ArrayList<Race>) driverid.getRaces();
					
					for (Race race : races) {
						if(race.getName().equals(id)) {
							idrace.add(race);
							dri.setRaces(idrace);
							driverforrace.add(dri);
						
							
							
							
							
						}
					}
					
		 }
		
			
    	 
		return driverforrace;
	}



	
	
	
	


}
