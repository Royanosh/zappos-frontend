import {
  ERROR,
  LOGOUT,
  SETUSER,
  ADDTOCART,
  DELFROMCART,
  INCREASECART,
  SETSHIPADDRESS,
  CHECKOUTDONE,
  GENDERFILTER,
  BRANDFILTER,
  PRICEFILTER,
  CLEARFILTER,
  SETTOKEN,
} from "./actionTypes";
import { BASE_URL } from "../constant";

export const getError = () => ({
  type: ERROR,
});

export const getlogout = () => ({
  type: LOGOUT,
});

export const setuser = (user) => ({
  type: SETUSER,
  payload: user,
});

export const addtocart = (item) => ({
  type: ADDTOCART,
  payload: item,
});

export const deletefromcart = (item) => ({
  type: DELFROMCART,
  payload: item,
});

export const increasecart = (data) => ({
  type: INCREASECART,
  payload: data,
});

// export const decreasecart = (data) => ({
//   type: DECREASECART,
//   payload: data
// });

export const setshipaddress = (data) => ({
  type: SETSHIPADDRESS,
  payload: data,
});

export const checkoutdone = () => ({
  type: CHECKOUTDONE,
});

export const genderfilter = (data) => ({
  type: GENDERFILTER,
  payload: data,
});

export const brandfilter = (data) => ({
  type: BRANDFILTER,
  payload: data,
});

export const pricefilter = (data) => ({
  type: PRICEFILTER,
  payload: data,
});

export const clearfilter = () => ({
  type: CLEARFILTER,
});

export const settoken = (payload) => ({
  type: SETTOKEN,
  payload,
});

export const register = (user) => (dispatch) => {
  fetch(`https://my-json-server-uk9r.onrender.com/users`, {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .catch(() => dispatch(getError()));
};

export const fetchCartData = () => (dispatch) => {
  fetch(
    `${BASE_URL}/cart/${JSON.parse(localStorage.getItem("profile"))._id
    }`
  )
    .then((res) => res.json())
    .then((res) => dispatch(addtocart(res.data)))
    .catch((er) => console.log(er));
};
//
