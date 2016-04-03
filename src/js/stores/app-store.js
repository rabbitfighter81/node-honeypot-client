/**
 * Filename: 'app-store.js'
 * Author: JMW <rabbitfighter@cryptolab.net>
 * Contains state logic for app
 */

import { EventEmitter } from 'events'
import { dispatch, register } from '../dispatchers/app-dispatcher'
import AppConstants from '../constants/app-constants'
import AppActions from '../actions/app-actions'
import _fetchData from '../modules/fetch-data-promise'
import _parser from '../modules/data-items-parser'
import ListAPI from '../api/ListAPI'
import DataAPI from '../api/DataAPI'

const CHANGE_EVENT = 'change'

const AppStore = Object.assign( EventEmitter.prototype, {
  
    emitChange() {
        this.emit( CHANGE_EVENT )
    },

    addChangeListener( callback ) {
        this.on( CHANGE_EVENT, callback )
    },

    removeChangeListener( callback ) {
        this.removeListener( CHANGE_EVENT, callback )
    },

    getServerData() {
        return DataAPI._data
    },

    getParsedData() {
        return DataAPI._parsed
    },

    getList() {
        return ListAPI._list
    },

    getListTotals() {
        return ListAPI._listTotals()
        AppStore.emitChange()
    },

    dispatcherIndex: register( function( payload ) {
        switch( payload.actionType ){
            case AppConstants.ADD_ITEM_TO_LIST:
                console.log( "ADD_ITEM_TO_LIST:", payload.item )
                ListAPI._addItem( payload.item )
                break
            case AppConstants.REMOVE_ITEM_FROM_LIST:
                console.log( "REMOVE_ITEM_FROM_LIST:", payload.item )
                ListAPI._removeItem( payload.item )
                break
        }
        AppStore.emitChange()
    })
  
})

export default AppStore
