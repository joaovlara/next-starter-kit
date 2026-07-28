import React from "react";

interface HeaderPageProps {
  title?: string;
  text?: string;
}

const DEFAULT_TITLE = "$h1-title";
const DEFAULT_TEXT =
  "$text lorem, ipsum udiandae quod repellat. Ququaerat expedita, ea ratione omnis itaque?";

export default function HeaderPage({
  title = DEFAULT_TITLE,
  text = DEFAULT_TEXT,
}: HeaderPageProps) {
  return (
    <section className="p-6">
      <article className="container-1 border-b border-primary">
        <div className="p-6 space-y-3">
          <h1 className="text-6xl">{title}</h1>
          <p className="text">{text}</p>
        </div>
      </article>
    </section>
  );
}
