import MediaPlayer from './MediaPlayer.js'
import AutoPlay from './plugins/AutoPlay.js'

const video = document.getElementById('main-video')
const playButton = document.getElementById('play-button')
const muteButton = document.getElementById('mute-button')

const plugins = []
const player = new MediaPlayer({ el: video, plugins })

playButton.onclick = () => player.togglePlay()
muteButton.onclick = () => player.toggleMute()
