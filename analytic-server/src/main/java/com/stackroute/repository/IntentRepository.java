package com.stackroute.repository;


import com.stackroute.domain.TermNode;
import org.springframework.data.neo4j.annotation.Query;
import org.springframework.data.neo4j.repository.Neo4jRepository;
import org.springframework.stereotype.Repository;

import java.util.Collection;

@Repository
public interface IntentRepository extends Neo4jRepository<TermNode, Integer> {
    @Query("MATCH(u:TermNode) RETURN u")
    Collection<TermNode> getAllTermNodes();
}
