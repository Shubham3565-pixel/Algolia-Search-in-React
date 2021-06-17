import React from 'react'
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, Pagination, ClearRefinements,RefinementList,Configure, SearchBox, Hits, Highlight } from 'react-instantsearch-dom';
import './App.css'

const searchClient = algoliasearch(
  'HMA2NVAGW1',
  '59df1ef677590d5e09cc54ecb502ec94'
);

const Hit = ({ hit }) => (
  <div>
      <img src={hit.image} align="left" alt={hit.name} style={{margin:"10px"}}/>
      <div className="hit-name" style={{fontWeight:"800"}}>
        <Highlight attribute="name" hit={hit} />
      </div>
      <div className="hit-description">
        <Highlight attribute="description" hit={hit} />
      </div>
      <div className="hit-price" style={{marginTop:"10px"}}>Price: <b>${hit.price}</b></div>
    </div>
);

const App = () => (
  <>
    <h1>Algolia Search</h1>
    <div style={{ padding: "20px" }}>
      <InstantSearch indexName="mobile" searchClient={searchClient}>
        <div className="left-panel">
          <ClearRefinements />
          <h2>Brands</h2>
          <RefinementList attribute="brand" />
          <h2>Categories</h2>
          <RefinementList attribute="categories" />
          <h2>Price</h2>
          <RefinementList attribute="price" />
          <Configure hitsPerPage={8} />
        </div>
        <div className="right-panel">
            <SearchBox />
            <Hits hitComponent={Hit} />
            <Pagination />
          </div>
      </InstantSearch>
    </div>
  </>
);

export default App;