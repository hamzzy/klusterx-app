import { fireEvent, render, screen } from "@testing-library/react";
import Header from "@/components/header";
import { HeroSection } from "@/components/Hero";
import { League } from "@/components/League";
import { LeagueFixture } from "@/components/LeagueFixture";
import { getFormattedDate, getLeagueTableStats } from "@/utils";


const mock_data=[
  {
  
    score: {

      "Manchester United": 1,

      "Leicester City": 2

    },

    date: "2021-05-04T14:00:00"

  },

  {

    score: { "Chelsea": 2, "ManCity": 6},

    date: "2021-05-09T11:00:00"

  },

  {

    score: { "Liverpool": 1, "Tottenham Hotspur": 1 },

    date: "2021-05-05T11:00:00"

  }
]

// ]
describe("Header", () => {
  test("renders the header logo and name", () => {
    const { getByText, getByAltText } = render(<Header />);
    const logo = getByAltText("Logo");
    const name = getByText("Leauge");

    expect(logo).toBeInTheDocument();
    expect(name).toBeInTheDocument();
  });
});

describe("HeroSection component", () => {
  it("should render the correct heading text", () => {
    const { getByText } = render(<HeroSection />);
    const headingElement = getByText("Premier League Table");
    expect(headingElement).toBeInTheDocument();
  });
});

describe("League component", () => {

  test("renders league table initially", () => {
    render(<League data={mock_data} />);
    const leagueTable = screen.getByRole("table");
    expect(leagueTable).toBeInTheDocument();
  });

  test("clicking on a team name renders their fixtures", () => {
    render(<League data={mock_data} />);
    const fixturesTable = screen.getByRole("table");
    expect(fixturesTable).toBeInTheDocument();
    const teamName = screen.getByText("Manchester United");
    fireEvent.click(teamName);
  });

  test("clicking 'Back to all fixtures' button renders league table", () => {
    render(<League data={mock_data} />);
    const teamName = screen.getByText("Liverpool");
    fireEvent.click(teamName);
    const backButton = screen.getByText("Back to all fixtures");
    fireEvent.click(backButton);
    const leagueTable = screen.getByRole("table");
    expect(leagueTable).toBeInTheDocument();
  });
  it("should display the Premier League Table by default", () => {
    render(<League data={mock_data} />);
    expect(screen.getByText("Premier League Table")).toBeInTheDocument();
    expect(screen.getByText("Position")).toBeInTheDocument();
    expect(screen.getByText("Team")).toBeInTheDocument();
    expect(screen.getByText("P")).toBeInTheDocument();
    expect(screen.getByText("W")).toBeInTheDocument();
    expect(screen.getByText("D")).toBeInTheDocument();
    expect(screen.getByText("L")).toBeInTheDocument();
    expect(screen.getByText("GF")).toBeInTheDocument();
    expect(screen.getByText("GA")).toBeInTheDocument();
    expect(screen.getByText("GD")).toBeInTheDocument();
    expect(screen.getByText("Pts")).toBeInTheDocument();
  });

  it("should render table when selectedTeam is not set", () => {
    render(<League data={mock_data} />);
    expect(screen.getByRole("table")).toBeInTheDocument();
  });

  it("should display the selected team fixtures when a team is clicked", () => {
    render(<League data={mock_data} />);
    fireEvent.click(screen.getByText("Manchester United"));
    expect(screen.getByText("Back to all fixtures")).toBeInTheDocument();
  });

  it('should go back to the Premier League Table when "Back to all fixtures" is clicked', () => {
    render(<League data={mock_data} />);
    fireEvent.click(screen.getByText("Liverpool"));
    fireEvent.click(screen.getByText("Back to all fixtures"));
    expect(screen.getByText("Premier League Table")).toBeInTheDocument();
  });

  it("should render fixture when selectedTeam is set", () => {
    render(<League data={mock_data} />);
    fireEvent.click(screen.getByText("Liverpool"));
    expect(screen.getByText("Premier League Table")).toBeInTheDocument();
  });

  it("should set selectedTeam when team is clicked", () => {
    render(<League data={mock_data} />);
    fireEvent.click(screen.getByText("Manchester United"));
    expect(screen.getByAltText("team logo")).toBeInTheDocument();
  });

  it("should unset selectedTeam when back button is clicked", () => {
    render(<League data={mock_data} />);
    fireEvent.click(screen.getByText("Manchester United"));
    fireEvent.click(screen.getByText("Back to all fixtures"));
    expect(
      screen.queryByText("Selected team: Arsenal")
    ).not.toBeInTheDocument();
  });
});

describe("LeagueFixture", () => {
  const fixtures = [
    {
      homeTeam: 'Team A',
      awayTeam: 'Team B',
      homeScore: 2,
      awayScore: 1,
      fix_date: '2022-03-22T17:00:00Z'
    },
    {
      homeTeam: 'Team C',
      awayTeam: 'Team D',
      homeScore: 0,
      awayScore: 0,
      fix_date: '2022-03-23T15:00:00Z'
    },
  ];
  it("renders the fixtures correctly", () => {
    // const fixtures = createFixtures(mock_data)
    const selectedTeam = "Manchester United";
    render(<LeagueFixture fixtures={fixtures} selectedTeam={selectedTeam} />);

    const fixturesBySelectedTeam = fixtures.filter((fixture) =>
      [fixture.homeTeam, fixture.awayTeam].includes(selectedTeam)
    );

    fixturesBySelectedTeam.forEach((fixture) => {
      const homeTeamLogo = screen.getByAltText("home team logo", {
        name: fixture.homeTeam,
      });
      const awayTeamLogo = screen.getByAltText("away team logo", {
        name: fixture.awayTeam,
      });
      const fixtureDate = screen.getByText(getFormattedDate(fixture.fix_date));
      const homeScore = screen.getByText(fixture.homeScore.toString());
      const awayScore = screen.getByText(fixture.awayScore.toString());

      expect(homeTeamLogo).toBeInTheDocument();
      expect(awayTeamLogo).toBeInTheDocument();
      expect(fixtureDate).toBeInTheDocument();
      expect(homeScore).toBeInTheDocument();
      expect(awayScore).toBeInTheDocument();
    });
  });
});
