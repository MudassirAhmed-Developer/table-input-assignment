let table = +prompt("enter any num")
let num = 2;
for (let i = 0; i <= 10; i++) {
    if (table == 0){
        console.log(num + "x" + i + "=" + i * num)
    } else{
        console.log(table + "x" + i + "=" + i * table)
    }
}
