export default function MainBody(){
    const whatYouWillLearn = "REACT JS";
    const totalValue = 3;
    return(
      <div>
      <p>In this course we will learn {whatYouWillLearn} by building TaskOPedia!<br/>
      Total Lecture - {totalValue}
      </p>
     
      <ul>
          <li>Basic Foundation</li>
          <li>Functional and Class components!</li>
      </ul>
      {/* <div>
          Enter a task : <input type="text" maxLength={5} placeholder="enter your name..." required={true} readOnly={false}/>
          <input type="submit" value="Hello World"/>
      </div> */}
    </div>  
    );
  }