# Monogram Shop page 

GitHub Page: [Monogram Consoles and Modules](https://danieldampe.github.io/idat-proyecto-final/)

This is a front-end project built with React that replicates the official Monogram online store — a platform known for its customizable modular console systems featuring dials, sliders, and keys designed to enhance creative workflows 🎛️.

This clone aims to reproduce the original site’s layout, product browsing experience, and interactive components while applying modern development practices such as React Router for navigation, Zustand for state management, and Tailwind CSS for responsive and elegant UI design. 🚀

---

## 🗂️ Project Structure Overview 🗂️

```
console-components-store/
├── public/                      # 🖼️ Static assets: icons, images, and favicon
├── src/
│   ├── assets/                  # 📊 JSON data (products)
│   ├── components/
│   │   ├── icons/               # 🎨 SVG or icon-based components
│   │   ├── Accordion.tsx        # 📂 Collapsible UI sections
│   │   ├── BannerCreatorApp.tsx # 🪄 Promotion
│   │   ├── Cart.tsx             # 🛒 Shopping cart container
│   │   ├── CartElement.tsx      # 🧾 Individual cart items
│   │   ├── Controller.tsx       # 🎛️ Control the quantities
│   │   ├── Footer.tsx           # 🦶 Footer layout
│   │   ├── Hero.tsx             # 🚀 Hero or main showcase section
│   │   ├── Modal.tsx            # 💬 Modal window
│   │   ├── Nav.tsx              # 🧭 Navigation bar
│   │   ├── ProductCard.tsx      # 🏷️ Product preview card
│   │   └── ProductsGrid.tsx     # 🧩 Product grid layout
│   ├── hooks/                   # 🪝 Custom React hooks
│   │   ├── useCart.ts           # 🛒 Handle cart logic (Zustand)
│   │   ├── useModal.ts          # 💡 Manage modal window
│   │   └── useProducts.ts       # 📦 Fetch products
│   ├── pages/                   # 📄 Main app pages
│   │   ├── Product.tsx          # 🧰 Product detail page
│   │   └── Shop.tsx             # 🏬 Main store page
│   ├── App.tsx                  # ⚙️ Root component and routes
│   ├── index.css                # 🎨 Global styles (Tailwind)
│   ├── main.tsx                 # 🚀 App entry point
│   └── types.d.ts               # 📘 TypeScript type definitions
├── index.html                   # 🌐 Main HTML template
├── package.json
├── vite.config.ts
└── README.md
```

---

## 🛠️🔧 Dependencies & Tools Used 🔧🛠️

| Library          | Purpose                                         |
| ---------------- | ----------------------------------------------- |
| **react**        | ⚛️ Build UI components & manage app state       |
| **react-dom**    | 🏗️ Render React components to the DOM          |
| **react-router** | 🧭 Handle navigation between pages              |
| **zustand**      | 🐻 Lightweight state management for the cart    |
| **tailwindcss**  | 🎨 Utility-first CSS framework for fast styling |

> Built with the best modern tools for speed, reliability, and maintainability! 🚀✨

---

## 📚 Best Practices & Tips

* 📁 **Component Organization:** Single responsibility, reusable UI parts
* 🔄 **Data Management:** Separate data logic from UI components
* 📱 **Responsive Design:** Mobile-first with flexible grid layouts

---

Made by **Solorzano Mundini Damper Daniel** 💻🖱️
