# Discussion

## My Approach

### Tanstack Query

Something I noticed almost immediately was fetching data within a `useEffect`. I think it's debatable whether that's an anti-pattern, since React doesn't have any other way of fetching data on the client. However, Tanstack Query has become an industry standard for fetching data. That library does it better than anything we would home-roll, so we might as well use it.

### Query Parameters

I opted to move filtering to the backend, because we could theoretically have thousands to millions of records that we need to filter on. That sounds like a job for SQL, and not something that should be done on the client. Furthermore, keeping that much data in memory would be incredibly taxing on the user's browser, so best to push that responsibility to the backend.

### Pagination

If no search term is provided, the original implementation returned everything, which again could be thousands or millions of records. I opted to limit the number of records to 10 at a time so as not to overload the user's browser.

### Memoization

Since we're using React 18, we don't benefit from using the React Compiler. As such, we should be memoizing our event handler functions so as to limit unnecessary re-renders.

### FilterContext

I implemented a FilterContext to so as to share state between the SearchInput and the AdvocatesTable. This was kind of a pre-emptive move, anticipating that this interface could become far more complicated. At Scholastic we had a lot of screens like this, but with far more filtering elements and thus state, and offloading the state management into a context provider has served us well. I don't forsee this screen really benefitting from something like Redux, Zustand or XState. In general, I try to avoid those since they sometimes end up being more work than they're worth. I tend to keep it simple with React context.

## What I Would Do With More Time

### Pagination

I implemented pagination on the backend but ran out of time to implement it on the front end. It's a fairly trivial component to implement, so I'm not worried. What may be a nice feature is adding a dropdown so that you can control how many records are on a page up to... let's say 100. That would require a backend change, but again, I think it's pretty trivial.

Likewise, we could implement infinite scrolling fairly easily. Tanstack Query has utilities for that built in.

### State in Query Parameters

For a feature like this where we're filtering on a large set of data, I think it's best to hold state in the url. This would allow a user to copy the url and share it or come back to it later.

### Submit on Enter

It was actually driving me nuts when testing that I had to click the "Search" button, rather than press the Enter key to initiate the search. It's a simple enough event handler.

### No Search Button At All

I think these days people expect the UI to update as they're typing. We couldn't fire off a new request on every key press, since that would hammer the backend, but we could fire one off if they've stopped typing for say 500 milliseconds. That would require adding a timeout ref and changing the `onChange` handler to reset the timeout ref, and then set a timeout that then sets the `query` state.

### Sorting

I would love to add sorting to the table. This would also require a change to the backend. We'd need to add query paramters for which field to sort on and which direction (asc or desc).

### Make It Prettier

The last ticket I was tackling with the restyling. I really wanted to show off my eye for design, but other functional tasks took precedence. The table especially I feel is hardly legible as is. I think it could use some borders, and maybe alternating row colors. Also, the specialties are very hard to read. I would want to make them pills maybe. A nice thing about the pills is that it implies interactivity, so perhaps clicking on them could change the query to search for others with that same specialty.

### Accessibility

I think accessibly is incredibly important, especially in the health industry. I didn't have time to really consider a11y, and I think that would be imperitive in making a production-ready app, especially in this industry.
