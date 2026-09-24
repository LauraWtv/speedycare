import { Button, Card, CardActions, CardContent } from "@mui/material";
import "./CustomCard.css"

function CustomCard() {
    return (<Card className="card">
          <CardContent className="card-content">
            <h2>Spontane sollicitatie</h2>
            <p>
              Heb je een passie voor zorg en wil je graag bij ons aan de slag?
              Stuur ons dan gerust een spontane sollicitatie!
            </p>
          </CardContent>
          <CardActions>
            <Button
              variant="contained"
              endIcon={<span className="material-symbols-outlined">send</span>}
              className="button_apply"
              href="mailto:Speedycarecontact@gmail.com?subject=SpeedyCare%20-%20Spontane%20sollicitatie"
            >
              Sturen
            </Button>
          </CardActions>
        </Card>);
}

export default CustomCard;