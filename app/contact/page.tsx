import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import CustomBtn from "../components/common/CustomBtn";

const ContactPage = () => {
  return (
    <div>
      <Grid container spacing={2} className="flex justify-center items-center">
        <Grid item xs={12} md={6} lg={6}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6} lg={6}>
              <Card sx={{ minWidth: 275 }}>
                <CardContent>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    Phone No
                  </Typography>
                  <Typography variant="h5" component="div">
                    +91 123456789
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    CEO
                  </Typography>
                  <Typography variant="body2">
                    Lorem ipsum dolor sit amet.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={6} lg={6}>
              <Card sx={{ minWidth: 275 }}>
                <CardContent>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    Email
                  </Typography>
                  <Typography variant="h5" component="div">
                    admin@info.com
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    CEO
                  </Typography>
                  <Typography variant="body2">
                    Lorem ipsum dolor sit amet.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={12} lg={12}>
              <Card sx={{ minWidth: 275 }}>
                <CardContent>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    Address
                  </Typography>
                  <Typography variant="h5" component="div">
                    123 Main Street, Anytown, USA, 12345
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    CEO
                  </Typography>
                  <Typography variant="body2">
                    Lorem ipsum dolor sit amet.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          <div>
            <h2 className="text-teal-700 font-bold text-3xl py-10">
              Get In Touch
            </h2>
            <form
              action=""
              className="shadow-xl p-5 bg-slate-300 mb-5 rounded-md"
            >
              <Box>
                <TextField
                  fullWidth
                  label="Full Name"
                  id="fullWidth"
                  className="mb-3"
                  type="text"
                />
                <TextField
                  fullWidth
                  label="EMail"
                  id="fullWidth"
                  className="mb-3"
                  type="email"
                />
                <TextField
                  fullWidth
                  label="Mobile Number"
                  id="fullWidth"
                  className="mb-3"
                  type="number"
                />

                <TextField
                  id="outlined-multiline-static"
                  label="Message"
                  multiline
                  rows={4}
                  fullWidth
                />
                <CustomBtn className="my-3">Submit</CustomBtn>
              </Box>
            </form>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default ContactPage;
