const Sign =
[
    Something =>
    {
        document.getElementsByTagName('div')[0].innerHTML =
        `
            <input placeholder='Username' required title='Alphabets, Numbers or Underscores, 1-16 Characters' type='text'>
            <br>
            <input placeholder='Password' required title='Alphabets and Numbers, 8-16 Characters' type='password'>
            <br>
        `
        Something()
    },
    (Something, SomethingElse) =>
    {
        let input = document.getElementsByTagName('input'), regex = /^[a-zA-Z\d_]{1,16}$/
        if (!regex.test(input[0].value))
        {
            alert('Username should only contain alphabets, numbers or underscores, and should be 1-16 characters long.')
            Something()
        }
        else
        {
            regex = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{8,16}$/
            if (!regex.test(input[1].value))
            {
                alert('Password should contain at least one alphabet and one number, and should be 8-16 characters long.')
                Something()
            }
            else
                SomethingElse(input[0].value, input[1].value)
        }
    }
]
const SignUp =
[
    () => Sign[0](() => document.getElementsByTagName('div')[0].innerHTML += `<button onclick='SignUp[1]()' type='submit'>Sign Up</button>`),
    () => Sign[1](SignUp[0], (username, password) =>
    {
        sign.SignUp(username, password)
        alert(`Successfully signed up.`)
        sign.FromSignToIndex()
    })
]
const SignIn =
[
    () => Sign[0](() => document.getElementsByTagName('div')[0].innerHTML += `<button onclick='SignIn[1]()' type='submit'>Sign In</button>`),
    () => Sign[1](SignIn[0], (username, password) =>
    {
        sign.SignIn(username, password)
        sign.issignedin((event, issignedin) =>
        {
            if (issignedin)
            {
                alert(`Successfully signed in.`)
                sign.FromSignToIndex()
            }
            else
            {
                alert('Incorrect username or password.')
                sign.SignOut()
            }
        })
    })
]