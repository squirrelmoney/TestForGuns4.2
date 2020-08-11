# TestForGuns4.2
一个基于Gun4.2脚手架的增删改查的小Demo

如何在Gun4.2中做自定义模块
1、在GitHub上把项目克隆到本地，选择运行环境，配置连接数据库信息，即可运行项目
2、使用代码生成器，生成想要创建的模块（前提是在数据库中要有对应的表）
3、使用maven把项目clean清理文件，重新运行项目

注意事项
1、检查在自定义模块生成的js文件，自动生成的代码会默认把表的主键设为id，如果表的主键名另有其名，要修改代码
    eg.
        this.seItem.id(表示选中的一行数据中的id属性)
        但我的表的属性如下：
        Category.initColumn = function () {
            return [
                {field: 'selectItem', radio: true},
                    {title: '分类id', field: 'catId', visible: true, align: 'center', valign: 'middle'},
                        。。。。
                    {title: '商品数量', field: 'productCount', visible: true, align: 'center', valign: 'middle'}
            ];
        };
        
        需要把this.seItem.id改为this.seItem.catId，否则会报错undefined
        
2、自动生成代码中可能会出现错误
Error setting non null for parameter #1 with JdbcType null . 
Try setting a different JdbcType for this parameter or a different configuration property

这是由于自动生成的代码中，表的数据类型与传入的数据类型不一致导致的，它们之间无法互相转换，
只需检查数据库、model、controller中的属性的数据类型，找出不合理的类型修改即可解决

