import { useState } from "react";
import Review from "./components/Review";
import reviews from "./data";

const App = () => {
  const [index, setIndex] = useState(0);
  const reviewsNext = () => {
    setIndex((index) => {
      const newIndex = (index + 1) % reviews.length;
      return newIndex;
    });
  };
  const reviewsPrevious = () => {
    setIndex((index) => {
      const oldIndex = (index - 1 + reviews.length) % reviews.length;
      return oldIndex;
    });
  };
  const randomPerson = () => {
    var random = Math.floor(Math.random() * reviews.length);
    if (random === index) {
      random = index + 1;
    }
    const newIndex = random % reviews.length;
    setIndex(newIndex);
  };
  return (
    <main>
      <h2>Developers</h2>
      {
        <Review
          person={reviews[index]}
          previous={reviewsPrevious}
          next={reviewsNext}
          random={randomPerson}
        />
      }
    </main>
  );
};
export default App;
