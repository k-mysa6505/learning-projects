function Header() {
    return (
        <header style={{ backgroundColor: '#232c34', padding: '20px', color: 'white' }}>
            <h1>My React App</h1>
            <nav>
                <ul style={{ display: 'flex', listStyle: 'none', gap: '20px'}}>
                    <li>Home</li>
                    <li>Products</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;