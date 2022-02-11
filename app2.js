async function fetchPlayer(id){
    const response = await fetch(
        "https://act2-vercel-heroku-sgb.herokuapp.com/" + id,
        {
            method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
            },
          }
        )
          .then((res) => res.json())
          .then((data) => {
              console.log(data);
    let player = data;
    
    try {
        document.getElementById("id").value = id;

        if(player != null){
            document.getElementById("name").value = player.name;
            document.getElementById("surname").value = player.surname;
            document.getElementById("age").value = player.age;
            document.getElementById("position").value = player.position;
            document.getElementById("team").value = player.team;
        }
    }
    catch(e){
        console.log(e);
    }
          })
          .catch((error) => console.log(error));
}

function getParameterByName(name, )