import { createSelector } from "reselect";

export const selectDiretory = (state) => state.diretory 

export const selectSections = createSelector(
    [selectDiretory],
    diretory => diretory.sections
)