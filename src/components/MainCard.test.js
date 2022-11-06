import { render, act, fireEvent } from "@testing-library/react";
import MainCard from "./MainCard";

describe("MainCard Component", () => {

    it("rendered the main cards", () => {
        const { getByTestId } = render(<MainCard />);
        const main_card = getByTestId("card-button");
        expect(main_card).toBeTruthy();

    })  

    // it("correctly says title on click", () =>{
    //     act (() => {
    //         const { getByTestId } = render(<MainCard />);
    //         const main_card = getByTestId("card-button");
    //         fireEvent.click(main_card);


    //     });
    // })

})