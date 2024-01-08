"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

function FormPage() {
  const [data, setData] = useState();
  const email = useRef();
  const question = useRef();

  function handlSubmit(e) {
    e.preventDefault();
    const list = {
      email: email.current.value,
      question: question.current.value,
    };
    // email.current.value = "";
    // question.current.value = "";
    return setData(list);
  }

  console.log(data);
  return (
    <div className="h-screen w-full flex flex-col  items-center mt-10 gap-6">
      <h2 className="text-2xl font-semibold text-sky-700">Send Us Question</h2>
      <div className="form-container  w-full flex flex-col items-center">
        <form onSubmit={handlSubmit} className="w-1/3 flex flex-col gap-6">
          <label className="form-control gap-2">
            <span>Your Email:</span>
            <input
              ref={email}
              type="text"
              placeholder="Type here"
              className="input input-bordered input-info w-full "
            />
          </label>
          <label className="form-control gap-2">
            <span>Your Question:</span>
            <textarea
              ref={question}
              className="textarea textarea-info"
              placeholder="question write"
            ></textarea>
          </label>
          <button className="btn btn-primary ">Send</button>
          <Link href="/contact" className="btn btn-secondary ">
            Back
          </Link>
        </form>
      </div>
      {data && (
        <div className="card w-96 bg-base-100 shadow-xl mt-4">
          <div className="card-body">
            <h2 className="card-title">{data.email}</h2>
            <p>{data.question}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-error">Delete</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default FormPage;
