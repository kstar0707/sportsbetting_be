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
          matchId: 1,
        },
        {
          predGoalsHomeTeam: 2,
          predGoalsAwayTeam: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1,
          scoreId: 1,
          matchId: 2,
        },
        {
          predGoalsHomeTeam: 3,
          predGoalsAwayTeam: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1,
          scoreId: 1,
          matchId: 3,
        },
        {
          predGoalsHomeTeam: 1,
          predGoalsAwayTeam: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1,
          scoreId: 1,
          matchId: 4,
        },
        {
          predGoalsHomeTeam: 1,
          predGoalsAwayTeam: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1,
          scoreId: 1,
          matchId: 5,
        },
        {
          predGoalsHomeTeam: 1,
          predGoalsAwayTeam: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1,
          scoreId: 1,
          matchId: 6,
        },

        {
          predGoalsHomeTeam: 0,
          predGoalsAwayTeam: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1,
          scoreId: 1,
          matchId: 7,
        },
        {
          predGoalsHomeTeam: 0,
          predGoalsAwayTeam: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1,
          scoreId: 1,
          matchId: 8,
        },
        {
          predGoalsHomeTeam: 3,
          predGoalsAwayTeam: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1,
          scoreId: 1,
          matchId: 9,
        },

        {
          predGoalsHomeTeam: 2,
          predGoalsAwayTeam: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1,
          scoreId: 1,
          matchId: 10,
        },
        {
          predGoalsHomeTeam: 2,
          predGoalsAwayTeam: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1,
          scoreId: 1,
          matchId: 11,
        },
        {
          predGoalsHomeTeam: 1,
          predGoalsAwayTeam: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1,
          scoreId: 1,
          matchId: 12,
        },
        {
          predGoalsHomeTeam: 1,
          predGoalsAwayTeam: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1,
          scoreId: 1,
          matchId: 13,
        },
        {
          predGoalsHomeTeam: 3,
          predGoalsAwayTeam: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1,
          scoreId: 1,
          matchId: 14,
        },
        {
          predGoalsHomeTeam: 1,
          predGoalsAwayTeam: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1,
          scoreId: 1,
          matchId: 15,
        },
        {
          predGoalsHomeTeam: 2,
          predGoalsAwayTeam: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1,
          scoreId: 1,
          matchId: 16,
        },
        {
          predGoalsHomeTeam: 1,
          predGoalsAwayTeam: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1,
          scoreId: 1,
          matchId: 17,
        },
        {
          predGoalsHomeTeam: 2,
          predGoalsAwayTeam: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1,
          scoreId: 1,
          matchId: 18,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("predictions", null, {});
  },
};
