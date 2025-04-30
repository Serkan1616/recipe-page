import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import imag_omelette from "./assets/image-omelette.jpeg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex min-h-screen bg-[hsl(30,54%,90%)] sm:justify-center items-center">
      {/* <div className="font-sora font-[400]">hello word</div>
      <div className="font-serif">hello word</div>
      <div>hello word</div> */}
      <div className="flex flex-col bg-[hsl(0,0%,100%)] rounded-2xl w-[320px] h-auto gap-3 font-sora text-[hsl(30,10%,34%)] sm:w-2/5 sm:my-20">
        <div className="sm:p-5">
          <img
            className="rounded-2xl object-cover w-full h-auto"
            src={imag_omelette}
            alt=""
          />
        </div>
        <div className="flex flex-col gap-3 p-8">
          <h1 className="font-serif text-3xl font-[400]">
            Simple Omelette Recipe
          </h1>
          <p className=" text-[14px]">
            An easy and quick dish, perfect for any meal. This classic omelette
            combines beaten eggs cooked to perfection, optionally filled with
            your choice of cheese, vegetables, or meats.
          </p>
        </div>
        <div
          className="flex flex-col gap-1 rounded-xl
         mx-8 p-6 bg-[hsl(330,100%,98%)] font-[500]"
        >
          <h1 className="text-[hsl(332,51%,32%)] text-lg font-bold">
            Preparation time
          </h1>
          <ul className="flex flex-col list-disc pl-6 mt-2 gap-3 text-[14px]">
            <li>
              <span className="font-bold">Total:</span> Approximately 10 minutes{" "}
            </li>
            <li>
              <span className="font-bold">Preparation:</span> 5 minutes{" "}
            </li>
            <li>
              <span className="font-bold">Cooking:</span> 5 minutes{" "}
            </li>
          </ul>
        </div>
        <div className="flex flex-col mx-8 gap-4 font-[500] border-b border-gray-300 pb-5 mt-4">
          <h1 className="text-2xl text-[hsl(14,45%,36%)]  font-serif">
            Ingredients
          </h1>
          <ul className="flex flex-col list-disc list-inside pl-1 gap-3 text-[14px]">
            <li>2-3 large eggs</li>
            <li>Salt, to taste</li>
            <li>pepper, to taste</li>
            <li>1 tablespoon of butter or oil</li>
            <li>
              Optional fillings: cheese,diced vegetables, cooked meats, herbs
            </li>
          </ul>
        </div>
        <div className="flex flex-col mx-8 gap-4 font-[500] border-b border-gray-300 pb-5 mt-4">
          <h1 className="text-2xl text-[hsl(14,45%,36%)] font-serif ">
            Instructions
          </h1>
          <ul className="list-decimal list-inside text-[14px] flex flex-col gap-3">
            <li className="">
              <span className="font-bold ">Beat the eggs:</span> In a bowl, beat
              the eggs with a pinch of salt and pepper until they are well
              mixed. You can add a tablespoon of water or milk for a fluffier
              texture.
            </li>
            <li>
              <span className="font-bold">Heat the pan:</span> Place a non-stick
              frying pan over medium heat and add butter or oil.
            </li>
            <li>
              <span className="font-bold">Cook the omelette:</span> Once the
              butter is melted and bubbling, pour in the eggs. Tilt the pan to
              ensure the eggs evenly coat the surface.{" "}
            </li>
            <li>
              <span className="font-bold">Add fillings (optional):</span> When
              the eggs begin to set at the edges but are still slightly runny in
              the middle, sprinkle your chosen fillings over one half of the
              omelette.
            </li>
            <li>
              <span className="font-bold">Fold and serve:</span> As the omelette
              continues to cook, carefully lift one edge and fold it over the
              fillings. Let it cook for another minute, then slide it onto a
              plate.
            </li>
            <li>
              <span className="font-bold">Enjoy: </span>Serve hot, with
              additional salt and pepper if needed.
            </li>
          </ul>
        </div>
        <div className="flex flex-col mx-8 gap-4 font-[500] text-[14px] mt-4">
          <h1 className="text-2xl text-[hsl(14,45%,36%)] font-serif">
            Nutrition
          </h1>
          <p>
            The table below shows nutritional values per serving without the
            additional fillings.
          </p>
          <table className="w-full text-left text-sm mb-5">
            <tbody>
              <tr className="border-b border-gray-300">
                <td className="py-2 pl-4">Calories</td>
                <td className="py-2 font-bold text-[hsl(14,45%,36%)]">
                  277kcal
                </td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="py-2 pl-4">Carbs</td>
                <td className="py-2 font-bold text-[hsl(14,45%,36%)]">0g</td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="py-2 pl-4">Protein</td>
                <td className="py-2 font-bold text-[hsl(14,45%,36%)]">20g</td>
              </tr>
              <tr className=" ">
                <td className="py-2 pl-4">Fat</td>
                <td className="py-2 font-bold text-[hsl(14,45%,36%)]">22g</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
