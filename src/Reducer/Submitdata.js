import { SUBMIT_DATA } from "../Action/Index";
const initialState = {
  formData: {},
};
const SubmitData = (state = initialState, action = {}) => {
  if (action.type === SUBMIT_DATA) {
    let xyzData = action.payLoad;
    return { ...state, formData: xyzData };
  }
  return {
    ...state,
  };
};

export default SubmitData;
