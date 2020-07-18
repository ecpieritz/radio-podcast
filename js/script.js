//window.addEventListener('load', start);
//I used 'defer' instead of the line above

let inputCurrentFrequency = document.querySelector('#inputCurrentFrequency');
let rangeFrequencies = document.querySelector('#rangeFrequencies');
let divPodcast = document.querySelector('#divPodcast');


function start() {
   rangeFrequencies.addEventListener('input', handleRangeValueChange)
}

function handleRangeValueChange(event) {
   let currentFrequency = event.target.value;
   inputCurrentFrequency.value = currentFrequency;

   findPodcastFrom(currentFrequency);
}

function findPodcastFrom(frequency) {
   let foundPodcast = null;

   for (let i = 0; i < realPodcasts.length; i++) {
      let currentPodcast = realPodcasts[i];

      if (currentPodcast.id === frequency) {
         foundPodcast = currentPodcast;
         break;
      }
   }

   if (foundPodcast) {
      renderPodcast(foundPodcast);
   } else {
      divPodcast.innerHTML = '<p>Nenhum Podcast encontrado!</p>';
   }
}

function renderPodcast(podcast) {
   divPodcast.innerHTML = '';
   let img = document.createElement('img');
   img.src = './img/' + podcast.img;

   let title = document.createElement('h2');
   title.textContent = podcast.title;

   let description = document.createElement('p');
   description.textContent = podcast.description;


   divPodcast.appendChild(img);
   divPodcast.appendChild(title);
   divPodcast.appendChild(description);
}

start();