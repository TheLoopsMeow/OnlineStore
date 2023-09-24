This is a project that is a mockup of an online store using React, and React Router.  

It uses fake shopping items from https://fakestoreapi.com/docs and uses the following to API URL in fetch to retrieve items:  https://fakestoreapi.com/products

Known issues:
Display quantity starts at 0 when it is actually 1.
User input field allows decrimenting the number of the product below 0 using the arrow.
Needs CSS styling.

To do:
Add warning messages so when hte user enters an amount less than 0 or more than itemLimit, they get a message notifying them that the amount must be within bounds.


 
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
