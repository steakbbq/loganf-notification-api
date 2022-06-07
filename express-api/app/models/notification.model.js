module.exports = (mongoose) => {
  return mongoose.model(
    "notification",
    mongoose.Schema(
      {
        type: String,
        title: String,
        content: String,
        deletedAt: Date,
      },
      { timestamps: true }
    )
  );
};
