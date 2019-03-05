package com.stackroute.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ChatMessage {
        private String name;
        private String sessionId;
        private String paragraphId;
        private String documentId;
        private String domain;
        private String concept;
        private String intentLevel;
        private String confidenceScore;
}
