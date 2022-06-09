const description=[
   'Arquero: Dispara una flecha mágica que atraviesa y daña a los enemigos que se interponen en su camino. No es ningún truco, ¡es magia! Arquero mágico es una carta de rareza legendaria de Clash Royale que puede obtenerse a partir de la arena 5.',
   'Bruja nocturna: es una tropa de base constructora que proviene de Clash Royale, junto con el bombardero y el bebé dragón. Sin embargo, dispara el mismo proyectil que la Bruja, a diferencia de su contraparte cuerpo a cuerpo de Clash Royale, a pesar de blandir un hacha.',
   'Caballero: Se puede utilizar como tanque para tropas más pequeñas como los Duendes. Es una gran carta para usar al frente de un mini-ataque. Tiene una gran sinergia en particular con los mazos de carnada de hechizos, y con el Barril de duendes, además es también común en mazos de Bait junto a la Valquiria.',
   'Caballero: Se puede utilizar como tanque para tropas más pequeñas como los Duendes. Es una gran carta para usar al frente de un mini-ataque. Tiene una gran sinergia en particular con los mazos de carnada de hechizos, y con el Barril de duendes, además es también común en mazos de Bait junto a la Valquiria.',
   'Dragon:Eructa bolas de fuego del cielo que infligen daño de área. Los dragones bebés nacen lindos, hambrientos y listos para una barbacoa.',
   'Sneaky goblings: es una Súper Tropa basada en el Goblin. Se puede desbloquear aumentando el Goblin cuando el Goblin tiene al menos el nivel 7 y cuando el Ayuntamiento se actualiza al nivel 11 o superior.',
   'Los pillos: Está formada por dos "niñas pillas" y un "niño pillo", el cual tiene la función de defender a sus amigas mientras estas lanzan "chicles" a sus enemigos. Por lo tanto, la función de esta carta es muy sencilla: realizar el daño con las niñas pillas mientras distraemos con el niño pillo.',
   'Minero: Es una carta legendaria que puede obtenerse de los cofres una vez alcanzamos la arena 6. Cuesta 3 de elixir, una cifra bastante asequible, y puede desplegarse en cualquier parte de la Arena. Tiene bastantes puntos de vida, 1.000 a nivel 1 y de 1.460 a nivel 5, que no está nada mal.',
   'Montapuercos: es una tropa terrestre rápida con puntos de vida medios, poco daño y la capacidad de saltar sobre los muros enemigos. Se desbloquea en el nivel 2 del Cuartel oscuro.',
   'Pekka: Es una tropa poderosa y puede hacer bastante daño con la colocación y el apoyo correctos. Hace daño masivo a un objetivo a la vez. Sólo a niveles decentes, una P.E.K.K.A puede matar a un Bárbaro de un solo golpe.',
   'Príncipe: Es una tropa muy fuerte, además que tiene una gran velocidad, acompañar esta carta con otras unidades que ataquen con daño en área suele ser un buen combo.',
]

 



let clashRoyale=document.getElementById("clashRoyale");
let advance=document.querySelector("#advance");
let recoil=document.querySelector("#recoil")
let imagenes=[
    
   "images/arquero.png",
   "images/bruja.png",
   "images/caballero.png",
   "images/dragon.png",
   "images/goblin.png",
   "images/los-pillos.png",
   "images/miner_info.png",
   "images/montaPuercos.png",
   "images/pekka.png",
   "images/principe.png",
]
let i=0
advance.addEventListener("click",function(e){
   console.log(imagenes[i]);
   i++//* suma + 1 al numero anterior/
if (i==10){
i=0
}
 

clashRoyale.setAttribute("src",imagenes[i]);

})
recoil.addEventListener("click",function(e){
   console.log(imagenes[i]);
   clashRoyale.setAttribute("src",imagenes[i]);
   i--//* suma - 1 al numero anterior/
if (i==10){
i=1 
}
 
}) 
 

let entrarInterfaz=document.getElementById("boton")
entrarInterfaz.addEventListener("click",function(){
document.getElementById("contenedor1").style.visibility="hidden";
document.getElementById("contenedor2").style.visibility="visible"
});

let entrarInterfaz1=document.getElementById("retroceso")
entrarInterfaz1.addEventListener("click",function(){
document.getElementById("contenedor1").style.visibility="visible";
document.getElementById("contenedor2").style.visibility="hidden"
});
