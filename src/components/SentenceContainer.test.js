import { render, act, fireEvent, screen } from "@testing-library/react";
import SentenceContainer from "./SentenceContainer";

describe("Microphone Button", () => {

    it("rendered the mic button correctly", () => {
        render(<SentenceContainer />);
        const mic_button = screen.getByTestId("mic_button");
        expect(mic_button).toBeTruthy();
    });

    // it("says something", () => {
        
    //     render(<SentenceContainer />);
    //     const mic_button = screen.getByTestId("mic_button");
    //     fireEvent.click(mic_button)
        

    // });
});

describe("Reset Button", () => {
    const original = window.location;
  
    beforeAll(() => {
        Object.defineProperty(window, 'location', {
            configurable: true,
            value: { reload: jest.fn() },
        });
    });
  
    afterAll(() => {
        Object.defineProperty(window, 'location', { configurable: true, value: original });
    });
  
    it("rendered the reset button correctly", () => {
        render(<SentenceContainer />);
        const reset_button = screen.getByTestId("reset-button");
        expect(reset_button).toBeTruthy();
    })  

    it('mocks reload function', () => {
        expect(jest.isMockFunction(window.location.reload)).toBe(true);
    });

    test("if reload button is working", () =>{
        render(<SentenceContainer />);
        const reset_button = screen.getByTestId("reset-button");
        fireEvent.click(reset_button)
        expect(window.location.reload).toHaveBeenCalled();
    });
  });