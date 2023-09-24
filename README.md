This is a project that is a mockup of an online store using HTML, CSS, JavaScript, React, and React Router.  

It uses fake shopping items from https://fakestoreapi.com/docs and uses the following to API URL in fetch to retrieve items:  https://fakestoreapi.com/products

Known issues:
User input field allows decrimenting the number of the product graphically below 0 using the arrow even though the quanitty below 0 won't be set as the item's quantity.  The input field shouldn't go below 0.
Needs CSS styling.


 
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
