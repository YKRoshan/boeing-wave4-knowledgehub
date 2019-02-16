package com.stackroute.service;

import com.stackroute.domain.Paragraph;
import org.json.simple.JSONObject;

import java.util.List;

public interface ParagraphService {

    public List<JSONObject> getParagraphObject(JSONObject object);

}
