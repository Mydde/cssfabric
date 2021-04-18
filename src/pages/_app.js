import '../../styles/globals.css'
import '../../styles/css-fabric/core/css-fabric.css' 
import variables from '../../css-fabric/_config.scss';

function MyApp({ Component, pageProps }) {
   
  console.log({variables});
 
  return <Component {...pageProps} />
}

export default MyApp
 