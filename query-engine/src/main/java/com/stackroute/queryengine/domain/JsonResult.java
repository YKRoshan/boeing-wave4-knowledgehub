package com.stackroute.queryengine.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Iterator;
import java.util.List;


@Data
@NoArgsConstructor
@AllArgsConstructor
public class JsonResult {

    private List<QueryEngineResult> result;
}
