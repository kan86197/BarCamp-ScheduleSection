class Section extends React.Component {
    render() {
    return (
        
        <div  id="schedule-section" style={{ backgroundColor: this.props.color }}>
        <font color = "white">
        
        <div className="row">
        <div className="col-xs-1"></div>
        <div className="col-xs-11">
            <div className="row">
              <div className="col-xs-12">
                  <h2>SCHEDULE</h2>
                  <h4>13 November 2016</h4>
              </div>
            </div>
            <div className="row">
              <div className="col-md-2 col-offset-md-1">
                  <h5>09.00 - 12.00</h5>
              </div>
              <div className="col-md-9">
                  <h4>Registration and Setting up</h4>
                  <h5 className = "hidden-xs hidden-sm">Participant register and get some BarCamp stuffs including BARCAMP SHIRT! Then move to 2md floor. Bring up your session on the vote board or vote any sessions you want to join</h5>
                  <h5 className = "hidden-xs hidden-sm">Participants can make votes anytime before the last session is picked out</h5>
              </div>
            </div>
            <div className="row">
              <div className="col-md-2 col-offset-md-1">
                  <h5>09.45 - 10.30</h5>
              </div>
              <div className="col-md-9">
                  <h4>Openning Ceremony</h4>
                  <h5 className = "hidden-xs hidden-sm">Everybody will gather in the assembly hall(Room 17201, 2nd floor) to have a little introductory session.</h5>
              </div>
            </div>
            <div className="row">
              <div className="col-md-2 col-offset-md-1">
                  <h5>10.40 - 12.05</h5>
              </div>
              <div className="col-md-9">
                  <h4>Morning Sessions</h4>
                  <h5 className = "hidden-xs hidden-sm">Morning sessions are picked out and announced on the website and the schedule board on the 2nd floor.</h5>
              </div>
            </div>
            <div className="row">
              <div className="col-md-2 col-offset-md-1">
                  <h5>12.10 - 13.00</h5>
              </div>
              <div className="col-md-9">
                  <h4>Lunch</h4>
                  <h5 className = "hidden-xs hidden-sm">Let's have FREE lunch! You know an army marched on its stomach</h5>
              </div>
            </div>
            <div className="row">
              <div className="col-md-2 col-offset-md-1">
                  <h5>13.00 - 14.55</h5>
              </div>
              <div className="col-md-9">
                  <h4>Afternoon Sessions</h4>
                  <h5 className = "hidden-xs hidden-sm">1.00 - 1.25 | 1.30 - 1.55 | 2.00 - 2.25 | 2.30 - 2.55</h5>
                  <h5 className = "hidden-xs hidden-sm">Afternoon sessions are picked out and announced on the website and the schedule board on the 2nd floor. Join and sessions as you wish</h5>
              </div>
            </div>
            <div className="row">
              <div className="col-md-2 col-offset-md-1">
                  <h5>15.00 - 15.20</h5>
              </div>
              <div className="col-md-9">
                  <h4>Break</h4>
                  <h5 className = "hidden-xs hidden-sm">Dessert time!</h5>
              </div>
            </div>
            <div className="row">
              <div className="col-md-2 col-offset-md-1">
                  <h5>15.20 - 16.45</h5>
              </div>
              <div className="col-md-9">
                  <h4>Back to Afternoon Sessions</h4>
                  <h5 className = "hidden-xs hidden-sm">3.20 - 3.45 | 2.50 - 4.15 | 4.20 - 4.45</h5>
                  <h5 className = "hidden-xs hidden-sm">More afternoon sessions are picked out. Check it on the website or the schedule board on the 2nd floor. Join any sessions as you wish</h5>
              </div>
            </div>
                  
            <div className="row">
              <div className="col-md-2 col-offset-md-1">
                  <h5>17.00 - 20.00</h5>
              </div>
              <div className="col-md-9">
                  <h4>After Party</h4>
                  <h5 className = "hidden-xs hidden-sm">A party at the end luntarily arranged by the staff to loosen up after a long day and have some fun!</h5>
              </div>
            </div>      
        </div>
    </div>
        
        </font>
        </div>
    );
  }
}

export default Section;
