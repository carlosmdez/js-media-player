function MediaPlayer(config) {
  this.media = config.el
  this.plugins = config.plugins || []

  this._initPlugins()
  this.mute()
}

MediaPlayer.prototype._initPlugins = function() {
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

MediaPlayer.prototype.play = function() {
  this.media.play()
}

MediaPlayer.prototype.pause = function() {
  this.media.pause()
}

MediaPlayer.prototype.togglePlay = function() {
  if (this.media.paused) {
    return this.play()
  }
  return this.pause()
}

MediaPlayer.prototype.mute = function() {
  this.media.muted = true
}

MediaPlayer.prototype.unmute = function() {
  this.media.muted = false
}

MediaPlayer.prototype.toggleMute = function() {
  if (this.media.muted) {
    return this.unmute()
  }
  return this.mute()
}

export default MediaPlayer
