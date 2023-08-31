import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";

function App() {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"navbar" "main"`, // for mobile devices
          md: `"navbar navbar" "leftside main"`, // for desktop
        }}
      >
        <GridItem pl="2" area={"navbar"}>
          <NavBar />
        </GridItem>
        <Show above="md">
          <GridItem pl="2" area={"leftside"}>
            <GenreList />
          </GridItem>
        </Show>
        <GridItem pl="2" area={"main"}>
          <GameGrid />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
