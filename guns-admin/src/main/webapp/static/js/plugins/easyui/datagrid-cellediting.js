(function($) {
	$.extend($.fn.datagrid.methods,{
        editCell: function (jq, param) {
            return jq.each(function () {
                var opts = $(this).datagrid('options');
                var fields = $(this).datagrid('getColumnFields',true).concat($(this).datagrid('getColumnFields'));
                for(var i = 0; i < fields.length; i++){
                    var col = $(this).datagrid('getColumnOption', fields[i]);
                    col.editor1 = col.editor;
                    if (fields[i] != param.field){
                        col.editor = null;
                    }
                }
                $(this).datagrid('beginEdit', param.index);
                var ed = $(this).datagrid('getEditor', param);
                if (ed){
                    if ($(ed.target).hasClass('textbox-f')){
                        $(ed.target).textbox('textbox').focus();
                    } else {
                        $(ed.target).focus();
                    }
                }
                for(var i = 0; i < fields.length; i++){
                    var col = $(this).datagrid('getColumnOption', fields[i]);
                    col.editor = col.editor1;
                }
            });
        },
        enableCellEditing: function (jq) {
            return jq.each(function () {
                var dg = $(this);
                var opts = dg.datagrid('options');
                opts.oldOnClickCell = opts.onClickCell;
                opts.onClickCell = function (index, field) {
                    if (opts.editIndex != undefined){
                        if (dg.datagrid('validateRow', opts.editIndex)){
                            dg.datagrid('endEdit', opts.editIndex);
                            opts.editIndex = undefined;
                        } else {
                            return;
                        }
                    }
                    dg.datagrid('selectRow', index).datagrid('editCell', {
                        index: index,
                        field: field
                    });
                    opts.editIndex = index;
                    opts.oldOnClickCell.call(this, index, field);
                }
            });
        },
        endEditing: function (jq) {
        	var flag;
            jq.each(function () {
                var dg = $(this);
                var opts = dg.datagrid('options');
                if (opts.editIndex == undefined) {flag = true; return false;}
                if (dg.datagrid('validateRow', opts.editIndex)) {
                    dg.datagrid('endEdit', opts.editIndex);
                    editIndex = undefined;
                    flag = true; return false;
                } else {
                	flag = false; return false;
                }
            });
            return flag;
        },
        append: function (jq, row) {
            jq.each(function () {
                var dg = $(this);
                var opts = dg.datagrid('options');
                if (dg.datagrid('endEditing')) {
                    dg.datagrid('appendRow', row);
                    opts.editIndex = dg.datagrid('getRows').length - 1;
                    var fields = dg.datagrid('getColumnFields', true).concat(dg.datagrid('getColumnFields'));
                    dg.datagrid('selectRow', opts.editIndex).datagrid('editCell', {
                        index: opts.editIndex,
                        field: fields[0]
                    });
                }
            })
        }
    });
}(jQuery));