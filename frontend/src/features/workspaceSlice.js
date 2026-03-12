import { createSlice } from "@reduxjs/toolkit";
import { dummyWorkspaces } from "../assets/assets";

const initialState = {
  workspaces: dummyWorkspaces,
  currentWorkspace: dummyWorkspaces[0],
  loading: false,
};

const workspaceSlice = createSlice({
  name: "workspace",
  initialState,
  reducers: {
    setCurrentWorkspace: (state, action) => {
      localStorage.setItem("currentWorkspaceId", action.payload);
      state.currentWorkspace = state.workspaces.find(
        (w) => w.id === action.payload
      );
    },
  },
});

export const { setCurrentWorkspace } = workspaceSlice.actions;
export default workspaceSlice.reducer;