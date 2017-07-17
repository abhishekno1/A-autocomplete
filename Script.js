var auto = document.getElementById('auto')
		var autores = document.getElementById('autores')

		auto.addEventListener('keyup', function(){
			var val = ['test1','test2','test3','as']
			function matcher(match) {
    			if (match.includes(auto.value)){
    				return match
    			}
			}
		var li = document.createElement('li')
		li.setAttribute('id','autolist')
			res = val.filter(matcher);
			for(let i = 0; i < res.length; i++){
				ul.setAttribute('value',res[i])
				ul.appendChild(li)
			}
		})
