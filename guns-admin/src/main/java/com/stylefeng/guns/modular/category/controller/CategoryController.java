package com.stylefeng.guns.modular.category.controller;

import com.stylefeng.guns.core.base.controller.BaseController;
import com.stylefeng.guns.modular.category.model.Category;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.beans.factory.annotation.Autowired;
import com.stylefeng.guns.core.log.LogObjectHolder;
import org.springframework.web.bind.annotation.RequestParam;
import com.stylefeng.guns.modular.category.service.ICategoryService;

/**
 * category控制器
 *
 * @author fengshuonan
 * @Date 2020-08-11 13:58:08
 */
@Controller
@RequestMapping("/category")
public class CategoryController extends BaseController {

    private String PREFIX = "/category/category/";

    @Autowired
    private ICategoryService categoryService;

    /**
     * 跳转到category首页
     */
    @RequestMapping("")
    public String index() {
        return PREFIX + "category.html";
    }

    /**
     * 跳转到添加category
     */
    @RequestMapping("/category_add")
    public String categoryAdd() {
        return PREFIX + "category_add.html";
    }

    /**
     * 跳转到修改category
     */
    @RequestMapping("/category_update/{categoryId}")
    public String categoryUpdate(@PathVariable Long categoryId, Model model) {
        Category category = categoryService.selectById(categoryId);
        model.addAttribute("item",category);
        LogObjectHolder.me().set(category);
        return PREFIX + "category_edit.html";
    }

    /**
     * 获取category列表
     */
    @RequestMapping(value = "/list")
    @ResponseBody
    public Object list(String condition) {
        return categoryService.selectList(null);
    }

    /**
     * 新增category
     */
    @RequestMapping(value = "/add")
    @ResponseBody
    public Object add(Category category) {
        categoryService.insert(category);
        return SUCCESS_TIP;
    }

    /**
     * 删除category
     */
    @RequestMapping(value = "/delete")
    @ResponseBody
    public Object delete(@RequestParam("catId") Long categoryId) {
        categoryService.deleteById(categoryId);
        return SUCCESS_TIP;
    }

    /**
     * 修改category
     */
    @RequestMapping(value = "/update")
    @ResponseBody
    public Object update(Category category) {
        categoryService.updateById(category);
        return SUCCESS_TIP;
    }

    /**
     * category详情
     */
    @RequestMapping(value = "/detail/{categoryId}")
    @ResponseBody
    public Object detail(@PathVariable("categoryId") Long categoryId) {
        return categoryService.selectById(categoryId);
    }
}
