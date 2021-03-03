import { Suspense } from "react";
import { graphql, usePreloadedQuery, useQueryLoader } from "react-relay/hooks";
import styled from "styled-components";
import { pagesQuery } from "./__generated__/pagesQuery.graphql";

const StyledPage = styled.div`
  background-color: red;
`;

const query = graphql`
  query pagesQuery {
    users {
      firstname
    }
  }
`;

export function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.styled-components file.
   */

  const [queryReference, loadQuery, disposeQuery] = useQueryLoader(query);

  return (
    <>
      {queryReference == null && (
        <button onClick={() => loadQuery({})}>Click to reveal the name</button>
      )}
      {queryReference != null && (
        <>
          <button onClick={disposeQuery}>
            Click to hide the name and dispose the query.
          </button>
          <Suspense fallback="Loading">
            <NameDisplay queryReference={queryReference} />
          </Suspense>
        </>
      )}
    </>
  );
}

function NameDisplay({ queryReference }) {
  const data = usePreloadedQuery<pagesQuery>(query, queryReference);

  return (
    <div>
      {data.users?.map((user) => <h1>{user.firstname}</h1>) ?? <h1>loading</h1>}
    </div>
  );
}

export default Index;
