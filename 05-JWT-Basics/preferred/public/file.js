document.getElementById('register').addEventListener('click', async (e) => {

    e.preventDefault()

    try {
        if (document.getElementById('username').value == '' || document.getElementById('password').value == '') {
            const errorMessage = document.createElement('p');
            errorMessage.style.cssText = 'color:red'
            const newContent = document.createTextNode('Please provide both username and password . . . ');
            errorMessage.appendChild(newContent)
            const loginBox = document.getElementById('loginBox')
            document.body.insertBefore(errorMessage, loginBox)
        }
        else {
            await axios.post('/api/v1/createAccount', {
                username: document.getElementById('username').value,
                password: document.getElementById('password').value,
            })
            document.getElementById('username').value = ''
            document.getElementById('password').value = ''

            const successMessage = document.createElement('p');
            successMessage.style.cssText = 'color:green'
            const goodContent = document.createTextNode('Account created, please sign in . . . ');
            successMessage.appendChild(goodContent)
            const loginBox = document.getElementById('loginBox')
            document.body.insertBefore(successMessage, loginBox)
        }

        setTimeout(() => {
            document.querySelector('p').hidden = true
        }, "2000");

    } catch (error) {
        console.log(error)
    }

})


document.getElementById('login').addEventListener('click', async (e) => {
    e.preventDefault()
    const username = document.getElementById('username').value
    const password = document.getElementById('password').value

    try {
        if (username == '' || password == '') {
            const errorM = document.createElement('p');
            errorM.style.cssText = 'color:orange'
            const cannotLogInContent = document.createTextNode(`Please enter a username and password to login. . .`);
            errorM.appendChild(cannotLogInContent)
            const loginBox = document.getElementById('loginBox')
            document.body.insertBefore(errorM, loginBox)
        }

        else {

            await axios.post('/api/v1/login', {
                username: username,
                password: password
            })

            const loggedIn = document.createElement('p');
            loggedIn.style.cssText = 'color:purple'
            const loggedInContent = document.createTextNode(`Logged in . . . welcome ${username}`);
            loggedIn.appendChild(loggedInContent)
            const loginBox = document.getElementById('loginBox')
            document.body.insertBefore(loggedIn, loginBox)
        }
        setTimeout(() => {
            document.querySelector('p').hidden = true
        }, "2000");

    } catch (error) {
        console.log(error)
    }
})