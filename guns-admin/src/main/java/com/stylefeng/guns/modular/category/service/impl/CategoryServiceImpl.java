package com.stylefeng.guns.modular.category.service.impl;

import com.stylefeng.guns.modular.category.model.Category;
import com.stylefeng.guns.modular.category.dao.CategoryMapper;
import com.stylefeng.guns.modular.category.service.ICategoryService;
import com.baomidou.mybatisplus.service.impl.ServiceImpl;
import org.springframework.stereotype.Service;

/**
 * <p>
 * 商品三级分类 服务实现类
 * </p>
 *
 * @author money
 * @since 2020-08-11
 */
@Service
public class CategoryServiceImpl extends ServiceImpl<CategoryMapper, Category> implements ICategoryService {

}
