
import { AppProps } from 'next/app'

import '../styles/index.scss'
import 'react-phone-input-2/lib/style.css'
import 'react-toastify/dist/ReactToastify.css'

function MyApp ({ Component, pageProps }: AppProps) {
  return (
    <div className='page-container'>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
