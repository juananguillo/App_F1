package com.everis.f1.app.models.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.everis.f1.app.models.entity.Driver;

@Repository("driverDaoJPA")
public class DriverDaoImpl implements IDriverDao {

	@PersistenceContext
	private EntityManager em;
	
	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	@Override
	public List<Driver> listardrivers() {
		return em.createQuery("from Driver").getResultList();
	}

}
