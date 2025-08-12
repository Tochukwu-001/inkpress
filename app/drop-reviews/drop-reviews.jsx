"use client";
import React from "react";
import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";

const DropReviews = () => {
  const initialValues = {
    book: "",
    reviews: "",
  };

  const formValidation = Yup.object({
    book: Yup.string().required("Book name is required"),
    review: Yup.string()
      .required("Book review is required")
      .min(50, "Minimun of 50 characters required"),
  });

  const handleSubmit = () => {
    console.log("Form Submited");
  };

  return (
    <main className="min-h-dvh lg:p-6 p-3 space-y-10 bg-gray-50">
      <div className="flex items-center justify-center flex-col gap-2">
        <h1 className="md:text-4xl text-2xl font-extrabold text-gray-900 uppercase">
          Write your Review
        </h1>
        <p className="text-gray-700 md:text-xl text-base">
          Add your unique touch to a growing community of book lovers
        </p>
      </div>

      <section className="md:max-w-2xl w-full mx-auto shadow-md p-3 rounded-md">
        <Formik
          initialValues={initialValues}
          validationSchema={formValidation}
          onSubmit={handleSubmit}
        >
          <Form className="space-y-3">
            <div className="">
              <label className="text-sm">Book Title</label>
              <Field
                name="book"
                className="w-full outline-none border border-gray-200 p-2 rounded-md bg-white"
              />
              <ErrorMessage
                name="book"
                component={"p"}
                className="text-xs text-red-500"
              />
            </div>
            <div className="">
              <label className="text-sm">Book Review</label>
              <Field
                name="review"
                as="textarea"
                className="w-full outline-none border border-gray-200 p-2 rounded-md bg-white"
              />
              <ErrorMessage
                name="review"
                component={"p"}
                className="text-xs text-red-500"
              />
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-yellow-700 hover:bg-yellow-800 transition-colors duration-300 text-white text-xl rounded-md py-2 px-5"
              >
                Post Review
              </button>
            </div>
          </Form>
        </Formik>
      </section>
    </main>
  );
};

export default DropReviews;
