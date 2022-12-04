// import LayoutProvider from './src/components/LayoutProvider'
import Layout from './src/components/Layout'

import type { GatsbySSR } from 'gatsby'
/*
export const wrapRootElement: GatsbySSR['wrapRootElement'] = ({ element }) => {
  return <LayoutProvider>{element}</LayoutProvider>
} */

export const wrapPageElement: GatsbySSR['wrapPageElement'] = ({
  element,
  props,
}) => {
  return <Layout {...props}>{element}</Layout>
}
export const onRenderBody: GatsbySSR['onRenderBody'] = ({ setHtmlAttributes, setBodyAttributes }) => {
  setHtmlAttributes({ lang: "en" })
}
/**
 * preload your font files
 */
/* export const onRenderBody: GatsbySSR['onRenderBody'] = ({
  setHeadComponents,
}) => {
  setHeadComponents([
    <link
      rel="preload"
      href="/fonts/Muli-Regular.ttf"
      as="font"
      type="font/ttf"
      crossOrigin="anonymous"
      key="interFont"
    />,
    <link
      rel="preload"
      href="/fonts/Muli-Bold.ttf"
      as="font"
      type="font/ttf"
      crossOrigin="anonymous"
      key="interFont"
    />,
  ])
} */
