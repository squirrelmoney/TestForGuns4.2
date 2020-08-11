package com.stylefeng.guns.core.util;

import com.stylefeng.guns.core.domain.Result;
import com.stylefeng.guns.core.enums.ResultEnum;
import com.stylefeng.guns.core.exception.ServiceExceptionEnum;

/**
* create by guanqing
* 2020年2月18日 上午9:22:04
*/
public class ResultUtil {

	public static Result<Object> success(Object object) {
		Result<Object> result = new Result<>();
		result.setCode(ResultEnum.SUCCESS_FLAG.getCode());
		result.setMessage(ResultEnum.SUCCESS_FLAG.getMessage());
		result.setData(object);
		return result;
	}
	
	public static Result<Object> success(){
		return success(null);
	}
	
	public static Result<Object> failure(Integer code, String message) {
		Result<Object> result = new Result<>();
		result.setCode(code);
		result.setMessage(message);
		return result;
	}
	
	public static Result<Object> failure(ServiceExceptionEnum see) {
		return failure(see.getCode(), see.getMessage());
	}
}
