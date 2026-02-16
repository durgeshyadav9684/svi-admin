'use client';
import { useState, useEffect } from 'react';

export default function Products() {
    const [products, setProducts] = useState([]);
    const [newProduct, setNewProduct] = useState({ name: '', price: '', stock: '', category: '', description: '' });
    const [imageFile, setImageFile] = useState(null);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = () => {
        fetch('/api/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('name', newProduct.name);
        formData.append('price', newProduct.price);
        formData.append('stock', newProduct.stock);
        formData.append('category', newProduct.category);
        formData.append('description', newProduct.description);
        if (imageFile) {
            formData.append('image', imageFile);
        }

        const res = await fetch('/api/products', {
            method: 'POST',
            body: formData
        });

        if (res.ok) {
            setNewProduct({ name: '', price: '', stock: '', category: '', description: '' });
            setImageFile(null);
            // Reset file input
            e.target.reset();
            fetchProducts();
        }
    };

    const handleDelete = async (id) => {
        const res = await fetch(`/api/products?id=${id}`, { method: 'DELETE' });
        if (res.ok) fetchProducts();
    };

    return (
        <div className="products-page">
            <header className="page-header">
                <h1>Product Management</h1>
                <button className="btn btn-accent" onClick={() => document.getElementById('add-form').scrollIntoView()}>+ Add Product</button>
            </header>

            <div className="products-grid">
                {products.map(product => (
                    <div key={product.id} className="card product-card">
                        {product.imageUrl && (
                            <div className="product-image">
                                <img src={product.imageUrl} alt={product.name} />
                            </div>
                        )}
                        <div className="product-info">
                            <h3>{product.name}</h3>
                            <p className="category">{product.category}</p>
                            <p className="price">${product.price}</p>
                            <p className="stock">Stock: {product.stock}</p>
                        </div>
                        <button className="btn btn-danger" onClick={() => handleDelete(product.id)} style={{ marginTop: '1rem' }}>Delete</button>
                    </div>
                ))}
            </div>

            <section id="add-form" className="card add-product-section" style={{ marginTop: '3rem' }}>
                <h2>Add New Product</h2>
                <form onSubmit={handleSubmit} className="product-form">
                    <input type="text" placeholder="Product Name" value={newProduct.name} onChange={e => setNewProduct({ ...newProduct, name: e.target.value })} required />
                    <div className="form-group">
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>Product Image</label>
                        <input type="file" accept="image/*" onChange={e => setImageFile(e.target.files[0])} style={{ border: 'none', padding: '0' }} />
                    </div>
                    <input type="number" placeholder="Price" value={newProduct.price} onChange={e => setNewProduct({ ...newProduct, price: e.target.value })} required />
                    <input type="number" placeholder="Stock" value={newProduct.stock} onChange={e => setNewProduct({ ...newProduct, stock: e.target.value })} required />
                    <input type="text" placeholder="Category" value={newProduct.category} onChange={e => setNewProduct({ ...newProduct, category: e.target.value })} required />
                    <textarea placeholder="Description" value={newProduct.description} onChange={e => setNewProduct({ ...newProduct, description: e.target.value })} required></textarea>
                    <button type="submit" className="btn btn-primary">Save Product</button>
                </form>
            </section>

        </div>
    );
}
