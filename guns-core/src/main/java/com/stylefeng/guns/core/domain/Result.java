package com.stylefeng.guns.core.domain;

import lombok.Data;

/**
* create by guanqing
* 2020年2月18日 上午9:23:38
*/
@Data
public class Result<T> {

	/** 错误码. */
	private Integer code;
	
	/** 描述信息. */
	private String message;
	
	/** 具体的内容. */
	private T data;
	
}
