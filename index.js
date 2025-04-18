// Classe que representa um herói de aventura
class hero{
    constructor(heroName, heroAge, heroType){
        this.heroName = heroName
        this.heroAge = heroAge
        this.heroType = heroType
    }

    attack(){
        let attack 

        if (this.heroType === "mago"){
            attack = "magia"
        } else if (this.heroType === "guerreiro"){
            attack = "espada"
        } else if (this.heroType === "monge"){
            attack = "artes marciais"
        } else if (this.heroType === "ninja"){
            attack = "shuriken"
        } else {
            attack = "um ataque desconhecido"
        }

        console.log(`O ${this.heroType} atacou usando ${attack}`)
    }
}

const hero1 = new hero("Arus", 30, "mago");
const hero2 = new hero("Thorgar", 40, "guerreiro");
const hero3 = new hero("Lian", 28, "monge");
const hero4 = new hero("Shin", 22, "ninja");

hero1.attack(); // O mago atacou usando magia
hero2.attack(); // O guerreiro atacou usando espada
hero3.attack(); // O monge atacou usando artes marciais
hero4.attack(); // O ninja atacou usando shuriken


