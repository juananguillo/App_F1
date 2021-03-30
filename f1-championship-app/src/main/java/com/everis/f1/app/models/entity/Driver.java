package com.everis.f1.app.models.entity;


import java.util.List;

import com.google.gson.annotations.SerializedName;





public class Driver {
	@SerializedName(value = "_id")
	private String id;
	private Integer age;
	private String picture;
	private String name;
	private String team;
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

	@Override
	public String toString() {
		return "Driver [id=" + id + ", age=" + age + ", picture=" + picture + ", name=" + name + ", team=" + team
				+ ", races=" + races + "]";
	}

	
	
	
}
