import React from "react";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const TAX_RATE = 0.07;

function ccyFormat(num) {
  return `${num.toFixed(2)}`;
}

function subtotal(items) {
  return items
    .map(({ price, quantity }) => price * quantity)
    .reduce((sum, value) => sum + value, 0);
}

const Checkout = ({
  navbar: Navbar,
  addToCart,
  removeFromCart,
  handleQuantityChange,
  cartItems = [],
}) => {
  const invoiceSubtotal = subtotal(cartItems);
  const invoiceTaxes = TAX_RATE * invoiceSubtotal;
  const invoiceTotal = invoiceTaxes + invoiceSubtotal;
  return (
    <div>
      <Navbar
        cartItems={cartItems}
        removeFromCart={removeFromCart}
        handleQuantityChange={handleQuantityChange}
      />
      <div className="pt-24 px-3 pb-20 mb-7">
        <div className="flex flex-row items-center md:px-8">
          <Link to="/">
            <BiArrowBack className="mr-4" size={24} />
          </Link>
          <h1 className="text-2xl font-semibold">Checkout</h1>
        </div>
        <div className="md:px-14 pt-10">
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 300 }} aria-label="spanning table">
              <TableHead>
                <TableRow>
                  <TableCell colSpan={3}>
                    <h1 className="text-lg md:items-end font-semibold">
                      Details
                    </h1>
                  </TableCell>
                  <TableCell align="right">
                    <h1 className="text-lg font-semibold">Price</h1>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <h2 className="text-lg font-bold">Product</h2>
                  </TableCell>
                  <TableCell align="right">
                    <h2 className="text-lg font-bold">Qty.</h2>
                  </TableCell>
                  <TableCell align="right">
                    <h2 className="text-lg font-bold">Price</h2>
                  </TableCell>
                  <TableCell align="right">
                    <h2 className="text-lg font-bold">Sum</h2>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {cartItems.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell>
                      <h1 className="text-lg font-medium">{item.title}</h1>
                    </TableCell>
                    <TableCell align="right">
                      <h1 className="text-base mr-2 font-medium">
                        {item.quantity}
                      </h1>
                    </TableCell>
                    <TableCell align="right">
                      <h1 className="text-base font-medium">${item.price}</h1>
                    </TableCell>
                    <TableCell align="right">
                      <h1 className="text-base font-medium">
                        ${item.price * item.quantity}
                      </h1>
                    </TableCell>
                  </TableRow>
                ))}
                <br />
                <TableRow>
                  <TableCell rowSpan={3} />
                  <TableCell colSpan={2}>Subtotal</TableCell>
                  <TableCell align="right">
                    ${ccyFormat(invoiceSubtotal)}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Tax</TableCell>
                  <TableCell align="right">{`${(TAX_RATE * 100).toFixed(
                    0
                  )} %`}</TableCell>
                  <TableCell align="right">
                    ${ccyFormat(invoiceTaxes)}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell colSpan={2}>
                    <h1 className="text-lg font-semibold">Total</h1>
                  </TableCell>
                  <TableCell align="right">
                    <h1 className="text-lg font-semibold">
                      ${ccyFormat(invoiceTotal)}
                    </h1>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>

      <div className="flex justify-center items-center w-full px-4 mb-10">
        <button
          id="checkout"
          className="w-[85%] md:w-[30%] bg-[#f7bf4f] hover:text-white shadow-xl transition ease-in delay-50 hover:-translate-y-1 hover:scale-110 duration-300 text-xl md:text-base font-semibold md:px-2 py-3 md:py-2 p-4"
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Checkout;
