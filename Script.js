var auto = document.getElementById('auto')
var autores = document.getElementById('autores')
var tempVal = ''
Object.assign(autores.style,{listStyle:'none',width:'100%',position:'absolute',top:'13px',right:'-10px'});
auto.addEventListener('keyup', function(){
	//console.log(document.getElementById('auto').style.left)
	tempVal = auto.value
	while (autores.hasChildNodes()) {   
	autores.removeChild(autores.firstChild);
	}
	while(!auto.value){
		autores.removeChild(autores.firstChild);
	}

	var val = ['test1','test2','test3','abhishek','gurjar']

	function matcher(match) {
	if (match.includes(auto.value)){
		return match
	}
	}

	res = val.filter(matcher);
	for(let i = 0; i < res.length; i++){
		var li = document.createElement('li')
		li.setAttribute('id','autolist')
		li.setAttribute('tabindex',0)
		li.setAttribute('onkeyup','rotate(this)')
		li.setAttribute('onclick','select(this.innerHTML)')
		Object.assign(li.style,{border:'1px solid',width:'171px',height:'15'});
		li.innerHTML = res[i]
		autores.appendChild(li)
	}
	auto.addEventListener('keydown',function(e){
		if(e.keyCode == 40){
			autores.firstChild.focus()
			auto.value = autores.firstChild.innerHTML
		}
	})
})
function rotate(y){
	y.addEventListener('keydown',function(e){
		if(e.keyCode == 40 && y.nextSibling){
			y.nextSibling.focus()
			auto.value = y.nextSibling.innerHTML
		}
		else if(e.keyCode == 38){
			if(!y.previousSibling){
				auto.value = tempVal
				auto.focus()
				auto.value = auto.value
			}
			else{
				y.previousSibling.focus()
				auto.value = y.previousSibling.innerHTML
			}
		}
		else if(e.keyCode == 13){
			auto.value = y.innerHTML
			while(auto.value == y.innerHTML){
				autores.removeChild(autores.firstChild);	
			}
		}
	})
}
function select(x){
	auto.value = x
	while(auto.value == x){
		autores.removeChild(autores.firstChild);	
	}
}
