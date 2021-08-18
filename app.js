const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const port = process.env.PORT || 8080;
const orders = [];
app.use(bodyparser.json());

const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: "Customer API",
            description: "Customer API Information",
            contact: {
                name: "Amazing Developer"
            },
            servers: ["http://localhost:8080"]
        }
    },
    apis: ["app.js"]
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Routes
/**
 * @swagger
 * /api/order:
 *    post:
 *      description: Create an order
 *    parameters:
 *      - name: customer_name
 *        in: query
 *        description: Customer name
 *        required: true
 *        schema:
 *          type: string
 *          format: string
 *      - name: food_name
 *        in: query
 *        description: Food name
 *        required: true
 *        schema:
 *          type: string
 *          format: string
 *    responses:
 *      '200':
 *        description: Order is successfully placed
 *      '401':
 *        description: Invalid order placed
 */
app.post("/api/order", (req, res) => {
    const order = req.body;

    if (order.customer_name || order.food_name) {
        orders.push({
            ...order,
            id: orders.length + 1,
            order_date: Date.now().toString()
        });
        console.log();
        res.status(200).json({
            message: "Order is successfully placed"
        });
    } else {
        res.status(401).json({
            message: "Invalid order placed"
        });
    }
});

/**
 * @swagger
 * /api/orders:
 *  get:
 *    description: Get all orders
 *    responses:
 *      '200':
 *        description: Successfully view to listing all the orders being placed
 */
app.get("/api/orders", (req, res) => {
    res.status(200).send(orders);
});

app.listen(port, () => {
    console.log(`running at port ${port}`);
});