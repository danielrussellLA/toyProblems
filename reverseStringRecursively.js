function reverse(str){ 
	if(str === ''){ 
		return '';
	} 
	var last = str[str.length - 1];
	var rest = str.slice(0, -1)

	return last + reverse(rest);
}

console.log(reverse('daniel'));