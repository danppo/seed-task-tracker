import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


const AboutContent = () => {

  return (
    <Box sx={{ width: '100%'}}>
      <Typography variant="h4" gutterBottom component="h4">
        What is the Seed Tracker App?
      </Typography>
      <Typography variant="body1" gutterBottom>
        It's a one stop shop for everything related to growing sprouting seeds and microgreens: 
        record which seeds were successful, or that you particually liked, get reminders for 
        tasks to water, rinse or mist etc, you can even work out how much a batch has actually cost. 
        As well as share your results with other users, and see what worked well for them.  
      </Typography>
      <Typography variant="h5" gutterBottom component="h5">
        What are sprouting seed or sprouts or microgreens and why should I bother with them?
      </Typography>
      <Typography variant="body1" gutterBottom>
        Do you like bean sprouts in your stir fry? Well that is basically sprouting seeds or sprouts 
        its the very early stages of a plant growing from seed, at this stage the tiny plant and seed 
        is packed with useful nutrients. MicroGreens are the next stage of growth from the sprouts, 
        where the plant has grown its first set of leaves, these are still packed with concentraited 
        goodness and taste
      </Typography>
    </Box>
  )
};

export default AboutContent;
