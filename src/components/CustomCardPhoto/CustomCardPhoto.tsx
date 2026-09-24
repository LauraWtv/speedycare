import { Card, CardContent, CardMedia } from "@mui/material";
import "./CustomCardPhoto.css";
import team1 from "../../assets/team1_1.jpeg"

function CustomCardPhoto() {
  return (
    <Card className="card">
      <CardMedia component="img" image={team1} alt="Foto verantwoordelijke"/>
      <CardContent className="card-content">
        <h2>Verantwoordelijke</h2>
      </CardContent>
    </Card>
  );
}

export default CustomCardPhoto;
