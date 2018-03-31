package com.hm.portal.pojo.po;

import java.io.Serializable;

public class Product implements Serializable {
    private Integer productId;

    private String productName;

    private String productDescription;

    private String productSpecification;

    private Integer productIntegral;

    private String productImages;

    private static final long serialVersionUID = 1L;

    public Integer getProductId() {
        return productId;
    }

    public void setProductId(Integer productId) {
        this.productId = productId;
    }

    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName == null ? null : productName.trim();
    }

    public String getProductDescription() {
        return productDescription;
    }

    public void setProductDescription(String productDescription) {
        this.productDescription = productDescription == null ? null : productDescription.trim();
    }

    public String getProductSpecification() {
        return productSpecification;
    }

    public void setProductSpecification(String productSpecification) {
        this.productSpecification = productSpecification == null ? null : productSpecification.trim();
    }

    public Integer getProductIntegral() {
        return productIntegral;
    }

    public void setProductIntegral(Integer productIntegral) {
        this.productIntegral = productIntegral;
    }

    public String getProductImages() {
        return productImages;
    }

    public void setProductImages(String productImages) {
        this.productImages = productImages == null ? null : productImages.trim();
    }
}