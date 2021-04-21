package com.everis.f1.app.models.service;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.everis.f1.app.models.dao.IRaceDao;
import com.everis.f1.app.models.entity.Driver;

@Service
public class IRaceServiceImpl implements IRaceService {
	
	@Autowired
	private IRaceDao raceDao;
	
	@Override
	public ArrayList<String> findAll(ArrayList<Driver> drivers) {
		return raceDao.findAll(drivers);
	}

}
