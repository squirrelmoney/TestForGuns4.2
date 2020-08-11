package com.stylefeng.guns.modular.custom.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.stylefeng.guns.core.base.controller.BaseController;

@Controller
@RequestMapping("/sale")
public class SaleController extends BaseController{

	private static String PREFIX = "/custom/sale/";
	
    /**
     * 跳转到黑板
     */
    @RequestMapping("/sorder")
    public String table() {
    	return PREFIX + "sorder.html";
    }
    
    /**
     * 检索产品
     * @return
     */
    @RequestMapping("/searchGoodsList")
    @ResponseBody
    public Object  searchGoodsList(@RequestParam(name = "q") String q) {
    	return null;
    }
}
