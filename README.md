# 🧾 Invoice App

**Invoice App** es una aplicación web construida con **React** que permite crear y gestionar facturas de manera simple e intuitiva. A través de un formulario interactivo, los usuarios pueden añadir productos, establecer precios y cantidades, y generar una lista dinámica de ítems facturados.

---

## 🚀 Características

- 📄 Creación de ítems de factura con producto, precio y cantidad
- ✅ Validación de datos antes de agregar ítems
- 🔄 Estado controlado con React Hooks (`useState`)
- 🧼 Limpieza automática del formulario después de enviar
- 💡 Arquitectura clara y lista para escalar

---

## 🛠️ Tecnologías utilizadas

- ⚛️ React (Vite o Create React App)
- 💅 Bootstrap (o estilos personalizados)
- 🧪 Jest/React Testing Library (si agregas tests)

---

## 📦 Instalación

1. **Clona el repositorio**

   ```bash
   git clone https://github.com/TioDunk/React-Projects-Collection.git
   cd Invoice App
   ```

2. **Instala las dependencias**

   ```bash
   npm install
   ```

3. **Ejecuta el proyecto**

   ```bash
   npm run dev
   ```

---

## 📂 Estructura del proyecto (básica)

```
invoice-app/
├── node_modules/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   └── ClientView.jsx
│   │   └── CompanyView.jsx
│   │   └── FormItemsView.jsx
│   │   └── InvoiceView.jsx
│   │   └── ListItemsView.jsx
│   │   └── RowItemsView.jsx
│   │   └── TotalView.jsx
│   ├── data/
│   │   └── invoice.js
│   ├── service/
│   │   └── getInvoice.js
│   ├── index.css
│   ├── invoiceApp.jsx
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── README.md
└── vite.config.js
```

---
