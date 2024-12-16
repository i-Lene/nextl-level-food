import Link from "next/link";

export default function MealsSlug({params}) {
  return (
    <main>
      <h1>Meals Slug</h1>
      <p>{params.slug}</p>
    </main>
  );
}
