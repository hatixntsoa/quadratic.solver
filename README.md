# 🧮 Quadratic Solver

A web-based **Quadratic Equation Solver** built using **HTML**, **CSS**, and **JavaScript**. <br>
This project was created as part of an introductory **Web App Development** course, demonstrating core web development concepts.

<br>

## 📸 Preview

![Quadratic Solver Main Page](./images/screenshots/preview.png)

You can also view a live demo of the app [here](https://hatixntsoa.github.io/quadratic.solver).

<br>

## ⚙️ Installation & Setup

Follow these steps to set up the quadratic solver locally:

```bash
# 1. Clone this repository to your local machine
git clone https://github.com/hatixntsoa/quadratic.solver.git

# 2. Navigate to the project directory
cd quadratic.solver

# 3. Give execute permission to the script
chmod +x quadratic.sh

# 4. Run the server to start the application
./quadratic.sh
```

> ✅ **PHP** must be installed on your system to run the server.

<br>

## 📌 Requirements

* **PHP** version 7.x or higher
* A Unix-like environment (Linux/macOS or WSL on Windows)

<br>

## 🚀 How It Works

The app solves quadratic equations of the form:

$$
ax^2 + bx + c = 0
$$

It uses the standard quadratic formula:

$$
x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}
$$

* If the discriminant ($△ = b^2 - 4ac$) is **positive**, two real roots are displayed.
* If the discriminant is **zero**, only one real root is shown.
* If the discriminant is **negative**, the app will return **No Solution in R** (from now on).

<br>

## 📝 License

This project is licensed under the [MIT License](./LICENSE.md).<br>
Feel free to use, modify, and distribute with proper attribution.
