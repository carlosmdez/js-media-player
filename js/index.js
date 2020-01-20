import MediaPlayer from './MediaPlayer.js'
import AutoPause from './plugins/AutoPause.js'
import AutoPlay from './plugins/AutoPlay.js'

const video = document.getElementById('main-video')
const playButton = document.getElementById('play-button')
const muteButton = document.getElementById('mute-button')

const plugins = [new AutoPause(), new AutoPlay()]
const player = new MediaPlayer({ el: video, plugins })

playButton.onclick = () => player.togglePlay()
muteButton.onclick = () => player.toggleMute()

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('../sw.js').catch(err => {
    console.log(err)
  })
}
