package com.RestoPackage.Controller;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.zip.DataFormatException;
import java.util.zip.Deflater;
import java.util.zip.Inflater;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.http.ResponseEntity.BodyBuilder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.RestoPackage.Model.Admin;
import com.RestoPackage.Model.Restaurant;
import com.RestoPackage.Service.AdminService;
import com.RestoPackage.Service.RestoService;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class ApplicationController {

	@Autowired
	RestoService rservice;
	@Autowired
	AdminService aservice;
	@PostMapping("/registerresto")
	public Restaurant registerResto(@RequestBody Restaurant restoObj) throws Exception {
		String tempRestname = restoObj.getRestname();
		if (tempRestname != null && !"".equals(tempRestname)) {
			Restaurant tempRestObj = rservice.fetchRestaurantByName(tempRestname);
			if (tempRestObj != null) {
				throw new Exception("Restaurant with " + tempRestname + " is already exist");
			}
		}
		Restaurant tempRestObj = null;
		tempRestObj = rservice.registerResto(restoObj);
		return tempRestObj;
	}
	@PutMapping(value="/upload/{restid}",consumes="multipart/form-data")
	public String uplaodImage(@RequestParam MultipartFile file,@PathVariable(value = "restid")int restid) throws Exception {
		System.out.println("Upload Rest id :"+restid+"File name :"+file.getName()+"Original file name"+file.getOriginalFilename());
          return rservice.uploadImage(file, restid);
	}

	@GetMapping("/get/{restid}/{name}")
	public ResponseEntity<byte[]> getFile(@PathVariable("restid") int restid,@PathVariable("name")String name) throws IOException {
            return rservice.getFile(name, restid);
	}

	@GetMapping("/allRestaurants")
	public List<Restaurant> getAllRestaurants() {
		return rservice.getAllRestaurant();
	}

	@GetMapping("/getRestById/{restid}")
	public ResponseEntity<Restaurant> getRestaurantById(@PathVariable(value = "restid") int restid) throws Exception {
		return rservice.getRestaurantById(restid);
	}

	@PutMapping("/updateRest/{restid}")
	public ResponseEntity<Restaurant> updateRestaurant(@PathVariable(value = "restid") int restid,
			@RequestBody Restaurant restDetails) throws Exception {
		return rservice.updateRestaurant(restid, restDetails);
	}

	@DeleteMapping("/deleteRest/{restid}")
	public Map<String, Boolean> deleteRestaurant(@PathVariable(value = "restid") int restid) throws Exception {
		System.out.println("Delete Rest ID"+restid);
		return rservice.deleteRestaurant(restid);
	}

	@PostMapping("/loginadmin")
	public Admin loginAdmin(@RequestBody Admin admin) throws Exception {
		String tempUsername = admin.getUsername();
		String tempPassword = admin.getPassword();
		System.out.println(tempUsername+" "+tempPassword);
		Admin adminObj = null;
		if (tempUsername != null && tempPassword != null) {
			adminObj = aservice.fetchAdminByUsernameAndPassword(tempUsername, tempPassword);
		}
		if (adminObj == null) {
			throw new Exception("You are not Admin");
		}
		return adminObj;
	}
	@PostMapping("/registeradmin1")
	public Admin registerAdmin(@RequestBody Admin admin){
		return aservice.registerAdmin(admin);
		}
	
}
