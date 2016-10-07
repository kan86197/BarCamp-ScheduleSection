class Section extends React.Component {
    render() {
    return (
        <div className="section flex flex-center" id="schedule-section" style={{ backgroundColor: this.props.color }}>
        <div id= "schedule-wrapper" className = "schedule-top-container"><font color = "white">
        <p id = "schedule-head"><b>Schedule</b></p>
        <p id = "date">13 November 2016</p>
        </font>
        </div>
        <div className = "Regis col-xs-3" id = "regis-time"> 9:00 - 9:45 </div>
        {/*<div className = "infoRegisHead" id = "regis" >Registration and Setting Up</div>*/}
        
        <div className = "col-xs-8 infoRegis hidden-sm hidden-xs" id="regis-info" >
        <h3>Registration and Setting Up</h3>
        Participants register and get some BarCamp stuffs including BarCamp SHIRT! Then move to 2nd floor. Bring up your session on the vote board or vote any session you want to join. Participants can make votes anytime before the last session is picked out.</div> 
        
        
        </div>
    );
  }
}

export default Section;
