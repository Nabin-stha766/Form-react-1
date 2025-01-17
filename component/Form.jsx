


function Form({ submitText, isLogin }) {

    function handleSubmit(event) {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const username = formData.get("username")
        const email = formData.get("email")
        const password = formData.get("password")
        console.log(`Username:${username}, Password:${password}, Email: ${email}`)

    }
    return (

        <>
            <form
                className="form" onSubmit={handleSubmit}
            >

                {isLogin ? " " : <div className="username">
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        placeholder="Nabin Shrestha"
                        name="username"
                    />
                </div >}


                <div className="email">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        placeholder="e.g.Nabin@gmail.com"
                        name="email"
                    />
                </div>

                <div className="password">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        placeholder="password"
                        name="password"
                    />
                </div>

                {isLogin ? " " : <div className="confirm password">
                    <label htmlFor="password1">Confirm password:</label>
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        name="password1"
                    />
                </div>}


                {!isLogin ? "" : <div className="forgot-text" >
                    <p ><a href="#">forgot password?</a></p>
                </div>}


                <button
                    className="submit-btn"
                    type="submit"
                >
                    {submitText}
                </button>
            </form>
        </>
    )
}

export default Form;