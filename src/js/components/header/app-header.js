/**
 * Filename: 'app-header.js'
 * Author: JMW <rabbitfighter@cryptolab.net>
 * App header component
 */
import React from 'react'
import SearchArea from '../search/app-search'
import AppListButton from '../list/app-list-button'
import AppStore from '../../stores/app-store'



const AppHeader = ( props ) => {
    
    let styles = {
        width: '40px',
        height: '40px',
        display: 'inline-block',
        float: 'left',
        margin: '10px',
        marginTop: '20px'
    }
    
    return (
        <div className="row" style={ {borderBottom: '2px solid #ccc'} }>
            <div className="col-md-4 text-left">
                <img src='http://dejanstojanovic.net/media/31519/honey.ico' style={ styles } />
                <h1>Honeypot Client</h1>
            </div>
            <div className="col-md-5">
                <SearchArea />
            </div>
            <div className="col-md-2">
                <AppListButton />
            </div>
            
        </div>
    )
}

export default AppHeader