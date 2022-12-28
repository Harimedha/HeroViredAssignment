import './Heading.css';

function Heading(){

    return(


<div>
<div className='container'>
    <img src='/images/trekkers.jpg' alt = "trekkers" width="1200" height="250"/>
    <div className='top-left'>Hiking Diaries</div>
</div>
    <h3> 5 Most Dangerous Treks In India </h3>

<div className="header-text">
<table>
    <tr>
      <td> <img src="/images/avatar.jpg" alt="Avatar" className='avatar' ></img> </td>
      <td> <p> By Medha <br/> 2022-12-13</p> </td>
    </tr>
  </table>

        <p >Adventure enthusiasts, those looking for difficult adventures, this is our list of most dangerous hiking trails in India. For the record these treks are not for the amateurs
        due to the treacherous terrain, wildlife threats, risky situations, and nerve-wracking
        places that include fatal death.</p>
    </div>
</div>   
)
}
export default Heading;