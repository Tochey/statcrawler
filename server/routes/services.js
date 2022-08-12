const express = require("express");
const router = express.Router();
const client = require('../config/redis.config')
require('../pollServices')

router.get("/zoom", async (req, res) => {
  client.get("zoomStatus").then((e) => {
    res.json(JSON.parse(e));
  });
});

router.get("/notion", async (req, res) => {
  client.get("notionStatus").then((e) => {
    res.json(JSON.parse(e));
  });
});

router.get("/slack", async (req, res) => {
  client.get("slackStatus").then((e) => {
    res.json(JSON.parse(e));
  });
});

router.get("/egnyte", async (req, res) => {
  client.get("egnyteStatus").then((e) => {
    res.json(JSON.parse(e));
  });
});
router.get("/goToAssist", async (req, res) => {
  client.get("goToAssistStatus").then((e) => {
    res.json(JSON.parse(e));
  });
});

router.get("/office", async (req, res) => {
  client.get("officeStatus").then((e) => {
    res.json(JSON.parse(e));
  });
});

router.get("/jamf", async (req, res) => {
  client.get("jamfStatus").then((e) => {
    res.json(JSON.parse(e));
  });
});

module.exports = router;
