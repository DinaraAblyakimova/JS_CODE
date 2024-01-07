function calculateAverage(arr) {
	if (arr.length === 0) {
		return 0;
	  }
	let sum = 0;
	
	for (let elem of arr) {
		sum += elem;
	}
	
	return sum / arr.length;
}

function calculateRatio(arr1, arr2) {
	let sum1 = 0;
  
	for (let elem of arr1) {
	  sum1 += elem;
	}
  
	let sum2 = 0;
  
	for (let elem of arr2) {
	  sum2 += elem;
	}
	if (sum2 != 0){
	return sum1 / sum2;
	}
	else return 0;
}

function getSum(arr) {
	let sum = 0;
  
	for (let elem of arr) {
	  sum += elem;
	}
  
	return sum;
  }
