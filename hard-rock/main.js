const searchButton = document.getElementById('search-btn');
const searchArea = document.getElementById('search-area');
const result = document.getElementById('result');

const apiURL = 'https://api.lyrics.ovh';

searchButton.addEventListener('click', function(){
    const searchTerm = searchArea.value.trim();
    if (!searchTerm) {
        alert('Please type in a search term.')
    }
    else{
        searchSongs(searchTerm);
    }
})

async function searchSongs(term) {
    const res = await fetch(`${apiURL}/suggest/${term}`);
    const data = await res.json();
    showData(data);
}

function showData(data){
    result.innerHTML = `
    <ul class="songs">
        ${data.data.map(song => `<li>
        <span><strong>${song.artist.name}<strong> - ${song.title}<span>
        <button class="btns" data-artist="${song.artist.name}" data-songtitle="${song.title}">Get Lyrics</button>
        </li>`)
        .join('')
    }
    </ul>
    `;
};

result.addEventListener('click', e => {
    const clickedEl = e.target;

    if (clickedEl.tagName === 'BUTTON') {
        const artist = clickedEl.getAttribute('data-artist');
        const songTitle = clickedEl.getAttribute('data-songtitle');

        getLyrics(artist, songTitle);
    }
});


async function getLyrics(artist, songTitle) {
    const res = await fetch(`${apiURL}/v1/${artist}/${songTitle}`);
    const data = await res.json();

    const lyrics = data.lyrics.replace(/(\r\n|\r|\n)/g, '<br>');

    result.innerHTML = `<h2><strong>${artist}</strong> - ${songTitle}</h2>
    <span>${lyrics}</span>`;
}
