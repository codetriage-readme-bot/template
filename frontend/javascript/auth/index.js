document.getElementById('loginButton').onclick = function () {
  let login = require('./login')
  login()
}

document.getElementById('logoutButton').onclick = function () {
  let logout = require('./logout')
  logout()
}
