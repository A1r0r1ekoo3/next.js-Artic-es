"use client";

import Link from "next/link";

async function getData(id) {
  const req = await fetch("http://localhost:8888/articles", {
    next: { revalidate: 3600 },
  });
  const data = await req.json();
  return data;
}

async function ArticlesPage() {
  const articles = await getData();
  console.log(articles);
  return (
    <div className=" w-full flex flex-col gap-2 my-10">
      <h3 className="text-2xl font-semibold text-sky-700">My Articles</h3>
      <ul className=" flex flex-col gap-6">
        {articles.map((list) => {
          return (
            <li className="border-2 shadow-md p-2 rounded-md" key={list.id}>
              <h5 className="text-xl text-sky-500 mb-4">{list.title}</h5>
              <p className="line-clamp-4 text-gray-700 text-lg mb-3">
                {list.body}
              </p>
              <div className="flex justify-end">
                <Link
                  href={`/articles/${list.id}`}
                  className="btn btn-primary "
                >
                  Read More
                </Link>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ArticlesPage;
