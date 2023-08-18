const btn = document.getElementById('btn');
const audio = document.getElementById('audio');
let i= 0;

function getRandom() {
    if(i<10) {
        return i++;

    } else {
        i = 0;
    }
}




function getJoke(x) {

   
    let to_speak = new SpeechSynthesisUtterance(x);
    // let to_deliver = new SpeechSynthesisUtterance(y);//!

    to_speak.rate = 1.0;

    speechSynthesis.speak(to_speak);


}


// function dadJokes() { 

    
//     fetch('https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw&amount=10')
//         .then(response => response.json())
//         .then(data =>{

//             let joke = data.jokes[1].setup
//             let delivery = data.jokes[1].delivery

            
//             speak(joke);

//             // console.log(data);

           
//         })
//         .catch(err => console.error(err));


// }

// dadJokes();

async function fetchJokes() {
    try{
        const response = await fetch('https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist&amount=10')
        const data = await response.json()
        let j;
    
        btn.addEventListener('click', ()=>{

            let num = getRandom();

            if(data.jokes[num].joke) {

            
                j = `${data.jokes[num].joke}`
                console.log(j,data)
                return getJoke(j);
                
   
               
   
           } else {
   
               j = `${data.jokes[num].setup} ... ${data.jokes[num].delivery}`
               console.log(j,data)
               return getJoke(j);
               
   
               
           }


        })
        
        
    }

    catch (err){
        console.log('fetched failed', err)
    }
}

btn.addEventListener('click',fetchJokes());

