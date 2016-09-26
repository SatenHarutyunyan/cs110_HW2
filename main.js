const sat = function(space){
	if(space === 0){
	return "";
	}else{return " " + sat(space-1)	
	}};
		
		const alin = function(star){
		if(star===0){return "";}else{
		return "*" + alin(star-1);
		}};
		
		
			const print = function (space,star,n){
			if(n===0){
			return "";
			}
			console.log(sat(space)+alin(star));
			   	print(space-1, star+2, n-1)
				};
				
				
				const giveNumbers = function(n){
				print(n-1,1,n)};
				giveNumbers(10);