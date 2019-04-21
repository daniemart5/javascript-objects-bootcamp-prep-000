var playlist = {
  artistName: 'songTitle'
}

function updatePlaylist(playlist, artistName, songTitle) {
    object.assign playlist.artistName = songTitle
    return playlist
}

function removeFromPlaylist(playlist, artistName, songTitle){
    delete playlist.artistName;
    return playlist
}
