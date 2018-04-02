/*
* @Author: 贾思凡
* @Date:   2018-03-07 19:07:36
* @Last Modified by:   贾思凡
* @Last Modified time: 2018-03-15 21:39:47
*/
//banner
{
	let quan=document.querySelectorAll(".quan");
	let img=document.querySelectorAll(".banner_img1");
	let banner=document.querySelector("#banner");
	let next=document.querySelector(".next");
	let prev=document.querySelector(".prev");
	// console.dir(banner);
	quan.forEach(function(ele,index){
		ele.onclick=function(){
			for(var i=0;i<quan.length;i++){
				img[i].classList.remove("active");
				quan[i].classList.remove("active");
			}
				// (ele/this/index)等价替换
			this.classList.add("active");
			img[index].classList.add("active");
			n=index;
		}
	});
	//自动执行
	var n=0;
	function move(){
		n++;
		// n=n%5;
		if(n===img.length){
			n=0;
		}
		if(n<0){
			n=img.length-1;
		}
	
      for(var i=0;i<quan.length;i++){
				img[i].classList.remove("active");
				quan[i].classList.remove("active");
			}

			img[n].classList.add("active");
			quan[n].classList.add("active");
	}
	//
	let t=setInterval(move,3000);
	
	banner.onmouseenter=function(){
		clearInterval(t);
	};
	banner.onmouseleave=function(){
		t=setInterval(move,3000);
	};
		let flag=true;
	next.onclick=function(){
		if(flag){
			flag=false;
			move();
		}
		
	};
	prev.onclick=function(){
		if(flag){
			flag=false;
			n-=2;
			move();
		}

	}
	img.forEach(function(ele,index){
			// console.log(this);
			ele.addEventListener("transitionend", function(){
				flag=true;
			})
		},3000);
	
}

//闪图
{
	const next=document.querySelector(".buy_next");
	const prev=document.querySelector(".buy_prev");
	const inner=document.querySelector(".item_box_inner");
	let n=0;
	next.onclick=function(){
		n++;
		prev.classList.remove("disable");
		if(n===2){
			this.classList.add("disable");
		}
		if(n===3){
			n=2;
			return;
		}
		inner.style.marginLeft=-994*n+"px";
	}

	prev.onclick=function(){
		n--;
		next.classList.remove("disable");
		if(n===0){
			this.classList.add("disable");
		}
		if(n===-1){
			n=0;
			return;
		}
		inner.style.marginLeft=-994*n+"px";
	}
}
//内容
{
	function neirong(neirong1){
		const next=neirong1.querySelector(".neirong_next");
		const prev=neirong1.querySelector(".neirong_prev");
		const inner=neirong1.querySelector(".box_inner");
		const contents=neirong1.querySelectorAll(".box_inner_item");
		const pagers=neirong1.querySelectorAll(".juhao");
		
		let n=0;
		next.onclick=function(){
			
			n++;
			
			prev.classList.remove("disable");
			if(n===contents.length-1){
				this.classList.add("disable");
			}
			if(n===contents.length){
				n=contents.length-1;
				return;
			}
			
			inner.style.marginLeft=-296*n+"px";
			pagers[n].classList.add("active5");
			pagers[n-1].classList.remove("active5");
		}
		prev.onclick=function(){
			n--;
			
			next.classList.remove("disable");
			if(n===0){
				this.classList.add("disable");
			}

			if(n<0){
				n=0;
				return;
			}
			inner.style.marginLeft=-296*n+"px";
			pagers[n].classList.add("active5");
			pagers[n+1].classList.remove("active5");
			obj=pagers[n];
		}

		let obj=pagers[0];
		pagers.forEach(function(ele,index){
			ele.onclick=function(){
				// alert(1);
				obj.classList.remove("active5");
				ele.classList.add("active5");
				obj=ele;
				inner.style.marginLeft=index*-296+"px";
				n=index;
			}
		});
	}
	const neironglist=document.querySelectorAll(".neirong_item");
		neironglist.forEach(function(ele){
			neirong(ele);
	});
	
}
//搭配
{
	function dapei(parent){
		const types=parent.querySelectorAll(".dapei_title");
		const goods=parent.querySelectorAll(".dapei_inner");
		console.log(goods);
		types.forEach(function(ele,index){
			ele.onmouseenter=function(){
				for(var i=0;i<types.length;i++){
					types[i].classList.remove("active");
					goods[i].classList.remove("active1");
				}
				this.classList.add("active");
				goods[index].classList.add("active1");
			}
		});
	}
	const contentlist=document.querySelectorAll(".dapei");
	console.log(contentlist);
	contentlist.forEach(function(ele){
		dapei(ele);
	});
}

// 侧导航
{
	let lables=document.querySelectorAll(".banner_nav  .nav_cdh");
	let menu=document.querySelectorAll(".banner_ka");
	console.log(menu);
	console.log(lables);
	let obj=menu[0];
	lables.forEach(function(ele,index){
		ele.onmouseenter=function(){
			obj.style.display="none";
			menu[index].style.display="block";
			obj=menu[index];
			}
		ele.onmouseleave=function(){
			menu[index].style.display="none";
		}
	});
		
}
// 下拉框
{
	let box=document.querySelectorAll(".nav_wenzi_box1");
	let top=document.querySelectorAll(".nav_wenzi_box1  span");
	let bottom=document.querySelectorAll(".xiala");
	console.log(bottom);
	box.forEach(function(ele,index){
		ele.onmouseenter=function(){
			bottom[index].style.height="240px";
		}
		ele.onmouseleave=function(){
			bottom[index].style.height="0";
			
			 }	
	});
	
	
		
	
}

// 推荐
{
	const next=document.querySelector(".buy_next1");
	const prev=document.querySelector(".buy_prev1");
	const inner=document.querySelector(".tuijian_inner_inner");
	console.log(next);
	let n=0;
	next.onclick=function(){
		n++;
		prev.classList.remove("disable");
		if(n===2){
			this.classList.add("disable");
		}
		if(n===3){
			n=2;
			return;
		}
		inner.style.marginLeft=-1226*n+"px";
	}

	prev.onclick=function(){
		n--;
		next.classList.remove("disable");
		if(n===0){
			this.classList.add("disable");
		}
		if(n===-1){
			n=0;
			return;
		}
		inner.style.marginLeft=-1226*n+"px";
	}
}