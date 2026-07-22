import React from "react";

interface HeaderPageProps {
  title?: string;
  text?: string;
}

const DEFAULT_TITLE = "$h1-title";
const DEFAULT_TEXT =
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum veniam perspiciatis expedita cupiditate, optio ipsam minus, nihil vel repudiandae quod repellat. Quos soluta consequuntur quaerat expedita, ea ratione omnis itaque?";

export default function HeaderPage({
  title = DEFAULT_TITLE,
  text = DEFAULT_TEXT,
}: HeaderPageProps) {
  return (
    <section className="p-6">
      <article className="container-1 rounded-br-[100] bg-gray-200 p-3">
        <div className="p-6 space-y-3">
          <h1>{title}</h1>
          <p>{text}</p>
        </div>
      </article>
    </section>
  );
}
