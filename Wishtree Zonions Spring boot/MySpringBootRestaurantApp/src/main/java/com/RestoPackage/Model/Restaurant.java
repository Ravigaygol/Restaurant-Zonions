package com.RestoPackage.Model;


import java.io.Serializable;
import java.sql.Blob;
import java.util.Arrays;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.Table;

import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonView;
import com.sun.istack.NotNull;

import javassist.SerialVersionUID;

@Entity
@Table(name = "restaurant")
public class Restaurant implements Serializable {
	private static final long SerialVersionUID=1L;
 
	@Id
	private int restid;
	@Column
	private String restname;
	@Column
	private String restaddress;
	@Column
	private String restphone;
	@Column
    private String openTime;
	@Column
    private String closeTime;
	@Column
	private String lastModified;
	@Column
	private boolean active;
//	@Column()
//	private Blob menuImage;
	@Column
	@JsonView(View.FileInfo.class)
	private String name;
	@Column
	private String type;
	@Lob
	@Column
	private byte[] picByte;
	
	public Restaurant() {
	
	}

	public Restaurant(int restid, String restname, String restaddress, String restphone, String openTime,
			String closeTime,String lastModified, boolean active, String name, String type, byte[] picByte) {
		super();
		this.restid = restid;
		this.restname = restname;
		this.restaddress = restaddress;
		this.restphone = restphone;
		this.openTime = openTime;
		this.closeTime = closeTime;
		this.lastModified=lastModified;
		this.active = active;
		this.name = name;
		this.type = type;
		this.picByte = picByte;
	}
	public Restaurant(String name, String type, byte[] picByte) {
		super();
		this.name = name;
		this.type = type;
		this.picByte = picByte;
	}
	public Restaurant(String name, String type, byte[] picByte,int restid) {
		super();
		this.name = name;
		this.type = type;
		this.picByte = picByte;
		this.restid=restid;
	}
	public int getRestid() {
		return restid;
	}

	public void setRestid(int restid) {
		this.restid = restid;
	}

	public String getRestname() {
		return restname;
	}

	public void setRestname(String restname) {
		this.restname = restname;
	}

	public String getRestaddress() {
		return restaddress;
	}

	public void setRestaddress(String restaddress) {
		this.restaddress = restaddress;
	}

	public String getRestphone() {
		return restphone;
	}

	public void setRestphone(String restphone) {
		this.restphone = restphone;
	}

	public String getOpenTime() {
		return openTime;
	}

	public void setOpenTime(String openTime) {
		this.openTime = openTime;
	}

	public String getCloseTime() {
		return closeTime;
	}

	public void setCloseTime(String closeTime) {
		this.closeTime = closeTime;
	}

	
	public String getLastModified() {
		return lastModified;
	}

	public void setLastModified(String lastModified) {
		this.lastModified = lastModified;
	}

	public boolean isActive() {
		return active;
	}

	public void setActive(boolean active) {
		this.active = active;
	}
//
//	public Blob getMenuImage() {
//		return menuImage;
//	}
//
//	public void setMenuImage(Blob menuImage) {
//		this.menuImage = menuImage;
//	}

	public static long getSerialversionuid() {
		return SerialVersionUID;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public byte[] getPicByte() {
		return picByte;
	}

	public void setPicByte(byte[] picByte) {
		this.picByte = picByte;
	}

	@Override
	public String toString() {
		return "Restaurant [restid=" + restid + ", restname=" + restname + ", restaddress=" + restaddress
				+ ", restphone=" + restphone + ", openTime=" + openTime + ", closeTime=" + closeTime + ", lastModified="
				+ lastModified + ", active=" + active + ", name=" + name + ", type=" + type + ", picByte="
				+ Arrays.toString(picByte) + "]";
	}


	
}
