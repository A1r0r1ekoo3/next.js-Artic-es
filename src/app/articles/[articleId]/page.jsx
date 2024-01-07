"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

function ArticlesAbout({ params }) {
  const [articles, setArticles] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const req = await fetch(
          `http://localhost:8888/articles/${params.articleId}`,
          {
            revalidate: 3600,
          }
        );

        if (!req.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await req.json();
        setArticles(data);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error);
      }
    }

    fetchData();
  }, [params.articleId]);

  if (error) {
    return <div>Error fetching data: {error.message}</div>;
  }

  if (!articles) {
    return <div>Loading...</div>;
  }

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="card card-side bg-base-100 shadow-xl">
        <figure>
          <Image src={articles.image} alt="Movie" height={400} width={400} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{articles.title}</h2>
          <p>{articles.body}</p>
          <h2 className="card-title">{articles.author}</h2>
          <div className="card-actions justify-end">
            <Link href="/" className="btn btn-primary">
              Back
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArticlesAbout;
