import React, { useEffect, useState } from "react";

import {
  MyIconButton,
  CategoriesBox,
  MyCreateNewFolderIcon,
} from "./DashboardPage.styles";

import NavBar from "../../components/NavBar";
import CreateCategoryDialog from "../../components/Dialogs/CreateCategoryDialog";
import Category from "./Category";

import { useDispatch, useSelector } from "react-redux";
import { getCategoriesAction } from "../../redux/actions/categoryActions";
import { getCategories } from "../../service/category";
import { getCommitments } from "../../service/commitment";
import { getActionables } from "../../service/actionable";

const DashboardPage = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categoryReducer.categories);

  // const [categories, setCategories] = useState([]);
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
      // Object.assign(data[0], placeholderCommitments);

      console.log("retrieved categories", data);

      // data.forEach(async (category) => {
      //   const commitments = await getCommitments(category.id);
      //   console.log("commitments", commitments);
      //   category.commitments = commitments;
      // });

      for (const category of data) {
        const commitments = await getCommitments(category.id);
        // console.log("commitments", commitments);

        for (const commitment of commitments) {
          const actions = await getActionables(commitment.id);
          // console.log("actions", actions);
          commitment.actionables = actions;
        }

        category.commitments = commitments;
      }

      console.log("final categories", data);

      dispatch(getCategoriesAction(data));
      // setCategories(data);
    }
    fetchData();
  }, []);

  return (
    <>
      <NavBar />

      {/* CATEGORIES */}
      <CategoriesBox>
        {categories.map((category, idx) => {
          // console.log("category", category);
          return (
            <Category
              key={idx}
              id={category.id}
              title={category.title}
              commitments={category.commitments}
            />
          );
        })}
      </CategoriesBox>

      {/* NEW CATEGORY BUTTON */}
      <MyIconButton onClick={() => setCreateCategoryOpen(true)}>
        <MyCreateNewFolderIcon />
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
