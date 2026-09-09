import { Card, CardContent, CardActions, Button } from "@mui/material";
import "./Jobs.css";

function Jobs() {
  const handleOnClick = null;

  return (
    <div className="container">
      <div></div>
      <div className="content">
        <h1>Kom jij ons team versterken?</h1>
        <p>
          Op dit moment hebben we geen openstaande vacatures. Toch zijn we
          altijd geïntresseerd in gemotiveerde en enthousiaste collega's die
          graag willen deel uitmaken van ons team.
        </p>
        <Card className="card">
          <CardContent className="card-content">
            <h3>Spontane sollicitatie</h3>
            <p>
              Heb je een passie voor zorg en wil je graag bij ons aan de slag?
              Stuur ons dan gerust een spontane sollicitatie!
            </p>
          </CardContent>
          <CardActions>
            <Button
              variant="contained"
              endIcon={<span className="material-symbols-outlined">send</span>}
              onClick={handleOnClick}
            >
              Sturen
            </Button>
          </CardActions>
        </Card>
      </div>
      <div></div>
    </div>
  );
}

export default Jobs;
