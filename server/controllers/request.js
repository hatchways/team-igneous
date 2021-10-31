

//get all requests for logged in user
const userRequests = (req, res) => {
  try {
  const result = request.find();
  return res.json(result);
  } catch (err) {
    console.log(err);
    console.err(err);
    message('failed to retrieve requests');
    return res.json(message);
  }
}


//post a request
const createRequest = (req, res) => {
  try {
  const result = request.create();
  return res.json(result);
  } catch (err) {
    console.log(err);
    console.err(err);
    message('failed to retrieve requests');
    return res.json(message);
  }
}


//update all requests
const updateRequest = (req, res) => {
  try {
  const query = req.body;
  delete update[id]
  return res.json(result);
  } catch (err) {
    console.log(err);
    console.err(err);
    message('failed to post a request at this time');
    return res.json(message);
  }
}




