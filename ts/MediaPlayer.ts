class MediaPlayer {
  media: HTMLMediaElement
  plugins: Array<any>

  constructor(config) {
    this.media = config.el
    this.plugins = config.plugins || []
    this.initPlugins()
    this.mute()
  }
  private initPlugins() {
    this.plugins.forEach(plugin => {
      plugin.run(this)
    })
  }
  play() {
    this.media.play()
  }
  pause() {
    this.media.pause()
  }
  togglePlay() {
    if (this.media.paused) {
      return this.play()
    }
    return this.pause()
  }
  mute() {
    this.media.muted = true
  }
  unmute() {
    this.media.muted = false
  }
  toggleMute() {
    if (this.media.muted) {
      return this.unmute()
    }
    return this.mute()
  }
}

export default MediaPlayer
