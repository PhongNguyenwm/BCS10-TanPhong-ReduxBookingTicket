import { DATGHE, HUYGHE } from "./constant";

export const datGheAction = (ghe) => {
  return {
    type: DATGHE,
    ghe,
  };
};

export const huyGheAction = (soGhe) => ({
  type: HUYGHE,
  soGhe,
});
