import { render, screen } from "@testing-library/react";
import Home from "@/pages/index";

describe("Home", () => {
  it("renders a heading", () => {
    const app = render(<Home />);

    // const heading = screen.getByRole('heading', {
    //   name: /welcome to next\.js!/i,
    // })

    expect(app.findByText("Premier League Table")).toContainElement("h1");
  });
});
