

document.getElementById("novaBroma").addEventListener("click",function(){


    fetch('https://api.chucknorris.io/jokes/random')
  .then(response => response.json())
  .then(data => {console.log(data)
    document.getElementById("broma").innerHTML=data.value
  });

  
})
document.getElementById("nuevoUsuario").addEventListener("click",function(){

console.log("hola")
    fetch('http://randomuser.me/api')
  .then(response => response.json())
  .then(datos=> {console.log(datos)
    document.getElementById("Nuevo usuario").innerHTML=datos.results[0].name.first
    document.getElementById("Apellido del Usuario").innerHTML=datos.results[0].name.last
    document.getElementById("imagen").src=datos.results[0].picture.large
  })
})

  

