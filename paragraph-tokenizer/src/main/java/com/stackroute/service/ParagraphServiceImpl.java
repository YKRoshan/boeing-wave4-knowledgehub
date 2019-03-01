/*
This is the service implementation class that gives the implementation of the service interface methods.
 */

package com.stackroute.service;

import com.stackroute.domain.Paragraph;
import com.stackroute.exception.ParagraphNotFoundException;
import org.json.simple.JSONObject;
import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

@Service
public class ParagraphServiceImpl implements ParagraphService{
    @Override
    public List<JSONObject> getParagraphObject(String documentId1,String text) throws ParagraphNotFoundException {

        try {
            Paragraph paraObj = new Paragraph();
            String patternStr = "[.?!][/\\s/g]?\\n+";
            Pattern pattern = Pattern.compile(patternStr);
            Matcher matcher = pattern.matcher(text);
            String[] para = text.split(patternStr);
            int i = 0;
            while (matcher.find()) {
                String paragraph = matcher.group();
                para[i] = para[i] + paragraph.charAt(0);
                i++;
            }
            int cnt = 0;
            paraObj.setParagraphId(1);
            int id = paraObj.getParagraphId();
            List<JSONObject> list = new ArrayList();
            while (cnt < para.length) {
                JSONObject obj = new JSONObject();
                obj.put("documentId", documentId1);
                obj.put("paragraphId", id);
                paraObj.setParagraphId(id++);
                paraObj.setParagraphText(para[cnt]);
                obj.put("paragraphText", paraObj.getParagraphText());
                cnt++;

                list.add(obj);
            }
            return list;

        }catch (Exception ex){
            throw ex;
        }
    }
}
