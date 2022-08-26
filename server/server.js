require("dotenv").config({ path: "./config.env" });
const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const connectDB = require("./config/db");
connectDB();
mongoose.promise = global.Promise;

const app = express();
const cors = require("cors");
const cron = require("node-schedule");

const {
  ResetAndForward,
  FindAssignedToTwo,
  IncDayCount,
  SendMessageToForward,
} = require("./cron-jobs/DayCountInc");

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(cookieParser());
app.use(cors());

app.use("/api/user", require("./routes/user_routes"));
app.use("/api/grievance", require("./routes/grievance_routes"));

app.use("/api/officer", require("./routes/officer_routes"));

app.use("/api/forwards", require("./routes/forward_route"));
app.use("/api/superadmin", require("./routes/superadmin_routes"));

app.use("/api/uniadmin", require("./routes/uni_admin_routes"));

app.use("/api/institute", require("./routes/institute_routes"));
app.use("/api/regional", require("./routes/regional_officer_routes"));

app.use("/api/feedback", require("./routes/feedback_routes"));

app.use("/api/regionaladmin", require("./routes/regional-routes"));

app.use("/api/delete_request", require("./routes/deleterequest_routes"));

app.use("/api/lang",require("./routes/lang_routes"))
// Cron jobs

cron.scheduleJob("*/35 * * * * *", () => {
  SendMessageToForward();
});

cron.scheduleJob("*/2 * * * * *", () => {
  IncDayCount(), ResetAndForward(), FindAssignedToTwo();
});

const port = process.env.PORT || 3001;

const server = app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

process.on("unhandledRejection", (err, promise) => {
  console.log(`Logged error ${err}`);
  server.close(() => process.exit(1));
});
