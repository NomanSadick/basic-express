import mongoose from "mongoose";
import app from "./app.js";
import { config } from "./app/configs/index.js"; // config ইমপোর্ট করা হচ্ছে

mongoose.connect(config.mongoURI) // mongoURI ব্যবহার করা হচ্ছে
  .then(() => {
    console.log("✅ Database Connected!");
    app.listen(config.port, () => console.log(`🚀 Server running on port ${config.port}`));
  })
  .catch((error) => {
    console.error("❌ Database Connection Error:", error);
    process.exit(1);
  });
