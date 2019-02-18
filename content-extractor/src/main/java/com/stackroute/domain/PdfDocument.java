package com.stackroute.domain;

import lombok.Data;
import org.springframework.boot.autoconfigure.domain.EntityScan;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.util.Arrays;

@Entity
@Data
public class PdfDocument {

    @Id
    private String documentId;
    private String documentText;
    private String[] documentMetaData;

}
