

function sayHi(name){
    setTimeout(() => {
        console.log(`Hi! ${name}`)
    }, 3000);
}
sayHi('Peter')


module.exports = sayHi