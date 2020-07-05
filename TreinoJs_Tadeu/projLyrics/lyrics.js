function findLyrics(artist, song) {
    return fetch(`https://api.lyrics.ovh/v1/${artist}/${song}`)
}

const form = document.querySelector('#lyrics_form'); // atribui a "form" a o nó 'lyrics_form' extraido do HTML

form.addEventListener('submit', el => {  //atribui uma função a ao recever submit ele cancela o submit e executa uma função
    el.preventDefault();
    doSubmit();
})

async function doSubmit() {
    const lyrics_el = document.querySelector('#lyrics');
    const artist = document.querySelector("#artist");
    const song = document.querySelector("#song");

    // insere um "spinner" elemento do Bootstrap para load...
    lyrics_el.innerHTML = '<div class="spinner-grow" role="status"><span class="sr-only">Carregando...</span></div>';

    // async await
    try {
        const lyricsResponse = await findLyrics(artist.value, song.value);
        const data = await lyricsResponse.json();
        if (data.lyrics)
            lyrics_el.innerHTML = data.lyrics;
        else
            lyrics_el.innerHTML = data.error;
    } catch (err) {
        console.log(err);
    }
}