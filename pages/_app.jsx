import 'focus-visible'
import '@/styles/tailwind.css'

import { Amplify } from 'aws-amplify';
import awsExports from '../src/aws-exports';
Amplify.configure(awsExports);

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
