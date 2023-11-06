

const controller        = require('./controllers/booksController.js')




app.get("/books",           controller.getAllBooks);
app.get("/books/:id",       controller.getBookById);
app.post("/books",          controller.addBooks);
app.patch("/books/:id",     controller.updateBooks);
app.delete("/books/:id",        controller.deleteBooks);
