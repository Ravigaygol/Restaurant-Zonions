package com.RestoPackage.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.RestoPackage.Model.Admin;
import com.RestoPackage.Repository.AdminRepository;

@Service
public class AdminService {

	@Autowired
	AdminRepository repo;

	public AdminService() {
		// TODO Auto-generated constructor stub
	}
	public AdminService(AdminRepository repo) {
		super();
		this.repo = repo;
	}
	
	public Admin fetchAdminByUsernameAndPassword(String username,String password)
	{
		return repo.findByUsernameAndPassword(username, password);
	}
	public Admin registerAdmin(Admin admin)
	{
		return repo.save(admin);
	}
}
