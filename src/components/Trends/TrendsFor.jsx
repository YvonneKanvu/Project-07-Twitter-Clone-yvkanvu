import TurkeyTrends from './TurkeyTrends';
function TrendsFor() {
   const trends = Array(4).fill(<TurkeyTrends />);
   return (
      <div className="trendsFor">
         <div className="setting">
            <h5>Trends for you</h5>
            <img className="settingImage" src="/images/Settings.svg" alt="" />
         </div>
         <TurkeyTrends/>
         <TurkeyTrends/>
         <TurkeyTrends/>
         <TurkeyTrends/>
         <button className='buttonShow'>Show more</button>
      </div>
   );
}
export default TrendsFor;