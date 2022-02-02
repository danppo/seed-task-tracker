import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Grid from '@mui/material/Grid';

interface Range {
  min: number;
  max: number;
  step?: number;
};

type Props = {
  value: number;
  onChange: (newValue: number) => void;
  title: string
  range: Range;
}

const SliderInput = ({
  value,
  onChange,
  title,
  range,
}: Props) => {

  const min = range.min;
  const max = range.max;
  const step = range.step ? range.step : 1

  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    if (typeof newValue === 'number'){
      onChange(newValue);
    }  
  };

  return (
    <Box sx={{ width: 350 }}>
      <Typography id="input-slider" gutterBottom>
        {title}
      </Typography>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs>
          <Slider
            value={value}
            onChange={handleSliderChange}
            aria-labelledby="input-slider"
            step={step}
            marks
            min={min}
            max={max}
          />
        </Grid>
        <Grid item>
          <Typography id="input-slider" gutterBottom>
            {value} 
          </Typography>
        </Grid>
      </Grid>
    </Box>
  )

}

export default SliderInput;
