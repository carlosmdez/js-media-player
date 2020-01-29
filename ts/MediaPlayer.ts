class MediaPlayer {
  media: HTMLMediaElement
  plugins: Array<any>
  container: HTMLElement

  constructor(config) {
    this.media = config.el
    this.plugins = config.plugins || []
    this.initPlayer()
    this.initPlugins()
    // this.mute()
  }

  initPlayer = () => {
    this.container = document.createElement('div')
    this.container.classList.add('video-container')
    this.media.parentNode.insertBefore(this.container, this.media)
    this.container.appendChild(this.media)
  }

  private initPlugins = () => {
    this.plugins.forEach(plugin => {
      plugin.run(this)
    })
  }
  play = () => {
    this.media.play()
  }
  pause = () => {
    this.media.pause()
  }
  togglePlay = () => {
    if (this.media.paused) {
      return this.play()
    }
    return this.pause()
  }
  mute = () => {
    this.media.muted = true
  }
  unmute = () => {
    this.media.muted = false
  }
  toggleMute = () => {
    if (this.media.muted) {
      return this.unmute()
    }
    return this.mute()
  }
}

export default MediaPlayer
