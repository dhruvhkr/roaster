const ADDPLAYER = "ADDPLAYER";
const SETARRAY = "SETARRAY";
const DELETEPLAYER = "DELETEPLAYER";

export const addPlayer = (player) => ({
  type: ADDPLAYER,
  player,
});
export const deletePlayer = (player) => ({
  type: DELETEPLAYER,
  player,
});
export const setArray = (array) => ({
  type: SETARRAY,
  array,
});

const initialState = {
  roaster: [],
};
export default (state = initialState, action) => {
  console.log(action?.array);
  switch (action.type) {
    case ADDPLAYER:
      return {
        ...state,
        roaster: [...state.roaster, action.player],
      };
    case SETARRAY:
      return {
        ...state,
        roaster: [...action.array],
      };
    case DELETEPLAYER:
      const tempArray = state.roaster;
      const index = tempArray.findIndex(
        (teamPlayer) =>
          teamPlayer.player == action.player.player &&
          teamPlayer.team == action.player.team
      );
      tempArray.splice(index, 1);
      return {
        ...state,
        roaster: [...tempArray],
      };
    default:
      return state;
  }
};
