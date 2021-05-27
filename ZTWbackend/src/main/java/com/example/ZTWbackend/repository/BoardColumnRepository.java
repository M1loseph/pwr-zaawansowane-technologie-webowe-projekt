package com.example.ZTWbackend.repository;

import com.example.ZTWbackend.model.ColumnModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BoardColumnRepository extends JpaRepository<ColumnModel, Long> {
}
