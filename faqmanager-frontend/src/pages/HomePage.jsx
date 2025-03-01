import Header from "../components/Header";
import SearchSectionComponent from "../components/SearchSectionComponent";
import TableComponent from "../components/TableComponent";
import TableBottomComponent from "../components/TableBottomComponent";
import FooterComponent from "../components/FooterComponent";

const HomePage = () => {
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