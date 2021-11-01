const request = require("../models/Request");

//get all requests for "logged in user"
const userRequests = async (req, res) => {
  await request.find({user_id: req.params.user_id}, function (err, docs) {
    if (err){
        console.log("Error: ", err)
        res.status(400).json(err);  
      }
    else{
        console.log("Success: ", docs);
        res.status(200).json(docs);  
    }});
};

//create a new request
const createRequest = async (req, res) => {
  const { user_id, sitter_id, start, end, accepted, declined, paid } = req.body.data;
  await request.create({user_id:`${user_id}`, sitter_id:`${sitter_id}`, start:`${start}`, end:`${end}`, accepted:`${accepted}`, declined:`${declined}`, paid:`${paid}`}, function (err, docs) {
    if (err){
        console.log("Error: ", err)
        res.status(400).json(err);  
      }
    else{
        console.log("Created request: ", docs);
        res.status(201).json(docs);  
    }});
};

//update request if accepted or declined
const updateRequest = async (req, res) => {
  const { _id, answer, answerValue } = req.body.data;
  if (answer === 'accepted') {
    await request.findByIdAndUpdate({ _id }, { accepted: answerValue }, function (err, docs) {
      if (err){
          console.log("Error: ", err)
          res.status(500).json(err);
        }
      else{
          console.log("Updated request: ", docs);
          res.status(200).json(docs);
      }});
  } else if (answer === 'declined') {
    await request.findByIdAndUpdate({ _id }, { declined: answerValue }, function (err, docs) { 
      if (err){
      console.log("Error: ", err)
      res.status(500).json(err); 
    }
      else{
          console.log("Updated request: ", docs);
          res.status(200).json(docs);
      }});
  }
};

module.exports = { userRequests, createRequest, updateRequest };