import * as React from 'react';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import seedCatalogue, { SeedItemInterface } from '../../data/seedCatalogue';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import SeedEntry from '../seedEntry/seedEntry';
import { FilterOptionsState } from '@mui/material';

const filter = createFilterOptions<FilmOptionType>();


const TypeAheadInput = () => {

  const [value, setValue] = React.useState<FilmOptionType | null>(null);
  const [open, toggleOpen] = React.useState(false);

  const [seedList, setSeedList] = React.useState<SeedItemInterface[]>(seedCatalogue);

  const handleClose = () => {
    console.log('Handle close');
    
    setDialogValue({
      title: '',
      year: '',
    });
    toggleOpen(false);
  };

  const [dialogValue, setDialogValue] = React.useState({
    title: '',
    year: '',
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    console.log("handle Submit");
    
    event.preventDefault();
    setValue({
      title: dialogValue.title,
      year: parseInt(dialogValue.year, 10),
    });
    handleClose();
  };

  const handleChange = (newValue:string | FilmOptionType | null) => {
    console.log('handle change');
    
    if (typeof newValue === 'string') {
      console.log(' change is string ');
      
      // timeout to avoid instant validation of the dialog's form.
      setTimeout(() => {
        toggleOpen(true);
        setDialogValue({
          title: newValue,
          year: '',
        });
      });
    } else if (newValue && newValue.inputValue) {
      console.log('change is inputvlaue');
      
      toggleOpen(true);
      setDialogValue({
        title: newValue.inputValue,
        year: '',
      });
    } else {
      console.log('chaneg is else ');
      
      setValue(newValue);
    }
  };

  const filterOptions = (options: FilmOptionType[], params: FilterOptionsState<FilmOptionType>) => {
    console.log('filter options');
    
    const filtered = filter(options, params);
    if (params.inputValue !== '') {
      filtered.push({
        inputValue: params.inputValue,
        title: `Add "${params.inputValue}"`,
      });
    }
    return filtered;
  };

  const getLabelOptions = (option: FilmOptionType) => {
    console.log('get label options');
    console.log(option);
    
    
    // e.g value selected with enter, right from the input
    if (typeof option === 'string') {
      console.log('string');
      
      return option;
    }
    if (option.inputValue) {
      console.log('inputVlaue');
      
      return option.inputValue;
    }
    return option.title;
  }


  return (
    <React.Fragment>
    <Autocomplete
      value={value}
      onChange={(event, newValue) => handleChange(newValue)}
      filterOptions={(options, params) => filterOptions(options, params)}
      id="free-solo-dialog-demo"
      options={top100Films}
      getOptionLabel={(option) => getLabelOptions(option)}
      selectOnFocus
      clearOnBlur
      handleHomeEndKeys
      renderOption={(props, option) => <li {...props}>{option.title}</li>}
      sx={{ width: 300 }}
      freeSolo
      renderInput={(params) => <TextField {...params} label="Free solo dialog" />}
    />

    <Dialog open={open} onClose={handleClose}>
      <SeedEntry />
      <form onSubmit={handleSubmit}>
        <DialogTitle>Add a new film</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Did you miss any film in our list? Please, add it!
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            value={dialogValue.title}
            onChange={(event) =>
              setDialogValue({
                ...dialogValue,
                title: event.target.value,
              })
            }
            label="title"
            type="text"
            variant="standard"
          />
          <TextField
            margin="dense"
            id="name"
            value={dialogValue.year}
            onChange={(event) =>
              setDialogValue({
                ...dialogValue,
                year: event.target.value,
              })
            }
            label="year"
            type="number"
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Add</Button>
        </DialogActions>
      </form>
    </Dialog>
  </React.Fragment>
  )
};

export default TypeAheadInput;

interface FilmOptionType {
  inputValue?: string;
  title: string;
  year?: number;
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films: readonly FilmOptionType[] = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
];