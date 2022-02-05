import { useState} from 'react';
import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';

import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import AddCircleIcon from '@mui/icons-material/AddCircle';

import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

import styles from './checkboxedInput.module.scss';

type Props = {
  label: string;
  checkboxValues: string[];
  onChange: (item: object) => void;
}
const CheckboxedInput= ({
  label,
  checkboxValues,
  onChange
}: Props
) => {

  interface ValuesObject {
    itemId: number,
    input: string,
    schedule: string[]
  }

  
  const randomNo = () => Math.floor(Math.random() * 1000);
  const blankTask = () => ({itemId: randomNo(), input: "", schedule: []});
  const [valuesObj, setValuesObj] = useState<ValuesObject[]>([blankTask()])
  const [snackbarOpen, setSnackbarOpen] = useState<boolean>(false);
  const [snackbarMessage, setSnackbarMessage] = useState<string>("");

  const handleInput = (itemId: number, value?: string | null, time?: string) => {
    const updated = valuesObj.map(valueObj => {
      if (valueObj.itemId === itemId) {
        if (value) {
          return ({...valueObj, input: value});
        } else if (time){

          if (valueObj.schedule.indexOf(time) === -1) {
            return ({...valueObj, schedule: [...valueObj.schedule, time]})
          } else {
            const filterArray = valueObj.schedule.filter((item: string) => item !== time);
            return ({...valueObj, schedule: filterArray})
          }
        }
      }
        return valueObj
    });
    setValuesObj(updated);
    onChange(updated);
  }

  const handleAdd = () => {
    if (valuesObj.length < 10) {
      setValuesObj([...valuesObj, blankTask()])
    } else {
      setSnackbarOpen(true);
      setSnackbarMessage("I think 10 tasks is quite enough!");
    }
  };
  
  const handleRemove = (value: number) => {
    if (valuesObj.length > 1) {
      const filtered = valuesObj.filter((valueObject) => valueObject.itemId !== value);
      console.log(filtered);
      setValuesObj(filtered)
    } else {
      setSnackbarOpen(true);
      setSnackbarMessage("You can't remove the last one");
    }
  };
      
  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
    setSnackbarMessage("");
  };

  return (
    <>
      {valuesObj.map((value: ValuesObject) => 
      <div className={styles.InputAndOptions} key={`${value.itemId}`}>
        <div className={styles.inputs}>
          <TextField
            label={label}
            value={value.input}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInput(value.itemId, e.target.value)}
          />
          <FormGroup className={styles.checkboxInputs}>
            {
              checkboxValues.map((checkValue: string) => 
                <FormControlLabel
                  key={checkValue}
                  control={
                    <Checkbox
                      checked={value.schedule.indexOf(checkValue) === -1 ? false : true }
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInput(value.itemId, null, e.target.name)}
                      name={checkValue}
                      // inputProps={{ 'aria-label': 'controlled' }}
                      size="small"
                    />
                  }
                  label={checkValue}
                />
              )
            }
          </FormGroup>
        </div>
        <div className={styles.addRemove}>
          <IconButton color="primary" onClick={handleAdd} component="span">
            <AddCircleIcon />
          </IconButton>
          <IconButton color="primary" onClick={() => handleRemove(value.itemId)} component="span">
            <RemoveCircleIcon />
          </IconButton>
        </div>
      </div>
    )}
    <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleSnackbarClose}>
      <MuiAlert elevation={6} variant="filled" severity="error" >
        {snackbarMessage}
      </MuiAlert>
    </Snackbar>
  </>
  );
}

export default CheckboxedInput
