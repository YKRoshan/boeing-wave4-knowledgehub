package com.stackroute.graph.repository;

import com.stackroute.graph.model.Knowledge;
import org.springframework.data.neo4j.annotation.Query;
import org.springframework.data.neo4j.repository.Neo4jRepository;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.Collection;

public interface KnowledgeRepository extends Neo4jRepository<Knowledge,Integer> {

    @Query("MATCH (u:Knowledge) RETURN u")
    Collection<Knowledge> getAllKnowledge();

    @Query("match(k:Knowledge{paragraphId:{0},intentLevel:{1}}) return k")
    Collection<Knowledge> getKnowledge(Integer paragraphId,String intentLevel);

    @Query("match(p:Concept{name:{0}}) match(k:Knowledge{paragraphId:{1},intentLevel:{2}}) CREATE(k)-[:knowledgeOf {confidenceScore:{3}}]->(p)")
    Collection<Knowledge> insertRelationship(String name,Integer paragraphId,String intentLevel,String confidenceScore); //Here "name" is the name of the Concept node for which the Knowledge node has to be attached

}
