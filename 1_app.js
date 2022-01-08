const number = 10

setTimeout(() => {
    if(number <= 9){
        console.log('low')
    }
    else{
        console.log('high')
    }
}, 3000);

console.log(`It is my first node app`)