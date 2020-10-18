"use strict"
class Vec {
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
    plus(other){
        return new Vec(this.x + other.x, this.y + other.y)
    }

    minus(vector){
        return new Vec(this.x - other.x,this.y - other.y)
    }
    get length(){
        return Math.sqrt(this.x * this.x + this.y * this.y)
    }
}
console.log(new Vec(1, 2).plus(new Vec(2, 3)));
