import { Button } from '@mui/material';
import NorthIcon from '@mui/icons-material/North';
import SouthIcon from '@mui/icons-material/South';
import React, { useState } from 'react';

interface Props {
  highToLowHandler: () => void;
  lowToHighHandler: () => void;
}

function Filters({ highToLowHandler, lowToHighHandler }: Props) {
  const [highToLow, setHighToLow] = useState(false);
  const [lowToHigh, setLowToHigh] = useState(false);

  return (
    <div className="flex flex-row items-center mb-10">
      <div className="mx-auto space-x-4">
        <Button
          className="my-auto"
          variant="outlined"
          endIcon={<NorthIcon />}
          color="success"
          onClick={() => {
            setHighToLow(true);
            setLowToHigh(false);
            highToLowHandler();
          }}
          style={{
            backgroundColor: highToLow ? '#357a38' : 'white',
            color: highToLow ? 'white' : '#357a38',
          }}
        >
          High to Low
        </Button>
        <Button
          className="my-auto"
          variant="outlined"
          endIcon={<SouthIcon />}
          color="success"
          onClick={() => {
            setHighToLow(false);
            setLowToHigh(true);
            lowToHighHandler();
          }}
          style={{
            backgroundColor: lowToHigh ? '#357a38' : 'white',
            color: lowToHigh ? 'white' : '#357a38',
          }}
        >
          Low To High
        </Button>
      </div>
    </div>
  );
}

export default Filters;
