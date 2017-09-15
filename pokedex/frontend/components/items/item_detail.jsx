
const ItemDetail = (props) => (
  <ul>
    <li>{props.item.name}</li>
    <li>{props.item.happiness}</li>
    <li>{props.item.price}</li>
  </ul>
);

export default ItemDetail;
