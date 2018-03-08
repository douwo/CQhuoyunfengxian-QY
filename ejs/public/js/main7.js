laydate.render({
	elem: '#date'
});
laydate.render({
	elem: '#date2'
});
laydate.render({
	elem: '#date3'
});
laydate.render({
	elem: '#date4'
});
laydate.render({
	elem: '#date5'
});
$(function() {
	$('body').css('opacity', '1');
})
//tab1
layui.use('table', function() {
	var table = layui.table;
	table.render({
		elem: '#demo',
		height: 580,
		url: 'js/table_data2.json', //数据接口
		page: true, //开启分页
		limit: 10,
		limits: [10, 15, 20, 25, 30],
		cols: [
			[ //表头
				{
					field: 'name',
					title: '车牌号',
					width: '8%',
					align: 'center',
				}, {
					field: 'classify',
					title: '车辆类型',
					align: 'center',
					width: '10%'
				}, {
					field: 'logins',
					title: '行驶证号',
					align: 'center',
					width: '10%',
				}, {
					field: 'two',
					title: '行驶证有效期',
					align: 'center',
					width: '12%'
				}, {
					field: 'tel',
					title: '运营证号',
					align: 'center',
					width: '12%'
				}, {
					field: 'time',
					title: '入户时间',
					align: 'center',
					width: '12%'
				}, {
					field: 'three',
					title: '年审有效期至',
					align: 'center',
					width: '12%'
				}, {
					field: 'four',
					title: '最近二维日期',
					align: 'center',
					width: '12%'
				}
			]
		]
	});
});
// tab2
layui.use('table', function() {
	var table = layui.table;
	table.render({
		elem: '#demo2',
		height: 580,
		url: 'js/table_data2.json', //数据接口
		page: true, //开启分页
		limit: 10,
		limits: [10, 15, 20, 25, 30],
		cols: [
			[ //表头
				{
					field: 'name',
					title: '姓名',
					width: '8%',
					align: 'center',
				}, {
					field: 'tel',
					title: '驾驶证号',
					align: 'center',
					width: '10%'
				}, {
					field: 'four',
					title: '年审时间',
					align: 'center',
					width: '10%',
				}, {
					field: 'three',
					title: '有效期',
					align: 'center',
					width: '10%'
				}, {
					field: 'classify',
					title: '从业范围',
					align: 'center',
					width: '10%'
				}, {
					field: 'num1',
					title: '从业资格证号',
					align: 'center',
					width: '10%'
				}, {
					field: 'one',
					title: '发证时间',
					align: 'center',
					width: '10%'
				}, {
					field: 'two',
					title: '有效期',
					align: 'center',
					width: '10%'
				}, {
					field: 'level',
					title: '诚信考核等级',
					align: 'center',
					width: '8%'
				}, {
					field: 'one',
					title: '诚信考核有效时间',
					align: 'center',
					width: '10%'
				}
			]
		]
	});
});
// tab3
layui.use('table', function() {
	var table = layui.table;
	table.render({
		elem: '#demo3',
		height: 580,
		url: 'js/table_data2.json', //数据接口
		page: true, //开启分页
		limit: 10,
		limits: [10, 15, 20, 25, 30],
		cols: [
			[ //表头
				{
					field: 'name',
					title: '车牌号',
					width: '8%',
					align: 'center',
				}, {
					field: 'tel',
					title: '交强险保单号',
					align: 'center',
					width: '12%'
				}, {
					field: 'one',
					title: '起保日期',
					align: 'center',
					width: '8%',
				}, {
					field: 'two',
					title: '止保日期',
					align: 'center',
					width: '8%'
				}, {
					field: 'classify',
					title: '商业险保单号',
					align: 'center',
					width: '12%'
				}, {
					field: 'three',
					title: '起保日期',
					align: 'center',
					width: '8%'
				}, {
					field: 'four',
					title: '止保日期',
					align: 'center',
					width: '8%'
				}, {
					field: 'num1',
					title: '第三者责任险保额(万)',
					align: 'center',
					width: '9%'
				}, {
					field: 'num2',
					title: '车损险保额(万)',
					align: 'center',
					width: '6%'
				}, {
					field: 'num3',
					title: '乘坐险保额(万)',
					align: 'center',
					width: '6%'
				}, {
					field: 'logins',
					title: '不计免赔保额(万)',
					align: 'center',
					width: '7%'
				}
			]
		]
	});
});

//tab4
layui.use('table', function() {
	var table = layui.table;
	table.render({
		elem: '#demo4',
		height: 580,
		url: 'js/table_data2.json', //数据接口
		page: true, //开启分页
		limit: 10,
		limits: [10, 15, 20, 25, 30],
		cols: [
			[ //表头
				{
					field: 'name',
					title: '车牌号',
					width: '15%',
					align: 'center',
				}, {
					field: 'classify',
					title: '车辆类型',
					align: 'center',
					width: '15%'
				}, {
					field: 'level',
					title: '车辆总质量',
					align: 'center',
					width: '15%',
				}, {
					field: 'Boolean',
					title: '是否安装GPS监控终端',
					align: 'center',
					width: '15%'
				}, {
					field: 'addUser',
					title: 'GPS监控终端厂牌型号',
					align: 'center',
					width: '15%'
				}, {
					field: 'time',
					title: '安装日期',
					align: 'center',
					width: '15%'
				}
			]
		]
	});
});

//tab5
layui.use('table', function() {
	var table = layui.table;
	table.render({
		elem: '#demo5',
		height: 580,
		url: 'js/table_data2.json', //数据接口
		page: true, //开启分页
		limit: 10,
		limits: [10, 15, 20, 25, 30],

		cols: [
			[ //表头
				{
					field: 'name',
					title: '学习项目',
					width: '18%',
					align: 'center',
				}, {
					field: 'classify',
					title: '驾驶员',
					align: 'center',
					width: '18%'
				}, {
					field: 'level',
					title: '学习日期',
					align: 'center',
					width: '18%',
				}, {
					field: 'Boolean',
					title: '学习时长(分钟)',
					align: 'center',
					width: '18%'
				}, {
					title: '操作',
					width: '15%',
					align: 'center',
					toolbar: '#barDemo5'
				}
			]
		]
	});
});

//tab6
layui.use('table', function() {
	var table = layui.table;
	table.render({
		elem: '#demo6',
		height: 580,
		url: 'js/table_data2.json', //数据接口
		page: true, //开启分页
		limit: 10,
		limits: [10, 15, 20, 25, 30],

		cols: [
			[ //表头
				{
					field: 'four',
					title: '会议时间',
					width: '12%',
					align: 'center',
				}, {
					field: 'num3',
					title: '时间',
					align: 'center',
					width: '12%'
				}, {
					field: 'location',
					title: '地点',
					align: 'center',
					width: '12%',
				}, {
					field: 'name',
					title: '主持人',
					align: 'center',
					width: '12%'
				}, {
					field: 'Boolean',
					title: '参会人员',
					align: 'center',
					width: '12%'
				}, {
					field: 'users',
					title: '缺席人员',
					align: 'center',
					width: '12%'
				}, {
					title: '操作',
					width: '12%',
					align: 'center',
					toolbar: '#barDemo6'
				}
			]
		]
	});
});
//tab7
layui.use('table', function() {
	var table = layui.table;
	table.render({
		elem: '#demo7',
		height: 580,
		url: 'js/table_data2.json', //数据接口
		page: true, //开启分页
		limit: 10,
		limits: [10, 15, 20, 25, 30],

		cols: [
			[ //表头
				{
					field: 'four',
					title: '检查日期',
					width: '15%',
					align: 'center',
				}, {
					field: 'location',
					title: '检查地点',
					align: 'center',
					width: '15%'
				}, {
					field: 'users',
					title: '检查人',
					align: 'center',
					width: '21%',
				}, {
					field: 'Boolean',
					title: '图片',
					align: 'center',
					width: '21%'
				}, {
					title: '操作',
					width: '21%',
					align: 'center',
					toolbar: '#barDemo7'
				}
			]
		]
	});
});
//tab8
layui.use('table', function() {
	var table = layui.table;
	table.render({
		elem: '#demo8',
		height: 580,
		url: 'js/table_data2.json', //数据接口
		page: true, //开启分页
		limit: 10,
		limits: [10, 15, 20, 25, 30],
		cellMinWidth: 20,
		cols: [
			[ //表头
				{
					field: 'wjlx',
					title: '整改类型',
					width: '6%',
					align: 'center',
				}, {
					field: 'name',
					title: '整改车牌',
					align: 'center',
					width: '8%'
				}, {
					field: 'zdmc',
					title: '隐患内容',
					align: 'center',
					width: '12%',
				}, {
					field: 'zdmc',
					title: '整改措施',
					align: 'center',
					width: '8%'
				}, {
					field: 'four',
					title: '整改期限',
					align: 'center',
					width: '8%'
				}, {
					field: 'num1',
					title: '整改资金',
					align: 'center',
					width: '8%'
				}, {
					field: 'users',
					title: '责任人',
					align: 'center',
					width: '6%'
				}, {
					field: 'Boolean',
					title: '验收情况',
					align: 'center',
					width: '8%'
				}, {
					field: '',
					title: '验收人签字',
					align: 'center',
					width: '6%'
				}, {
					field: 'three',
					title: '验收时间',
					align: 'center',
					width: '10%'
				}, {
					field: '',
					title: '备注',
					align: 'center',
					width: '8%'
				}, {
					title: '操作',
					width: '8%',
					align: 'center',
					toolbar: '#barDemo7'
				}
			]
		]
	});
});

//tab9
layui.use('table', function() {
	var table = layui.table;
	table.render({
		elem: '#demo9',
		height: 580,
		url: 'js/table_data2.json', //数据接口
		page: true, //开启分页
		limit: 10,
		limits: [10, 15, 20, 25, 30],
		cellMinWidth: 20,
		cols: [
			[ //表头
				{
					field: 'name',
					title: '车牌号',
					width: '6%',
					align: 'center',
				}, {
					field: 'num1',
					title: '速度限制',
					align: 'center',
					width: '5%'
				}, {
					field: 'four',
					title: '抽查时间',
					align: 'center',
					width: '12%',
				}, {
					field: 'num2',
					title: '抽查速度',
					align: 'center',
					width: '5%'
				}, {
					field: 'location',
					title: '定位位置',
					align: 'center',
					width: '15%'
				}, {
					field: '',
					title: '是否超速驾驶',
					align: 'center',
					width: '6%'
				}, {
					field: '',
					title: '是否疲劳驾驶',
					align: 'center',
					width: '6%'
				}, {
					field: 'Boolean',
					title: '备注',
					align: 'center',
					width: '5%'
				}, {
					field: 'three',
					title: '监控时间',
					align: 'center',
					width: '8%'
				}, {
					field: 'users',
					title: '监控人员',
					align: 'center',
					width: '6%'
				}, {
					field: 'score',
					title: 'GPS安装车辆数',
					align: 'center',
					width: '6%'
				}, {
					field: 'num3',
					title: '上线车辆数',
					align: 'center',
					width: '6%'
				}, {
					field: 'logins',
					title: '定位车辆数',
					align: 'center',
					width: '6%'
				}
			]
		]
	});
});
//tab10
layui.use('table', function() {
	var table = layui.table;
	table.render({
		elem: '#demo10',
		height: 580,
		url: 'js/table_data2.json', //数据接口
		page: true, //开启分页
		limit: 10,
		limits: [10, 15, 20, 25, 30],

		cols: [
			[ //表头
				{
					field: 'name',
					title: '车牌号',
					width: '12%',
					align: 'center',
				}, {
					field: 'level',
					title: '违章情况',
					align: 'center',
					width: '12%'
				}, {
					field: 'users',
					title: '违章驾驶员',
					align: 'center',
					width: '12%',
				}, {
					field: 'four',
					title: '违章时间',
					align: 'center',
					width: '12%'
				}, {
					field: 'addUser',
					title: '监控人员',
					align: 'center',
					width: '12%'
				}, {
					field: 'classify',
					title: '处理负责人',
					align: 'center',
					width: '12%'
				}, {
					field: 'zdmc',
					title: '处理情况',
					align: 'center',
					width: '12%'
				}, {
					field: '',
					title: '备注',
					align: 'center',
					width: '12%'
				}
			]
		]
	});
});
//tab11
layui.use('table', function() {
	var table = layui.table;
	table.render({
		elem: '#demo11',
		height: 580,
		url: 'js/table_data2.json', //数据接口
		page: true, //开启分页
		limit: 10,
		limits: [10, 15, 20, 25, 30],

		cols: [
			[ //表头
				{
					field: 'four',
					title: '台账创建日期',
					width: '12%',
					align: 'center',
				}, {
					field: 'wjlx',
					title: '发送内容',
					align: 'center',
					width: '12%'
				}, {
					field: 'addUser',
					title: '审核领导',
					align: 'center',
					width: '10%',
				}, {
					field: 'users',
					title: '操作人员',
					align: 'center',
					width: '10%'
				}, {
					field: 'three',
					title: '发送时间',
					align: 'center',
					width: '12%'
				}, {
					field: 'num1',
					title: '发送数量',
					align: 'center',
					width: '10%'
				}, {
					field: '',
					title: '备注',
					align: 'center',
					width: '12%'
				}, {
					title: '操作',
					width: '12%',
					align: 'center',
					toolbar: '#barDemo11'
				}
			]
		]
	});
});
//tab12
layui.use('table', function() {
	var table = layui.table;
	table.render({
		elem: '#demo12',
		height: 580,
		url: 'js/table_data2.json', //数据接口
		page: true, //开启分页
		limit: 10,
		limits: [10, 15, 20, 25, 30],

		cols: [
			[ //表头
				{
					field: 'four',
					title: '出险时间',
					width: '10%',
					align: 'center',
				}, {
					field: 'wjlx',
					title: '出险地点',
					align: 'center',
					width: '8%'
				}, {
					field: 'name',
					title: '肇事车辆',
					align: 'center',
					width: '8%',
				}, {
					field: 'ydzcs',
					title: '肇事原因',
					align: 'center',
					width: '8%'
				}, {
					field: 'users',
					title: '驾驶人员',
					align: 'center',
					width: '6%'
				}, {
					field: 'Boolean',
					title: '死伤人数',
					align: 'center',
					width: '5%'
				}, {
					field: 'addUser',
					title: '责任认定',
					align: 'center',
					width: '10%'
				}, {
					field: 'wealth',
					title: '处理情况',
					align: 'center',
					width: '10%'
				}, {
					field: '',
					title: '备注',
					align: 'center',
					width: '8%'
				}, {
					title: '操作',
					width: '10%',
					align: 'center',
					toolbar: '#barDemo12'
				}
			]
		]
	});
});