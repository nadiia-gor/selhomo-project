const cart = [];

function _el(id) {
  return document.getElementById(id);
}

function addToCart() {
  const title = _el('prod_title').value;
  const qty = _el('prod_qty').valueAsNumber;
  const price = _el('prod_price').valueAsNumber;

  if (title === '') {
    toast.error('Enter the title of product');
    return;
  }

  if (qty <= 0 || isNaN(qty)) {
    toast.error('Incorrect quantity');
    return;
  }

  if (isNaN(price)) {
    toast.error('Enter the price of product');
    return;
  }

  const prodIndex = cart.findIndex((prod) => prod.title === title);
  if (prodIndex === -1) {
    cart.push({
      title,
      qty,
      price,
    });
  } else {
    cart[prodIndex].qty += qty;
  }

  _el('prod_title').value = '';
  _el('prod_qty').valueAsNumber = 1;
  _el('prod_price').value = '';
  toast.success('Product successfully added!');
  productList();
}

function productList() {
  let tbody = '';
  cart.forEach((prod, index) => {
    tbody += `<tr>
      <td>${index + 1}</td>
      <td>${prod.title}</td>
      <td>${prod.qty}</td>
      <td>${prod.price.toFixed(2)}</td>
      <td>${(prod.qty * prod.price).toFixed(2)}</td>
      <td></td>
    </tr>`;
  });
  _el('cart_tbody').innerHTML = tbody;
}
