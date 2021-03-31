package com.everis.f1.app.models.service;

import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.io.Reader;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.Date;
import java.util.List;
import java.util.TimeZone;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.everis.f1.app.models.dao.IDriverDao;
import com.everis.f1.app.models.entity.Driver;
import com.everis.f1.app.models.entity.Race;
import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;

@Service
public class DriverServiceImpl implements IDriverService {

	@Autowired
	private IDriverDao driverDao;

	@Override
	public ArrayList<Driver> findAll() {
		return driverDao.findAll();
	}

	@Override
	public Driver getdriver(String id) {
		return driverDao.getdriver(id);

	}

	@Override
	public ArrayList<Driver> getraces(String id) {
		return driverDao.getraces(id);

	}

}
