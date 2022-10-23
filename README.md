# React Shopping Cart

A very simple shopping cart PoC, intended as a guide to learn React :)

## File structure

This is the current file structure we want to follow:

```
src
|___ services/
|______ http.js
|______ http.test.js
|___ containers/
|______ Main.js
|___ components/
|______ ProductList/
|_________ index.js
|_________ index.test.js
|_________ styles.scss
|______ Product/
|_________ index.js
|_________ index.test.js
|_________ styles.scss
|______ Cart/
|_________ index.js
|_________ index.test.js
|_________ styles.scss
|___ models/
|______ Product/
|_________ index.js
|_________ index.test.js
|______ Cart/
|_________ index.js
|_________ index.test.js
```

### services/

Here we'll store all the services, this is code that others can use globally
within the application.

#### http.js

This service handles the HTTP communication with external APIs

### containers/

Each container should be a page, which it's own route.

#### Main.js

The main container, for now it will be the only container, since we use just one page

### components/

Here we'll store the visual components which will be included in the container(s)
Each component will have the component itself (index.js) and the corresponding
unit test (index.test.js). We should also have a `styles.scss` file with the
styling for that component.

#### ProductList/

The view for the product list will be defined here

### Product/

The product item will be defined here. It will be included within `ProductList` component
at some point.

### models/

Here we define each model. For now we'll have `Product` and `Cart` models, in which we'll define
the behavior of each entity. As in the rest of the modules, we'll also have the unit tests
for each model.
