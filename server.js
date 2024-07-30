import express from "express"
import teacherRoutes from "./routes/teacherRoutes.js";
import studentRoutes from "./routes/studentRoutes.js";
import dotenv from "dotenv"
import { sequelize } from "./config.js";
import morgan from "morgan";

dotenv.config()
    const app = express();
    app.use(morgan("dev"));
    app.use(express.json());

    async function main() {
      const port = 3000;
    

      try {
        await sequelize.sync({ force: false });
        app.listen(port, () => {
          console.log(`listening on port ${port}`);
        });
      } catch (error) {
        console.error("Unable to connect to the database:", error);
      }
    }
    main();
    

app.use("/api/teacher", teacherRoutes);
app.use("/api/student", studentRoutes);




