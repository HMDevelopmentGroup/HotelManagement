package com.hm.portal.pojo.po;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

public class IntegralorderExample implements Serializable {
    protected String orderByClause;

    protected boolean distinct;

    protected List<Criteria> oredCriteria;

    private static final long serialVersionUID = 1L;

    public IntegralorderExample() {
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

        public Criteria andIntegralorderIdIsNull() {
            addCriterion("integralorder_id is null");
            return (Criteria) this;
        }

        public Criteria andIntegralorderIdIsNotNull() {
            addCriterion("integralorder_id is not null");
            return (Criteria) this;
        }

        public Criteria andIntegralorderIdEqualTo(String value) {
            addCriterion("integralorder_id =", value, "integralorderId");
            return (Criteria) this;
        }

        public Criteria andIntegralorderIdNotEqualTo(String value) {
            addCriterion("integralorder_id <>", value, "integralorderId");
            return (Criteria) this;
        }

        public Criteria andIntegralorderIdGreaterThan(String value) {
            addCriterion("integralorder_id >", value, "integralorderId");
            return (Criteria) this;
        }

        public Criteria andIntegralorderIdGreaterThanOrEqualTo(String value) {
            addCriterion("integralorder_id >=", value, "integralorderId");
            return (Criteria) this;
        }

        public Criteria andIntegralorderIdLessThan(String value) {
            addCriterion("integralorder_id <", value, "integralorderId");
            return (Criteria) this;
        }

        public Criteria andIntegralorderIdLessThanOrEqualTo(String value) {
            addCriterion("integralorder_id <=", value, "integralorderId");
            return (Criteria) this;
        }

        public Criteria andIntegralorderIdLike(String value) {
            addCriterion("integralorder_id like", value, "integralorderId");
            return (Criteria) this;
        }

        public Criteria andIntegralorderIdNotLike(String value) {
            addCriterion("integralorder_id not like", value, "integralorderId");
            return (Criteria) this;
        }

        public Criteria andIntegralorderIdIn(List<String> values) {
            addCriterion("integralorder_id in", values, "integralorderId");
            return (Criteria) this;
        }

        public Criteria andIntegralorderIdNotIn(List<String> values) {
            addCriterion("integralorder_id not in", values, "integralorderId");
            return (Criteria) this;
        }

        public Criteria andIntegralorderIdBetween(String value1, String value2) {
            addCriterion("integralorder_id between", value1, value2, "integralorderId");
            return (Criteria) this;
        }

        public Criteria andIntegralorderIdNotBetween(String value1, String value2) {
            addCriterion("integralorder_id not between", value1, value2, "integralorderId");
            return (Criteria) this;
        }

        public Criteria andUidIsNull() {
            addCriterion("uid is null");
            return (Criteria) this;
        }

        public Criteria andUidIsNotNull() {
            addCriterion("uid is not null");
            return (Criteria) this;
        }

        public Criteria andUidEqualTo(String value) {
            addCriterion("uid =", value, "uid");
            return (Criteria) this;
        }

        public Criteria andUidNotEqualTo(String value) {
            addCriterion("uid <>", value, "uid");
            return (Criteria) this;
        }

        public Criteria andUidGreaterThan(String value) {
            addCriterion("uid >", value, "uid");
            return (Criteria) this;
        }

        public Criteria andUidGreaterThanOrEqualTo(String value) {
            addCriterion("uid >=", value, "uid");
            return (Criteria) this;
        }

        public Criteria andUidLessThan(String value) {
            addCriterion("uid <", value, "uid");
            return (Criteria) this;
        }

        public Criteria andUidLessThanOrEqualTo(String value) {
            addCriterion("uid <=", value, "uid");
            return (Criteria) this;
        }

        public Criteria andUidLike(String value) {
            addCriterion("uid like", value, "uid");
            return (Criteria) this;
        }

        public Criteria andUidNotLike(String value) {
            addCriterion("uid not like", value, "uid");
            return (Criteria) this;
        }

        public Criteria andUidIn(List<String> values) {
            addCriterion("uid in", values, "uid");
            return (Criteria) this;
        }

        public Criteria andUidNotIn(List<String> values) {
            addCriterion("uid not in", values, "uid");
            return (Criteria) this;
        }

        public Criteria andUidBetween(String value1, String value2) {
            addCriterion("uid between", value1, value2, "uid");
            return (Criteria) this;
        }

        public Criteria andUidNotBetween(String value1, String value2) {
            addCriterion("uid not between", value1, value2, "uid");
            return (Criteria) this;
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

        public Criteria andIntegralTelIsNull() {
            addCriterion("integral_tel is null");
            return (Criteria) this;
        }

        public Criteria andIntegralTelIsNotNull() {
            addCriterion("integral_tel is not null");
            return (Criteria) this;
        }

        public Criteria andIntegralTelEqualTo(String value) {
            addCriterion("integral_tel =", value, "integralTel");
            return (Criteria) this;
        }

        public Criteria andIntegralTelNotEqualTo(String value) {
            addCriterion("integral_tel <>", value, "integralTel");
            return (Criteria) this;
        }

        public Criteria andIntegralTelGreaterThan(String value) {
            addCriterion("integral_tel >", value, "integralTel");
            return (Criteria) this;
        }

        public Criteria andIntegralTelGreaterThanOrEqualTo(String value) {
            addCriterion("integral_tel >=", value, "integralTel");
            return (Criteria) this;
        }

        public Criteria andIntegralTelLessThan(String value) {
            addCriterion("integral_tel <", value, "integralTel");
            return (Criteria) this;
        }

        public Criteria andIntegralTelLessThanOrEqualTo(String value) {
            addCriterion("integral_tel <=", value, "integralTel");
            return (Criteria) this;
        }

        public Criteria andIntegralTelLike(String value) {
            addCriterion("integral_tel like", value, "integralTel");
            return (Criteria) this;
        }

        public Criteria andIntegralTelNotLike(String value) {
            addCriterion("integral_tel not like", value, "integralTel");
            return (Criteria) this;
        }

        public Criteria andIntegralTelIn(List<String> values) {
            addCriterion("integral_tel in", values, "integralTel");
            return (Criteria) this;
        }

        public Criteria andIntegralTelNotIn(List<String> values) {
            addCriterion("integral_tel not in", values, "integralTel");
            return (Criteria) this;
        }

        public Criteria andIntegralTelBetween(String value1, String value2) {
            addCriterion("integral_tel between", value1, value2, "integralTel");
            return (Criteria) this;
        }

        public Criteria andIntegralTelNotBetween(String value1, String value2) {
            addCriterion("integral_tel not between", value1, value2, "integralTel");
            return (Criteria) this;
        }

        public Criteria andIntegralorderStatusIsNull() {
            addCriterion("integralorder_status is null");
            return (Criteria) this;
        }

        public Criteria andIntegralorderStatusIsNotNull() {
            addCriterion("integralorder_status is not null");
            return (Criteria) this;
        }

        public Criteria andIntegralorderStatusEqualTo(Integer value) {
            addCriterion("integralorder_status =", value, "integralorderStatus");
            return (Criteria) this;
        }

        public Criteria andIntegralorderStatusNotEqualTo(Integer value) {
            addCriterion("integralorder_status <>", value, "integralorderStatus");
            return (Criteria) this;
        }

        public Criteria andIntegralorderStatusGreaterThan(Integer value) {
            addCriterion("integralorder_status >", value, "integralorderStatus");
            return (Criteria) this;
        }

        public Criteria andIntegralorderStatusGreaterThanOrEqualTo(Integer value) {
            addCriterion("integralorder_status >=", value, "integralorderStatus");
            return (Criteria) this;
        }

        public Criteria andIntegralorderStatusLessThan(Integer value) {
            addCriterion("integralorder_status <", value, "integralorderStatus");
            return (Criteria) this;
        }

        public Criteria andIntegralorderStatusLessThanOrEqualTo(Integer value) {
            addCriterion("integralorder_status <=", value, "integralorderStatus");
            return (Criteria) this;
        }

        public Criteria andIntegralorderStatusIn(List<Integer> values) {
            addCriterion("integralorder_status in", values, "integralorderStatus");
            return (Criteria) this;
        }

        public Criteria andIntegralorderStatusNotIn(List<Integer> values) {
            addCriterion("integralorder_status not in", values, "integralorderStatus");
            return (Criteria) this;
        }

        public Criteria andIntegralorderStatusBetween(Integer value1, Integer value2) {
            addCriterion("integralorder_status between", value1, value2, "integralorderStatus");
            return (Criteria) this;
        }

        public Criteria andIntegralorderStatusNotBetween(Integer value1, Integer value2) {
            addCriterion("integralorder_status not between", value1, value2, "integralorderStatus");
            return (Criteria) this;
        }

        public Criteria andIntegralAddressIsNull() {
            addCriterion("integral_address is null");
            return (Criteria) this;
        }

        public Criteria andIntegralAddressIsNotNull() {
            addCriterion("integral_address is not null");
            return (Criteria) this;
        }

        public Criteria andIntegralAddressEqualTo(String value) {
            addCriterion("integral_address =", value, "integralAddress");
            return (Criteria) this;
        }

        public Criteria andIntegralAddressNotEqualTo(String value) {
            addCriterion("integral_address <>", value, "integralAddress");
            return (Criteria) this;
        }

        public Criteria andIntegralAddressGreaterThan(String value) {
            addCriterion("integral_address >", value, "integralAddress");
            return (Criteria) this;
        }

        public Criteria andIntegralAddressGreaterThanOrEqualTo(String value) {
            addCriterion("integral_address >=", value, "integralAddress");
            return (Criteria) this;
        }

        public Criteria andIntegralAddressLessThan(String value) {
            addCriterion("integral_address <", value, "integralAddress");
            return (Criteria) this;
        }

        public Criteria andIntegralAddressLessThanOrEqualTo(String value) {
            addCriterion("integral_address <=", value, "integralAddress");
            return (Criteria) this;
        }

        public Criteria andIntegralAddressLike(String value) {
            addCriterion("integral_address like", value, "integralAddress");
            return (Criteria) this;
        }

        public Criteria andIntegralAddressNotLike(String value) {
            addCriterion("integral_address not like", value, "integralAddress");
            return (Criteria) this;
        }

        public Criteria andIntegralAddressIn(List<String> values) {
            addCriterion("integral_address in", values, "integralAddress");
            return (Criteria) this;
        }

        public Criteria andIntegralAddressNotIn(List<String> values) {
            addCriterion("integral_address not in", values, "integralAddress");
            return (Criteria) this;
        }

        public Criteria andIntegralAddressBetween(String value1, String value2) {
            addCriterion("integral_address between", value1, value2, "integralAddress");
            return (Criteria) this;
        }

        public Criteria andIntegralAddressNotBetween(String value1, String value2) {
            addCriterion("integral_address not between", value1, value2, "integralAddress");
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