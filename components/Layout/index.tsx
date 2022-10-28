import { ImagePreview } from './ImagePreview'
import { Settings } from './Settings'
import { LayoutWrapper } from './styled'

export const Layout = () => {
  return (
    <LayoutWrapper>
      <Settings />
      <ImagePreview />
    </LayoutWrapper>
  )
}
