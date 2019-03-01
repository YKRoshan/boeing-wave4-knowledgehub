package com.stackroute.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.neo4j.ogm.annotation.Id;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Intent {

    @Id
    private int id;
    private String name;
    private String parent_id;
    private String type;
    private String parent_node_type;
}
