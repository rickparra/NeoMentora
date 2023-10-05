package com.neomentora.neomentora.dao;

import com.neomentora.neomentora.domain.SmallBusiness;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface SmallBusinessRepository extends JpaRepository<SmallBusiness, Long> {

    Optional<SmallBusiness> findByEmail(String email);

}
