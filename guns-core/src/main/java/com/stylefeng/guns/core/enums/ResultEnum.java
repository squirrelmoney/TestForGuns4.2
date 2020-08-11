package com.stylefeng.guns.core.enums;

import com.stylefeng.guns.core.exception.ServiceExceptionEnum;

/**
* create by guanqing
* 2020年2月18日 上午9:22:04
*/
public enum ResultEnum implements ServiceExceptionEnum {
	SUCCESS_FLAG(200, "成功")
	;

	private ResultEnum(int code, String message) {
		// TODO Auto-generated constructor stub
		this.code = code;
		this.message = message;
	}
	
	private Integer code;
	
	private String message;
	
	@Override
	public Integer getCode() {
		// TODO Auto-generated method stub
		return code;
	}

	@Override
	public String getMessage() {
		// TODO Auto-generated method stub
		return message;
	}

	public void setCode(Integer code) {
		this.code = code;
	}

	public void setMessage(String message) {
		this.message = message;
	}

}
