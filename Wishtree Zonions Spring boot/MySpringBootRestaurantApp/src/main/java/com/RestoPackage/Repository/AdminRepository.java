package com.RestoPackage.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.RestoPackage.Model.Admin;
public interface AdminRepository extends JpaRepository<Admin, String> {
public Admin findByUsernameAndPassword(String username,String password);
}
