$(function(){
	var $expression = $(".expression");//表达式
	var $result = $(".result");//结果
	
	var isNewBegin = false;//判断是否是一轮新的计算，如是按下数字键后就会清屏
	
	//除法按钮
	var $division = $("#division").click(function(){
//		$expression.focus();
		changeScrollLeft();
		var b = isOp($expression.val());
		if(b === true){
			changeExpre($expression.html()," / ");
		}else if(b === -1){
			var str = $expression.val().substring(0,$expression.val().length-1);
			$expression.val(str+" / ");
		}else if(b === -2){
			var str = $expression.val().substring(0,$expression.val().length-3);
			$expression.val(str+" / ");
		}
	});
	//乘法按钮
	var $Multiply = $("#Multiply").click(function(){
//		$expression.focus();
		changeScrollLeft();
		var b = isOp($expression.val());
		if(b === true){
			changeExpre($expression.html()," * ");
		}else if(b === -1){
			var str = $expression.val().substring(0,$expression.val().length-1);
			$expression.val(str+" * ");
		}else if(b === -2){
			var str = $expression.val().substring(0,$expression.val().length-3);
			$expression.val(str+" * ");
		}
	});
	//加法按钮
	var $addition = $("#addition").click(function(){
//		$expression.focus();
		changeScrollLeft();
		var b = isOp($expression.val());
		if(b === true){
			changeExpre($expression.html()," + ");
		}else if(b === -1){
			var str = $expression.val().substring(0,$expression.val().length-1);
			$expression.val(str+" + ");
		}else if(b === -2){
			var str = $expression.val().substring(0,$expression.val().length-3);
			$expression.val(str+" + ");
		}
	});
	//减法按钮
	var $subtraction = $("#subtraction").click(function(){
//		$expression.focus();
		changeScrollLeft();
		var b = isOp($expression.val());
		if(b === true){
			changeExpre($expression.html()," - ");
		}else if(b === -1){
			var str = $expression.val().substring(0,$expression.val().length-1);
			$expression.val(str+" - ");
		}else if(b === -2){
			var str = $expression.val().substring(0,$expression.val().length-3);
			$expression.val(str+" - ");
		}
	});
	
	//等于按钮
	var $equal = $(".equal_but").click(function(){
		changeScrollLeft();
		var b = isOp($expression.val());
		if(b === -1){
			var str = $expression.val().substring(0,$expression.val().length-1);
			$expression.val(str);
		}else if(b === -2){
			var str = $expression.val().substring(0,$expression.val().length-3);
			$expression.val(str);
		}
		var exp = $expression.val();
		var result2 = MultiplyAndDivide(exp);
		var result1 = AddAndSubtract(result2);
		if(result2 == "Infinity"){
			$result.css("font-size","1.2em");
			$result.val("错误，请检查是否有误！");			
		}else if(result2 == "NaN"){
			$result.val("+∞ ");
		}else{
			$result.val(result2);
		}
	});
	
	//删除所有
	var $deleteAll = $("#delete_but").click(function(){
//		$expression.focus();
		changeScrollLeft();
		$expression.val("");
		$result.val("");
	});
	//一个一个删除
	var $daleteOneBOne = $("#delete_OneBOne_but").click(function(){
//		$expression.focus();
		changeScrollLeft();
		var b = isOp($expression.val());
		if(b === -2){
			var str = $expression.val().substring(0,$expression.val().length-2);
			$expression.val(str);
		}
		var str = $expression.val().substring(0,$expression.val().length-1);
		$expression.val(str);
	});
	
	var $one = $("#one").click(function(){
		changeExpre($expression.html(),"1");
	});
	var $two = $("#two").click(function(){
		changeExpre($expression.html(),"2");
	});
	var $three = $("#three").click(function(){
		changeExpre($expression.html(),"3");
	});
	var $four = $("#four").click(function(){
		changeExpre($expression.html(),"4");
	});
	var $five = $("#five").click(function(){
		changeExpre($expression.html(),"5");
	});
	var $six = $("#six").click(function(){
		changeExpre($expression.html(),"6");
	});
	var $seven = $("#seven").click(function(){
		changeExpre($expression.html(),"7");
	});
	var $eight = $("#eight").click(function(){
		changeExpre($expression.html(),"8");
	});
	var $nine = $("#nine").click(function(){
		changeExpre($expression.html(),"9");
	});
	var $zero = $("#zero").click(function(){
		changeExpre($expression.html(),"0");
	});
	var $dot = $("#dot").click(function(){
		var b = isDot($expression.val());
		if(b === true){
//			$expression.focus();
			changeExpre($expression.html(),".");
		}
	});
	
	function changeExpre(string,number){
		$expression.val($expression.val()+number);
		changeScrollLeft();
//		$expression.focus();
	}
	
	//让光标移动！！！
	function changeScrollLeft(){
		var index = $expression[0].scrollWidth;
		$expression.scrollLeft(index);
	}



//	var $LeftContainer = $(".LeftContainer");
//	var $RightContainer= $(".RightContainer");
	
	$(".a1").hover(
		function(){
			$(".a1").css("color","#FFFFFF");
			$(".a2").css("color","#CCCCCC");
			$(".a3").css("color","#CCCCCC");
		},
		function(){
			$(".a1").css("color","#FFFFFF");
			$(".a2").css("color","#FFFFFF");
			$(".a3").css("color","#FFFFFF");
		}
	);
	$(".a2").hover(
		function(){
			$(".a2").css("color","#FFFFFF");
			$(".a1").css("color","#CCCCCC");
			$(".a3").css("color","#CCCCCC");
		},
		function(){
			$(".a2").css("color","#FFFFFF");
			$(".a1").css("color","#FFFFFF");
			$(".a3").css("color","#FFFFFF");
		}
	);	
	$(".a3").hover(
		function(){
			$(".a3").css("color","#FFFFFF");
			$(".a1").css("color","#CCCCCC");
			$(".a2").css("color","#CCCCCC");
		},
		function(){
			$(".a3").css("color","#FFFFFF");
			$(".a1").css("color","#FFFFFF");
			$(".a2").css("color","#FFFFFF");
		}
	);

	$(".but1").click(function(){
		if($(".RightContainer").css("margin-left") != "180px"){
			$(".RightContainer").animate({
				marginLeft:'180',
//				marginTop:'35',
			});
		}else{
			$(".RightContainer").animate({
				marginLeft:'0',
//				marginTop:'0'
			});
		}
	});
	


})


//*和/法
function MultiplyAndDivide(expStr){
	var arr = new Array(); 
	arr = expStr.split(" ");
	var multiplyBefore,multiplyAfter,divideBefore,divideAfter,result;
		
	for(var i = 0;i < arr.length;i ++){
		switch(arr[i]){
			case "*":
				multiplyBefore = arr[i - 1];
				multiplyAfter  = arr[i + 1];
				result         = multiplyBefore * multiplyAfter;
				arr.splice(i-1,3,result);
	//			console.log(arr);
				i = 0;
			break;
			case "/":
				divideBefore = arr[i - 1];
				divideAfter  = arr[i + 1];
				result       = divideBefore / divideAfter;
				arr.splice(i-1,3,result);
	//			console.log(arr);
				i = 0;
			break;
		}
	}
		return arr;
}
//+和-法 
function AddAndSubtract(expArr){
	var plusBefore,plusAfter,subtractBefore,subtractAfter,result;
		
	for(var i = 0;i < expArr.length;i ++){
		switch(expArr[i]){
			case "+":
				plusBefore = expArr[i - 1];
				plusAfter  = expArr[i + 1];
				result     = parseInt(plusBefore) + parseInt(plusAfter);
				expArr.splice(i-1,3,result);
//				console.log(expArr);
				i = 0;
			break;
			case "-":
				subtractBefore = expArr[i - 1];
				subtractAfter  = expArr[i + 1];
				result         = parseInt(subtractBefore) - parseInt(subtractAfter);
				expArr.splice(i-1,3,result);
//				console.log(expArr);
				i = 0;
			break;
		}
	}
	return expArr;
}

//判断能不能输入点号
function isDot(expStr){
	var index1 = expStr.lastIndexOf(" ");
	if(expStr === "" || index1 === expStr.length-1){ //如果是空的或最后一个是运算符
		return false;
	}
	if(index1 === -1){ //如果没有空格
		if(expStr.indexOf(".") === -1){
			return true;
		}
	}else{ //如果有空格
		var num = expStr.substring(index1,expStr.length);
		if(num.indexOf(".") === -1){
			return true;
		}
	}
	return false;
}

//判断能不能输入运算符
function isOp(opStr){
	if(opStr === ""){
		return false;
	}
	if(opStr.lastIndexOf(" ") === opStr.length-1){
		return -2;
	}
	if(opStr.lastIndexOf(".") === opStr.length-1){ //如果最后一个存在小数点
		return -1;
	}
	return true;
}


//判断小数点之后是不是全是0，如是就包括小数点去掉