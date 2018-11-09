const express = require("express");
const router = express.Router();
var shortid = require('shortid');
const fs = require('fs');
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapterBrokers = new FileSync("../lib/brokers.json");
const adapterShares = new FileSync("../lib/shares.json");
const adapterAuctionSettings = new FileSync("../lib/auctionSettings.json");
var dbBrokers = low(adapterBrokers);
var dbShares = low(adapterShares);
var dbAuctionSettings = low(adapterAuctionSettings);
var brokers = JSON.parse(fs.readFileSync('../lib/brokers.json','utf-8'));
var shares = JSON.parse(fs.readFileSync('../lib/shares.json','utf-8'));
var auctionSettings = JSON.parse(fs.readFileSync('../lib/auctionSettings.json','utf-8'));

router.get("/", (req, res, next)=>{
  res.end("it works");
  next();
});

router.post("/api/brokers",(req,res)=>{
  console.log("post brokers on http://localhost:3000/data/brokers");
  res.status(200);
  res.json(brokers.arr);
});

router.put("/api/brokers",(req,res)=>{
  console.log("put broker on http://localhost:3000/data/brokers");
  brokers.arr=req.body;
  res.status(200);
  res.json({});
  dbBrokers.set('arr', brokers.arr)
    .write();
});

router.post("/api/shares",(req,res)=>{
  console.log("post shares on http://localhost:3000/data/shares");
  res.status(200);
  res.json(shares.arr);
});

router.put("/api/shares",(req,res)=>{
  console.log("put shares on http://localhost:3000/data/shares");
  shares.arr = req.body;
  res.status(200);
  res.json({});
  dbShares.set('arr', shares.arr)
    .write();
});

router.post("/api/auctionSettings",(req,res)=>{
  console.log("post auction settings on http://localhost:3000/data/auctionSettings");
  res.status(200);
  res.json(auctionSettings.auc);
});

router.put("/api/auctionSettings",(req,res)=>{
  console.log("put auction settings on http://localhost:3000/data/auctionSettings");
  auctionSettings.auc = req.body;
  res.status(200);
  res.json({});
  dbAuctionSettings.set('auc', auctionSettings.auc)
    .write();
});

module.exports = router;
