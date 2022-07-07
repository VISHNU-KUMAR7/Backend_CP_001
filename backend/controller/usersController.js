var userAPI = require("../api/userAPI");
const registerUserController = (req, res, next) => {
  try {
    userAPI
      .registerUser(req.body)
      .then((data) => res.status(201).send(data))
      .catch((error) => res.status(201).send("Error in backend!"));
  } catch (error) {
    res.status(201).send({ ...error, status: "Somthing went wrong!" });
  }
};
const loginUserController = (req, res, next) => {
  console.log(req.body);
  try {
    userAPI
      .loginUser(req.body)
      .then((data) => res.status(201).send({ data }))
      .catch((error) => res.status(301).send({ ...error, status: "fail" }));
  } catch (error) {
    res.status(301).send({ ...error, status: "fail" });
  }
};
const profileUserController = (req, res, next) => {
  try {
    userAPI
      .profileUser(req.body)
      .then((data) => res.status(201).send({ data }))
      .catch((error) => res.status(301).send({ ...error, status: "fail" }));
  } catch (error) {
    res.status(301).send({ ...error, status: "fail" });
  }
};
const getIssueByUserController = (req, res, next) => {
  try {
    userAPI
      .getIssueByUser()
      .then((data) => res.status(201).send(data))
      .catch((error) => res.status(301).send(error));
  } catch (error) {
    res.status(301).send(error);
  }
};
const totalIssueByUserController = (req, res, next) => {
  console.log("Data from controller ", req.body);
  try {
    userAPI
      .totalIssueByUser(req.body)
      .then((data) => res.status(201).send(data))
      .catch((e) => res.status(201).send(e));
  } catch (e) {
    res.status(301).send(e);
  }
};
module.exports = {
  registerUserController,
  loginUserController,
  profileUserController,
  getIssueByUserController,
  totalIssueByUserController,
};
