import Image from 'next/image'
export default function CardAffiche(props) {
  return <div className="card h-100 justify-content-center" style={{marginTop:"200px"}}>
  <div className="row g-0">
      <div className="col-md-4">
      <Image src={props.image} layout='fill' alt="test"/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Question :</h5>
        <p className="card-text">{props.text}</p>
      </div>
    </div>
  </div>
</div>

}
