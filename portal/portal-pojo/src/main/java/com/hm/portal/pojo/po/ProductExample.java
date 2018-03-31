package com.hm.portal.pojo.po;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

public class ProductExample implements Serializable {
    protected String orderByClause;

    protected boolean distinct;

    protected List<Criteria> oredCriteria;

    private static final long serialVersionUID = 1L;

    public ProductExample() {
        oredCriteria = new ArrayList<Criteria>();
    }

    public void setOrderByClause(String orderByClause) {
        this.orderByClause = orderByClause;
    }

    public String getOrderByClause() {
        return orderByClause;
    }

    public void setDistinct(boolean distinct) {
        this.distinct = distinct;
    }

    public boolean isDistinct() {
        return distinct;
    }

    public List<Criteria> getOredCriteria() {
        return oredCriteria;
    }

    public void or(Criteria criteria) {
        oredCriteria.add(criteria);
    }

    public Criteria or() {
        Criteria criteria = createCriteriaInternal();
        oredCriteria.add(criteria);
        return criteria;
    }

    public Criteria createCriteria() {
        Criteria criteria = createCriteriaInternal();
        if (oredCriteria.size() == 0) {
            oredCriteria.add(criteria);
        }
        return criteria;
    }

    protected Criteria createCriteriaInternal() {
        Criteria criteria = new Criteria();
        return criteria;
    }

    public void clear() {
        oredCriteria.clear();
        orderByClause = null;
        distinct = false;
    }

    protected abstract static class GeneratedCriteria implements Serializable {
        protected List<Criterion> criteria;

        private static final long serialVersionUID = 1L;

        protected GeneratedCriteria() {
            super();
            criteria = new ArrayList<Criterion>();
        }

        public boolean isValid() {
            return criteria.size() > 0;
        }

        public List<Criterion> getAllCriteria() {
            return criteria;
        }

        public List<Criterion> getCriteria() {
            return criteria;
        }

        protected void addCriterion(String condition) {
            if (condition == null) {
                throw new RuntimeException("Value for condition cannot be null");
            }
            criteria.add(new Criterion(condition));
        }

        protected void addCriterion(String condition, Object value, String property) {
            if (value == null) {
                throw new RuntimeException("Value for " + property + " cannot be null");
            }
            criteria.add(new Criterion(condition, value));
        }

        protected void addCriterion(String condition, Object value1, Object value2, String property) {
            if (value1 == null || value2 == null) {
                throw new RuntimeException("Between values for " + property + " cannot be null");
            }
            criteria.add(new Criterion(condition, value1, value2));
        }

        public Criteria andProductIdIsNull() {
            addCriterion("product_id is null");
            return (Criteria) this;
        }

        public Criteria andProductIdIsNotNull() {
            addCriterion("product_id is not null");
            return (Criteria) this;
        }

        public Criteria andProductIdEqualTo(Integer value) {
            addCriterion("product_id =", value, "productId");
            return (Criteria) this;
        }

        public Criteria andProductIdNotEqualTo(Integer value) {
            addCriterion("product_id <>", value, "productId");
            return (Criteria) this;
        }

        public Criteria andProductIdGreaterThan(Integer value) {
            addCriterion("product_id >", value, "productId");
            return (Criteria) this;
        }

        public Criteria andProductIdGreaterThanOrEqualTo(Integer value) {
            addCriterion("product_id >=", value, "productId");
            return (Criteria) this;
        }

        public Criteria andProductIdLessThan(Integer value) {
            addCriterion("product_id <", value, "productId");
            return (Criteria) this;
        }

        public Criteria andProductIdLessThanOrEqualTo(Integer value) {
            addCriterion("product_id <=", value, "productId");
            return (Criteria) this;
        }

        public Criteria andProductIdIn(List<Integer> values) {
            addCriterion("product_id in", values, "productId");
            return (Criteria) this;
        }

        public Criteria andProductIdNotIn(List<Integer> values) {
            addCriterion("product_id not in", values, "productId");
            return (Criteria) this;
        }

        public Criteria andProductIdBetween(Integer value1, Integer value2) {
            addCriterion("product_id between", value1, value2, "productId");
            return (Criteria) this;
        }

        public Criteria andProductIdNotBetween(Integer value1, Integer value2) {
            addCriterion("product_id not between", value1, value2, "productId");
            return (Criteria) this;
        }

        public Criteria andProductNameIsNull() {
            addCriterion("product_name is null");
            return (Criteria) this;
        }

        public Criteria andProductNameIsNotNull() {
            addCriterion("product_name is not null");
            return (Criteria) this;
        }

        public Criteria andProductNameEqualTo(String value) {
            addCriterion("product_name =", value, "productName");
            return (Criteria) this;
        }

        public Criteria andProductNameNotEqualTo(String value) {
            addCriterion("product_name <>", value, "productName");
            return (Criteria) this;
        }

        public Criteria andProductNameGreaterThan(String value) {
            addCriterion("product_name >", value, "productName");
            return (Criteria) this;
        }

        public Criteria andProductNameGreaterThanOrEqualTo(String value) {
            addCriterion("product_name >=", value, "productName");
            return (Criteria) this;
        }

        public Criteria andProductNameLessThan(String value) {
            addCriterion("product_name <", value, "productName");
            return (Criteria) this;
        }

        public Criteria andProductNameLessThanOrEqualTo(String value) {
            addCriterion("product_name <=", value, "productName");
            return (Criteria) this;
        }

        public Criteria andProductNameLike(String value) {
            addCriterion("product_name like", value, "productName");
            return (Criteria) this;
        }

        public Criteria andProductNameNotLike(String value) {
            addCriterion("product_name not like", value, "productName");
            return (Criteria) this;
        }

        public Criteria andProductNameIn(List<String> values) {
            addCriterion("product_name in", values, "productName");
            return (Criteria) this;
        }

        public Criteria andProductNameNotIn(List<String> values) {
            addCriterion("product_name not in", values, "productName");
            return (Criteria) this;
        }

        public Criteria andProductNameBetween(String value1, String value2) {
            addCriterion("product_name between", value1, value2, "productName");
            return (Criteria) this;
        }

        public Criteria andProductNameNotBetween(String value1, String value2) {
            addCriterion("product_name not between", value1, value2, "productName");
            return (Criteria) this;
        }

        public Criteria andProductDescriptionIsNull() {
            addCriterion("product_description is null");
            return (Criteria) this;
        }

        public Criteria andProductDescriptionIsNotNull() {
            addCriterion("product_description is not null");
            return (Criteria) this;
        }

        public Criteria andProductDescriptionEqualTo(String value) {
            addCriterion("product_description =", value, "productDescription");
            return (Criteria) this;
        }

        public Criteria andProductDescriptionNotEqualTo(String value) {
            addCriterion("product_description <>", value, "productDescription");
            return (Criteria) this;
        }

        public Criteria andProductDescriptionGreaterThan(String value) {
            addCriterion("product_description >", value, "productDescription");
            return (Criteria) this;
        }

        public Criteria andProductDescriptionGreaterThanOrEqualTo(String value) {
            addCriterion("product_description >=", value, "productDescription");
            return (Criteria) this;
        }

        public Criteria andProductDescriptionLessThan(String value) {
            addCriterion("product_description <", value, "productDescription");
            return (Criteria) this;
        }

        public Criteria andProductDescriptionLessThanOrEqualTo(String value) {
            addCriterion("product_description <=", value, "productDescription");
            return (Criteria) this;
        }

        public Criteria andProductDescriptionLike(String value) {
            addCriterion("product_description like", value, "productDescription");
            return (Criteria) this;
        }

        public Criteria andProductDescriptionNotLike(String value) {
            addCriterion("product_description not like", value, "productDescription");
            return (Criteria) this;
        }

        public Criteria andProductDescriptionIn(List<String> values) {
            addCriterion("product_description in", values, "productDescription");
            return (Criteria) this;
        }

        public Criteria andProductDescriptionNotIn(List<String> values) {
            addCriterion("product_description not in", values, "productDescription");
            return (Criteria) this;
        }

        public Criteria andProductDescriptionBetween(String value1, String value2) {
            addCriterion("product_description between", value1, value2, "productDescription");
            return (Criteria) this;
        }

        public Criteria andProductDescriptionNotBetween(String value1, String value2) {
            addCriterion("product_description not between", value1, value2, "productDescription");
            return (Criteria) this;
        }

        public Criteria andProductSpecificationIsNull() {
            addCriterion("product_specification is null");
            return (Criteria) this;
        }

        public Criteria andProductSpecificationIsNotNull() {
            addCriterion("product_specification is not null");
            return (Criteria) this;
        }

        public Criteria andProductSpecificationEqualTo(String value) {
            addCriterion("product_specification =", value, "productSpecification");
            return (Criteria) this;
        }

        public Criteria andProductSpecificationNotEqualTo(String value) {
            addCriterion("product_specification <>", value, "productSpecification");
            return (Criteria) this;
        }

        public Criteria andProductSpecificationGreaterThan(String value) {
            addCriterion("product_specification >", value, "productSpecification");
            return (Criteria) this;
        }

        public Criteria andProductSpecificationGreaterThanOrEqualTo(String value) {
            addCriterion("product_specification >=", value, "productSpecification");
            return (Criteria) this;
        }

        public Criteria andProductSpecificationLessThan(String value) {
            addCriterion("product_specification <", value, "productSpecification");
            return (Criteria) this;
        }

        public Criteria andProductSpecificationLessThanOrEqualTo(String value) {
            addCriterion("product_specification <=", value, "productSpecification");
            return (Criteria) this;
        }

        public Criteria andProductSpecificationLike(String value) {
            addCriterion("product_specification like", value, "productSpecification");
            return (Criteria) this;
        }

        public Criteria andProductSpecificationNotLike(String value) {
            addCriterion("product_specification not like", value, "productSpecification");
            return (Criteria) this;
        }

        public Criteria andProductSpecificationIn(List<String> values) {
            addCriterion("product_specification in", values, "productSpecification");
            return (Criteria) this;
        }

        public Criteria andProductSpecificationNotIn(List<String> values) {
            addCriterion("product_specification not in", values, "productSpecification");
            return (Criteria) this;
        }

        public Criteria andProductSpecificationBetween(String value1, String value2) {
            addCriterion("product_specification between", value1, value2, "productSpecification");
            return (Criteria) this;
        }

        public Criteria andProductSpecificationNotBetween(String value1, String value2) {
            addCriterion("product_specification not between", value1, value2, "productSpecification");
            return (Criteria) this;
        }

        public Criteria andProductIntegralIsNull() {
            addCriterion("product_integral is null");
            return (Criteria) this;
        }

        public Criteria andProductIntegralIsNotNull() {
            addCriterion("product_integral is not null");
            return (Criteria) this;
        }

        public Criteria andProductIntegralEqualTo(Integer value) {
            addCriterion("product_integral =", value, "productIntegral");
            return (Criteria) this;
        }

        public Criteria andProductIntegralNotEqualTo(Integer value) {
            addCriterion("product_integral <>", value, "productIntegral");
            return (Criteria) this;
        }

        public Criteria andProductIntegralGreaterThan(Integer value) {
            addCriterion("product_integral >", value, "productIntegral");
            return (Criteria) this;
        }

        public Criteria andProductIntegralGreaterThanOrEqualTo(Integer value) {
            addCriterion("product_integral >=", value, "productIntegral");
            return (Criteria) this;
        }

        public Criteria andProductIntegralLessThan(Integer value) {
            addCriterion("product_integral <", value, "productIntegral");
            return (Criteria) this;
        }

        public Criteria andProductIntegralLessThanOrEqualTo(Integer value) {
            addCriterion("product_integral <=", value, "productIntegral");
            return (Criteria) this;
        }

        public Criteria andProductIntegralIn(List<Integer> values) {
            addCriterion("product_integral in", values, "productIntegral");
            return (Criteria) this;
        }

        public Criteria andProductIntegralNotIn(List<Integer> values) {
            addCriterion("product_integral not in", values, "productIntegral");
            return (Criteria) this;
        }

        public Criteria andProductIntegralBetween(Integer value1, Integer value2) {
            addCriterion("product_integral between", value1, value2, "productIntegral");
            return (Criteria) this;
        }

        public Criteria andProductIntegralNotBetween(Integer value1, Integer value2) {
            addCriterion("product_integral not between", value1, value2, "productIntegral");
            return (Criteria) this;
        }

        public Criteria andProductImagesIsNull() {
            addCriterion("product_images is null");
            return (Criteria) this;
        }

        public Criteria andProductImagesIsNotNull() {
            addCriterion("product_images is not null");
            return (Criteria) this;
        }

        public Criteria andProductImagesEqualTo(String value) {
            addCriterion("product_images =", value, "productImages");
            return (Criteria) this;
        }

        public Criteria andProductImagesNotEqualTo(String value) {
            addCriterion("product_images <>", value, "productImages");
            return (Criteria) this;
        }

        public Criteria andProductImagesGreaterThan(String value) {
            addCriterion("product_images >", value, "productImages");
            return (Criteria) this;
        }

        public Criteria andProductImagesGreaterThanOrEqualTo(String value) {
            addCriterion("product_images >=", value, "productImages");
            return (Criteria) this;
        }

        public Criteria andProductImagesLessThan(String value) {
            addCriterion("product_images <", value, "productImages");
            return (Criteria) this;
        }

        public Criteria andProductImagesLessThanOrEqualTo(String value) {
            addCriterion("product_images <=", value, "productImages");
            return (Criteria) this;
        }

        public Criteria andProductImagesLike(String value) {
            addCriterion("product_images like", value, "productImages");
            return (Criteria) this;
        }

        public Criteria andProductImagesNotLike(String value) {
            addCriterion("product_images not like", value, "productImages");
            return (Criteria) this;
        }

        public Criteria andProductImagesIn(List<String> values) {
            addCriterion("product_images in", values, "productImages");
            return (Criteria) this;
        }

        public Criteria andProductImagesNotIn(List<String> values) {
            addCriterion("product_images not in", values, "productImages");
            return (Criteria) this;
        }

        public Criteria andProductImagesBetween(String value1, String value2) {
            addCriterion("product_images between", value1, value2, "productImages");
            return (Criteria) this;
        }

        public Criteria andProductImagesNotBetween(String value1, String value2) {
            addCriterion("product_images not between", value1, value2, "productImages");
            return (Criteria) this;
        }
    }

    public static class Criteria extends GeneratedCriteria implements Serializable {
        private static final long serialVersionUID = 1L;

        protected Criteria() {
            super();
        }
    }

    public static class Criterion implements Serializable {
        private String condition;

        private Object value;

        private Object secondValue;

        private boolean noValue;

        private boolean singleValue;

        private boolean betweenValue;

        private boolean listValue;

        private String typeHandler;

        private static final long serialVersionUID = 1L;

        public String getCondition() {
            return condition;
        }

        public Object getValue() {
            return value;
        }

        public Object getSecondValue() {
            return secondValue;
        }

        public boolean isNoValue() {
            return noValue;
        }

        public boolean isSingleValue() {
            return singleValue;
        }

        public boolean isBetweenValue() {
            return betweenValue;
        }

        public boolean isListValue() {
            return listValue;
        }

        public String getTypeHandler() {
            return typeHandler;
        }

        protected Criterion(String condition) {
            super();
            this.condition = condition;
            this.typeHandler = null;
            this.noValue = true;
        }

        protected Criterion(String condition, Object value, String typeHandler) {
            super();
            this.condition = condition;
            this.value = value;
            this.typeHandler = typeHandler;
            if (value instanceof List<?>) {
                this.listValue = true;
            } else {
                this.singleValue = true;
            }
        }

        protected Criterion(String condition, Object value) {
            this(condition, value, null);
        }

        protected Criterion(String condition, Object value, Object secondValue, String typeHandler) {
            super();
            this.condition = condition;
            this.value = value;
            this.secondValue = secondValue;
            this.typeHandler = typeHandler;
            this.betweenValue = true;
        }

        protected Criterion(String condition, Object value, Object secondValue) {
            this(condition, value, secondValue, null);
        }
    }
}