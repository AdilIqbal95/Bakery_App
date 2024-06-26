

const CakeComponent = ({name, ingredients, price, rating}) => {

    const handleIngredients = (ingredientsArray) => {
        ingredientsArray.forEach(ingredient => {
            return (
                <p>{ingredient}</p>
            )
        })
    }

    return (
        <>
            <h2>{name}</h2>
            <div>{ingredients.map(item => <p>{item}</p>)}</div>
            <p>Price: £{price}</p>
            <p>Rating: {rating}</p>
        </>
    )

}

export default CakeComponent;