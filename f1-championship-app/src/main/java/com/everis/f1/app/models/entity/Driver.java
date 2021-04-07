package com.everis.f1.app.models.entity;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Comparator;
import java.util.Date;
import java.util.List;
import java.util.TimeZone;

import com.google.gson.annotations.Expose;
import com.google.gson.annotations.SerializedName;

public class Driver implements Comparator<Driver> {
	@SerializedName(value = "_id")
	@Expose(serialize = true)
	private String id;
	@Expose(serialize = true)
	private Integer age;
	@Expose(serialize = true)
	private String picture;
	@Expose(serialize = true)
	private String name;
	@Expose(serialize = true)
	private String team;
	@Expose(serialize = true)
	private int posglobal;
	private List<Race> races;

	public Driver() {
	}

	public Driver(String id, Integer age, String picture, String name, String team, List<Race> races) {
		this.id = id;
		this.age = age;
		this.picture = picture;
		this.name = name;
		this.team = team;
		this.races = races;
	}
	
	

	public Driver(Driver driver) {
		id = driver.id;
		age = driver.age;
		picture = driver.picture;
		name = driver.name;
		team = driver.team;
		races = driver.races;
		posglobal = driver.posglobal;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getPicture() {
		return picture;
	}

	public void setPicture(String picture) {
		this.picture = picture;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getTeam() {
		return team;
	}

	public void setTeam(String team) {
		this.team = team;
	}

	public Integer getAge() {
		return age;
	}

	public void setAge(Integer age) {
		this.age = age;
	}

	public List<Race> getRaces() {
		return races;
	}

	public void setRaces(List<Race> races) {
		this.races = races;
	}

	public int getPosglobal() {
		return posglobal;
	}

	public void setPosglobal(int posglobal) {
		this.posglobal = posglobal;
	}
	

	@Override
	public int compare(Driver o1, Driver o2) {
		SimpleDateFormat formato = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss.SSS");
		formato.setTimeZone(TimeZone.getTimeZone("UTC"));

		List<Race> r1 = o1.getRaces();
		List<Race> r2 = o2.getRaces();
		long num1 = 0;
		long num2 = 0;

		for (Race race : r1) {
			Date date;
			try {
				date = formato.parse("1970-01-01 " + race.getTime());
				num1 += date.getTime();
			} catch (ParseException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}

		}

		for (Race race : r2) {
			Date date;
			try {
				date = formato.parse("1970-01-01 " + race.getTime());
				num2 += date.getTime();
			} catch (ParseException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}

		}
	
		if (num1 < num2) {
			return -1;
		} else if (num1 == num2) {
			return 0;
		} else {
			return 1;
		}
	}

}
