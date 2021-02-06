import React, { useEffect, useState } from "react";

import {
  MyIconButton,
  CategoriesBox,
  MyCreateNewFolderIcon,
} from "./DashboardPage.styles";

import NavBar from "../../components/NavBar";
import CreateCategoryDialog from "../../components/Dialogs/CreateCategoryDialog";
import Category from "./Category";

import { getCategories } from "../../service/category";

const DashboardPage = () => {
  const [categories, setCategories] = useState([]);
  const [createCategoryOpen, setCreateCategoryOpen] = useState(false);

  const placeholderActionables = [
    {
      name: "Learn MDP",
      duration: "2 hours",
      deadline: "June 7",
      description: "machine learning is so fun",
      url:
        "https://github.com/JingboWang1997/TimeManagement/commit/d6753879ff60db6beb09d48e47c0612b68a22bb4",
      checked: true,
    },
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

      // testing only
      Object.assign(data[0], placeholderCommitments);

      console.log("data", data);
      setCategories(data);
    }
    fetchData();
  }, []);

  return (
    <>
      <NavBar />

      {/* CATEGORIES */}
      <CategoriesBox>
        {categories.map((category, idx) => {
          return (
            <Category
              key={idx}
              title={category.title}
              commitments={category.commitments}
            />
          );
        })}
      </CategoriesBox>

      {/* NEW CATEGORY BUTTON */}
      <MyIconButton onClick={() => setCreateCategoryOpen(true)}>
        <MyCreateNewFolderIcon onClick={() => setCreateCategoryOpen(true)} />
      </MyIconButton>

      {/* DIALOGS */}
      <CreateCategoryDialog
        open={createCategoryOpen}
        setOpen={setCreateCategoryOpen}
      />
    </>
  );
};

export default DashboardPage;
