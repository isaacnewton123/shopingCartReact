import ItemCart from "./itemcart";

/**
 * Description placeholder
 *
 * @param {{ produk: any; onReduc: EventListener; total: BigInteger; onAdd: EventListenerObject; onDelete: any; }} param0 
 * @param {*} param0.produk 
 * @param {*} param0.onReduc 
 * @param {*} param0.total 
 * @param {*} param0.onAdd 
 * @param {*} param0.onDelete 
 * @returns {*} 
 */
function Cart({ produk, onReduc, total, onAdd, onDelete }) {
  return (
    <div className="w-full md:w-1/2 bg-green-700 flex flex-col items-center justify-center p-8 md:p-12">
      <div className="max-w-md w-full">
        <h2 className="text-2xl font-bold text-white mb-6 text-center">
          Daftar Produk
        </h2>
        <div className="space-y-4">
          {produk.length === 0 ? (
            <div className="bg-gray-800 opacity-21 p-4 rounded-lg flex justify-center items-center space-x-4">
              <h2 className="text-l text-white mb-6">
                Tidak Ada Item Di Keranjang
              </h2>
            </div>
          ) : (
            produk.map((p) => (
              <ItemCart
                key={p.id}
                name={p.name}
                price={p.price}
                amount={p.amount}
                image={p.image}
                onReduc={() => onReduc(p)}
                onAdd={() => onAdd(p)}
                onDelete={() => onDelete(p)}
              />
            ))
          )}
        </div>
        <div className="p-4 rounded-lg flex justify-center items-center space-x-4">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">
            Total Belanja :{" "}
            {total.toLocaleString("id-ID", {
              style: "currency",
              currency: "IDR",
              minimumFractionDigits: 0,
            })}K
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Cart;
