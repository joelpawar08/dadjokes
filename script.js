const jokeE1=
document.getElementById('joke');
const get_joke=
document.getElementById('get_joke');

get_joke.addEventListener('click', genrateJoke);

genrateJoke();

async function genrateJoke(){
    const jokeres =await
    fetch('https://icanhazdadjoke.com/', {
        headers:{
            'Accept':'application/json'
        }
    });

    const joke = await jokeres.json();
 jokeE1.innerHTML = joke.joke;


}