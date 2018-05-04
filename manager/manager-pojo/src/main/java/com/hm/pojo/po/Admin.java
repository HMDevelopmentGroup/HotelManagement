package com.hm.pojo.po;

import java.io.Serializable;

public class Admin implements Serializable{
    private String username;
    private String password;
    private String adminName;
    private String adminPic;


    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getAdminName() {
        return adminName;
    }

    public void setAdminName(String adminName) {
        this.adminName = adminName;
    }

    public String getAdminPic() {
        return adminPic;
    }

    public void setAdminPic(String adminPic) {
        this.adminPic = adminPic;
    }
}
