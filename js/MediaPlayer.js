class MediaPlayer {
  constructor(config) {
    this.media = config.el
    this.plugins = config.plugins || []
    this._initPlugins()
    this.mute()
  }
  _initPlugins() {
    const player = {
      play: () => this.play(),
      pause: () => this.pause(),
      element: this.media,
      get muted() {
        return this.element.muted
      },
      set muted(value) {
        this.element = value
      }
    }
    this.plugins.forEach(plugin => {
      plugin.run(player)
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
