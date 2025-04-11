import { useState } from 'react';

function ShoppingCarts() {
    //  商品一覧のデータ
    const products = [
        { id: 1, name: "ハンバーガー", price: 5980, imageUrl: "/api/placeholder/150/150"},
        { id: 2, name: "ピザ", price: 2980, imageUrl: "/api/placeholder/150/150"},
        { id: 3, name: "サラダ", price: 980, imageUrl: "/api/placeholder/150/150"},
        { id: 4, name: "スパゲッティ", price: 1980, imageUrl: "/api/placeholder/150/150"},
        { id: 5, name: "寿司", price: 3980, imageUrl: "/api/placeholder/150/150"},
    ];

    // カートの状態管理
    const [cart, setCart] = useState([]);

    // カートに商品を追加する関数
    const addToCart = (product) => {
        // カートに商品が既に存在するか確認
        const existingItem = cart.find(item => item.id === product.id);
        if (existingItem) {
            // 既に存在する場合は数量を増やす
            setCart(cart.map(item =>
                item.id === product.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            ));
        } else {
            // 新しい商品をカートに追加
            setCart([...cart, { ...product, quantity: 1 }]);
        }
    };

    // カートから商品を削除する関数
    const removeFromCart = (productID) => {
        setCart(cart.filter(item => item.id !== productID));
    };

    // カートの合計金額を計算する関数
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    return (
        <div style={{ padding: '20px', maxWidth: '1200px', margin : '0 auto' }}>
            <h1>ショッピングサイト</h1>

            <div style={{ display: 'flex', gap: '20px'}}>
                {/* 商品一覧 */}
                <div style={{ flex: '1' }}>
                    <h2>商品一覧</h2>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
                        {products.map(product => (
                            <div key={product.id} style={{
                                border: '1px solid #ddd',
                                borderRadius: '8px',
                                padding: '16px',
                                width: '200px'
                            }}>
                                <img
                                    src={product.imageUrl}
                                    alt={product.name}
                                    style={{ width: '100%', height: '150px', objectFit: 'cover' }}
                                />
                                <h3>{product.name}</h3>
                                <p>{product.price}円</p>
                                <button
                                    onClick={() => addToCart(product)}
                                    style={{
                                        backgroundColor: '#4caf50',
                                        color: 'white',
                                        padding: '8px 16px',
                                        border: 'none',
                                        borderRadius: '4px',
                                        cursor: 'pointer'
                                    }}
                                >
                                    カートに追加
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                {/* カート */}
                <div style={{
                    flex: '0 0 300px',
                    border: '1px solid #ddd',
                    borderRadius: '8px',
                    padding: '16px',
                    backgroundColor: '#f9f9f9',
                    alignSelf: 'flex-start'
                }}>
                    <h2>買い物かご</h2>
                    {cart.length === 0 ? (
                        <p>カートは空です</p>
                    ) : (
                        <>
                            <ul style={{ listStyle: 'none', padding: '0' }}>
                                {cart.map(item => (
                                    <li key={item.id} style={{
                                        borderBottom: '1px solid #ddd',
                                        padding: '10px 0',
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                    }}>
                                        <div>
                                            <p style={{ margin: '5px 0' }}>
                                                {item.price}円 × {item.quantity} = {item.price * item.quantity}円
                                            </p>
                                        </div>
                                        <button
                                            onClick={() => removeFromCart(item.id)}
                                            style={{
                                                backgroundColor: '#f44336',
                                                color: 'white',
                                                padding: '5px 10px',
                                                border: 'none',
                                                borderRadius: '4px',
                                                cursor: 'pointer'
                                            }}
                                        >
                                            削除
                                        </button>
                                    </li>
                                ))}
                            </ul>
                            <div style={{
                                marginTop: '20px',
                                padding: '10px 0',
                                borderTop: '2px solid #ddd',
                                display: 'flex',
                                justifyContent: 'space-between',
                                fontWeight: 'bold',
                            }}>
                                <span>合計：</span>
                                <span>{totalPrice}円</span>
                            </div>
                            <button
                                style={{
                                    backgroundColor: '#2196f3',
                                    color: 'white',
                                    padding: '10px',
                                    border: 'none',
                                    borderRadius: '4px',
                                    curosr: 'pointer',
                                    width: '100%',
                                    marginTop: '10px'
                                }}
                            >
                                購入手続きへ
                            </button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ShoppingCarts;