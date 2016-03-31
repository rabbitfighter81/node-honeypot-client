import React from 'react'
import AppActions from '../actions/app-actions'

export default ( props ) => {
	let styles = {
		borderBottom: 'solid 1px #ccc',
	}

	let buttonStyles = {
		margin: '10px'
	}

	let index = props.index
	let item = props.item

    return (
        <div className="result text-center">
        	<div className="row item" style={ styles }>
                <div className="col-sm-1">
                    <p><b>{ props.txt }</b></p>
                </div>
                <div className="col-sm-2">
                    <p>{ item.Username }</p>
                </div>
                <div className="col-sm-1">
                    <p>{ item.TYPE }</p>
                </div>
                <div className="col-sm-2">
                    <p>{ item.IP }</p>
                </div>
                <div className="col-sm-3">
                    <p>{ item.Time }</p>
                </div>
                <div className="col-sm-3">
                    <button 
                    	style={ buttonStyles } 
                    	type="button" className="btn btn-secondary"
                    	onClick={ AppActions.showItem.bind( null, item ) }>
                    View
                    </button>
                    <button 
                    	style={ buttonStyles }
                    	type="button"
                    	className="btn btn-secondary"
                    	onClick={ AppActions.addItemToList.bind( null, item ) }>
                    Add
                    </button>
                </div>
            </div>
        </div>
    )
}