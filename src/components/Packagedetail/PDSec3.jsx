import "./pdsec3.css"

function PDSec3({sectionRef2 , packageView}) {

  return (
    <div ref={sectionRef2} className='pdsec3wrap'>

        <div className="pdsec3top">
            <p></p>
             <h3>End Of Trip</h3>
             <p></p>
        </div>

        <ul className="pdsec3secodiv">

          <label >
            <p>Total for the hotels on CP Plan</p>
            <span>{packageView?.hotelCP}</span>
          </label>

 <hr />

      <div className="ttiwrap">

 <h4>Transportation And Tickets </h4>
     
           {
            packageView?.transportTicket?.map((item , index)=>(
              <label className=""  key={index}>
              <p>{item?.title}</p>
              <span >{item?.price}</span>
            </label>
            ))
           }

</div>

          <label >
            <p>Total</p>
            <span>{packageView?.packageTotal}</span>
          </label>

          <hr />

          <label  className="boldlabel">
            <p>Subtotal</p>
            <span>{packageView?.packageSubTotal}</span>
          </label>
          <label >
            <p>MavenAndaman Service Charge 5 %:</p>
            <span>{packageView?.serviceCharge}</span>
          </label>
          <label >
            <p>5% GST on service charge:</p>
            <span>{packageView?.GSTCharge}</span>
          </label>
          <label className="boldlabel" >
            <p>Grand total:</p>
            <span>{packageView?.GrandTotal}</span>
          </label>


        </ul>
         
    </div>
  )
}

export default PDSec3