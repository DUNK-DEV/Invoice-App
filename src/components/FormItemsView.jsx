import { useState } from "react";

export const FormItemsView = ({ handler }) => {
  const [formItemState, setFormItemState] = useState({
    product: "",
    price: "",
    quantity: "",
  });
  const { product, price, quantity } = formItemState;

  const onFormChange = ({ target: { name, value } }) => {
    setFormItemState({
      ...formItemState,
      [name]: value,
    });
  };

  const onInvoiceItemsSubmit = (event) => {
    event.preventDefault();

    if (product.trim().length <= 1) return;
    if (price.trim().length <= 1) return;
    if (isNaN(price.trim())) {
      alert("Error, el precio no es un número");
      return;
    }
    if (quantity.trim().length < 1) return;
    if (isNaN(quantity.trim())) {
      alert("Error, la cantidad no es un número");
      return;
    }
    handler(formItemState);
    setFormItemState({ product: "", price: "", quantity: "" });
  };

  return (
    <>
      <form className="w-50" onSubmit={onInvoiceItemsSubmit}>
        <input
          type="text"
          name="product"
          value={product}
          placeholder="Producto"
          className="form-control m-3"
          onChange={onFormChange}
        ></input>
        <input
          type="text"
          name="price"
          value={price}
          placeholder="Precio"
          className="form-control m-3"
          onChange={onFormChange}
        ></input>
        <input
          type="text"
          name="quantity"
          value={quantity}
          placeholder="Cantidad"
          className="form-control m-3"
          onChange={onFormChange}
        ></input>
        <button type="submit" className="btn btn-primary m-3">
          Nuevo Item
        </button>
      </form>
    </>
  );
};
