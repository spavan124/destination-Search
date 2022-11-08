import './index.css'

const DestinationItem = props => {
  const {destinationDetails} = props
  const {imgUrl, name} = destinationDetails
  return (
    <li className="destination-Item">
      <img src={imgUrl} alt={name} className="destination-image" />
      <p className="name">{name}</p>
    </li>
  )
}
export default DestinationItem
