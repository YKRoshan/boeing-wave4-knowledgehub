package com.stackroute.searchupstreamservice.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Search {
    @Id
    private String searchString;
    private String sessionId;
}
