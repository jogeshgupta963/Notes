import { app } from "./app";
import { config } from "./config/config";
import { connection } from "./config/connection";
import "dotenv/config";
// import { initMetricsServer } from "./metrics/metrics";
function checkEnv() {
    const env = [
        "PORT",
        "NODE_ENV",
        "COOKIE_NAME",
        "JWT_SECRET",
        "JWT_EXPIRATION",
        "MONGO_URI",
    ];
    env.forEach((data) => {
        if (!process.env[data]) {
            console.log(`${data} env not found`);
            process.exit(1);
        }
    });
}

async function initServer() {
    checkEnv();
    const port = process.env.PORT!;
    try {
        await connection(config.MONGO_URI_TESTING);
        console.log("Connected to Mongodb");
    } catch (err) {
        if (err instanceof Error) {
            console.log(err.message);
        }
    }

    return app.listen(config.PORT, () => {
        console.log("Server listening on PORT ", config.PORT);
    });
}

initServer();
// initMetricsServer();
