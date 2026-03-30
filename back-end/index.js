import mongoose from "mongoose";
import express, { urlencoded } from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());
app.use(urlencoded({ extended: true })); // ✅ FIX

// ✅ FIXED MongoDB URL
mongoose
    .connect("mongodb://localhost:27017/procurement")
    .then(() => {
        console.log("Connected");
    })
    .catch((err) => {
        console.log("error", err);
    });

// ✅ FIXED field name (buyerRemarks)
const reqSchema = new mongoose.Schema({
    buyerRemarks: String,
    country: String,
    date: String,
    department: String,
    port: String,
    priority: String,
    reqNo: String,
    vesselName: String,
});

const requestCollection = mongoose.model("purchaseRequests", reqSchema);

app.post("/createRequest", (req, res) => {
    console.log("Incoming Data:", req.body);

    requestCollection
        .findOne({ reqNo: req.body.reqNo })
        .then((isReqExists) => {
            if (isReqExists) {
                res.send("Please use diff PR No");
            } else {
                const newPurchaseRequest = new requestCollection(req.body);

                newPurchaseRequest
                    .save()
                    .then(() => {
                        res.send("Purchase Request created successfully!");
                    })
                    .catch((err) => {
                        console.log(err);
                        res.send("Error in saving data");
                    });
            }
        })
        .catch((err) => {
            console.log(err);
            res.send("Error in checking request");
        });
});

app.get("/get-my-orders", async (req, res) => {
    const allOrders = await requestCollection.find();
    console.log("my orders", allOrders);
    res.send(allOrders);
});

app.listen(7000, () => {
    console.log("Server started at port 7000");
});