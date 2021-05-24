import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import "./AddPlayer.css";
import { addPlayer } from "./Ducks/roasterReducer";
import Header from "./Header";

function AddPlayer() {
  const [player, setPlayer] = useState("");
  const [team, setTeam] = useState("");
  const dispatch = useDispatch();
  const roaster = useSelector((state) => state.roaster.roaster);
  const history = useHistory();
  function submitHandler(e) {
    e.preventDefault();
    console.log(roaster?.length);
    const teamPlayer = { player, team };
    dispatch(addPlayer(teamPlayer));
    const old_data = JSON.parse(localStorage.getItem("data"));
   
    old_data.push(teamPlayer);
    localStorage.setItem("data", JSON.stringify(old_data));

    alert("Player Added Successfully");
    history.push("/players");
  }

  return (
    <div className="addPlayer">
      <Header />
      <h1>Add Player</h1>
      <form className="form" onSubmit={submitHandler}>
        <label htmlFor="player">Player Name</label>
        <input
          id="player"
          type="text"
          placeholder="Player Name"
          onChange={(e) => setPlayer(e.target.value)}
          value={player}
        />
        <label htmlFor="team">Team Name</label>
        <input
          id="team"
          type="text"
          placeholder="Team Name"
          onChange={(e) => setTeam(e.target.value)}
          value={team}
        />
        <button type="submit">Add Player</button>
      </form>
    </div>
  );
}

export default AddPlayer;
