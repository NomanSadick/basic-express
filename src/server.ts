import mongoose from "mongoose";
import app from "./app";
import { config } from "./app/configs";


if (config.mongoURI) {
  mongoose
    .connect(config.mongoURI)
    .then(() => {
      console.log("✅ Database Connected!");
      app.listen(config.port, () =>
        console.log(`🚀 Server running on port ${config.port}`)
      );
    })
    .catch((error) => {
      console.error("❌ Database Connection Error:", error);
      process.exit(1);
    });
} else {
  console.error("❌ MongoURI is not defined in the configuration.");
  process.exit(1);
}

