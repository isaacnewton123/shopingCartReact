import { ImBin } from "react-icons/im";
import { IoIosRemove } from "react-icons/io";
import { IoAdd } from "react-icons/io5";

/**
 * Description placeholder
 *
 * @param {{ name: any; amount: any; price: any; image: any; onReduc: any; onAdd: any; onDelete: any; }} param0 
 * @param {*} param0.name 
 * @param {*} param0.amount 
 * @param {*} param0.price 
 * @param {*} param0.image 
 * @param {*} param0.onReduc 
 * @param {*} param0.onAdd 
 * @param {*} param0.onDelete 
 * @returns {*} 
 */
function ItemCart({ name, amount, price, image, onReduc, onAdd, onDelete }) {
  return (
    <div className="bg-green-800 p-4 rounded-lg flex justify-between items-center space-x-4">
      <img
        className="bg-teal-500 text-white w-10 h-10 rounded-lg flex-shrink-0 flex items-center justify-center"
        src={image}
      />
      <p className="text-slate-200">{name}</p>
      <div className="h-auto gap-2 w-auto flex justify-center items-center">
        <IoIosRemove
          className="h-4 w-4 cursor-pointer text-black hover:text-gray-800"
          onClick={onReduc}
        />
        <p className="text-gray-400">{amount}</p>
        <IoAdd
          className="h-4 w-4 cursor-pointer text-black hover:text-gray-800"
          onClick={onAdd}
        />
      </div>
      <p className="text-gray-200">
        Harga :{" "}
        {price.toLocaleString("id-ID", {
          style: "currency",
          currency: "IDR",
          minimumFractionDigits: 0,
        })}
        K
      </p>
      <ImBin
        onClick={onDelete}
        className=" text-red-400 w-6 h-6 rounded-lg flex-shrink-0 flex justify-center cursor-pointer hover:text-red-300"
      />
    </div>
  );
}

export default ItemCart;
