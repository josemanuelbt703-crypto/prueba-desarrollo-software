# NexaLearn

# Características principales

## Frontend

- Desarrollo con React.
- Creación del proyecto mediante Vite.
- Diseño responsive.
- Consumo de API REST.
- Filtro de cursos por categorías.
- Funcionalidad "Cargar más".
- Modal para consultar información completa de un curso.
- Login de usuarios.
- Persistencia de sesión.
- Control de interfaz según rol.
- Ruta protegida para administradores.
- Sección de cursos.
- Sección "Conócenos".
- Sección de aliados.
- Carrusel de testimonios.
- Footer con navegación y redes sociales.
- Adaptación para dispositivos móviles, tablets y escritorio.

## Backend

- API REST desarrollada con Laravel.
- CRUD de cursos.
- Autenticación mediante Laravel Sanctum.
- Roles `admin` y `user`.
- Middleware para proteger operaciones administrativas.
- Validación de datos.
- Manejo de errores HTTP.
- Relaciones mediante Eloquent ORM.
- Base de datos MySQL.
- Seeders con información inicial.
- Contraseñas almacenadas mediante hash.

---

# Tecnologías utilizadas

## Frontend

- React
- Vite
- JavaScript
- JSX
- CSS
- React Router DOM
- React Icons
- Fetch API

## Backend

- PHP
- Laravel
- Laravel Sanctum
- Eloquent ORM
- Composer

## Base de datos

- MySQL

## Herramientas utilizadas

- Visual Studio Code
- Git
- GitHub
- Postman
- phpMyAdmin
- XAMPP / MySQL Server

---

# Arquitectura general

<!-- La aplicación se encuentra dividida en dos proyectos independientes: -->


NexaLearn/
│
├── nexalearn-api/
│   └── Backend Laravel
│
└── nexalearn-web/
    └── Frontend React


<!-- El flujo principal de información es: -->

React
  │
  │ HTTP / JSON
  ▼
Laravel API
  │
  │ Eloquent ORM
  ▼
MySQL


<!-- El frontend realiza solicitudes HTTP al backend.

Laravel procesa las solicitudes, valida los datos, consulta la base de datos y devuelve respuestas en formato JSON. -->

---

# Requisitos del sistema

<!-- Antes de ejecutar el proyecto es necesario tener instaladas las siguientes herramientas: -->

- Git
- PHP compatible con la versión de Laravel utilizada
- Composer 2 o superior
- MySQL
- Node.js
- npm
- Un navegador web moderno

<!-- Configuración recomendada: -->


PHP:      8.3 o superior
Composer: 2.x
Node.js:  20.19+ o 22.12+
npm:      10 o superior
MySQL:    8.0 o superior


<!-- La versión instalada de cada herramienta puede verificarse mediante: -->

php -v

composer -V

node -v

npm -v

git --version

<!-- Para comprobar la versión específica de Laravel utilizada: -->

php artisan --version

---

# Instalación del proyecto

<!-- El proyecto está dividido en un backend y un frontend.

Ambos deben ejecutarse al mismo tiempo para utilizar correctamente la aplicación. -->

---

# 1. Descargar el backend

<!-- Clonar el repositorio del backend: -->

git clone URL_DEL_REPOSITORIO_BACKEND

Ejemplo:

git clone https://github.com/USUARIO/nexalearn-api.git

<!-- Entrar al proyecto: -->

cd nexalearn-api

---

# 2. Instalar dependencias de Laravel

<!-- Ejecutar: -->

composer install

Composer instalará las dependencias indicadas en:

composer.json

---

# 3. Crear el archivo de configuración del backend

<!-- Laravel utiliza un archivo `.env` para la configuración local. -->

<!-- Crear una copia de: -->

.env.example

<!-- En Windows CMD: -->

copy .env.example .env

<!-- En PowerShell: -->

powershell
Copy-Item .env.example .env

<!-- En Linux o macOS: -->

cp .env.example .env

---

# 4. Generar la clave de Laravel

<!-- Ejecutar: -->


php artisan key:generate


<!-- Laravel generará automáticamente el valor: -->

env
APP_KEY=


dentro del archivo `.env`.

---

# 5. Crear la base de datos

<!-- Iniciar MySQL. -->

<!-- Si se utiliza XAMPP, iniciar el servicio: -->


MySQL


<!-- Posteriormente se puede ingresar a phpMyAdmin: -->


http://localhost/phpmyadmin


<!-- Crear una nueva base de datos con el nombre: -->


nexalearn_db


<!-- También puede crearse mediante SQL: -->

sql
CREATE DATABASE nexalearn_db
CHARACTER SET utf8mb4
COLLATE utf8mb4_unicode_ci;


---

# 6. Configurar conexión a MySQL

<!-- Abrir el archivo: -->


.env


<!-- Configurar las siguientes variables: -->

env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=nexalearn_db
DB_USERNAME=root
DB_PASSWORD=


<!-- En una instalación estándar de XAMPP normalmente se utiliza: -->

env
DB_USERNAME=root
DB_PASSWORD=


<!-- Si la instalación de MySQL tiene contraseña, deberá indicarse: -->

env
DB_PASSWORD=TU_PASSWORD


---

# 7. Ejecutar migraciones

<!-- Ejecutar: -->


php artisan migrate


<!-- Esto creará las tablas necesarias en MySQL. -->

<!-- Entre las principales tablas del proyecto se encuentran: -->


users
categories
courses
personal_access_tokens


---

# 8. Insertar información inicial

<!-- El proyecto incluye seeders para generar información de demostración.

Ejecutar: -->


php artisan db:seed


<!-- También puede reconstruirse completamente la base de datos mediante: -->


php artisan migrate:fresh --seed


<!-- IMPORTANTE:

El comando: -->


php artisan migrate:fresh --seed


<!-- elimina las tablas existentes y vuelve a crearlas.
Se recomienda utilizarlo únicamente en entornos de desarrollo. -->

---

# 9. Ejecutar backend

<!-- Ejecutar: -->

php artisan serve

<!-- Por defecto Laravel estará disponible en: -->


http://127.0.0.1:8000


<!-- La API estará disponible desde: -->


http://127.0.0.1:8000/api


<!-- Ejemplo: -->


http://127.0.0.1:8000/api/courses


<!-- La terminal donde se ejecutó Laravel debe permanecer abierta. -->

---

# Instalación del Frontend

# 10. Descargar frontend

<!-- En otra ubicación o desde la carpeta general del proyecto: -->


git clone URL_DEL_REPOSITORIO_FRONTEND


<!-- Ejemplo: -->


git clone https://github.com/USUARIO/nexalearn-web.git


<!-- Entrar al proyecto: -->


cd nexalearn-web


---

# 11. Instalar dependencias de React

<!-- Ejecutar: -->


npm install


<!-- npm instalará automáticamente todas las dependencias indicadas en: -->


package.json


<!-- Entre las dependencias utilizadas se encuentran: -->


React
React DOM
React Router DOM
React Icons
Vite


---

# 12. Configurar URL de la API

<!-- Crear un archivo: -->


.env


<!-- en la raíz de: -->


nexalearn-web


<!-- Agregar: -->

env
VITE_API_URL=http://127.0.0.1:8000/api


<!-- Esta variable indica al frontend dónde está ejecutándose la API Laravel. -->

<!-- Ejemplo de estructura: -->


nexalearn-web/
│
├── src/
├── public/
├── .env
├── package.json
└── vite.config.js


<!-- Después de crear o modificar `.env`, se debe reiniciar Vite. -->

---

# 13. Ejecutar frontend

<!-- Ejecutar: -->


npm run dev


<!-- Vite mostrará una dirección similar a: -->


http://localhost:5173


<!-- Abrir esa dirección en el navegador. -->

---

# Ejecución completa del proyecto

<!-- Para utilizar la aplicación deben existir dos terminales abiertas. -->

## Terminal 1 - Backend


cd nexalearn-api
php artisan serve


<!-- Resultado: -->


http://127.0.0.1:8000


## Terminal 2 - Frontend


cd nexalearn-web
npm run dev


<!-- Resultado: -->


http://localhost:5173


<!-- Después abrir: -->


http://localhost:5173


---

# Base de datos

<!-- La aplicación utiliza una base de datos relacional MySQL. -->

<!-- Las principales entidades son: -->


USERS
------------------------------
id
name
email
password
role
created_at
updated_at


CATEGORIES
------------------------------
id
name
created_at
updated_at


COURSES
------------------------------
id
title
description
price
image
category_id
created_at
updated_at


---

# Relaciones

<!-- La principal relación del sistema es: -->


CATEGORIES
     │
     │ 1
     │
     │
     │ N
     ▼
COURSES


<!-- Una categoría puede contener múltiples cursos.

Cada curso pertenece a una categoría.

La relación se implementa mediante: -->


courses.category_id


que referencia:


categories.id


---

# Normalización

<!-- La base de datos fue diseñada considerando principios de normalización.

La información de categorías se almacena de forma independiente de los cursos.

En lugar de almacenar repetidamente: -->


Desarrollo Web
Desarrollo Web
Desarrollo Web


<!-- dentro de cada curso, se almacena una referencia: -->


category_id


Esto permite:

- Evitar redundancia.
- Mantener consistencia.
- Mejorar la integridad de los datos.
- Facilitar modificaciones.
- Mantener separadas las responsabilidades de cada entidad.

---

# Usuarios y roles

<!-- El sistema utiliza dos roles: -->


admin
user


## Usuario

<!-- Puede: -->

- Consultar los cursos.
- Consultar categorías.
- Filtrar cursos.
- Ver información completa de un curso.
- Iniciar sesión.
- Cerrar sesión.

## Administrador

<!-- Además de las funciones anteriores puede: -->

- Acceder al panel administrativo.
- Crear cursos.
- Editar cursos.
- Eliminar cursos.
- Administrar información del catálogo.

---

# Usuarios de demostración

<!-- Los seeders incluyen usuarios utilizados exclusivamente para demostrar el funcionamiento del sistema. -->

## Administrador


Correo:
admin@nexalearn.com

Contraseña:
Admin12345


## Usuario


Correo:
demo@nexalearn.com

Contraseña:
User12345


IMPORTANTE:

Estas credenciales son únicamente para demostración y desarrollo.

No deben utilizarse como credenciales de producción.

---

# Autenticación

La autenticación de la API se realiza mediante:


Laravel Sanctum


El proceso general es:


React
   │
   │ email + password
   ▼
POST /api/login
   │
   ▼
Laravel
   │
   │ validación
   ▼
Sanctum
   │
   │ token
   ▼
React


Después de iniciar sesión, las solicitudes protegidas utilizan:

http
Authorization: Bearer TOKEN


---

# Autorización

El acceso administrativo se encuentra protegido tanto en frontend como en backend.

En React se utiliza una ruta protegida para evitar que usuarios normales accedan al panel administrativo.

Sin embargo, la seguridad principal se encuentra en Laravel.

Las operaciones:


POST
PUT
DELETE


sobre cursos utilizan:


auth:sanctum


junto con:


admin


Por lo tanto:


Sin autenticación
        ↓
401 Unauthorized

Usuario normal
        ↓
403 Forbidden

Administrador
        ↓
Acceso permitido


---

# Endpoints principales de la API

La URL base local es:


http://127.0.0.1:8000/api


## Autenticación

### Registrar usuario

http
POST /api/register


Ejemplo:

json
{
    "name": "Usuario",
    "email": "usuario@ejemplo.com",
    "password": "password123",
    "password_confirmation": "password123"
}


---

### Iniciar sesión

http
POST /api/login


Ejemplo:

json
{
    "email": "admin@nexalearn.com",
    "password": "Admin12345"
}


---

### Usuario autenticado

http
GET /api/me


Requiere:

http
Authorization: Bearer TOKEN


---

### Cerrar sesión

http
POST /api/logout


Requiere autenticación.

---

# Cursos

## Obtener cursos

http
GET /api/courses


Acceso:


Público


---

## Obtener curso individual

http
GET /api/courses/{id}


Ejemplo:


GET /api/courses/1


---

## Crear curso

http
POST /api/courses


Acceso:


Administrador


Ejemplo:

json
{
    "title": "React desde cero",
    "description": "Curso introductorio de React.",
    "price": 299,
    "image": "https://ejemplo.com/react.jpg",
    "category_id": 1
}


---

## Actualizar curso

http
PUT /api/courses/{id}


Ejemplo:


PUT /api/courses/1


Ejemplo de body:

json
{
    "title": "React actualizado",
    "description": "Curso actualizado de React.",
    "price": 349,
    "category_id": 1
}


Acceso:


Administrador


---

## Eliminar curso

http
DELETE /api/courses/{id}


Ejemplo:


DELETE /api/courses/1


Acceso:


Administrador


---

# Códigos HTTP utilizados

La API utiliza diferentes códigos HTTP dependiendo del resultado de la operación.


200 OK
Solicitud realizada correctamente.

201 Created
Recurso creado correctamente.

401 Unauthorized
El usuario no se encuentra autenticado.

403 Forbidden
El usuario está autenticado pero no tiene permisos.

404 Not Found
El recurso solicitado no existe.

422 Unprocessable Entity
Los datos enviados no cumplen las reglas de validación.

500 Internal Server Error
Error interno del servidor.


---

# Validaciones

La API realiza validación en el backend para evitar almacenar información incorrecta.

Ejemplos de reglas aplicadas a los cursos:


title
- requerido
- string
- mínimo de caracteres
- longitud máxima

description
- requerida
- string
- longitud mínima
- longitud máxima

price
- requerido
- numérico
- no puede ser negativo

image
- opcional
- debe ser una URL válida

category_id
- requerido
- debe corresponder a una categoría existente


Las validaciones del backend no dependen de las validaciones del navegador.

Esto evita que un usuario pueda omitir las restricciones del frontend enviando solicitudes manualmente a la API.

---

# Seguridad

El proyecto implementa las siguientes medidas básicas de seguridad:

- Contraseñas almacenadas mediante hash.
- Autenticación mediante Laravel Sanctum.
- Tokens de acceso.
- Middleware de autenticación.
- Middleware de administrador.
- Validación de solicitudes.
- Separación de rutas públicas y privadas.
- Control de roles.
- El registro público siempre crea usuarios con rol `user`.
- Protección de operaciones CRUD administrativas.
- Variables sensibles almacenadas mediante `.env`.
- El archivo `.env` no debe almacenarse en GitHub.

---

# Estructura principal del Backend


nexalearn-api/
│
├── app/
│   │
│   ├── Http/
│   │   ├── Controllers/
│   │   │   └── Api/
│   │   │       ├── AuthController.php
│   │   │       ├── CategoryController.php
│   │   │       └── CourseController.php
│   │   │
│   │   └── Middleware/
│   │       └── AdminMiddleware.php
│   │
│   └── Models/
│       ├── User.php
│       ├── Category.php
│       └── Course.php
│
├── bootstrap/
│   └── app.php
│
├── database/
│   ├── migrations/
│   └── seeders/
│       └── DatabaseSeeder.php
│
├── routes/
│   ├── api.php
│   └── web.php
│
├── .env.example
└── composer.json


---

# Estructura principal del Frontend


nexalearn-web/
│
├── public/
│   └── images/
│
├── src/
│   │
│   ├── components/
│   │   ├── CourseCard.jsx
│   │   ├── CourseDetailsModal.jsx
│   │   └── ProtectedRoute.jsx
│   │
│   ├── context/
│   │   └── AuthContext.jsx
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   └── Admin.jsx
│   │
│   ├── services/
│   │   └── api.js
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── .env
├── package.json
└── vite.config.js


---

# Diseño responsive

La aplicación fue diseñada para adaptarse a diferentes tamaños de pantalla.

Se realizaron pruebas principalmente en:


375px   - dispositivo móvil
768px   - tablet
1366px  - laptop
1920px  - monitor de escritorio


La distribución se adapta de acuerdo con el dispositivo.

Ejemplo:


Desktop
Cursos: 3 columnas

Tablet
Cursos: 2 columnas

Móvil
Cursos: 1 columna


También se adaptan:

- Navbar.
- Hero.
- Formularios.
- Panel administrativo.
- Tabla.
- Categorías.
- Testimonios.
- Footer.
- Modales.

---

# Scripts del Frontend

## Ejecutar desarrollo


npm run dev


## Generar versión de producción


npm run build


El resultado será generado en:


dist/


## Previsualizar compilación


npm run preview


---

# Comandos útiles de Laravel

## Ejecutar servidor


php artisan serve


## Ver rutas


php artisan route:list


## Ver únicamente rutas API


php artisan route:list --path=api


## Ejecutar migraciones


php artisan migrate


## Ejecutar seeders


php artisan db:seed


## Recrear base de datos


php artisan migrate:fresh --seed


## Limpiar cachés de Laravel


php artisan optimize:clear


---

# Flujo de instalación resumido

## Backend


git clone URL_BACKEND
cd nexalearn-api

composer install

copy .env.example .env

php artisan key:generate


Crear:


nexalearn_db


Configurar `.env`.

Después:


php artisan migrate
php artisan db:seed
php artisan serve


---

## Frontend

En otra terminal:


git clone URL_FRONTEND
cd nexalearn-web

npm install


Crear:


.env


con:

env
VITE_API_URL=http://127.0.0.1:8000/api


Ejecutar:


npm run dev


Abrir:


http://localhost:5173


---

# Solución de problemas

## Error de conexión a base de datos

Ejemplo:


SQLSTATE[HY000] [1049] Unknown database


Comprobar que la base de datos:


nexalearn_db


existe.

También verificar:

env
DB_DATABASE=nexalearn_db
DB_USERNAME=root
DB_PASSWORD=


---

## Error Access denied de MySQL

Comprobar usuario y contraseña configurados en:


.env


Ejemplo:

env
DB_USERNAME=root
DB_PASSWORD=


---

## Laravel no reconoce cambios en `.env`

Ejecutar:


php artisan optimize:clear


Después reiniciar:


php artisan serve


---

## React muestra "Failed to fetch"

Comprobar que Laravel se encuentre ejecutándose:


php artisan serve


Verificar:


http://127.0.0.1:8000/api/courses


Si esa URL no funciona, el frontend tampoco podrá consumir la API.

---

## Error 401


401 Unauthorized


Significa que la operación requiere autenticación o el token no es válido.

Cerrar sesión y volver a iniciar sesión puede generar un nuevo token.

---

## Error 403


403 Forbidden


Significa que el usuario está autenticado, pero no cuenta con rol de administrador para realizar la operación.

---

## Error 422


422 Unprocessable Entity


Significa que alguno de los datos enviados no cumple con las reglas de validación.

Revisar los campos enviados en la solicitud.

---

## Puerto 8000 ocupado

Laravel puede ejecutarse en otro puerto:


php artisan serve --port=8001


En este caso debe modificarse también el frontend:

env
VITE_API_URL=http://127.0.0.1:8001/api


---

## Puerto 5173 ocupado

Vite seleccionará automáticamente otro puerto.

Revisar la URL mostrada después de:


npm run dev


---

# Pruebas de API

Los endpoints pueden probarse utilizando Postman.

Flujo recomendado:


1. POST /api/login
2. Copiar token
3. Configurar Authorization → Bearer Token
4. Probar GET /api/me
5. Probar POST /api/courses
6. Probar PUT /api/courses/{id}
7. Probar DELETE /api/courses/{id}


Para comprobar autorización:


Sin token
POST /api/courses
→ 401

Token de usuario
POST /api/courses
→ 403

Token de administrador
POST /api/courses
→ operación permitida


---

