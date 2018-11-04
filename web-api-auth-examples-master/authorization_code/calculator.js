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

function handleTracks(e){
    e.preventDefault();
    axios({
        method: 'get',
        url: 'https://api.spotify.com/v1/audio-features/6rPO02ozF3bM7NnOV4h6s2',
        headers: {
            'Authorization': 'Bearer' + 'BQBJ8Gak16vUullzjbNgO2YxSawW2EJXl3rYx_w108c7DARvIGDEPU-LkWLBpGosOlQGfQSVcRcH1d1-aGwti4p3WW4UEvw7IJgeE3cstYZ3Oy-JbgZuGLtsLE3LkRpkF73xHVpDpMtbsDdWQXyde7vJ',
            'Content-Type': 'application/json'
        }
    })
}


