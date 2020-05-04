alert('asd');

var array = [1,2,3,4,5];
var total = 0;
var mult= 1;


for(var i = 0; i<array.length; i++){
        total += array[i];
}
console.log(total);


for (var c = 1;c<=10;c++ ){
        document.write("<h1>Vamos por la tabla "+c+"</h1>");
        for(var i =1; i<=10; i++){
                document.write(i+"X"+c+"="+(i*c)+'<br/>');
        }
}


for(var i = 0; i<array.length; i++){
   mult /= array[i];
}
console.log(mult);

var array1 = [3,4,6,7,8];
var array2 = [4,2,1,4,5];
var vectorR= [];

console.log(array2[0]*array1[0]);



for(var i = 0; i <array2.length; i++ ){
        vectorR[i] = array1[i]*array2[i];
}
console.log(vectorR);
// matriz #1
var vec1 = [
                [2,3,4],
                [4,5,6],
                [6,7,9],
           ];
// matriz #2
var vec2 = [
                [4,6,2],
                [5,3,2],
                [7,3,1]
           ];
// matriz 3
var vec3 = [];

for(var i = 0; i <vec1.length; i++ ){
                vec3[i] = vec1[i]*vec2[i];

}console.log(vec3);
