const express = require("express");
const router = express.Router();
const LicenseType = require("../../models/LicenseType");

// Gets All Members
router.get("/", (req, res) => {
  LicenseType.findAll().then((types) => res.json(types));
});

// Get Single Member
router.get("/:id", (req, res) => {
  LicenseType.findOne({ where: { id: req.params.id } }).then((types) =>
    res.json(types)
  );
});

// Create Member
router.post("/", (req, res) => {
  const newData = {
    ...req.body,
  };

  if (!newData.name) {
    res.status(400).json({ msg: "Please include a name" });
  } else {
    LicenseType.create(newData).then((submitedData) => res.json(submitedData));
  }
});

// // Update Member
// router.put("/:id", (req, res) => {
//   const found = members.some(idFilter(req));

//   if (found) {
//     members.forEach((member, i) => {
//       if (idFilter(req)(member)) {
//         const updMember = { ...member, ...req.body };
//         members[i] = updMember;
//         res.json({ msg: "Member updated", updMember });
//       }
//     });
//   } else {
//     res.status(400).json({ msg: `No member with the id of ${req.params.id}` });
//   }
// });

// // Delete Member
// router.delete("/:id", (req, res) => {
//   const found = members.some(idFilter(req));

//   if (found) {
//     res.json({
//       msg: "Member deleted",
//       members: members.filter((member) => !idFilter(req)(member)),
//     });
//   } else {
//     res.status(400).json({ msg: `No member with the id of ${req.params.id}` });
//   }
// });

module.exports = router;
