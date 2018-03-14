export const DATA_AVAILABLE = 'DATA_AVAILABLE';
export const DATA_LOADING   = 'DATA_LOADING';

//Import the sample data
import Data from '../instructions.json';

export function getData() {
  return dispatch => {

    dispatch({ type: DATA_LOADING });

    //Make API Call
    //For this example, I will be using the sample data in the json file
    //delay the retrieval [Sample reasons only]
    setTimeout(() => {
      const data = Data.instructions;
      dispatch({ type: DATA_AVAILABLE, data: data });
    }, 1000);
  };
}
