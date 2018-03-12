package com.hm.utils;

import java.util.UUID;

public class IdUtils {
    public static String getUUID(){
        String string = UUID.randomUUID().toString();
        String id = string.replace("-", "");
        return id;
    }
}
