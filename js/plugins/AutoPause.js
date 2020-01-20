class AutoPause {
  constructor() {
    this.threshold = 0.25
  }
  run = player => {
    this.player = player
    const observer = new IntersectionObserver(this.intersectionHandler, {
      threshold: this.threshold
    })
    observer.observe(player.element)
  }

  intersectionHandler = entries => {
    const entry = entries[0]
    const isVisible = entry.isIntersecting
    if (isVisible) {
      this.player.play()
    } else {
      this.player.pause()
    }
  }
}

export default AutoPause
