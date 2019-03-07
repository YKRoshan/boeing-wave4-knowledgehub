package com.stackroute.service;

import com.stackroute.domain.SearchDocument;
import com.stackroute.domain.WebDocument;
import org.json.simple.JSONObject;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class WebDocumentServiceImpl implements WebDocumentService{
    private WebDocument webDocument= new WebDocument();

    @Override
    public void sendSearchdoc(SearchDocument searchDocument) {
        webDocument.setId(searchDocument.getId());
        webDocument.setConceptName(searchDocument.getConceptName());
        webDocument.setDomain(searchDocument.getDomain());
        webDocument.setLink(searchDocument.getLink());
    }

    @Override
    public void extractWebContent(SearchDocument searchDocument) {
        String webContent="";
        String link=searchDocument.getLink();
        try {
            Document document = Jsoup.connect(link).get();
            //getting the whole content of the webpage
            webContent=document.outerHtml();
            webDocument.setWebContent(webContent);
        }
        catch (Exception ex){
            ex.printStackTrace();
        }
    }

    @Override
    public String extractTitle(SearchDocument searchDocument) {
        String title="";
        String link=searchDocument.getLink();
        try {
            Document document = Jsoup.connect(link).get();
            //getting the title of the webpage
            title=document.title();
            webDocument.setTitle(title);
        }
        catch (Exception ex){
            ex.printStackTrace();
        }
        return webDocument.getTitle();
    }

    @Override
    public void extractMetadata(SearchDocument searchDocument) {
        List<JSONObject> metadata = new ArrayList<>();
        String link=searchDocument.getLink();
        try {
            Document document = Jsoup.connect(link).get();
            Elements metaTags = document.getElementsByTag("meta");
            for (Element mTag : metaTags) {
                JSONObject metatag = new JSONObject();
                //storing the meta tag properties
                String content = mTag.attr("content");
                String name = mTag.attr("name");
                String property = mTag.attr("property");
                if (!name.equals("")) {
                    metatag.put("name", name);
                    metatag.put("content", content);
                    //adding the meta tags in json list metadata
                    metadata.add(metatag);
                }
                if (!property.equals("")) {
                    metatag.put("property", property);
                    metatag.put("content", content);
                    //adding the meta tags in JSONObject list metadata
                    metadata.add(metatag);
                }
            }
            webDocument.setMetadata(metadata);
        }
        catch (Exception ex){
            ex.printStackTrace();
        }
    }

    @Override
    public String extractDescription(SearchDocument searchDocument) {
        String description = "";
        String link=searchDocument.getLink();
        try {
            Document document = Jsoup.connect(link).get();
            Elements metaTags = document.getElementsByTag("meta");
            for (Element mTag : metaTags) {
                //storing the meta tag properties
                String name = mTag.attr("name");
                String property = mTag.attr("property");
                if (!name.equals("")) {
                    if (name.equals("description")) {
                        //getting the description meta tag
                        description = document.select("meta[name=description]").first().attr("content");
                        webDocument.setDescription(description);
                    }
                }
                if (!property.equals("")) {
                    if (property.equals("og:description")) {
                        description = document.select("meta[property=og:description]").first().attr("content");
                        webDocument.setDescription(description);
                    }
                }
            }
        }
        catch (Exception ex){
            ex.printStackTrace();
        }
        return webDocument.getDescription();
    }

    @Override
    public String extractKeywords(SearchDocument searchDocument) {
        String keywords = "";
        String link=searchDocument.getLink();
        try {
            Document document = Jsoup.connect(link).get();
            Elements metaTags = document.getElementsByTag("meta");
            for (Element mTag : metaTags) {
                //storing the meta tag properties
                String name = mTag.attr("name");
                String property = mTag.attr("property");
                if (!name.equals("")) {
                    if (name.equals("keywords")) {
                        //getting the keywords meta tag
                        keywords = document.select("meta[name=keywords]").first().attr("content");
                        webDocument.setKeywords(keywords);
                    }
                }
                if (!property.equals("")) {
                    if (name.equals("og:keywords")) {
                        keywords = document.select("meta[property=og:keywords]").first().attr("content");
                        webDocument.setKeywords(keywords);
                    }
                }
            }
        }
        catch (Exception ex){
            ex.printStackTrace();
        }
        return webDocument.getKeywords();
    }

    @Override
    public int extractImageCount(SearchDocument searchDocument) {
        int imageCount=0;
        String link=searchDocument.getLink();
        try {
            Document document = Jsoup.connect(link).get();
            //counting the number of images on the html page
            Elements images = document.select("img[src~=(?i)\\.(png|jpe?g|gif)]");
            for (Element image : images) {
                imageCount++;
            }
            webDocument.setImageCount(imageCount);
        }
        catch (Exception ex){
            ex.printStackTrace();
        }
        return webDocument.getImageCount();
    }

    @Override
    public void extractCodePercentage(SearchDocument searchDocument) {
        double codePercentage=0;
        String link=searchDocument.getLink();
        try {
            Document document = Jsoup.connect(link).get();
            //calculating all the pre code tags and counting the number of times they occur
            Elements code = document.getElementsByTag("pre").tagName("code");
            float codecnt=0;
            for (Element codeElem : code) {
                codecnt++;
            }
            //getting all tags and counting the number of times they occur
            Elements alltags = document.getAllElements();
            float tagcount=0;
            for (Element allTag : alltags) {
                tagcount++;
            }
            //calculating code percentage
            codePercentage = (codecnt/tagcount) * 100;
            webDocument.setCodePercentage(codePercentage);
        }
        catch (Exception ex){
            ex.printStackTrace();
        }
    }

    @Override
    public WebDocument getContentExtractorResults(){
        return webDocument;
    }
}
