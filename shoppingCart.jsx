function NavBar({ store }) {
    const { Button } = ReactBootstrap;

    const [stock, setStock] = React.useState(store);
    const [cart, setCart]  = React.useState([]);

    const addToCart = (index, e) => {
        let [itemName, numInStock] = e.target.innerHTML.split(":");
        console.log([itemName, numInStock])

        let newStock = stock.map((item, index) => {
            if(item.name == itemName && item.stock == 0) alert(`${item.name} is unavailable`);
            if(item.name == itemName && item.stock > 0) item.stock--;
            return item;
        });
        setStock(newStock);


        let newCartItem = stock.filter(item => item.name == itemName);
        setCart([...cart, ...newCartItem]);
        console.log(cart)
    };
        
        const displayedCart = cart.map((item,index) => {
            return(
                <Button key={index}>{item.name}</Button>
            );
        });

        const updatedStock = stock.map((item, index) => {
            return(
                <Button onClick={e => addToCart(index, e)} key={index}> 
                {item.name}:{item.stock}
                </Button>
            );
        });

    return(
        <>
            <div>{updatedStock}</div>
            <h1>Shopping Cart</h1>
            <div>{displayedCart}</div>
        </>
    );
}
const storeItems = [
    { name: "pants", stock: 3 },
    { name: "t-shirt", stock: 5 },
    { name: "hooded sweatshirt", stock: 4 },
    { name: "crewneck sweatshirt", stock: 2 },
    { name: "tank", stock: 6 }
];
ReactDOM.render(
    <NavBar store={storeItems}/>,
    document.getElementById("root")
);