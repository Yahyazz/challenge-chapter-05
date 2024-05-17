import { Sequelize } from 'sequelize';
import db from '../config/Database.js';

const { DataTypes } = Sequelize;

const Cars = db.define(
  'cars',
  /* 
    fix pake [nama, tipe, harga, foto]
    name string
    carType string
    rentPerDay integer
    imgUrl string
  */
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4,
    },
    name: DataTypes.STRING,
    carType: DataTypes.STRING,
    rentPerDay: DataTypes.INTEGER,
    imgUrl: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  }
);

export default Cars;

(async () => {
  await db.sync();
})();
