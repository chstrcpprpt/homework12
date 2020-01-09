const express = require("express");
// const apiRouter = require("./routes");

const app = express();

app.use(express.json());

// import routes - this is where the different controllers will go?
// app.use("/api/routeName", apiRouter);

// static content

// set template engine - express-handlebars?

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});





