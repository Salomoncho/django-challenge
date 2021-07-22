import React, { useState, useEffect } from "react";
import axios from "axios";

const TableRowElement = ({result}) => {
  return(
      <div className="row" key={result.id}>
        <div className={result.get_order_sum >= 50000? "row gt50" : "row lt50"}>
          <div className="col s3"> <h6>{result.name}</h6> </div>
          <div className="col s3"> <h6>{result.get_order_count}</h6> </div>
          <div className="col s3">
            <h6><span className="badge " >{result.get_order_sum.toFixed(2)}</span></h6>
          </div>
          <div className="col s3">
            <label>
              <input type="checkbox" />
              <span>&nbsp;</span>
            </label>
          </div>
        </div>
        {
          result.contacts.map((contact) => {
            return(
                  <div className={contact.get_order_count <= 3 ?" row " : "row gt3"} key={contact.id}>
                    <div className="col s3"> &nbsp; </div>
                    <div className="col s3"> {contact.first_name } { contact.last_name } </div>
                    <div className="col s3">
                      <span className={contact.get_order_count <= 3 ?" new badge " : "new badge yellow "} data-badge-caption="Orders ">{contact.get_order_count}</span>
                    </div>
                    <div className="col s3"> &nbsp; </div>
                  </div>
            )
          })
        }
        <div className="divider"></div>
      </div>

  );
}


const CompaniesList = (props) => {
  const [compList, setCompList] = useState(null);
  const [pageControls, setPageControls] = useState({next: null, previous: null, count:null})

  async function getCompList(url) {
    try {
      const response = await axios.get(url);
      console.log(response.data);
      if (response.status >= 200 && response.status <= 299) {
        setCompList(response.data['results']);
        setPageControls(
            {
              next: response.data['next'],
              previous: response.data['previous'],
              count: response.data['count']
            })
      }
    } catch (e) {
      console.log(`catch error: ${e}`);
    }
  }
  useEffect(() => {
    getCompList("/api/companies/");
  }, []);


  return (
      <div className='container'>
        <br/>
        <div className="row">
          <div className="col s3">
            {pageControls.previous ?
            <button onClick={() => getCompList(pageControls.previous)} className="waves-effect waves-light btn">Prev Page</button>
            :
            null}
          </div>
          <div className="col s6">-</div>
          <div className="col s3">
            {pageControls.next ?
            <button onClick={() => getCompList(pageControls.next)} className="waves-effect waves-light btn">Next Page</button>
           :
            null}
          </div>
        </div>

        <br/>
        <div className="card-panel teal">
        <form action="#">
          <div className="row">
            <div className="col s3"> <h5>Name</h5> </div>
            <div className="col s3"> <h5>Order Count</h5> </div>
            <div className="col s3"> <h5>Order Sum</h5> </div>
            <div className="col s3"> <h5  >Select</h5> </div>
          </div>

          <div className="divider"></div>
          <br/>
                   {compList ?
                     compList.map((result) => {
                       return <TableRowElement result={result}/>
                     })
                       : null
                   }
        </form>
      </div>
      </div>
  );
};

export default CompaniesList;
