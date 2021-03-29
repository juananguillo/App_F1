package com.everis.f1.app.models.entity;

import java.io.Serializable;
import java.util.Map;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "drivers")
public class Driver implements Serializable {

	@Id
	@GeneratedValue(generator = "uuid")
	@Column(name = "_id")
	private String id;
	private Integer age;
	private String picture;
	private String name;
	private String team;
	//private Map<String, String> races;

	private static final long serialVersionUID = 1L;

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
	
	
	
/*
	public Map<String, String> getRaces() {
		return races;
	}

	public void setRaces(Map<String, String> races) {
		this.races = races;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}
*/
}
