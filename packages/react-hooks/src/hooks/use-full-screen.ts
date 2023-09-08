export const useFullScreen = () => {
  return () => {
    if (!document.fullscreenElement) {
      return document.documentElement.requestFullscreen()
    }
    if (document.exitFullscreen) {
      document.exitFullscreen()
    }
  }
}
