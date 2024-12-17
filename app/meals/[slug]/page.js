import Link from "next/link";
import classes from "./page.module.css";
import Image from "next/image";
import { getMeal } from "@/lib/meals";
import { notFound } from "next/navigation";

export default function MealsSlug({ params }) {
  const slug = params.slug;
  const meal = getMeal(slug);

  if (!meal) {
    notFound();
  }
  
  meal.instructions = meal.instructions.replace(/\n/g, "<br>");
  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image src={meal.image} fill alt={meal.title} />
        </div>
        <div className={classes.headerText}>
          <h1>{meal.title}</h1>
          <p className={classes.creator}>
            by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={classes.summary}>{meal.summary}</p>
        </div>
      </header>
      <main>
        <p
          dangerouslySetInnerHTML={{
            __html: meal.instructions,
          }}
          className={classes.instructions}
        ></p>
      </main>
    </>
  );
}
