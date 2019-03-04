package com.stackroute.queryengine.repository;

import com.stackroute.queryengine.domain.Knowledge;
import org.springframework.data.neo4j.annotation.Query;
import org.springframework.data.neo4j.repository.Neo4jRepository;

import java.util.Collection;

public interface KnowledgeRepository extends Neo4jRepository<Knowledge,String> {

    //get particular knowledge node
    @Query("match(c:Concept{name:{0}}) match(k:Knowledge{intentLevel:{1}}) return k")
    Collection<Knowledge> getKnowledgeNode(String concept, String intentLevel);



}
