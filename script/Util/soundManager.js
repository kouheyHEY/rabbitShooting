function setSound(soundPath, volume) {
    var sound = new Audio();
    sound.src = soundPath;
    sound.volume = volume;

    return sound;
}

var SOUND_LIST = {
    bullet_player_shot: './sound/shoot.mp3',
};