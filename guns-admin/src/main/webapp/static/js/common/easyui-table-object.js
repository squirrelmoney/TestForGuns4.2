/**
 * 初始化 EasyUI Table 的封装
 *
 * @author guanqing
 */
(function() {
    var ESTable = function (estableId, url, columns) {
	    this.etInstance = null;					//jquery和BootStrapTable绑定的对象
	    this.estableId = estableId;
	    this.url = Feng.ctxPath + url;
	    this.method = "post";
	    this.columns = columns;
	    this.height = 450;						//默认表格高度450
	};
	
	ESTable.prototype = {
        /**
         * 初始化easyui table
         */
		init: function() {
			var tableId = this.estableId;
			var me = this;
			this.etInstance = 
				$('#' + tableId).datagrid({
					rownumbers : true,
					singleSelect: false,
					selectOnCheck: true,
					checkOnSelect: true,
					fitColumns: false,
					showFooter: true,
					idField:'id',
					height: this.height,
					width: "100%",
					columns: [this.columns],
					toolbar: this.toolbar || []
				});
			return this;
		},
        /**
         * 设置toolbar
         */
        setToolBar: function (toolbar) {
            this.toolbar = toolbar;
            return this;
        },
        /**
         * 调用方法
         */
        datagrid: function(method, param) {
			this.etInstance.datagrid(method, param == null ? {} : param);
			return this.etInstance;
		}
	};
	
	window.ESTable = ESTable;
}());