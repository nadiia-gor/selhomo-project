const playList = [
  {
    author: 'LED ZEPPELIN',

    song: 'STAIRWAY TO HEAVEN',
  },

  {
    author: 'QUEEN',

    song: 'BOHEMIAN RHAPSODY',
  },

  {
    author: 'LYNYRD SKYNYRD',

    song: 'FREE BIRD',
  },

  {
    author: 'DEEP PURPLE',

    song: 'SMOKE ON THE WATER',
  },

  {
    author: 'JIMI HENDRIX',

    song: 'ALL ALONG THE WATCHTOWER',
  },

  {
    author: 'AC/DC',

    song: 'BACK IN BLACK',
  },

  {
    author: 'QUEEN',

    song: 'WE WILL ROCK YOU',
  },

  {
    author: 'METALLICA',

    song: 'ENTER SANDMAN',
  },
];

const addPlaylist = document.getElementById('playlist');

playList.forEach((song, index) => {
  const itemList = document.createElement('li');
  itemList.innerHTML = `<b>${song.author}</b> — ${song.song}`;
  addPlaylist.appendChild(itemList);
});
