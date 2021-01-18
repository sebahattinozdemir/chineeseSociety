import Header from "../../header/Header"; 
import "./Althaber.css";
import AssignmentIcon from '@material-ui/icons/Assignment';
import React from 'react'
import html from 'react-inner-html';

function Althaber(props) {
    return (
        <div>
            <Header
                subtitle={props.location.state.heading}
                title="新闻"
                icon={<AssignmentIcon style={{fontSize:"35px"}} />}
            />
                   <div className="row" style={{margin:"0%",padding:"1%"}}>
                        <div className="col-12" style={{margin:"3%"}} > 
                            <h1 className="blogtitle" {...html(props.location.state.heading)}></h1>
                            <p class="blogtext" {...html(props.location.state.content)}></p>

                        </div>
                   </div>
        </div>
    )
}
export default Althaber
