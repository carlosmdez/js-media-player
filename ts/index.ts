import MediaPlayer from './MediaPlayer'
import AutoPause from './plugins/AutoPause'
import AutoPlay from './plugins/AutoPlay'

const video = document.getElementById('main-video')
const playButton: HTMLElement = document.getElementById('play-button')
const muteButton: HTMLElement = document.getElementById('mute-button')

const plugins = [new AutoPause(), new AutoPlay()]
const player = new MediaPlayer({ el: video, plugins })

playButton.onclick = () => player.togglePlay()
muteButton.onclick = () => player.toggleMute()

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('../sw.js').catch(err => {
    console.log(err)
  })
}
