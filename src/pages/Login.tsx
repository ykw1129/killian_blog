import { Header } from "@/components/Layout/Header"
import SEO from "@/components/SEO"

const Login = () => {
  return (
    <>
      <Header />
    </>
  )
}
export const Head = () => (
  <SEO title="Login page" keywords={['blog', 'hello']}></SEO>
)
export default Login

