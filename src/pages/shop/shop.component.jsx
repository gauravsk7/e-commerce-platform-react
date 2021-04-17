import React from 'react'
import { Route } from 'react-router-dom'

import CollectionsOverview from '../../components/collections-overview/collections-overview.component'
import CollectionPage from '../collection/collection.component'

const ShopPage = ({ match }) => (  //Here match is available because of the Route component that we have used in App.js
    <div className='shop-page'>
        <Route exact path= {`${match.path}`} component = {CollectionsOverview} />
        <Route path={`${match.path}/:collectionId`} component = {CollectionPage} />
    </div>
)

export default ShopPage
            