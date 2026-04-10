function AddItem2(){
   let todoName = 'Goto College';
   let todoDate = '4/10/2026';
 return( <div className="container">
         <div className="row kg-row">
    <div className="col-6">{todoName}</div>
       <div className="col-4">{todoDate}</div>
    <div className="col-2"> <button type="button" className="btn btn-danger bt">Danger</button>
    </div>
  </div>
 </div>
  );
}

export default AddItem2;

