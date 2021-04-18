import '../../styles/globals.css'
import '../../css-fabric/index.scss' 
import variables from '../../css/core/index.css';

function MyApp({ Component, pageProps }) {
   
  console.log({variables});
 
  return <Component {...pageProps} />
}

export default MyApp
 