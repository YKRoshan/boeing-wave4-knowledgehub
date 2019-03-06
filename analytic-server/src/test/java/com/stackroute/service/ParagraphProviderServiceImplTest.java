package com.stackroute.service;

import com.stackroute.domain.Paragraph;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.mockito.InjectMocks;
import org.mockito.MockitoAnnotations;

import static org.junit.Assert.*;

public class ParagraphProviderServiceImplTest {
    private Paragraph paragraph;
    @InjectMocks
    private ParagraphProviderServiceImpl paragraphProviderServiceImpl;

    @Before
    public void setUp() throws Exception {
        MockitoAnnotations.initMocks(this);
        paragraph = new Paragraph();
    }

    @Test
    public void getParagraph() {
        paragraphProviderServiceImpl.setParagraph(paragraph);
        String expected = paragraph.toString();
        String actual = paragraphProviderServiceImpl.getParagraph().toString();
        Assert.assertEquals(expected, actual);
    }

    @Test
    public void setParagraph() {
    }
}