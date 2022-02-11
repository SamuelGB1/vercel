function createNode(element){
    return document.createElement(element);
}

function append(parent, el){
    return parent.appendChild(el);
}

async function fetchplayers(){
    const response = await fetch(
        "https://act2-vercel-heroku-sgb.herokuapp.com/",
        {
            method: "GET",
    headers:{
        Accept: "application/json",
        "Content-Type": "application/json"
          },
        }
    )
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            
            const id = document.getElementById('id');
            const name = document.getElementById('name');
            const surname = document.getElementById('surname');
            const age = document.getElementById('age');
            const position = document.getElementById('position');
            const team = document.getElementById('team');

            let players = data;

            for(let player of players){
                
            }
        })
}

async function fetchEditPlayer(){

    const id = document.getElementById('id').value;
    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    const age = document.getElementById('age').value;
    const position = document.getElementById('position').value;
    const team = document.getElementById('team').value;

    console.log(id + "" + age + "" + surname + "" + age + "" + position + "" + team);

    const newplayer = {
        name: name,
        surname: surname,
        age: age,
        position: position,
        team: team
    };

    const response = await fetch(
        "https://act2-vercel-heroku-sgb.herokuapp.com/" + id + "?_method=PUT",
        {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
        body: JSON.stringify(newplayer)
          }
        )
          .then((res) => res.json())
          .then((data) => {
              console.log(data);
              alert("Product Edited");
          })
          .catch((error) => console.log(error));
}
fetchEditPlayer()