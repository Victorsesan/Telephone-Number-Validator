

function telephoneCheck(str) {
	
	var result = false;
	var formats = [
		/^\d\d\d\d\d\d\d\d\d\d$/,			// 5555555555
		/^\d\d\d-\d\d\d-\d\d\d\d/,			// 555-555-5555
		/^\d\d\d\s\d\d\d\s\d\d\d\d/,		// 555 555 5555
		/^\(\d\d\d\)\d\d\d-\d\d\d\d/,		// (555)555-5555
		/^\(\d\d\d\)\s\d\d\d-\d\d\d\d/,		// (555) 555-5555
		/^1\d\d\d\d\d\d\d\d\d\d/,			// 15555555555
		/^1\s\d\d\d\s\d\d\d\s\d\d\d\d/,		// 1 555 555 5555
		/^1\s\d\d\d-\d\d\d-\d\d\d\d/,		// 1 555-555-5555
		/^1\(\d\d\d\)\d\d\d-\d\d\d\d/,		// 1(555)555-5555
		/^1\s\(\d\d\d\)\s\d\d\d-\d\d\d\d/	// 1 (555) 555-5555
	];

	result = formats.some(reg => reg.test(str));
	
  return result;
}


let myTest1 = "(555)555-5555"; // should return true
let myTest2 = "1 555-555-5555"; // should return true.
let myTest3 = "2 (757) 622-7382"; // should return false.
let myTest4 = "27576227382"; // should return false.
