import { Header } from "@/components/Layout/Header"
import SEO from "@/components/SEO"

const Home = () => {
  return (
    <>
      <Header />
    </>
  )
}
export const Head = () => (
  <SEO title="Home page" keywords={['blog', 'hello']}></SEO>
)
export default Home

