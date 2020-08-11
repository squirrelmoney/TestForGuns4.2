/**
 * 销售管理--订单单例对象
 */
var Sorder = {
    id: "sorderTable",	//表格id
    seItem: null,		//选中的条目
    table: null,
    layerIndex: -1
};

/**
 * 初始化表格的列
 */
Sorder.initColumn = function () {
    return [
        {	field:'name',
            title:'<span class="scan">产品名称- - -扫描枪录入</span><button class="switch switch-anim" onclick="Sorder.checkNum(this)" type="checkbox"></button>',
            width : 300,
            editor: {
            	type: 'combogrid',
            	options: {
            		required: true,
            		buttonIcon: 'fa fa-ellipsis-h fa-lg',
                    buttonAlign: 'right',
                    panelWidth: 500,
                    idField: 'id',
                    textField: 'name',
                    mode: 'remote',
                    url: Feng.ctxPath + '/sale/searchGoodsList',
                    method: 'get',
                    prompt: '输入关键字后自动搜索',
                    hasDownArrow: false
            	}
            }
        },
        {
            field:'storageId',
            hidden:true
        },
        {   field:'storageName',
            title:'仓库 &nbsp' +
            '<button id="batch" class="btn btn-default btn-xs" type="button" onclick="bathStorage()">批量</button>',
            width : 160,
            hidden:false
        },
        {   field:'unit',
            title:'单位',
            width : 80,
            hidden:false
        },
        {
            field:"qty",
            title:"数量",
            width:150,
            hidden:false,
            editor:{
                type : "numberbox",
                options:{
                    value:0,
                    precision:0
                }
            }
        },
        {
            field:"salePrice",
            title:"单价",
            width:150,
            hidden:false
        },
        {
            field:"taxPrice",
            title:"含税单价",//单价*（1+税率）
            width:150,
            hidden:false
        },
        {
            field:"discountRate",
            title:"折扣率(%)",
            width:150,
            hidden:false
        },
        {
            field:"discountPrise",
            title:"折扣额",//单价*折扣率*数量
            width:150,
            hidden:false
        },
        {
            field:"totalPrice",
            title:"金额",//单价*数量-（单价*折扣率*数量）
            width:150,
            hidden:false
        },
        {
            field:"taxRate",
            title:"税率(%)",
            width:150,
            hidden:false
        },
        {
            field:"tax",
            title:"税额",//[单价*数量-(单价*折扣率*数量)]*税率
            width:150,
            hidden:false
        },
        {
            field:"totalLevied",
            title:"价税合计",//[单价*数量-(单价*折扣率*数量)]*(1+税率)
            width:150,
            hidden:false
        },
        {   field:"note",
            title:"备注",
            width:150,
            hidden:false
        }
    ]
};

/**
 * 初始化表格的工具条
 */
Sorder.initToolBar = function() {
	return [
		{
            text:'添加',
            iconCls:'icon-add',
            handler:function(){
                var row = {
                    name:'',
                    storageName:'',
                    unit:'',
                    qty:'',
                    SalePrice:'',
                    taxPrice:'',
                    discountRate:'',
                    discountPrise:'',
                    totalPrice:'',
                    taxRate:13,
                    tax:'',
                    totalLevied:'',
                    note:''
                };
                $('#'+ Sorder.id).datagrid('append', row);
            }
		},
		'-',
		{
            text:'删除',
            iconCls:'icon-remove',
            handler:function () {
                var t =$(this);
                console.info(t);
                var row = $('#'+ Sorder.id).datagrid('getSelections');
                if(row.length > 0) {
                	$('#'+ Sorder.id).datagrid('clearSelections');
                }
            }
		}
	];
}

Sorder.checkNum = function(checkbox) {
	$('.switch-anim').toggleClass('checked');
}

$(function() {
	var defaultColunms = Sorder.initColumn();
	var table = new ESTable(Sorder.id, null, defaultColunms);
	table.setToolBar(Sorder.initToolBar());
	Sorder.table = table.init();
	Sorder.table.datagrid('enableCellEditing');
});