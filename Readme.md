# **Franquicias API**

API para gestionar franquicias, sucursales y productos. Esta API permite crear, leer, actualizar y eliminar información relacionada con franquicias, sucursales y productos. Además, está documentada con **OpenAPI** y puede visualizarse a través de **Swagger UI**.

---

## **Características**

- Gestión de **franquicias**:
  - Crear una nueva franquicia.
  - Actualizar el nombre de una franquicia.
- Gestión de **sucursales**:
  - Agregar una nueva sucursal a una franquicia.
  - Actualizar el nombre de una sucursal.
- Gestión de **productos**:
  - Agregar productos a una sucursal.
  - Actualizar el stock de un producto.
  - Eliminar un producto.
  - Consultar el producto con más stock por sucursal.
- Documentación interactiva de la API con **Swagger UI**.

---

## **Requisitos Previos**

1. **Node.js**: Debes tener instalado Node.js (v14 o superior).
2. **Base de Datos**:
   - La API está diseñada para conectarse a una base de datos MySQL.
   - Puedes usar servicios como **Railway**, **AWS RDS**, o cualquier proveedor compatible con MySQL.

---

## **Instalación**

1. Clona este repositorio:
   ```bash
   git clone https://github.com/tu-usuario/franquicias-api.git
   cd franquicias-api
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Configura las variables de entorno:
   Crea un archivo `.env` en la raíz del proyecto con el siguiente contenido:
   ```env
   PORT=3000
   DATABASE_URL=mysql://usuario:contraseña@localhost:3306/franchise_db
   ```

4. Configura la base de datos:
   - Crea una base de datos llamada `franchise_db`.
   - Ejecuta las migraciones:
     ```bash
     npx sequelize-cli db:migrate
     ```

---

## **Ejecución**

1. Inicia el servidor:
   ```bash
   npm start
   ```

2. La API estará disponible en:
   ```
   https://franquicias.up.railway.app
   ```

3. La documentación interactiva estará disponible en:
   ```
   https://franquicias.up.railway.app/api-docs/
   ```

---

## **Endpoints Principales**

### **Franquicias**
- **POST /api/franchises**: Crear una nueva franquicia.
- **PUT /api/franchises/:franchiseId**: Actualizar el nombre de una franquicia.

### **Sucursales**
- **POST /api/branches/add-to-franchise**: Agregar una sucursal a una franquicia.
- **PUT /api/branches/:branchId**: Actualizar el nombre de una sucursal.

### **Productos**
- **POST /api/products/add-to-branch**: Agregar un producto a una sucursal.
- **PUT /api/products/:productId/stock**: Actualizar el stock de un producto.
- **DELETE /api/products/:productId**: Eliminar un producto.
- **GET /api/products/top-stocked/:franchiseId**: Obtener el producto con más stock por sucursal.

---

## **Tecnologías Utilizadas**

- **Node.js**: Framework para construir la API.
- **Express**: Framework minimalista para manejo de rutas y middlewares.
- **Sequelize**: ORM para gestionar la base de datos.
- **Swagger (OpenAPI)**: Documentación interactiva de la API.
- **MySQL**: Base de datos relacional para persistencia.

---

## **Estructura del Proyecto**

```
franquicias-api/
├── src/
│   ├── controllers/     # Controladores para manejar la lógica de las rutas
│   ├── models/          # Modelos definidos con Sequelize
|   |── db/              # Configuracion de base de datos
|   |   ├── migrations/  # Migraciones para la base de datos
|   |   └── seeders/     # Semillas para iniciar datos
│   ├── routes/          # Definición de rutas
│   ├── services/        # Lógica de negocio
│   ├── swagger.js       # Configuración de Swagger
│   └── index.js         # Punto de entrada principal
├── openapi.yaml         # Documentación de la API en formato OpenAPI
├── package.json         # Dependencias y scripts
├── README.md            # Este archivo
└── .env                 # Variables de entorno (no se incluye en el repositorio)
```

---

## **Contribuciones**

Si deseas contribuir a este proyecto, sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una rama para tu contribución:
   ```bash
   git checkout -b feature/nueva-funcionalidad
   ```
3. Realiza los cambios y crea un commit:
   ```bash
   git commit -m "Agrega nueva funcionalidad"
   ```
4. Sube tus cambios:
   ```bash
   git push origin feature/nueva-funcionalidad
   ```
5. Crea un Pull Request.

---

## **Licencia**

Este proyecto está bajo la Licencia MIT. Consulta el archivo `LICENSE` para más detalles.

---

Si necesitas personalizar algo más del README o agregar detalles específicos, ¡házmelo saber! 😊

