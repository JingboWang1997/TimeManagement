import React, { useEffect, useState } from "react";
import { IconButton } from "@material-ui/core";
import CreateNewFolderIcon from "@material-ui/icons/CreateNewFolder";

import { Colors } from "../../styles/GlobalStyles";
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
      Object.assign(data[0], placeholderCommitments);
      console.log("data", data);
      setCategories(data);
    }
    fetchData();
  }, []);

  return (
    <>
      <NavBar />

      <div style={{ height: "100%", padding: 40 }}>
        {categories.map((category, idx) => {
          return (
            <Category
              key={idx}
              title={category.name}
              commitments={category.commitments}
            />
          );
        })}
      </div>

      <IconButton
        style={{
          backgroundColor: Colors.Stone,
          width: 72,
          height: 72,
          borderRadius: 50,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "fixed",
          bottom: 48,
          right: 48,
        }}
        onClick={() => setCreateCategoryOpen(true)}
      >
        <CreateNewFolderIcon
          onClick={() => setCreateCategoryOpen(true)}
          style={{ color: "white" }}
        />
      </IconButton>

      {/* DIALOGS */}
      <CreateCategoryDialog
        open={createCategoryOpen}
        setOpen={setCreateCategoryOpen}
      />
    </>
  );
};

export default DashboardPage;
