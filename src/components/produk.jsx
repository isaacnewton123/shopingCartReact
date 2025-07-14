import ItemProduk from "./itemproduk";

/**
 * Description placeholder
 *
 * @param {{ produk: any; onToggle: any; }} param0 
 * @param {*} param0.produk 
 * @param {*} param0.onToggle 
 * @returns {*} 
 */
function Produk({ produk, onToggle }) {
  return (
    <div className="w-full md:w-1/2 bg-slate-800 flex flex-col items-center justify-center p-8 md:p-12">
      <div className="max-w-md w-full">
        <h2 className="text-2xl font-bold text-white mb-6 text-center">
          Daftar Produk
        </h2>
        <div className="space-y-4">
          {produk.map((p) => (
            <ItemProduk
              key={p.id}
              name={p.name}
              stok={p.stok}
              image={p.image}
              price={p.price}
              onToggle={() => onToggle(p)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Produk;
