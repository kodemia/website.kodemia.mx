import '../node_modules/slick-carousel/slick/slick.css'
import '../node_modules/slick-carousel/slick/slick-theme.css'
import '../styles/index.scss'

function MyApp ({ Component, pageProps }) {
  return (
    <div className='page-container'>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
