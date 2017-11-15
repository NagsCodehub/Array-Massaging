//keep on increasing the Array entries to see if it works for n numbers.
var a = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11,12,13,14,15,16,17,18,19,20];

//got few approaches to do this and here are couple of sleek ones

//with regular expressions
var c= a.join().match(/\w?(\d+)*[24680]/g); 

console.log(c)

// with reduce
var b = a.reduce(function(arr, num) { 
    if (num % 2 === 0) arr.push(num); 
    return arr; 
}, []);

console.log(b);

//thought about another pop/push technique
function massageall(massagearray, popit) {
    var val = massagearray.pop(); 
    
    popit(val); 
	
    if (massagearray.length > 0) massageall(massagearray, popit); 
}
 
var poppedarray = [];
massageall(a, function(even) { if (even % 2 === 0) poppedarray.push(even); });

console.log(poppedarray);