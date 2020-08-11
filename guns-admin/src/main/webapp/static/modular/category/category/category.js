/**
 * category管理初始化
 */
var Category = {
    id: "CategoryTable",	//表格id
    seItem: null,		//选中的条目
    table: null,
    layerIndex: -1
};

/**
 * 初始化表格的列
 */
Category.initColumn = function () {
    return [
        {field: 'selectItem', radio: true},
            {title: '分类id', field: 'catId', visible: true, align: 'center', valign: 'middle'},
            {title: '分类名称', field: 'name', visible: true, align: 'center', valign: 'middle'},
            {title: '父分类id', field: 'parentCid', visible: true, align: 'center', valign: 'middle'},
            {title: '层级', field: 'catLevel', visible: true, align: 'center', valign: 'middle'},
            {title: '是否显示[0-不显示，1显示]', field: 'showStatus', visible: true, align: 'center', valign: 'middle'},
            {title: '排序', field: 'sort', visible: true, align: 'center', valign: 'middle'},
            {title: '图标地址', field: 'icon', visible: true, align: 'center', valign: 'middle'},
            {title: '计量单位', field: 'productUnit', visible: true, align: 'center', valign: 'middle'},
            {title: '商品数量', field: 'productCount', visible: true, align: 'center', valign: 'middle'}
    ];
};

/**
 * 检查是否选中
 */
Category.check = function () {
    var selected = $('#' + this.id).bootstrapTable('getSelections');
    if(selected.length == 0){
        Feng.info("请先选中表格中的某一记录！");
        return false;
    }else{
        Category.seItem = selected[0];
        console.log("选中的id",this.seItem.catId)
        return true;
    }
};

/**
 * 点击添加category
 */
Category.openAddCategory = function () {
    var index = layer.open({
        type: 2,
        title: '添加category',
        area: ['800px', '420px'], //宽高
        fix: false, //不固定
        maxmin: true,
        content: Feng.ctxPath + '/category/category_add'
    });
    this.layerIndex = index;
};

/**
 * 打开查看category详情
 */
Category.openCategoryDetail = function () {
    if (this.check()) {
        var index = layer.open({
            type: 2,
            title: 'category详情',
            area: ['800px', '420px'], //宽高
            fix: false, //不固定
            maxmin: true,
            content: Feng.ctxPath + '/category/category_update/' +  Category.seItem.catId
            //被选中的一条数据，属性要和表格的列名字相同
        });
        this.layerIndex = index;
    }
};

/**
 * 删除category
 */
Category.delete = function () {
    if (this.check()) {
        var ajax = new $ax(Feng.ctxPath + "/category/delete", function (data) {
            Feng.success("删除成功!");
            Category.table.refresh();
        }, function (data) {
            Feng.error("删除失败!" + data.responseJSON.message + "!");
        });
        ajax.set("catId",this.seItem.catId);
        ajax.start();
    }
};

/**
 * 查询category列表
 */
Category.search = function () {
    var queryData = {};
    queryData['condition'] = $("#condition").val();
    Category.table.refresh({query: queryData});
};

$(function () {
    var defaultColunms = Category.initColumn();
    var table = new BSTable(Category.id, "/category/list", defaultColunms);
    table.setPaginationType("client");
    Category.table = table.init();
});
