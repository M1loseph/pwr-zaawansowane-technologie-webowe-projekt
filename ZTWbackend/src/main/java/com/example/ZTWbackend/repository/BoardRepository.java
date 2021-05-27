package com.example.ZTWbackend.repository;

import com.example.ZTWbackend.model.BoardModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BoardRepository extends JpaRepository<BoardModel, Long> {
}
