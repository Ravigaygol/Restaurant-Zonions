package com.RestoPackage.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.RestoPackage.Model.Restaurant;

public interface RestaurantRepository extends JpaRepository<Restaurant, Integer> {
public Restaurant findByRestname(String restname);
Optional<Restaurant>findByName(String name);
Optional<Restaurant> findByNameAndRestid(String name,int restid);

}
