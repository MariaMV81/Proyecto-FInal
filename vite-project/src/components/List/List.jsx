import "./List.css";
import ListItem from "../ListItem/ListItem";

export default function List({ items, setState }) {
  function removeItem(e, id) {
    e.stopPropagation();
    setState(items.filter((item) => item.id !== id));
  }

  return (
    <>
      {items ? (
        <ul className="container-list ">
          {items.map((item, index) => (
            <ListItem
              setState={removeItem}
              key={item.id}
              id={item.id}
              item={item}
              index={index}
            />
          ))}
        </ul>
      ) : (
        <div class="loadingspinner">
          <div id="square1"></div>
          <div id="square2"></div>
          <div id="square3"></div>
          <div id="square4"></div>
          <div id="square5"></div>
        </div>
      )}
    </>
  );
}
