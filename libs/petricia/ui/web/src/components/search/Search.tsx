import { BaseSearch } from "@incroy/ui/web";
import styled from "styled-components";

/* eslint-disable-next-line */
export interface SearchProps {}

const Search = styled(BaseSearch)`
  border-radius: 5px;
  height: 2.5rem;
  border: 0;

  button {
    border-left: 1px lightgrey solid;
  }
`;

export default Search;
