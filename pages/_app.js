import '../styles/globals.scss'
import {
  chain,
  WagmiConfig,
  createClient,
  configureChains,
} from 'wagmi'
import { publicProvider } from 'wagmi/providers/public'
import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet'
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
import { InjectedConnector } from '@wagmi/core'
import { infuraProvider } from 'wagmi/providers/infura'

//Configuring Wagmi chain with Infura API, which will be Gorli
//
const { chains, provider, webSocketProvider } = configureChains(
  [chain.goerli],
  [infuraProvider({ apiKey: '1f82c4b469224a209bc22f14d00563e0' })],
)

//Creating Wagmi client to enable wallet connection on Coinbase Wallet, Metamask, and Injected Connection
//
const client = createClient({
  autoConnect: true,
  provider,
  webSocketProvider,
  connectors: [
    new CoinbaseWalletConnector({chains}), 
    new MetaMaskConnector({chains}), 
    new InjectedConnector({chains, options: {name: "Injected"} })
  ],
});

//Initializing main function
//
function MyApp({ Component, pageProps }) {

  return (

    //Adding client
    //
    <WagmiConfig client={client}>
      <Component {...pageProps} /> 
    </WagmiConfig>
  );
}

export default MyApp
