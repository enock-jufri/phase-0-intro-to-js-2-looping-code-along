// Code your solutions in this file
const elem = ["Guadalupe", "Ollie", "Aki"]
function writeCards(x,y){
    const messages=[]
    x.forEach(element => {
        messages.push((`Thank you, ${element}, for the wonderful ${y} gift!`));
    });
    return messages
}
writeCards(["Guadalupe", "Ollie", "Aki"], "surprise")

function countDown(x){
while (x>=0){
    console.log(x)
    x--
}
}
countDown(10)