const Button = (props) => {
    const {clickIncrement, clickReset, incr} = props;

    const handleClickIncrement = () => {
        clickIncrement(incr)
    }
    
    return (
        <div>
            <button onClick={handleClickIncrement}>+ {incr}</button>
            <button onClick={() => clickReset()}>Reset</button>
        </div>
    )
}

export default Button