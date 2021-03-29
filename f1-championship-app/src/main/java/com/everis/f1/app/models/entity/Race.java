package com.everis.f1.app.models.entity;

import javax.persistence.Column;
import javax.persistence.Embeddable;

@Embeddable
public class Race {
	@Column(name = "race")
	private String name;
	private String time;
	
	
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getTime() {
		return time;
	}
	public void setTime(String time) {
		this.time = time;
	}
	
	
	

}
