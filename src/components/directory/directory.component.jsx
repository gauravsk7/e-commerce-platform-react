import React from 'react'

import './directory.styles.scss'

import MenuItem from '../menu-item/menu-item.component'

class Directory extends React.Component{
    constructor(){
        super()
        this.state = { 
        sections : [
            {
              title: 'hats',
              imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
              id: 1,
              linkUrl: 'hats'
            },
            {
              title: 'jackets',
              imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
              id: 2,
              linkUrl: 'jackets'
            },
            {
              title: 'sneakers',
              imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
              id: 3,
              linkUrl: 'sneakers'
            },
            {
              title: 'womens',
              imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
              size: 'large',
              id: 4,
              linkUrl: 'womens'
            },
            {
              title: 'mens',
              imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
              size: 'large',
              id: 5,
              linkUrl: 'mens'
            }
          ]
        }
    }

    render(){
        return(
            <div className='directory-menu'>
                {/*this.state.section.map(section =>{   Instead of using properties of section using dot operator, we will destructure the properties off the object */}
                {/* {this.state.sections.map(({title, id, imageUrl, size})=>(
                    <MenuItem key={id} title = {title} imageUrl = {imageUrl} size={size}/>
                ))} */}
                {
                  this.state.sections.map(({id, ...othersectionProps})=>(    //ES6 shorthand used to send the props which have name same as that of the property itself
                    <MenuItem key={id} {...othersectionProps} />
                  ))
                }
            </div>
        )
    }
}

export default Directory