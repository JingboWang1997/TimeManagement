import React, { useEffect, useState } from "react";

import Category from "./Category";

import { getCategories } from "../../service/category";
import Commitment from "./Commitment";

const DashboardPage = () => {
  const [categories, setCategories] = useState([]);

  const placeholderActionables = [
    {
      name: "Learn MDP",
      duration: "2 hours",
      deadline: "June 7",
      description: "machine learning is so fun",
      url: "https://github.com/JingboWang1997/TimeManagement",
      checked: true,
    },
  ];

  const placeholderCommitments = {
    commitments: [
      {
        name: "Machine Learning",
        deadline: "Mar 28",
        actionables: placeholderActionables,
      },
    ],
  };

  useEffect(() => {
    async function fetchData() {
      const data = await getCategories("user_id");
      Object.assign(data[0], placeholderCommitments);
      console.log("data", data);
      setCategories(data);
    }
    fetchData();
  }, []);

  return (
    <div style={{ backgroundColor: "#F5F6FA", height: "100%", padding: 40 }}>
      {categories.map((category, idx) => {
        console.log("category", category);
        return (
          <Category
            key={idx}
            title={category.name}
            commitments={category.commitments}
          />
        );
      })}
    </div>
  );
};

export default DashboardPage;
