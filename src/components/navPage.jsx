/*function NavPage(props) {
    return (
        <header className='d-flex justify-content-between'>
            <p>pagina: {props.page}</p>
            <button className='btn btn-primary btn-sm' onClick={() => { props.setPage(props.page + 1) }}> pagina {props.page + 1} </button>
        </header>
    )
}*/

function NavPage(props) {
    return (
        <header className='d-flex justify-content-between'>
            <p>pagina: {props.page}</p>
            {
                props.page <= props.cantPage ? 
                <button className='btn btn-primary btn-sm' onClick={() => { props.setPage(props.page + 1) }}> pagina {props.page + 1} </button>
                :
                <button className='btn btn-primary btn-sm'> pagina {props.cantPage} </button>
            }
            
        </header>
    )
}

export default NavPage;