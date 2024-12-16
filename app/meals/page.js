import MealsGrid from "@/components/meals/meals-grid";
import classes from "./page.module.css";
import Link from "next/link";
import { getMeals } from "@/lib/meals";

export default async function Meals() {
  const mealsArr = await getMeals();

  return (
    <>
      <header className={classes.header}>
        <h1>
          Deliciouse meals, created{" "}
          <span className={classes.highlight}>by you</span>{" "}
        </h1>

        <p>
          Choose your favourite recipe and coock it yourself. It is easy and
          fun!
        </p>
        <p className={classes.cta}>
          <Link href={"/meals/share"}>Share your favourite recipe</Link>
        </p>
      </header>
      <main className={classes.main}>
        <MealsGrid meals={mealsArr} />
      </main>
    </>
  );
}
