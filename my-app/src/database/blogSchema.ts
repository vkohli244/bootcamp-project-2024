import mongoose, { Schema } from "mongoose";
interface Comment {
    user: string; // Name of the user
    comment: string; // The content of the comment
    time: Date; // Timestamp for the comment
  }
// typescript type (can also be an interface)
export type Blog = {
	    title: string;
	    slug: string; 
		date: string;
		description: string; // for preview
	    content: string; // text content for individual blog page
	    image: string; // url for string in public
	    imageAlt: string; // alt for image
        comments: Comment[];
};


// mongoose schema 
const blogSchema = new Schema<Blog>({
    title: { type: String, required: true },
    slug: { type: String, required: true },
    date: { type: String, required: false },
    description: { type: String, required: true },
    image: { type: String, required: true },
    imageAlt: { type: String, required: true },
    content: { type: String, required: true },
    comments: [
      {
        user: { type: String, required: true },
        comment: { type: String, required: true },
        time: { type: Date, required: true, default: Date.now }, // Defaults to the current time
      },
    ],
  });

// defining the collection and model
const Blog = mongoose.models['blogs'] ||
    mongoose.model('blogs', blogSchema);

export default Blog;