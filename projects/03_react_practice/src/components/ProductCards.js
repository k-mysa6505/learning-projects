function ProductCards(props) {
    const { name, price, imageUrl, onSale } = props;

    return (
        <div style={{
            border: '1px solid #ddd',
            borderRadius: '8px',
            padding: '16px',
            margin: '10px',
            width: '200px'
        }}>
            <img
                src={imageUrl}
                alt={name}
                style={{ width: '100%', height: '150px', objectFit: 'cover' }}
            />
            <h3>{name}</h3>
            <p style={{
                color: onSale ? 'red' : 'black',
                fontWeight: onSale ? 'bold' : 'normal',
            }}>
                {price}円{onSale && ' (セール中！)'}
            </p>
            <button style={{
                backgroundcolor: '#4caf50',
                color: 'white',
                padding: '8px 16px',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer'
            }}>
                カートに追加
            </button>
        </div>
    );
}

export default ProductCards;