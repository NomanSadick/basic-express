import express, { Request, Response } from "express";
import cors from "cors";
import path from "path";
import httpStatus from "http-status";
import router from "./app/routes";
import errorHandler from "./app/middlewares/errorHandler";
import UserModel from "./app/modules/users/user.Models";  // Make sure to use UserModel here

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Added this line to parse form data
app.use(cors());

// Set EJS as the view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Routes
app.use("/api", router);

// Home Route (Render `index.ejs`)
app.get("/", (req: Request, res: Response) => {
  res.render("index", { title: 'Home Page' });
});

// Register Route (GET: Show register form, POST: Handle form submission)
app.get("/register", (req: Request, res: Response) => {
  res.render("register", { title: 'Register' });
});

app.post("/register", async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;  // Get the form data
    
    console.log('Request body:', req.body); // Added for debugging

    // Validate input (Check if username or password is missing)
    if (!username || !password) {
      return res.status(400).send("Username and password are required.");
    }

    // Check if the user already exists
    const user = await UserModel.findOne({ username });
    if (user) {
      return res.status(400).send("User already exists");
    }

    // Create a new user
    const newUser = new UserModel({ username, password });
    await newUser.save();

    // Redirect to login page after successful registration
    res.status(201).redirect("/login");
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Login Route (GET: Show login form, POST: Handle login)
app.get("/login", (req: Request, res: Response) => {
  res.render("login", { title: 'Login' });
});

// Add the login post handler
app.post("/login", async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;
    
    // Validate input
    if (!username || !password) {
      return res.status(400).send("Username and password are required.");
    }

    // Find the user
    const user = await UserModel.findOne({ username });
    
    // Check if user exists and password matches
    if (!user || user.password !== password) {
      return res.status(401).send("Invalid username or password");
    }

    // In a real app, you would create a session or JWT here
    // For now, just redirect to profile
    res.redirect("/profile");
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Profile Route
app.get("/profile", (req: Request, res: Response) => {
  res.render("profile", { title: 'Profile' });
});

// Logout Route
app.get("/logout", (req: Request, res: Response) => {
  // In a real app, you would handle the logout process here
  res.render("logout", { title: 'Logout' });
});

// Not Found Route Handler
app.use((req: Request, res: Response) => {
  res.status(httpStatus.NOT_FOUND).render("404", {
    title: "Page Not Found",
  });
});

// Error Handling Middleware
app.use(errorHandler);

export default app;