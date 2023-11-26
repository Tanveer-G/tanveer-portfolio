import { useEffect } from 'react'

const useOutsideClick = (ref, callback) => {
  useEffect(() => {
    const clickHandler = (event) => {
      if (!ref.current.contains(event.target)) {
        callback()
      }
    }

    document.addEventListener('mousedown', clickHandler)

    return () => {
      document.removeEventListener('mousedown', clickHandler)
    }
  }, [ref, callback])
}
export default useOutsideClick