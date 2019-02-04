package com.xam;

import org.apache.commons.lang3.StringUtils;

public class HelloMaven {
    public String greetUser(){
        return "Hello Maven";
    }
    public String greetUserWithStringUtils(){
        return (StringUtils.capitalize("hello maven"));
    }
}
