import { render, act, fireEvent, screen } from "@testing-library/react";
import App from './App';



describe("App file tests", () => {

  it('renders all MainCard Components', () => {
    //const { getAllByTestId } = render(<App />);
    render(<App />)
    const main_cards = screen.getAllByTestId("card-button")
    expect(main_cards).toHaveLength(4)
  });

})
