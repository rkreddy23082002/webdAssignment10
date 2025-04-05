import Navbar from "../Navbar/Navbar";
import "./CompanyShowcase.css";
import { useEffect, useState } from "react";
import companyService from "../../services/companyService";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

export default function CustomImageList() {
  const [itemData, setItemData] = useState([]);

  useEffect(() => {
    companyService.get("/getAll").then((res) => {
      console.log(res.data); // Check the structure and values of the response

      setItemData(res.data);
    });
  }, []);

  return (
    <>
      <Navbar />
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          m: -2,
        }}
      >
        {itemData.map((item, index) => (
          <Card
            key={index} // Use index as key for now
            sx={{ maxWidth: 400, m: 4 }}
            raised={true} // Use raised for elevation
          >
            <CardMedia
              sx={{ height: 300, objectFit: "contain" , backgroundSize: "cover", // Ensures proper scaling
              }}
              image={item.image || ""} // Use Base64-encoded image directly
              title={item.company}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {item.company}
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestiae minus sequi in corrupti alias voluptatum deleniti
                tenetur labore fuga.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Apply</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        ))}
      </Box>
    </>
  );
}
