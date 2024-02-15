# Estado-cuenta

Sistema de pedidos donde las personas puedan realizar un pedido de productos y luego pagar en cuotas o de acuerdo a
algún plan de pago.

## Indice

- [Instalación](#instalación)
- [Ejecución del Proyecto](#ejecución-del-proyecto)
- [Uso](#uso)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Funcionalidades](#Funcionalidades)
- [Contribuir](#contribuir)

## Instalación

Asegúrate de tener [Node.js](https://nodejs.org/) instalado en tu máquina.

1. Clona el repositorio

```bash
git clone https://github.com/OmerJuve2023/estado-cuenta.git
```

3. Instala las dependencias

```bash
npm install
```

## Ejecución del Proyecto

1. Inicia la aplicación en modo desarrollo

```bash
npm run dev
```

## Uso

1. Para iniciar la aplicación, ejecuta el siguiente comando en la raíz del proyecto:

```bash
    npm node index.js
```

2. La aplicación estará disponible en http://localhost:3000 por defecto.

## Estructura del Proyecto

A continuación se muestra la estructura de archivos y carpetas del proyecto:

### Cliente (customer)

La tabla `customer` almacena la información de los clientes registrados en el sistema.

| Campo   | Tipo         | Descripción                     |
|---------|--------------|---------------------------------|
| id      | INT          | Identificador único del cliente |
| name    | VARCHAR(100) | Nombre del cliente              |
| email   | VARCHAR(100) | Correo electrónico del cliente  |
| phone   | VARCHAR(20)  | Número de teléfono del cliente  |
| address | VARCHAR(255) | Dirección del cliente           |

### Producto (product)

La tabla `product` contiene la información de los productos disponibles en el sistema.

| Campo       | Tipo           | Descripción                      |
|-------------|----------------|----------------------------------|
| id          | INT            | Identificador único del producto |
| name        | VARCHAR(100)   | Nombre del producto              |
| price       | DECIMAL(10, 2) | Precio del producto              |
| description | TEXT           | Descripción del producto         |

### Pedido (orders)

La tabla `orders` registra la información de los pedidos realizados por los clientes.

| Campo        | Tipo           | Descripción                                          |
|--------------|----------------|------------------------------------------------------|
| id           | INT            | Identificador único del pedido                       |
| customer_id  | INT            | ID del cliente asociado al pedido                    |
| order_date   | DATETIME       | Fecha y hora del pedido                              |
| total_amount | DECIMAL(10, 2) | Monto total del pedido                               |
| status       | ENUM           | Estado del pedido (pendiente, completado, cancelado) |

### Detalle de Pedido (order_detail)

La tabla `order_detail` almacena los detalles de los productos incluidos en cada pedido.

| Campo      | Tipo           | Descripción                               |
|------------|----------------|-------------------------------------------|
| id         | INT            | Identificador único del detalle de pedido |
| order_id   | INT            | ID del pedido asociado                    |
| product_id | INT            | ID del producto incluido en el pedido     |
| quantity   | INT            | Cantidad del producto                     |
| price      | DECIMAL(10, 2) | Precio unitario del producto              |
| subtotal   | DECIMAL(10, 2) | Subtotal del detalle de pedido            |

### Pago (payment)

La tabla `payment` registra los pagos realizados por los clientes para los pedidos.

| Campo        | Tipo           | Descripción                  |
|--------------|----------------|------------------------------|
| id           | INT            | Identificador único del pago |
| order_id     | INT            | ID del pedido asociado       |
| amount       | DECIMAL(10, 2) | Monto del pago               |
| payment_date | DATETIME       | Fecha y hora del pago        |

### Diagramas de Tablas

A continuación se muestra el diagrama de las tablas del sistema:

![customer.png](..%2F..%2FDownloads%2Fcustomer.png)

## Funcionalidades

La aplicación ofrece las siguientes funcionalidades:

* **Clientes:** Gestiona la información de los clientes, incluyendo nombre, correo electrónico, teléfono y dirección.
* **Productos:** Administra los productos disponibles, con información como nombre, precio y descripción.
* **Pedidos:** Realiza seguimiento de los pedidos realizados por los clientes, incluyendo la fecha del pedido, el monto
  total y el estado del pedido (pendiente, completado, cancelado).
* **Detalles de Pedidos:** Permite agregar productos a los pedidos con información detallada como cantidad, precio
  unitario y subtotal.
* **Pagos:** Registra los pagos realizados por los clientes, incluyendo el monto del pago y la fecha.

### Controladores

La lógica de negocio de la aplicación está implementada en los siguientes controladores:

* **customerController:** Maneja las operaciones relacionadas con los clientes, como obtener todos los clientes, crear
  un nuevo cliente, actualizar la información de un cliente y eliminar un cliente.
* **productController:** Gestiona las operaciones relacionadas con los productos, como obtener todos los productos,
  crear un nuevo producto, actualizar la información de un producto y eliminar un producto.
* **orderController:** Controla las operaciones relacionadas con los pedidos, como obtener todos los pedidos, crear un
  nuevo pedido, actualizar el estado de un pedido y eliminar un pedido.
* **orderDetailController:** Maneja las operaciones relacionadas con los detalles de los pedidos, como obtener todos los
  detalles de un pedido, agregar un nuevo detalle de pedido, actualizar la información de un detalle de pedido y
  eliminar un detalle de pedido.
* **paymentController:** Controla las operaciones relacionadas con los pagos, como obtener todos los pagos, registrar un
  nuevo pago, actualizar la información de un pago y eliminar un pago.

## Contribuir

Si deseas contribuir a este proyecto, sigue estos pasos:

1. Haz un fork del proyecto.
2. Crea una rama para tu nueva funcionalidad `(git checkout -b nueva-funcionalidad)`.
3. Realiza tus cambios y haz commit de ellos `(git commit -am 'Agrega nueva funcionalidad')`.
4. Haz push de tu rama `(git push origin nueva-funcionalidad)`.
5. Abre una solicitud de extracción en GitHub.

