
//让某个物体运动
function move(id,startLeft,startTop,endLeft,endTop,timeSpace){
	var incH = 1;
	//纵向增量
	var incV;
	
	if(endTop-startTop==0){
		//纵向增量
		incV = 0;
	}else if(endLeft-startLeft==0){
		incH = 0;
		incV = 1;
	}else{
		//横纵比：
		var p = Math.abs((endLeft-startLeft)/(endTop-startTop));//250/50 = 5/1=5
		//纵向增量
		 incV = 1/p;
	}
	
	var currLeft = startLeft;
	var currTop = startTop;
	
	//横向的方向
	var directionH = endLeft-startLeft>=0?1:-1;
	//纵向的方向
	var directionV = endTop-startTop>=0?1:-1;	
	var timer = setInterval(goStep,timeSpace);
	
		
	function goStep(){
		//改变数据
		currLeft = currLeft+(incH*directionH);
		currTop = currTop+(incV*directionV);
		
		var hIsEnd = false;//横向是否到终点
		var vIsEnd = false;//纵向是否到终点
		//合法性的判断
		
		if(Math.abs(currLeft-endLeft)<=incH){
			currLeft = endLeft;
			hIsEnd = true;
		}
		
		if(Math.abs(currTop-endTop)<=incV){
			currTop = endTop;
			vIsEnd = true;
		}
		
		//到终点了吗？
		if(hIsEnd && vIsEnd){
			window.clearInterval(timer);
		}
		
		//改变外观；
		document.getElementById(id).style.left = currLeft+"px";
		document.getElementById(id).style.top = currTop+"px";
		
	}
		
}


