

const CakeComponent = ({name, ingredients, price, rating}) => {

    const handleIngredients = (ingredientsArray) => {
        
    }

    return (
        <>
            <h2>{name}</h2>
            <div>{ingredients}</div>
            <p>Price: £{price}</p>
            <p>Rating: {rating}</p>
        </>


    )

}

export default CakeComponent;