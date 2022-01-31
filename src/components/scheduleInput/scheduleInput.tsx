import {ChangeEvent, useState} from 'react';
import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const ScheduleInput= () => {
  const [pickedTime, setPickedTime] = useState<string[]>([]);
  const [taskAction, setTaskAction ] = useState<string>('');
  const times = [
    'Morning',
    'Midday',
    'Evening',
  ];
// TODO: pass in times
// TODO: textfield label
// TODO: passin onchange action
// TODO: Style input boxes

  const handleChange = (event:ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    if (pickedTime.indexOf(name) === -1) {
      setPickedTime([...pickedTime, name])
    } else {
      const filterArray = pickedTime.filter((item: string) => item !== name);
      setPickedTime(filterArray)
    }
  };

  return (
    <>
      <TextField
        id="taskAction"
        label="Add reminders to water or mist"
        value={taskAction}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTaskAction(e.target.value)}
      />
      <FormGroup>
        {
          times.map((time) => 
            <FormControlLabel
              key={time}
              control={
                <Checkbox
                  checked={pickedTime.indexOf(time) === -1 ? false : true }
                  onChange={handleChange}
                  name={time}
                  inputProps={{ 'aria-label': 'controlled' }}
                />
              }
              label={time}
            />
          )
        }
      </FormGroup>
    </>
  );
}

export default ScheduleInput