const express = require("express");

const router = express.Router();

let friends = {
  "johnsmith@gamil.com": {
    firstName: "John",
    lastName: "Doe",
    DOB: "22-12-1990",
  },
  "annasmith@gamil.com": {
    firstName: "Anna",
    lastName: "smith",
    DOB: "02-07-1983",
  },
  "peterjones@gamil.com": {
    firstName: "Peter",
    lastName: "Jones",
    DOB: "21-03-1989",
  },
};

// GET request: Retrieve all friends
router.get("/", (req, res) => {
  res.send(JSON.stringify(friends, null, 4));
});

// GET by specific ID request: Retrieve a single friend with email ID
router.get("/:email", (req, res) => {
  const email = req.params.email;
  friend = friends[email];
  if (friend) res.send(friend);
  else res.send("User does not exist");
});

// POST request: Add a new friend
router.post("/", (req, res) => {
  if (req.body.email) {
    friends[req.body.email] = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      DOB: req.body.DOB,
    };
  }
  res.send("The user " + req.body.firstName + " has been added!");
});

// PUT request: Update the details of a friend with email id
router.put("/:email", (req, res) => {
  const email = req.params.email;
  if (email != null) {
    let friendToUpdate = friends[email];
    if (friendToUpdate) {
      let dob = req.body.DOB;
      let firstName = req.body.firstName;
      let lastName = req.body.lastName;
      if (dob) friendToUpdate["DOB"] = dob;
      if (firstName) friendToUpdate["firstName"] = firstName;
      if (lastName) friendToUpdate["lastName"] = lastName;
      res.send("The user " + req.body.firstName + " has been updated");
    } else res.send("User does not exist");
  } else res.send("Email id is null");
});

// DELETE request: Delete a friend by email id
router.delete("/:email", (req, res) => {
  const emailToDelete = req.params.email;
  let friendToDelete = friends[emailToDelete];
  if (friendToDelete) {
    delete friends[emailToDelete];
    res.send("User with " + emailToDelete + " has been deleted");
  } else res.send("User with " + emailToDelete + " does not exist");
});

module.exports = router;
