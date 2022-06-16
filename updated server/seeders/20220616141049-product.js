"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    const ItemImage =
      "https://images.pexels.com/photos/6758512/pexels-photo-6758512.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
    return queryInterface.bulkInsert(
      "Products",
      [
        {
          name: "Stairs",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          price: 82.99,
          img: `${ItemImage}`,
          designer: "Jordan Peritz",
          url: "https://www.housebeautiful.com/shopping/furniture/g22548814/best-online-furniture-stores-websites/",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Products", null, {});
  },
};
