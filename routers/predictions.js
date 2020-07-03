const { Router } = require("express");
const Prediction = require("../models").predictions;
const sequelize = require("sequelize");
const Match = require("../models").match;

const router = new Router();

// Half written query, not sure if I'm gonna use it
// router.get("/", async (req, res, next) => {
//   const userId = req.body;

//   try {
//     const predictions = await Prediction.findAll({
//       where: userId,
//       include: { model: Match, where: { id: Prediction.matchId } },
//     });
//     res.send(predictions);
//   } catch (e) {
//     next(e);
//   }
// });

// Create prediction
router.post("/", async (req, res, next) => {
  const {
    predGoalsHomeTeam,
    predGoalsAwayTeam,
    userId,
    scoreId,
    fixtureId,
  } = req.body;

  //   console.log(req.body);

  if (
    !predGoalsHomeTeam ||
    !predGoalsAwayTeam ||
    !userId ||
    !scoreId ||
    !fixtureId
  ) {
    return res.status(400).send("Please provide everything");
  }

  try {
    const newPrediction = await Prediction.create({
      predGoalsHomeTeam,
      predGoalsAwayTeam,
      userId,
      scoreId,
      fixtureId,
    });
    // console.log(newPrediction);

    res.status(201).json({ ...newPrediction.dataValues });
  } catch (error) {
    next(error);
  }
});

router.patch("/:userId/:fixtureId", async (req, res, next) => {
  try {
    const fixtureId = parseInt(req.params.fixtureId);
    const userId = parseInt(req.params.userId);
    console.log("What is my fixtureId?", parseInt(fixtureId));
    console.log("What is my userId?", userId);
    const predictionToUpdate = await Prediction.findOne({
      where: sequelize.and({ fixtureId, userId }),
    });
    //Fetch match info from API await axios.get matchUrl/fixtureId
    if (!predictionToUpdate) {
      res.status(404).send("Prediction not found");
    } else {
      const updatedPrediction = await predictionToUpdate.update(req.body);
      res.json(updatedPrediction);
    }
  } catch (e) {
    next(e);
  }
});

module.exports = router;
