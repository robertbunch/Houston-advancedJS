
function route_num(cube_size){
	let routes = [];
	for(let i = 1; i <= cube_size; i++){
		routes.push(1);
	}

    for(let i = 1; i <= cube_size; i++){
		for(let j = 1; j <= i; j++){
			routes[j] = routes[j]+routes[j-1]
		}    	
		routes[i] = 2 * routes[i - 1]
    }
    return routes[cube_size]
}


console.time("run");
gridSize = 20;
n = route_num(gridSize)
console.log(n)
console.timeEnd("run");