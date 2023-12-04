import useHttp from "@/hooks/use-http";
import Card from "@UI/Card";
import { useEffect, useState } from "react";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";

/** @typedef {import("./MealItem/MealItem").MealItem} MealItem */

/** @typedef  {Omit<MealItem, "id">} MealRequest */

const AvailabelMeals = () => {
  /** @type {ReturnType<typeof useState<MealItem[]>>} */
  const [meals, setMeals] = useState([]);
  const { isLoading, error, sendRequest } = useHttp();

  useEffect(() => {
    /** @param {Record<string, MealRequest>} data */
    const callback = (data) => {
      const mealsData = Object.entries(data).map(([id, v]) => ({ ...v, id }));
      setMeals(mealsData);
    };

    sendRequest(callback, {
      url: "https://react-http-96576-default-rtdb.firebaseio.com/meals.json",
    });
  }, [sendRequest]);

  const content = (() => {
    if (error) {
      return <p className={classes["meals-error"]}>{error}</p>;
    }
    if (isLoading) {
      return <p>Loading...</p>;
    }
    const mealsElements = meals.map((meal) => (
      <MealItem key={meal.id} {...meal} />
    ));
    return <ul>{mealsElements}</ul>;
  })();

  return (
    <section className={classes.meals}>
      <Card>{content}</Card>
    </section>
  );
};

export default AvailabelMeals;
