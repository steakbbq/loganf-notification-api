module.exports = (mongoose) => {
  return mongoose.model(
    "notification",
    mongoose.Schema(
      {
        title: String,
        content: String,
        displayAfter: Date,
        deletedAt: Date,
      },
      { timestamps: true }
    )
  );
};
