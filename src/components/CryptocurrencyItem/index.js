// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {cryptocurrenciesDetails} = props
  const {
    currencyLogoUrl,
    currencyName,
    usdValue,
    euroValue,
  } = cryptocurrenciesDetails

  return (
    <li className="cryptocurrency-item">
      <div className="logo-and-title-contaienr">
        <img
          className="currency-logo"
          src={currencyLogoUrl}
          alt={currencyName}
        />
        <p className="currency-name">{currencyName}</p>
      </div>

      <div className="usd-and-euro-values-container">
        <p className="currency-value">{usdValue}</p>
        <p className="currency-value">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
