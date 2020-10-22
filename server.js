const express = require('express')
const bodyParser = require('body-parser')
const rootRoute = require('./routes/rootRoute')
const registerRoute = require('./routes/registerRoute')
const loginRoute = require('./routes/loginRoute')

const addStoreRoute = require('./routes/stores/addStore')
const getStoreRoute = require('./routes/stores/getStore')
const addInventoryRoute = require('./routes/inventory/addInventory')
const getInventoryRoute = require('./routes/inventory/getInventory')
const addBooksRoute = require('./routes/Books/addBooks')
const getBooksRoute = require('./routes/Books/getBooks')
const addTransactionsRoute = require('./routes/transactions/addTransactions')
const getTransactionsRoute = require('./routes/transactions/getTransactions')
const addUsersRoute = require('./routes/users/addUsers')
const getUsersRoute = require('./routes/users/getUsers')
const addCustomerRoute = require('./routes/customer/addCustomer')
const getCustomerRoute = require('./routes/customer/getCustomer')
const transactionNotesRoute = require("../routes/transactionNotes/transactionNotesAPI");

const app = express()
app.use(bodyParser.json())

app.use(rootRoute)
app.use(registerRoute)
app.use(loginRoute)

app.use(addStoreRoute)
app.use(getStoreRoute)
app.use(addInventoryRoute)
app.use(getInventoryRoute)
app.use(addBooksRoute)
app.use(getBooksRoute)
app.use(addTransactionsRoute)
app.use(getTransactionsRoute)
app.use(addUsersRoute)
app.use(getUsersRoute)
app.use(addCustomerRoute)
app.use(getCustomerRoute)
app.use(transactionsNotesRoute)

const port = 3000
app.listen(port, () => {
  console.log(`Backend app is running in http://localhost:${port}`);
})
