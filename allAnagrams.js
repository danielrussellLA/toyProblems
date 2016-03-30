function allAnagrams(string) {
	var anagrams = [];
	anagrams.push(string);

	var splitString = string.split('');
	// var iteratedLetter = splitString[splitString.length - 1];
	var str = '';

	while(str !== string) {
		for(var i = splitString.length - 1; i > 0; i--){
			splitString.splice(i - 1, 0, splitString[i]);
			splitString.splice(i + 1, 1);
			str = splitString.join('');
			console.log(str);
			if(str === string){
				break;
			} else {
				anagrams.push(str);
			}
		}
	}


	return anagrams.sort('');
}


// 


console.log(allAnagrams('danieliscoolisnthe'));

// [ "abc", "acb", "bac", "bca", "cab", "cba" ]

// var str = ['a', 'b', 'c'];

// for(var i = str.length - 1; i > 0; i--){
// 	console.log('1', str);
// 	str.splice(i - 1, 0, str[i]);
// 	console.log('2', str);
// 	str.splice(i + 1, 1);
// 	console.log('3', str);
// 	console.log('4', str.join(''));
// }