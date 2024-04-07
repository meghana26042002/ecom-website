import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { MdDelete } from "react-icons/md";
import { deleteItem } from "../util/redux/slices/userdata";
import './Cart.css'
import axios from "axios";
const Cart = () => {
    const dispatch = useDispatch();
    const { cartitem } = useSelector(state => state.userdata)
    const deleteItemClick = (item) => {
        dispatch(deleteItem(item.id))
        alert("Product Deleted Successfully.")
    }
    // const deleteproduct = async (id) => {
    //     try {
    //         const response = await axios.delete(`http://localhost:3000/delete-user/${id}`);
    //         if (response?.data?.msg === "Product deleted") {
    //             alert("Product deleted Successfully.");
    //             dispatch(deleteItem(id))

    //         }
    //         else {
    //             alert("Failed to delete product.");
    //         }
    //     }
    //     catch (err) {
    //         console.error(err);
    //         alert("An error occurred while deleting product. ")
    //     }
    // }
    return (
        <div className="main1">
            <p className="headline">All the items in your cart are available here.</p>
            <div>
                {cartitem?.length === 0 ? <div className="secondline">No items added to your cart</div> : <div className="cart">
                    {
                        cartitem.map((item, id) => {
                            return (
                                <div key={item.id} className="cartstyle" >
                                    <img src={item.img} alt="abc" className="cartimg" />
                                    <h6 className="cartname">{item.name}</h6>
                                    <span onClick={() => deleteItemClick(id)} style={{ position: 'absolute', top: 5, right: 5, padding: '0.5rem', backgroundColor: 'red' }} >
                                        <MdDelete color="#fff" />
                                    </span>

                                </div>
                            )
                        })}
                </div>}
            </div>
        </div>
    )
}
export default Cart;