import { useState } from 'react';

const products = [
  { id: 1, name: 'Kemeja Flanel', price: 200000 },
  { id: 2, name: 'Kaos Polos', price: 100000 },
  { id: 3, name: 'Jaket Hoodie', price: 300000 }
];

export default function Home() {
  const [cart, setCart] = useState([]);
  const [form, setForm] = useState({ name: '', address: '' });
  const [checkout, setCheckout] = useState(false);

  const addToCart = (product) => setCart([...cart, product]);
  const handleCheckout = () => {
    if (form.name && form.address) {
      alert(`Terima kasih ${form.name}, pesanan kamu dikirim ke ${form.address}`);
      setCart([]);
      setCheckout(false);
      setForm({ name: '', address: '' });
    } else {
      alert('Mohon lengkapi data pengiriman.');
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Spill by Mell</h1>
      <div style={{ display: 'flex', gap: 20 }}>
        {products.map(p => (
          <div key={p.id} style={{ border: '1px solid gray', padding: 10 }}>
            <h3>{p.name}</h3>
            <p>Rp {p.price.toLocaleString()}</p>
            <button onClick={() => addToCart(p)}>Tambah</button>
          </div>
        ))}
      </div>
      <h2>Keranjang</h2>
      <ul>{cart.map((c, i) => <li key={i}>{c.name} - Rp {c.price.toLocaleString()}</li>)}</ul>
      {cart.length > 0 && !checkout && <button onClick={() => setCheckout(true)}>Checkout</button>}
      {checkout && (
        <div>
          <h3>Isi Data</h3>
          <input placeholder="Nama" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} /><br />
          <input placeholder="Alamat" value={form.address} onChange={e => setForm({ ...form, address: e.target.value })} /><br />
          <button onClick={handleCheckout}>Kirim Pesanan</button>
        </div>
      )}
    </div>
  );
}
