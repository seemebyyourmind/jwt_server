"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     
    */

    await queryInterface.bulkInsert(
      "users",
      [
        { email: "phamdinhhaong", username: "John Doe", password: "124" },
        { email: "phamdinhhaong1", username: "John Doe", password: "1241" },
        { email: "phamdinhhaong2", username: "John Doe", password: "1241" },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
