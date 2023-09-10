import { app, port } from "./app";
import { Server } from "http";

const mainServerFunction = async () => {
  try {
    app.listen(port, () => {
      console.log(`Server is running on port: ${port}`);
    });
  } catch (error) {
    console.error(`Server connot run. ${error}`);
  }
};

mainServerFunction();
