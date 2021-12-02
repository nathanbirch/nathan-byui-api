module.exports = (mongoose) => {
  const Temple = mongoose.model(
    'temples',
    mongoose.Schema({
      name: String,
      location: String,
      dedicated: String,
    })
  );

  return Temple;
};
