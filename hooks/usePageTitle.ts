import { useEffect } from 'react'

export const usePageTitle = (page: string, additionalText = '') => {

  useEffect(() => {
    document.title = `${'Savonry'} | ${
      page
    }${additionalText ? ` - ${additionalText}` : ''}`
  }, [additionalText, page])
}
