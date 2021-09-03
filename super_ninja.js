class Ninja {
    constructor (name, speed = 3, strength = 3) {
        this.name = name;
        this.health = 100;
        this.speed = speed;
        this.strength = strength;
    }
    sayName = () => console.log(this.name);
    showStats = () => console.log(this.name, this.strength, this.speed, this.health);
    drinkSake = () => this.health += 10;
}

class Sensei extends Ninja {
    constructor (name, wisdom = 10) {
        super (name, 10, 10);
        this.wisdom = wisdom;
        this.health = 200;
    }
    speakWisdom = () => {
        this.drinkSake();
        console.log("Any fool can write code that a computer can understand. Good programmers write code that humans can understand.");
    }
}