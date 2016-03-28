import React from 'react';
import Result from './app-result-component'
import Pagination from './app-pagination-component'

export default ( props ) => {
	let txt = "Item"
	let numResults = 10
    let styles = {
        marginTop: '10px',
        marginBottom: '10px'
    }
    let text = "\<Prev, 1, 2, 3, 4, 5, 6, 7, Next\>"
    return (
        <div className="results">
        	<h4 
              className='text-success text-center' 
              style={styles}
            >Showing 1-{numResults} of 72 results</h4>
            <Result txt={txt + ' 1'}/>
            <Result txt={txt + ' 2'}/>
            <Result txt={txt + ' 3'}/>
            <Result txt={txt + ' 4'}/>
            <Result txt={txt + ' 5'}/>
            <Result txt={txt + ' 6'}/>
            <Result txt={txt + ' 7'}/>
            <Result txt={txt + ' 8'}/>
            <Result txt={txt + ' 9'}/>
            <Result txt={txt + ' 10'}/>
            <br /><br />
            <Pagination className="text-center"/>
            <br/>
            {/*<p className="text-center">{text}</p>*/}
        </div>
    )
}


{/*<div className="col-sm-3">
    <table className="table">
        <caption className="text-center">Data Item</caption>
        <tbody>
            <tr className="row">
                <th height="30" className="col-sm-4">Key</th>
                <td height="30" className="col-sm-8">Value</td>
            </tr>
            <tr className="row">
                <th height="30" className="col-sm-4">Key</th>
                <td height="30" className="col-sm-8">Value</td>
            </tr>
            <tr className="row">
                <th height="30" className="col-sm-4">Key</th>
                <td height="30" className="col-sm-8">Value</td>
            </tr>
            <tr className="row">
                <th height="30" className="col-sm-4">Key</th>
                <td height="30" className="col-sm-8">Value</td>
            </tr>
            <tr className="row">
                <th height="30" className="col-sm-4">Key</th>
                <td height="30" className="col-sm-8">Value</td>
            </tr>
        </tbody>
    </table>
    <div className="btn-group" role="group" aria-label="Basic example">
      <button type="button" className="btn btn-secondary">Inspect</button>
      <button type="button" className="btn btn-secondary">Add to list</button>
    </div>
</div>

 <div className="col-sm-3">
    <table className="table">
        <caption className="text-center">Data Item</caption>
        <tbody>
            <tr className="row">
                <th className="col-sm-4">Key</th>
                <td className="col-sm-8">Value</td>
            </tr>
            <tr className="row">
                <th className="col-sm-4">Key</th>
                <td className="col-sm-8">Value</td>
            </tr>
            <tr className="row">
                <th className="col-sm-4">Key</th>
                <td className="col-sm-8">Value</td>
            </tr>
            <tr className="row">
                <th className="col-sm-4">Key</th>
                <td className="col-sm-8">Value</td>
            </tr>
            <tr className="row">
                <th className="col-sm-4">Key</th>
                <td className="col-sm-8">Value</td>
            </tr>
            
        </tbody>

    </table>
    <div className="btn-group" role="group" aria-label="Basic example">
      <button type="button" className="btn btn-secondary">Inspect</button>
      <button type="button" className="btn btn-secondary">Add to list</button>
    </div>
</div>

 <div className="col-sm-3">
    <table className="table">
        <caption className="text-center">Data Item</caption>
        <tbody>
            <tr className="row">
                <th className="col-sm-4">Key</th>
                <td className="col-sm-8">Value</td>
            </tr>
            <tr className="row">
                <th className="col-sm-4">Key</th>
                <td className="col-sm-8">Value</td>
            </tr>
            <tr className="row">
                <th className="col-sm-4">Key</th>
                <td className="col-sm-8">Value</td>
            </tr>
            <tr className="row">
                <th className="col-sm-4">Key</th>
                <td className="col-sm-8">Value</td>
            </tr>
            <tr className="row">
                <th className="col-sm-4">Key</th>
                <td className="col-sm-8">Value</td>
            </tr>
        </tbody>
    </table>
    <div className="btn-group" role="group" aria-label="Basic example">
      <button type="button" className="btn btn-secondary">Inspect</button>
      <button type="button" className="btn btn-secondary">Add to list</button>
    </div>
</div>

 <div className="col-sm-3">
    <table className="table">
        <caption className="text-center">Data Item</caption>
        <tbody>
            <tr className="row">
                <th className="col-sm-4">Key</th>
                <td className="col-sm-8">Value</td>
            </tr>
            <tr className="row">
                <th className="col-sm-4">Key</th>
                <td className="col-sm-8">Value</td>
            </tr>
            <tr className="row">
                <th className="col-sm-4">Key</th>
                <td className="col-sm-8">Value</td>
            </tr>
            <tr className="row">
                <th className="col-sm-4">Key</th>
                <td className="col-sm-8">Value</td>
            </tr>
            <tr className="row">
                <th className="col-sm-4">Key</th>
                <td className="col-sm-8">Value</td>
            </tr>
        </tbody>
    </table>
    <div className="btn-group" role="group" aria-label="Basic example">
      <button type="button" className="btn btn-secondary">Inspect</button>
      <button type="button" className="btn btn-secondary">Add to list</button>
    </div>
</div>
*/}