const Product = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
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
    tableName: 'products',
  });

  return Product;
};

module.exports = Product;