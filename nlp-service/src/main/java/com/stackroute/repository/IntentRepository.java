package com.stackroute.repository;

import com.stackroute.domain.Concept;
import com.stackroute.domain.Intent;
import org.springframework.data.neo4j.annotation.Query;
import org.springframework.data.neo4j.repository.Neo4jRepository;

import java.util.Collection;

public interface IntentRepository extends Neo4jRepository<Intent, Integer> {
    @Query("MATCH(u:Intent) RETURN u")
    Collection<Intent> getAllIntents();
}
