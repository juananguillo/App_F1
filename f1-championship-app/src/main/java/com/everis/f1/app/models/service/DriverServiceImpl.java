package com.everis.f1.app.models.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.everis.f1.app.models.dao.IDriverDao;
import com.everis.f1.app.models.entity.Driver;

@Service
public class DriverServiceImpl implements IDriverService {
	
	@Autowired
	private IDriverDao driverdao;

	@Override
	public List<Driver> listardrivers() {
		
		  List <Driver> listDrivers= driverdao.listardrivers();
	        return listDrivers;
	}

}
