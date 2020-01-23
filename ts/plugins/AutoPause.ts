import MediaPlayer from '../MediaPlayer'

class AutoPause {
  private threshold: number
  player: MediaPlayer
  constructor() {
    this.threshold = 0.25
  }
  run = (player: MediaPlayer) => {
    this.player = player
    const observer = new IntersectionObserver(this.intersectionHandler, {
      threshold: this.threshold
    })
    observer.observe(player.media)

    document.addEventListener('visibilitychange', this.visibilityHandler)
  }

  private intersectionHandler = (entries: IntersectionObserverEntry[]) => {
    const entry = entries[0]
    const isVisible = entry.isIntersecting
    if (isVisible) {
      this.player.play()
    } else {
      this.player.pause()
    }
  }

  private visibilityHandler = () => {
    const isVisible = document.visibilityState === 'visible'
    if (isVisible) {
      this.player.play()
    } else {
      this.player.pause()
    }
  }
}

export default AutoPause
