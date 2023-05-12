const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
// const errorHandler = require("./middlewares/error-handler");
const { host } = require("./config/config");
const port = host.port;
// const swaggerUi = require("swagger-ui-express");
// const swaggerFile = require("./swagger-output");
const cors = require("cors");

// parser
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());

// cors
app.use(
  cors({
    origin: "*",
    credentials: "true",
    // cors options
  })
);

// swagger
// app.use("/api/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

// router
const apiMainRouter = require("./routes/index");
const apipostpostrouter = require("./routes/post.routes.js")
//app.use("/api", [apiMainRouter]);
app.use("/api",[apipostpostrouter])

// errorHandler
// app.use(errorHandler);

app.listen(port, () => {
  console.log(`running http://localhost:${port}`);
});

module.exports = app;
