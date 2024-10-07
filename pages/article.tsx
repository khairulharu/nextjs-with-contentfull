import React from "react";
import Link from "next/link";

const Articles: React.FC = () => {
  return (
    <section className="p-20">
      <div className="flex justify-items-start">
        <Link
          href="/"
          className="rounded-full bg-slate-900 text-white px-8 py-4"
        >
          Home
        </Link>
      </div>
      <div className="p-4">
          <h1>Article</h1>
      </div>
    </section>
  );
};

export default Articles;
