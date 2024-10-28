class Heroi{
    constructor(nome,xp){
        this.nome = nome;
        this.xp =  xp;
    }


    classificarNivel(){
        const niveis = [

            {limite : 1000,nivel :"Ferro"},
            {limite : 2000,nivel :"Bronze"},
            {limite : 5000,nivel :"Prata"},
            {limite : 7000,nivel :"Ouro"},
            {limite : 8000,nivel :"Platina"},
            {limite : 9000,nivel :"Ascendente"},
            {limite : 10000,nivel :"Imortal"},
            {limite : Infinity,nivel :"Radiante"},

        ]

        for(let i = 0 ; i < niveis.length ; i++){
            if(this.xp <= niveis[i].limite) {
                return niveis[i].nivel;
            }
        }
    }

    exibirNivel(){
        console.log(`O Herói de nome ${this.nome} está no nível de ${this.classificarNivel()}`);
    }


}
const heroi1 = new Heroi("FULANO",3000);

const heroi2 = new Heroi("CICLANO",14000);

heroi1.exibirNivel();

heroi2.exibirNivel();