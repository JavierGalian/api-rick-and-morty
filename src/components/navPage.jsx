import '../styles/navPage.css';

function NavPage(props) {
    return (
        <header className='d-flex justify-content-center'>
            
            {
                props.page == 1 ? <button className='btn btn-primary button-prev' disabled> inicio </button>
                    : <button className='btn btn-primary button-prev' onClick={() => { props.setPage(props.page - 1) }}> pagina {props.page - 1}</button>
            }
            <p className="text-white">pagina {props.page}</p>
            {
                props.page < props.cantPage ?
                    <button className='btn btn-primary button-next' onClick={() => { props.setPage(props.page + 1) }}> pagina {props.page + 1}</button>
                    : <button className='btn btn-primary button-next' disabled > fin </button>
            }

        </header>
    )
}

export default NavPage;