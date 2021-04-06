package com.everis.f1.app.models.entity;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Comparator;
import java.util.Date;
import java.util.TimeZone;

public class Race implements Comparator<Race> {
	private String name;
	private String time;
	private int pos;

	public Race() {
		
	}
	public Race(String name, String time) {
		this.name = name;
		this.time = time;
	}
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
	
	public int getPos() {
		return pos;
	}

	public void setPos(int pos) {
		this.pos = pos;
	}
	@Override
	public int compare(Race o1, Race o2) {
		SimpleDateFormat formato = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss.SSS");
		formato.setTimeZone(TimeZone.getTimeZone("UTC"));
		Date date;
		long time1=0;
		long time2=0;
		
		try {
			date = formato.parse("1970-01-01 " + o1.getTime());
			time1=date.getTime();
			date = formato.parse("1970-01-01 " + o2.getTime());
			time2=date.getTime();
			
		} catch (ParseException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		
		if (time1 < time2) {
			return -1;
		} else if (time1 == time2) {
			return 0;
		} else {
			return 1;
		}
	}
	

}
