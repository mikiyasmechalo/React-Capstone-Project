import React from "react";
import Button from "./Button";

const CommentForm = () => {
  return (
    <div className="bg-white md:p-6 p-2 rounded-lg max-w-4xl md:m-3">
      <h2 className="sm:text-4xl text-2xl leading-13 font-semibold mb-2">
        Leave a Reply
      </h2>
      <p className="text-lg text-gray-975 mb-4">
        Your email address will not be published. Required fields are marked *
      </p>

      <form>
        <div className="mb-4">
          <label
            htmlFor="comment"
            className="block text-lg font-medium text-gray-975"
          >
            Comment
          </label>
          <textarea
            id="comment"
            name="comment"
            rows={8}
            className="mt-1 p-2 border border-[#C4C4C4]  rounded-[10px] w-full focus:ring focus:ring-blue-200 focus:border-blue-300"
          ></textarea>
        </div>

        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-lg font-medium text-gray-975"
          >
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="mt-1 p-3 border border-[#C4C4C4] rounded-[10px] w-full focus:ring focus:ring-blue-200 focus:border-blue-300"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-lg font-medium text-gray-975"
          >
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="mt-1 p-3 border border-[#C4C4C4]  rounded-[10px] w-full focus:ring focus:ring-blue-200 focus:border-blue-300"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="website"
            className="block text-lg font-medium text-gray-975"
          >
            Website
          </label>
          <input
            type="url"
            id="website"
            name="website"
            className="mt-1 p-3 border border-[#C4C4C4]  rounded-[10px] w-full focus:ring focus:ring-blue-200 focus:border-blue-300"
          />
        </div>

        <div className="mb-4 flex items-center">
          <input
            type="checkbox"
            id="saveInfo"
            name="saveInfo"
            className="mr-2 h-4 w-4 text-blue-600 focus:ring focus:ring-blue-200 border border-gray-300 rounded"
          />
          <label
            htmlFor="saveInfo"
            className="text-lg font-medium text-gray-700"
          >
            Save my name, email, and website in this browser for the next time I
            comment.
          </label>
        </div>

        <button type="submit" className="sm:mt-10">
          <Button>Post Comment</Button>
        </button>
      </form>
    </div>
  );
};

export default CommentForm;
