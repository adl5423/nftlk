import {
    useAccount,
    useConnect,
    useDisconnect,
} from 'wagmi'
import wallet from '/styles/Wallet.module.scss'
import dropdown from '/styles/Dropdown.module.scss'
  
const WalletButton = () => {

    //Variables and constants
    //
    const { isConnected } = useAccount()
    const { connect, connectors, error, isLoading, pendingConnector } =
      useConnect()
    const { disconnect } = useDisconnect()

    //Wallet is connected, needs to disconnect
    //
    if (isConnected) {
      return (
        <div>
            <button className={wallet.off} onClick={disconnect}>
                <p>
                  Disconnect
                </p>
            </button>
        </div>
      )
    }
  
    return (

    //Wallet not connected, dropdown menu appears with options
    //
    <div className={dropdown.dropdown}>
      <button className={dropdown.btn}>
        <p>Connect</p>
      </button>
      <div className={dropdown.dropdown_content}>
      <div>
        {connectors.map((connector) => (
          <button
            className={wallet.on}
            disabled={!connector.ready}
            key={connector.id}
            onClick={() => connect({ connector })}
          >
            <p>
              {connector.name}
            </p>
            <p>
              {!connector.ready}
            </p>
            <p>
              {isLoading &&
              connector.id === pendingConnector?.id &&
              ' (connecting)'}
            </p>
          </button>
        ))}
  
        {error}
      </div>
      </div>
    </div>
    )
  }

export default WalletButton