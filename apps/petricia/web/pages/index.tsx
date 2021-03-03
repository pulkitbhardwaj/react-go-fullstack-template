import { AppBar, Button } from "@incroy/petricia/ui/web";
import styled from "styled-components";

const StyledPage = styled.div`
  background-color: transparent;
`;

export function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.styled-components file.
   */
  return (
    <StyledPage>
      <AppBar />
      <h1>Hello From Petricia</h1>
      <Button variant="secondary">My Button</Button>
    </StyledPage>
  );
}

export default Index;
