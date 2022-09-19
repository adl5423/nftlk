import '../styles/globals.scss'
import {
  chain,
  WagmiConfig,
  createClient,
  configureChains,
  defaultChains,
} from 'wagmi'
import { publicProvider } from 'wagmi/providers/public'
import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet'
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
import { InjectedConnector } from '@wagmi/core'

const { chains, provider, webSocketProvider } = configureChains(
  [chain.polygonMumbai],
  [publicProvider()],
)

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

function MyApp({ Component, pageProps }) {

  return (
    <WagmiConfig client={client}>
      <Component {...pageProps} /> 
    </WagmiConfig>
  );
}

export default MyApp
