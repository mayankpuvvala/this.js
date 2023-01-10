let counter= createcounter();
let counter1= createcounter();

function createcounter() {
    return {
        count: 0,
    increment: function(){
        this.count++;
        console.log(this.count);

    }   
}}

counter= createcounter();
counter1= createcounter();

var count= 0;
function increment() {
    this.count++;
    console.log(this.count);
}
increment();
increment();

console.log(this);