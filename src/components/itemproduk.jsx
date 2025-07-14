import { FaCartPlus } from "react-icons/fa";

function ItemProduk({ name, stok, image, price, onToggle }) {
  return (
    <div className="bg-slate-700 p-4 rounded-lg flex justify-between items-center space-x-4">
      <img
        className={`bg-teal-500 text-white w-10 h-10 rounded-lg flex-shrink-0 flex items-center justify-center
          ${stok === 0 ? "blur-sm" : ""}`}
        src={image}
      />
      <p className="text-slate-200">{name}</p>
      <p className="text-gray-400">Stok : {stok}</p>
      <p className="text-gray-200">
        Harga :{' '}
        {price.toLocaleString("id-ID", {
          style: "currency",
          currency: "IDR",
          minimumFractionDigits: 0,
        })}
        K
      </p>
      <FaCartPlus
        onClick={onToggle}
        className=" text-white w-8 h-8 rounded-lg flex-shrink-0 flex justify-center cursor-pointer hover:text-green-300"
      />
    </div>
  );
}

export default ItemProduk;
