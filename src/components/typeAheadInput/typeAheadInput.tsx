import * as React from 'react';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import seedCatalogue, { SeedItemInterface } from '../../data/seedCatalogue';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import SeedEntry from '../seedEntry/seedEntry';
import { FilterOptionsState } from '@mui/material';

const filter = createFilterOptions<SeedItemInterface>();

const TypeAheadInput = () => {

  const [value, setValue] = React.useState<SeedItemInterface | null>(null);
  const [open, toggleOpen] = React.useState(false);

  const [seedList, setSeedList] = React.useState<SeedItemInterface[]>(seedCatalogue);

  const handleClose = () => {
    setDialogValue("");
    toggleOpen(false);
  };

  const [dialogValue, setDialogValue] = React.useState("");

  const handleChange = (newValue:string | SeedItemInterface | null) => {
    if (typeof newValue === 'string') {
      // timeout to avoid instant validation of the dialog's form.
      setTimeout(() => {
        toggleOpen(true);
        setDialogValue(newValue);
      });
    } else if (newValue && newValue.inputValue) {
      toggleOpen(true);
      setDialogValue(newValue.inputValue);
    } else {
      
      console.log('setting value');
      console.log(newValue);
      setValue(newValue);
    }
  };

  const filterOptions = (options: SeedItemInterface[], params: FilterOptionsState<SeedItemInterface>) => {

    const filtered = filter(options, params);
    if (params.inputValue !== '') {
      filtered.push({
        inputValue: params.inputValue,
        seedName: `Add "${params.inputValue}"`,
      });
    }
    return filtered;
  };

  const getLabelOptions = (option: SeedItemInterface) => {
    
    // e.g value selected with enter, right from the input
    if (typeof option === 'string') {
      return option;
    }
    if (option.inputValue) {
      return option.inputValue;
    }
    return option.seedName;
  }


  return (
    <>
      <Autocomplete
        value={value}
        onChange={(event, newValue) => handleChange(newValue)}
        filterOptions={(options, params) => filterOptions(options, params)}
        id="free-solo-dialog-demo"
        options={seedList}
        getOptionLabel={(option) => getLabelOptions(option)}
        selectOnFocus
        clearOnBlur
        handleHomeEndKeys
        renderOption={(props, option) => <li {...props}>{option.seedName} {option.shop ? `(${option.shop})` : ''}</li>}
        // sx={{ width: 300 }}
        freeSolo
        renderInput={(params) => <TextField {...params} label="Which seeds are you growing" />}
      />

      <Dialog open={open} onClose={handleClose}>
        <SeedEntry onClose={handleClose} seedNameInput={dialogValue}/>
      </Dialog>
  </>
  )
};

export default TypeAheadInput;
