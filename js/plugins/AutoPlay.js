function AutoPlay() {}
AutoPlay.prototype.run = function(player) {
  player.mute()
  if (player.media.muted) {
    player.play()
  }
}

export default AutoPlay
