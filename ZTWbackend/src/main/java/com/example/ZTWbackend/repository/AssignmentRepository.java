package com.example.ZTWbackend.repository;

import com.example.ZTWbackend.model.AssignmentModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AssignmentRepository extends JpaRepository<AssignmentModel, Long> {
}
