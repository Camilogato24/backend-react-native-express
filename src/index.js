import app from "./app.js";
import "./connection/database.js";

const PORT = process.env.PORT || 3000;
app.listen(PORT);
console.log("server on port 3200");