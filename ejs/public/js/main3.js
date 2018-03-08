$(function() {
	$('body').css('opacity', '1')
})
laydate.render({
	elem: '#date'
});
laydate.render({
	elem: '#date2'
});
layui.use('table', function() {
	var table = layui.table;
	table.render({
		elem: '#demo',
		height: 580,
		url: 'js/table_data2.json', //数据接口
		page: true, //开启分页
		limit: 10,
		limits: [10, 15, 20, 25, 30],
		cellMinWidth: 80,
		cols: [
			[ //表头
				{
					field: 'name',
					title: '文件名',
					width: '25%',
					align: 'center',
				}, {
					field: 'wjlx',
					title: '文件类型',
					align: 'center',
					width: '12%'
				}, {
					field: 'wh',
					title: '文号',
					align: 'center',
					width: '14%',
				}, {
					field: 'time',
					title: '下发时间',
					align: 'center',
					width: '14%'
				}, {
					field: 'ydzcs',
					title: '阅读总次数',
					align: 'center',
					width: '6%'
				}, {
					field: 'ydsc',
					title: '阅读时长（分钟）',
					align: 'center',
					width: '10%',
				}, {
					title: '操作',
					width: '10%',
					align: 'center',
					toolbar: '#barDemo1'
				}
			]
		]
	});

});
//   tab2
layui.use('table', function() {
	var table = layui.table;
	table.render({
		elem: '#demo2',
		height: 580,
		url: 'js/table_data2.json', //数据接口
		page: true, //开启分页
		limit: 10,
		limits: [10, 15, 20, 25, 30],
		cellMinWidth: 80,
		cols: [
			[ //表头
				{
					field: 'name',
					title: '文件名称',
					width: '25%',
					align: 'center',
				}, {
					field: 'wjlx',
					title: '文件类型',
					align: 'center',
					width: '12%'
				}, {
					field: 'wh',
					title: '文号',
					align: 'center',
					width: '14%',
				}, {
					field: 'time',
					title: '创建时间',
					align: 'center',
					width: '14%'
				}, {
					field: 'ydzcs',
					title: '阅读总次数',
					align: 'center',
					width: '6%'
				}, {
					field: 'ydsc',
					title: '阅读时长（分钟）',
					align: 'center',
					width: '10%',
				}, {
					title: '操作',
					width: '10%',
					align: 'center',
					toolbar: '#barDemo2'
				}
			]
		]
	});
});
//   tab3
layui.use('table', function() {
	var table = layui.table;
	table.render({
		elem: '#demo3',
		height: 580,
		url: 'js/table_data2.json', //数据接口
		page: true, //开启分页
		limit: 10,
		limits: [10, 15, 20, 25, 30],
		cellMinWidth: 80,
		cols: [
			[ //表头
				{
					field: 'zdmc',
					title: '制度名称',
					width: '25%',
					align: 'center',
				}, {
					field: 'addUser',
					title: '添加用户',
					align: 'center',
					width: '25%'
				}, {
					field: 'time',
					title: '创建时间',
					align: 'center',
					width: '25%',
				}, {
					title: '操作',
					width: '15%',
					align: 'center',
					toolbar: '#barDemo3'
				}
			]
		]
	});
});
//   tab4
layui.use('table', function() {
	var table = layui.table;
	table.render({
		elem: '#demo4',
		height: 580,
		url: 'js/table_data2.json', //数据接口
		page: true, //开启分页
		limit: 10,
		limits: [10, 15, 20, 25, 30],
		cellMinWidth: 80,
		cols: [
			[ //表头
				{
					field: 'title',
					title: '标题',
					width: '40%',
					align: 'center',
				}, {
					field: 'time',
					title: '创建时间',
					align: 'center',
					width: '30%',
				}, {
					title: '操作',
					width: '20%',
					align: 'center',
					toolbar: '#barDemo4'
				}
			]
		]
	});
});