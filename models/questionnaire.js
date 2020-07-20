module.exports = function (sequelize, DataTypes) {
  var Questionnaire = sequelize.define("Questionnaire", {
    first_name: {
      type: DataTypes.STRING,
      notNull: true
    },
    last_name: {
      type: DataTypes.STRING,
      notNull: true
    },
    dob_month: {
      type: DataTypes.STRING,
      notNull: true
    },
    dob_day: {
      type: DataTypes.INTEGER,
      notNull: true
    },
    dob_year: {
      type: DataTypes.INTEGER,
      notNull: true
    },
    grade: DataTypes.STRING,
    parent: DataTypes.STRING,
    allergies: DataTypes.STRING,
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    zip: DataTypes.INTEGER,
    phone: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      isEmail: true
    },
    fav_color: DataTypes.STRING,
    fav_candy: DataTypes.STRING,
    fav_icecream: DataTypes.STRING,
    fav_music: DataTypes.STRING,
    fav_artist: DataTypes.STRING,
    fav_song: DataTypes.STRING,
    fav_book: DataTypes.STRING,
    fav_person: DataTypes.STRING,
    fav_saying: DataTypes.STRING,
    fav_drink: DataTypes.STRING,
    fav_food: DataTypes.STRING,
    fav_fruit: DataTypes.STRING,
    fav_game: DataTypes.STRING,
    fav_dance: DataTypes.STRING,
    fav_clothes: DataTypes.STRING,
    fav_style: DataTypes.STRING,
    fav_app: DataTypes.STRING
  });

  return Questionnaire;
};
