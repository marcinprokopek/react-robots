

const SearchBox = ({searchfied, searchChange}) =>{

    return(
        <div className="pa2">

       
        <input type="search" placeholder="search robots" onChange={searchChange} className="ba bg-light-blue tc pa3"/>

         </div>

    );

}


export default SearchBox;