package com.hm.utils;

public class NumberUtil {
    public static boolean isNumber(String string){
        boolean isNum = true;
        for(int i = 0;i<string.length();i++){
            char c = string.charAt(i);
            if (!Character.isDigit(c)){
                isNum = false;
                break;
            }
        }
        return isNum;
    }
}
