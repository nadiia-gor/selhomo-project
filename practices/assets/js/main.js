const cart = [
  {
    title: 'milk',
    isBuy: true,
    qty: 2,
    price: 25.5,
  },
  {
    title: 'beer',
    isBuy: false,
    qty: 1,
    price: 21.2,
  },
  {
    title: 'bread',
    isBuy: false,
    qty: 3,
    price: 17.4,
  },
];

// const sorted = cart.toSorted((a, b) => {
//   return (a.qty * a.price) - (b.qty * b.price);});

// const sortedByName = cart.toSorted((a,b) => {
//   return a.title > b.title ? 1 : a.title < b.title ? -1 : 0;
// })

let editMode = false;
let editId = null;

productList();

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

  if (isNaN(qty)) {
    toast.error('Enter quantity');
    return;
  }

  if (qty <= 0) {
    toast.error('Incorrect quantity');
    return;
  }

  if (isNaN(price)) {
    toast.error('Enter the price of product');
    return;
  }

  if (editMode) {
    cart[editId] = {
      title,
      qty,
      price,
    };
    toast.success('Product updated');
    editMode = false;
    editId = null;
  } else {
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
    toast.success('Product successfully added!');
  }

  _el('prod_title').value = '';
  _el('prod_qty').valueAsNumber = 1;
  _el('prod_price').value = '';
  toast.success('Product successfully added!');
  productList();
}

function productList() {
  let tbody = '';
  sortList();
  cart.forEach((prod, index) => {
    const badge = prod.isBuy
      ? '<span class="badge rounded-pill text-bg-success">Yes</span>'
      : '<span class="badge rounded-pill text-bg-danger">No</span>';
    tbody += `<tr>
      <td>${index + 1}</td>
      <td>${prod.title}</td>
      <td>${badge}</td>
      <td>
      <div class="input-group mb-3">
        <button class="btn btn-outline-secondary" type="button" onclick="changeQty(${index}, 'dec')">-</button>
        <input type="text" class="form-control" value="${prod.qty}">
        <button class="btn btn-outline-secondary" type="button" onclick="changeQty(${index}, 'inc')">+</button>
      </div>
      </td>
      <td>${prod.price.toFixed(2)}</td>
      <td>${(prod.qty * prod.price).toFixed(2)}</td>
      <td>`;
    if (!prod.isBuy) {
      tbody += `
            <button type='button' class='btn btn-info btn-sm' onclick='editProd(${index})'>edit</button>
            <button type='button' class='btn btn-primary btn-sm' onclick='buyProd(${index},"${prod.title}")'>Buy</button>
            <button type='button' class='btn btn-danger btn-sm' onclick='deleteProd(${index}, "${prod.title}")'>remove</button>`;
    }
    tbody += `
            </td>
        </tr>`;
  });
  _el('cart_tbody').innerHTML = tbody;
  const disc = calcDisc();
  _el('cart_total').innerHTML = (sumProduct() - disc).toFixed(2);
  _el('cart_disc').innerHTML = disc.toFixed(2);
}

function buyProd(index, title) {
  if (confirm(`Do you want to buy ${title}?`)) {
    cart[index].isBuy = true;
    productList();
    toast.success('Product has bought!');
  }
}

function editProd(index) {
  const prod = cart[index];
  editMode = true;
  editId = index;

  _el('prod_title').value = prod.title;
  _el('prod_qty').valueAsNumber = prod.qty;
  _el('prod_price').value = prod.price;
}

function deleteProd(index, title) {
  if (confirm(`Do you want to delete ${title}?`)) {
    cart.splice(index, 1);
    productList();
    toast.success('Product was deleted');
  }
}

function sumProduct() {
  return cart
    .reduce((accum, prod) => accum + prod.qty * prod.price, 0)
    .toFixed(2);
}

function changeQty(index, action) {
  let qtyFirst = cart[index].qty;
  cart[index].isBuy = false;
  if (action === 'inc') {
    cart[index].qty++;
  } else if (action === 'dec') {
    if (qtyFirst === 1) {
      deleteProd(index, cart[index].title);
    } else {
      cart[index].qty--;
    }
  }
  productList();
}

function applyDisc() {
  const amount = _el('disc_amount').valueAsNumber;
  if (isNaN(amount)) {
    toast.error('Enter discount');
    return;
  }
  productList();
}

function calcDisc() {
  const type = _el('disc_type').value;
  const amount = _el('disc_amount').valueAsNumber || 0;
  let sum = sumProduct();
  if (type === 'percent') {
    return (sum * amount) / 100;
  }
  if (type === 'fixed') {
    return amount;
  }
  return 0;
}

function sortList() {
  const sort = _el('sorting').value;
  // let sortFn = () => {};
  // if (sort === 'subTotalAsc') {
  //   sortFn = (a, b) => {
  //     return a.qty * a.price - b.qty * b.price;
  //   };

  // }
  // if (sort === 'subTotalDesc') {
  //   sortFn = (a, b) => {
  //     return b.qty * b.price - a.qty * a.price;
  //   };
  // }
  // return cart.toSorted((a,b) => sortFn(a,b));
  const sortFn = {
    subTotalAsc: (a, b) => {
      return a.qty * a.price - b.qty * b.price;
    },
    subTotalDesc: (a, b) => {
      return b.qty * b.price - a.qty * a.price;
    },
    qtyAsc: (a, b) => {
      return a.qty - b.qty;
    },
    qtyDesc: (a, b) => {
      return b.qty - a.qty;
    },
    title: (a, b) => {
      return a.title > b.title ? 1 : a.title < b.title ? -1 : 0;
    },
  };
  return cart.sort((a, b) => sortFn[sort](a, b));
}
