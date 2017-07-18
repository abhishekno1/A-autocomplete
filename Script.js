var auto = document.getElementById('auto')
var autores = document.getElementById('autores')
Object.assign(autores.style,{listStyle:'none',width:'100%',position:'absolute',top:'13px',right:'-10px'});
auto.addEventListener('keyup', function(){
	//console.log(document.getElementById('auto').style.left)
	while (autores.hasChildNodes()) {   
	autores.removeChild(autores.firstChild);
	}
	while(auto.value == ''){
		autores.removeChild(autores.firstChild);	
	}

	var val = ['test1','test2','test3','as']

	function matcher(match) {
	if (match.includes(auto.value)){
		return match
	}
	}

	res = val.filter(matcher);
	for(let i = 0; i < res.length; i++){
		var li = document.createElement('li')
		li.setAttribute('id','autolist')
		li.setAttribute('onclick','select(this.innerHTML)')
		Object.assign(li.style,{border:'1px solid',width:'171px',height:'15'});
		li.innerHTML = res[i]
		autores.appendChild(li)
	}
})
function select(x){
	auto.value = x
	while(auto.value == x){
		autores.removeChild(autores.firstChild);	
	}
}
