//Main function that is called after analyzing face
import SpotifyWebApi from 'spotify-web-api-js';
const spotifyApi = new SpotifyWebApi();

var tracks = spotifyApi.getMyTopTracks();

function assignEmotions(){
    var fear;
    var happy;
    var neutral;
    var sad;
    var anger;


}

function songCalculator(fear, happy, neutral, sad, anger){
    var dance;
    var energy;
    var mode;
    var valence;

    dance = (0*fear)+(1*happy)+(0.5*neutral)+(0*sad)+(0*anger);
    energy = (0*fear)+(1*happy)+(0.5*neutral)+(0*sad)+(1*anger);

    if((happy + neutral + anger) > (fear+sad)){
        mode = 1;
    }
    else{
        mode = 0;
    }

    valence = (1*fear)+(1*happy)+(0.5*neutral)+(0*sad)+(0*anger);
}

function songSelection(dance, energy, mode, valence){
    for(var i = 0; i < tracks.length; i++){
        tracks[0]
    }

}


