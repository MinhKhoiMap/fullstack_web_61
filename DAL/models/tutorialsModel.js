import mongoose from "mongoose";
import tutorialsSchema from "../schemas/tutorialsSchema";

class tutorialsModel {
  constructor() {
    this.model = mongoose.model("tutorials", tutorialsSchema);
    console.log(this, "đây là this nè");
  }

  // Create
  create(newTutorials) {
    return this.model.create(newTutorials);
  }

  // Research
  getAll() {
    return this.model.find();
  }

  findByTitle(title) {
    return this.model.find({
      title: {
        $regex: `.*${title}.*`,
        $options: "i",
      },
    });
  }

  // Update
  update(tutorial) {
    return this.model.updateOne(tutorial);
  }

  // Delete
  delete(id) {
    return this.model.findByIdAndDelete(id);
  }

  deleteAll() {
    return this.model.deleteMany({});
  }
}

export default tutorialsModel;
