$(function() {
	var user = $('#user_name').text();
	$('body').attr('onselectstart', 'return false');
	$('img').attr('draggable', 'false');
	Materialize.toast('欢迎您！' + user, 2000, 'rounded');
});
$('#dropdown1>li:first>a').on('click', function() {
	layer.prompt({
		title: '更改安全员姓名',
		//				formType: '3'
	}, function(text, index) {
		layer.close(index);
		layer.msg('安全员名称更改为：' + text);
		$('#user_name').text(text);
	});
})

$('#dropdown1>li>a').bind('click', function() {
	var username = $('#user_name').text();
	$('.layui-layer-input').attr('value', username);
});
$('#dropdown1>li:eq(2)>a').bind('click', function() {
	layer.msg('此模块处于开发过程中！');
});
$('#dropdown1>li:nth-child(2)>a').on('click', function() {
	layer.open({
		title: '修改密码',
		btn: ['确定', '取消'],
		yes: function(index) {
			layer.msg('确认按钮function');
			layer.close(index);
		},
		type: 1,
		area: ['420px', '300px'], //宽高
		content: '<div class="pass">' +
			'<div class="input-field">' +
			'<input id="password1" type="password" class="validate">' +
			'<label for="password1">原密码</label>' +
			'</div>' +
			'<div class="input-field">' +
			'<input id="password2" type="password" class="validate">' +
			'<label for="password2">新密码</label>' +
			'</div>' +
			'<div class="input-field">' +
			'<input id="password3" type="password" class="validate">' +
			'<label for="password3">再次输入</label>' +
			'</div>' +
			'</div>'
	});
})
$('.power-off').bind('click', function() {
	layer.confirm('是否确定退出？', {
		title: '安全退出',
		btn: ['确定', '取消'] //按钮
	}, function() {
		layer.msg('你点击了确定', {
			icon: 1
		});
	}, function() {
		layer.msg('你点击了取消', {
			icon: 2
		});
	});
})

function page_1() {
	if($('nav ul li:eq(0)').hasClass('users-active')) {
		return;
	} else {
		$('#content').attr('src', 'main1.html');
		$('nav ul li').removeClass('users-active');
		$('nav ul li:eq(0)').addClass('users-active');
		$('nav ul li img').removeClass('animated bounceIn');
		$('nav ul li:eq(0) img').addClass('animated bounceIn');
	}
}
function page_2() {
	if($('nav ul li:eq(1)').hasClass('users-active')) {
		return;
	} else {
		$('#content').attr('src', 'main2.html');
		$('nav ul li').removeClass('users-active');
		$('nav ul li:eq(1)').addClass('users-active');
		$('nav ul li img').removeClass('animated bounceIn');
		$('nav ul li:eq(1) img').addClass('animated bounceIn');
	}
}

function page_3() {
	if($('nav ul li:eq(2)').hasClass('users-active')) {
		return;
	} else {
		$('#content').attr('src', 'main3.html');
		$('nav ul li').removeClass('users-active');
		$('nav ul li:eq(2)').addClass('users-active');
		$('nav ul li img').removeClass('animated bounceIn');
		$('nav ul li:eq(2) img').addClass('animated bounceIn');
	}
}

function page_4() {
	if($('nav ul li:eq(3)').hasClass('users-active')) {
		return;
	} else {
		$('#content').attr('src', 'main4.html');
		$('nav ul li').removeClass('users-active');
		$('nav ul li:eq(3)').addClass('users-active');
		$('nav ul li img').removeClass('animated bounceIn');
		$('nav ul li:eq(3) img').addClass('animated bounceIn');
	}
}

function page_5() {
	if($('nav ul li:eq(4)').hasClass('users-active')) {
		return;
	} else {
		$('#content').attr('src', 'main5.html');
		$('nav ul li').removeClass('users-active');
		$('nav ul li:eq(4)').addClass('users-active');
		$('nav ul li img').removeClass('animated bounceIn');
		$('nav ul li:eq(4) img').addClass('animated bounceIn');
	}

}

function page_6() {
	if($('nav ul li:eq(5)').hasClass('users-active')) {
		return;
	} else {
		$('#content').attr('src', 'main6.html');
		$('nav ul li').removeClass('users-active');
		$('nav ul li:eq(5)').addClass('users-active');
		$('nav ul li img').removeClass('animated bounceIn');
		$('nav ul li:eq(5) img').addClass('animated bounceIn');
	}

}

function page_7() {
	if($('nav ul li:eq(6)').hasClass('users-active')) {
		return;
	} else {
		$('#content').attr('src', 'main7.html');
		$('nav ul li').removeClass('users-active');
		$('nav ul li:eq(6)').addClass('users-active');
		$('nav ul li img').removeClass('animated bounceIn');
		$('nav ul li:eq(6) img').addClass('animated bounceIn');
	}
}