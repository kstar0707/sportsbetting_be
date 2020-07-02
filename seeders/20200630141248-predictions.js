"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "predictions",
      [
        {
          predGoalsHomeTeam: 1,
          predGoalsAwayTeam: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1,
          scoreId: 1,
          fixtureId: 1079,
        },
        {
          predGoalsHomeTeam: 2,
          predGoalsAwayTeam: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1,
          scoreId: 1,
          fixtureId: 1081,
        },
        {
          predGoalsHomeTeam: 3,
          predGoalsAwayTeam: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1,
          scoreId: 1,
          fixtureId: 1080,
        },
        {
          predGoalsHomeTeam: 1,
          predGoalsAwayTeam: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1,
          scoreId: 1,
          fixtureId: 1082,
        },
        {
          predGoalsHomeTeam: 1,
          predGoalsAwayTeam: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1,
          scoreId: 1,
          fixtureId: 1071,
        },
        {
          predGoalsHomeTeam: 1,
          predGoalsAwayTeam: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1,
          scoreId: 1,
          fixtureId: 1073,
        },
        {
          predGoalsHomeTeam: 2,
          predGoalsAwayTeam: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1,
          scoreId: 1,
          fixtureId: 1075,
        },
        {
          predGoalsHomeTeam: 0,
          predGoalsAwayTeam: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1,
          scoreId: 1,
          fixtureId: 1077,
        },
        {
          predGoalsHomeTeam: 0,
          predGoalsAwayTeam: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1,
          scoreId: 1,
          fixtureId: 1072,
        },
        {
          predGoalsHomeTeam: 3,
          predGoalsAwayTeam: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 2,
          scoreId: 1,
          fixtureId: 1079,
        },
        {
          predGoalsHomeTeam: 1,
          predGoalsAwayTeam: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 2,
          scoreId: 1,
          fixtureId: 1081,
        },
        {
          predGoalsHomeTeam: 2,
          predGoalsAwayTeam: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 2,
          scoreId: 1,
          fixtureId: 1080,
        },
        {
          predGoalsHomeTeam: 2,
          predGoalsAwayTeam: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 2,
          scoreId: 1,
          fixtureId: 1082,
        },
        {
          predGoalsHomeTeam: 1,
          predGoalsAwayTeam: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 2,
          scoreId: 1,
          fixtureId: 1071,
        },
        {
          predGoalsHomeTeam: 1,
          predGoalsAwayTeam: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 2,
          scoreId: 1,
          fixtureId: 1073,
        },
        {
          predGoalsHomeTeam: 3,
          predGoalsAwayTeam: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 2,
          scoreId: 1,
          fixtureId: 1075,
        },
        {
          predGoalsHomeTeam: 1,
          predGoalsAwayTeam: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 2,
          scoreId: 1,
          fixtureId: 1077,
        },
        {
          predGoalsHomeTeam: 2,
          predGoalsAwayTeam: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 2,
          scoreId: 1,
          fixtureId: 1072,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("predictions", null, {});
  },
};
