import './YTSideMenuRow.css'


function YTSideMenuRow({title, menuIcons}){


    return(
        <div className="ytsidemenu-row">
        {title ? <label style={{width:'100%',paddingLeft:'35px', fontSize:'16px',fontFamily:'Roboto',paddingBottom:'5px'}}>
            {title}
            </label> : ""}
        {menuIcons?.map((item,idx) =>    
            <div className="ytsidemenu-item">
                <img key={idx} src={item.imagesrc} alt="icon"></img>
                <span>{item.title}</span>                
            </div>
        )}
    
        </div>    
    );

}

export default YTSideMenuRow;

