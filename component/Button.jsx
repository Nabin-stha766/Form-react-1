


export default function ({ text, extraClass, handleClick }) {

    return (

        <>
            <button
                className={extraClass}
                onClick={handleClick}
            >
            {text}
            </button>
        </>
    )
}