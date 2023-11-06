

const controller        = require('./controllers/booksController.js')
const validator         = require('./validators/booksValidator.js');




app.get("/books",           controller.getAllBooks);
app.get("/books/:id",       validator.getBookById, controller.getBookById);
app.post("/books",          validator.addBooks,    controller.addBooks);
app.patch("/books/:id",     validator.updateBooks, controller.updateBooks);
app.delete("/books/:id",    validator.deleteBooks, controller.deleteBooks);
