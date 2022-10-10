const RentedProduct = (sequelize, DataTypes) => {
  const RentedProduct = sequelize.define('RentedProduct', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      field: 'user_id'
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    urlImage: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'url_image'
    },  
    deliveryTime: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'delivery_time',
    },
    subscriptionPeriod: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'subscription_period',
    },
  }, {
    timestamps: false,
    tableName: 'rented_products',
  });

  RentedProduct.associate = (models) => {
    RentedProduct.belongsTo(models.User, {
      foreignKey: 'userId', as: 'user'
    });
  }
  return RentedProduct;
}

module.exports = RentedProduct;
