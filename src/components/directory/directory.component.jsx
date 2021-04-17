import React from 'react'

import { connect } from 'react-redux'

import { createStructuredSelector } from 'reselect'
import { selectDirectorySections } from '../../redux/directory/directory.selectors'

import './directory.styles.scss'

import MenuItem from '../menu-item/menu-item.component'

const Directory = ({ sections }) => (
    <div className='directory-menu'>
        {/*this.state.section.map(section =>{   Instead of using properties of section using dot operator, we will destructure the properties off the object */}
        {/* {this.state.sections.map(({title, id, imageUrl, size})=>(
            <MenuItem key={id} title = {title} imageUrl = {imageUrl} size={size}/>
        ))} */}
        {
          sections.map(({id, ...othersectionProps})=>(    //ES6 shorthand used to send the props which have name same as that of the property itself
            <MenuItem key={id} {...othersectionProps} />
          ))
        }
    </div>
)

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})


export default connect(mapStateToProps)(Directory)