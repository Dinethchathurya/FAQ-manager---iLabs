import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import SearchSectionComponent from "../components/SearchSectionComponent";
import TableComponent from "../components/TableComponent";
import TableBottomComponent from "../components/TableBottomComponent";
import FooterComponent from "../components/FooterComponent";

const HomePage = () => {

    const [data, setData] = useState([]);

    async function fetchData() {
      try {
        const result = await fetch("http://localhost:8080/api/faqmanager/questions");
        const jsonData = await result.json(); 
        setData(jsonData); 
        console.log(jsonData); 
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    }
  
    useEffect(() => {
      fetchData();
    }, []);

    return (
        <>
        <Header />
        <SearchSectionComponent />
        <div className="container ">
            <TableComponent />
            <TableBottomComponent />
        </div>
        <FooterComponent />
        </>
    );
};
export default HomePage;