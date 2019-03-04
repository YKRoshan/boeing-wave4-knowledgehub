package com.stackroute.repository;

import com.stackroute.domain.Question;
import org.springframework.data.neo4j.repository.Neo4jRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IntentRepository extends Neo4jRepository<Question,String> {
}
