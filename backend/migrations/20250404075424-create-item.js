'use strict';

export default {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Items', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      size: {
        type: Sequelize.ENUM("S", "M", "L")
      },
      price: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      tag: {
        type: Sequelize.ENUM("NEW", "SALE", "FEATURED")
      },
      favorite: {
        type: Sequelize.ENUM("YES", "NO")
      },
      seller_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "userdetails",
          key: "id"
        },
        onDelete: 'CASCADE'
      },
      bought_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "userdetails",
          key: "id"
        },
        onDelete: 'SET NULL'
      },
      image: {
        type: Sequelize.STRING,
        allowNull: false
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP') // Agregado
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP') // Agregado
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Items');
  }
};
